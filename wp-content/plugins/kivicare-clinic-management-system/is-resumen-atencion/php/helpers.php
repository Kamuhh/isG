<?php
/**
 * Helper functions for IS Resumen de Atención
 */
if (!defined('ABSPATH')) exit;

function is_resumen_get_data($encounter_id) {
    global $wpdb;
    $data = [];

    $encounter = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}kc_patient_encounters WHERE id = %d", $encounter_id));
    if (!$encounter) return [];

    $patient_id = $encounter->patient_id;
    $doctor_id = $encounter->doctor_id;
    $appointment_id = $encounter->appointment_id;

    $appointment = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}kc_appointments WHERE id = %d", $appointment_id));
    $data['appointment'] = [
        'date' => $appointment ? date_i18n(get_option('date_format'), strtotime($appointment->appointment_start_date)) : 'N/A',
        'time' => $appointment ? date_i18n(get_option('time_format'), strtotime($appointment->appointment_start_time)) : 'N/A',
    ];

    $patient_user = get_userdata($patient_id);
    $patient_meta = get_user_meta($patient_id);
    $data['patient'] = [
        'name'           => $patient_user ? $patient_user->display_name : 'N/A',
        'identification' => $patient_meta['patient_id_card'][0] ?? 'N/A',
        'age'            => $patient_meta['age'][0] ?? 'N/A',
        'gender'         => $patient_meta['gender'][0] ?? 'N/A',
        'phone'          => $patient_meta['mobile_number'][0] ?? 'N/A',
        'address'        => $patient_meta['address'][0] ?? 'N/A',
    ];

    $doctor_user = get_userdata($doctor_id);
    $doctor_meta = get_user_meta($doctor_id);
    $data['doctor'] = [
        'name'           => $doctor_user ? $doctor_user->display_name : 'N/A',
        'specialty'      => get_user_meta($doctor_id, 'specialties', true) ? implode(', ', json_decode(get_user_meta($doctor_id, 'specialties', true))) : 'N/A',
        'identification' => $doctor_meta['doctor_id_card'][0] ?? 'N/A',
        'mpps'           => $doctor_meta['mpps_number'][0] ?? 'N/A',
        'cm'             => $doctor_meta['cm_number'][0] ?? 'N/A',
        'signature_url'  => get_user_meta($doctor_id, 'doctor_signature', true) ?? '',
    ];

    $data['summary'] = [
        'diagnosis'       => $wpdb->get_col($wpdb->prepare("SELECT name FROM {$wpdb->prefix}kc_medical_problems WHERE encounter_id = %d", $encounter_id)),
        'indications'     => $wpdb->get_col($wpdb->prepare("SELECT problem_description FROM {$wpdb->prefix}kc_medical_history WHERE encounter_id = %d AND type = 'indication'", $encounter_id)), // Assuming a 'type' column
        'medical_orders'  => $wpdb->get_col($wpdb->prepare("SELECT problem_description FROM {$wpdb->prefix}kc_medical_history WHERE encounter_id = %d AND type = 'order'", $encounter_id)), // Assuming a 'type' column
        'prescriptions'   => $wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->prefix}kc_prescription WHERE encounter_id = %d", $encounter_id), ARRAY_A),
    ];

    return $data;
}

function is_resumen_render_template($template_name, $args = []) {
    extract($args);
    ob_start();
    include IS_RESUMEN_PATH . 'templates/' . $template_name;
    return ob_get_clean();
}

function is_resumen_generate_text_summary($data) {
    // ... (text generation logic)
    return "Resumen de la consulta..."; // Placeholder
}
