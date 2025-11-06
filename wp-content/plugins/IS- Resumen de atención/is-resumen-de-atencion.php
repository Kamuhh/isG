<?php
/*
Plugin Name: IS- Resumen de atención
Description: Herramienta de resumen de atención: previsualizar, enviar por e‑mail y ver PDF dentro del panel.
Version: 1.1.5
Author: Kámuh
*/

if (!defined('ABSPATH')) { exit; }

// Enqueue assets and expose config
add_action('admin_enqueue_scripts', function() {
    if (true) { return; } // disabled: handled nativamente en app.js
    $handle = 'is-resumen-js';
    $base   = plugin_dir_url(__FILE__);
    wp_enqueue_style('is-resumen-css', $base . 'assets/css/is-resumen.css', [], '1.0.0');
    wp_enqueue_script($handle, $base . 'assets/js/is-resumen.js', ['jquery'], '1.0.0', true);
    wp_localize_script($handle, 'ISResumenCfg', [
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('is_resumen_nonce'),
        'i18n'     => [
            'title'  => 'Resumen de atención',
            'loadErr'=> 'No se pudo cargar el resumen.',
            'sendOK' => 'Resumen enviado correctamente.',
            'sendKO' => 'Fallo al enviar el resumen.',
            'noId'   => 'No hay cita activa.'
        ]
    ]);
});

// Inject modal markup in admin footer
add_action('admin_footer', function () {
    if (true) { return; } // disabled: handled nativamente en app.js
    ?>
    <div class="modal fade" id="kcSummaryModal" tabindex="-1" role="dialog" aria-labelledby="kcSummaryTitle" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content" style="background:#fff;">
          <div class="modal-header">
            <h5 class="modal-title" id="kcSummaryTitle">Resumen de atención</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div id="kc-summary-wrapper" class="modal-body" style="max-height:65vh; overflow:auto;">
            <div id="kc-summary-content" style="outline:none;"></div>
          </div>
          <div class="modal-footer">
            <button id="kc-summary-email" type="button" class="button button-primary">Enviar por e-mail</button>
            <button id="kc-summary-pdf" type="button" class="button">Ver PDF</button>
            <button type="button" class="button" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    <?php
});

// Helpers
function is_resumen_can_access_encounter($encounter_id) {
    // Prefer model permission check if available
    if (class_exists('App\\models\\KCPatientEncounter')) {
        try {
            $m = new App\models\KCPatientEncounter();
            if (method_exists($m, 'encounterPermissionUserWise')) {
                return (bool)$m->encounterPermissionUserWise((int)$encounter_id);
            }
        } catch (\Throwable $e) {
            // fall through
        }
    }
    // Fallback: permissive (no core permission helper available here)
    return true;
}

// AJAX: Get summary HTML
add_action('wp_ajax_kc_get_encounter_summary_html', function() {
    check_ajax_referer('is_resumen_nonce', 'nonce');
    $encounter_id = isset($_GET['encounter_id']) ? (int)$_GET['encounter_id'] : 0;
    if (!$encounter_id) {
        wp_send_json([ 'status' => false, 'message' => __('Encounter Id not found','kc-lang'), 'data' => '' ]);
    }
    if (!is_resumen_can_access_encounter($encounter_id)) {
        wp_send_json(kcUnauthorizeAccessResponse(403));
    }
    $response = apply_filters('kcpro_get_encounter_print', [
        'encounter_id' => $encounter_id,
        'clinic_default_logo' => defined('KIVI_CARE_DIR_URI') ? KIVI_CARE_DIR_URI . 'assets/images/kc-demo-img.png' : '' ,
        'print_type' => 'encounter'
    ]);
    if (empty($response) || empty($response['status'])) {
        wp_send_json([ 'status' => false, 'message' => __('No Data Found','kc-lang'), 'data' => '' ]);
    }
    wp_send_json([ 'status' => true, 'data' => $response['data'] ]);
});

// AJAX: Send summary via e-mail (PDF attachment)
add_action('wp_ajax_kc_send_encounter_summary', function() {
    check_ajax_referer('is_resumen_nonce', 'nonce');
    $encounter_id = isset($_GET['encounter_id']) ? (int)$_GET['encounter_id'] : 0;
    if (!$encounter_id) {
        wp_send_json([ 'status' => false, 'message' => __('Encounter Id not found','kc-lang') ]);
    }
    if (!is_resumen_can_access_encounter($encounter_id)) {
        wp_send_json(kcUnauthorizeAccessResponse(403));
    }
    $response = apply_filters('kcpro_get_encounter_print', [
        'encounter_id' => $encounter_id,
        'clinic_default_logo' => defined('KIVI_CARE_DIR_URI') ? KIVI_CARE_DIR_URI . 'assets/images/kc-demo-img.png' : '' ,
        'print_type' => 'encounter'
    ]);
    if (empty($response) || empty($response['status']) || empty($response['data'])) {
        wp_send_json([ 'status' => false, 'message' => __('No Data Found','kc-lang') ]);
    }
    $html = (string)$response['data'];

    if (!class_exists('Dompdf\\Dompdf')) {
        wp_send_json([ 'status' => false, 'message' => __('PDF engine not available','kc-lang') ]);
    }

    try {
        $dompdf = new Dompdf\Dompdf();
        $dompdf->set_option('isHtml5ParserEnabled', true);
        $dompdf->set_option('isPhpEnabled', true);
        $dompdf->set_option('isRemoteEnabled', true);
        $dompdf->loadHtml('<meta charset="UTF-8">' . $html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();
        $pdf_output = $dompdf->output();

        $upload_dir = wp_upload_dir();
        $file_name  = 'Encounter_Summary_' . $encounter_id . '.pdf';
        $pdf_path   = trailingslashit($upload_dir['path']) . $file_name;
        file_put_contents($pdf_path, $pdf_output);

        global $wpdb;
        $patient_id = (int)$wpdb->get_var($wpdb->prepare('SELECT patient_id FROM ' . $wpdb->prefix . 'kc_patient_encounters WHERE id=%d', $encounter_id));
        $user_email = $patient_id ? $wpdb->get_var($wpdb->prepare('SELECT user_email FROM ' . $wpdb->base_prefix . 'users WHERE ID=%d', $patient_id)) : '';

        $sent = false;
        if (function_exists('kcSendEmail')) {
            $sent = kcSendEmail([
                'user_email' => $user_email ?: '',
                'attachment_file' => [$pdf_path],
                'attachment' => true,
                'email_template_type' => 'patient_report'
            ]);
        } else if (!empty($user_email)) {
            $sent = wp_mail($user_email, __('Encounter Summary','kc-lang'), __('Please see attached summary.','kc-lang'), '', [$pdf_path]);
        }

        if ($sent && file_exists($pdf_path)) { @unlink($pdf_path); }

        wp_send_json([
            'status'  => (bool)$sent,
            'message' => $sent ? __('Summary sent successfully','kc-lang') : __('Failed to send Summary','kc-lang')
        ]);
    } catch (\Throwable $e) {
        wp_send_json([
            'status' => false,
            'message' => $e->getMessage()
        ]);
    }
});
