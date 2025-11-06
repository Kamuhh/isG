<?php
/**
 * Controller for IS Resumen de Atención
 */
if (!defined('ABSPATH')) exit;

class IS_Resumen_Controller {

    public function check_permissions() {
        return is_user_logged_in() && !current_user_can('kivicare_patient');
    }

    public function get_resumen(WP_REST_Request $request) {
        $encounter_id = (int) $request->get_param('encounter_id');
        if (empty($encounter_id)) {
            return new WP_Error('bad_request', 'ID de encuentro no válido.', ['status' => 400]);
        }

        $data = is_resumen_get_data($encounter_id);
        if (empty($data)) {
            return new WP_Error('not_found', 'No se encontraron datos para este encuentro.', ['status' => 404]);
        }

        $html = is_resumen_render_template('modal-content.php', ['data' => $data]);
        return new WP_REST_Response(['status' => true, 'html' => $html], 200);
    }

    public function email_resumen(WP_REST_Request $request) {
        $encounter_id = (int) $request->get_param('encounter_id');
        $email = sanitize_email($request->get_param('email'));

        if (empty($encounter_id) || !is_email($email)) {
            return new WP_Error('bad_request', 'Parámetros no válidos.', ['status' => 400]);
        }

        $data = is_resumen_get_data($encounter_id);
        if (empty($data)) {
            return new WP_Error('not_found', 'No se encontraron datos.', ['status' => 404]);
        }

        $subject = sprintf('Resumen de su Atención - %s', get_bloginfo('name'));
        $message = is_resumen_generate_text_summary($data);
        
        $sent = wp_mail($email, $subject, $message);

        if ($sent) {
            return new WP_REST_Response(['status' => true, 'message' => 'Correo enviado exitosamente.'], 200);
        } else {
            return new WP_Error('email_failed', 'No se pudo enviar el correo.', ['status' => 500]);
        }
    }

    public function get_resumen_pdf(WP_REST_Request $request) {
        $encounter_id = (int) $request->get_param('encounter_id');
        if (empty($encounter_id)) {
            // Or redirect to a safe page
            wp_die('ID de encuentro no válido.');
        }

        $data = is_resumen_get_data($encounter_id);
        if (empty($data)) {
            wp_die('No se encontraron datos para este encuentro.');
        }

        $html_content = is_resumen_render_template('pdf-template.php', ['data' => $data]);

        // Placeholder for PDF library integration
        // For now, just display the HTML that would be converted to PDF
        echo $html_content;
        exit;
    }
}
