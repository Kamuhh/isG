<?php
/**
 * Loader for the custom IS - Resumen de Atención functionality.
 */

if (!defined('ABSPATH')) exit;

define('IS_RESUMEN_PATH', plugin_dir_path(__FILE__) . 'is-resumen-atencion/');

// 1. Enqueue Scripts and Styles
add_action('admin_enqueue_scripts', 'is_resumen_enqueue_assets', 999);
function is_resumen_enqueue_assets($hook) {
    if (strpos($hook, 'kivicare') === false) {
        return;
    }

    $plugin_url = plugin_dir_url(__FILE__);

    wp_enqueue_style(
        'is-resumen-css',
        $plugin_url . 'is-resumen-atencion/assets/css/resumen.css',
        [],
        '1.0.0'
    );

    wp_enqueue_script(
        'is-resumen-js',
        $plugin_url . 'is-resumen-atencion/assets/js/resumen.js',
        ['jquery'],
        '1.0.0',
        true
    );

    wp_localize_script('is-resumen-js', 'isResumenConfig', [
        'restUrl' => esc_url_raw(rest_url('is-resumen/v1/')),
        'nonce'   => wp_create_nonce('wp_rest')
    ]);
}

// 2. Include Backend Files
require_once IS_RESUMEN_PATH . 'php/helpers.php';
require_once IS_RESUMEN_PATH . 'php/controller.php';
require_once IS_RESUMEN_PATH . 'php/routes.php';

// 3. Instantiate Routes
new IS_Resumen_Routes();
