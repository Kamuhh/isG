<?php
/**
 * Routes Registration
 */
if (!defined('ABSPATH')) exit;

class IS_Resumen_Routes {
    public function __construct() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    public function register_routes() {
        $controller = new IS_Resumen_Controller();

        register_rest_route('is-resumen/v1', '/resumen/(?P<encounter_id>\d+)', [
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => [$controller, 'get_resumen'],
            'permission_callback' => [$controller, 'check_permissions'],
        ]);

        register_rest_route('is-resumen/v1', '/resumen/email', [
            'methods'             => WP_REST_Server::CREATABLE,
            'callback'            => [$controller, 'email_resumen'],
            'permission_callback' => [$controller, 'check_permissions'],
        ]);

        register_rest_route('is-resumen/v1', '/resumen/pdf', [
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => [$controller, 'get_resumen_pdf'],
            'permission_callback' => [$controller, 'check_permissions'],
        ]);
    }
}
