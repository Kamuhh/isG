<?php
/**
 * Plugin Name: IS- Usuario por Cédula de Identidad
 * Description: Username = Cédula y Password = Cédula. Valida unicidad y agrega campo en admin/registro.
 * Version: 1.2.0
 * Author: Kamuh & Gemini
 */

if (!defined('ABSPATH')) exit;

/* -------- Registro/Frontend -------- */
add_action('register_form', function () {
    $v = isset($_POST['cedula_ci']) ? esc_attr($_POST['cedula_ci']) : '';
    echo '<p><label for="cedula_ci">Cédula de identidad<br>
          <input type="text" id="cedula_ci" name="cedula_ci" class="input" value="' . $v . '" autocomplete="off"></label></p>';
});

add_filter('registration_errors', function($errors) {
    $ced = isset($_POST['cedula_ci']) ? sanitize_user($_POST['cedula_ci'], true) : '';
    if ($ced === '') $errors->add('cedula_ci', '<strong>Error</strong>: Debe ingresar cédula.');
    if ($ced && username_exists($ced)) $errors->add('cedula_dup', '<strong>Error</strong>: Esa cédula ya existe.');
    return $errors;
}, 10, 1);

add_action('user_register', function($user_id){
    if (empty($_POST['cedula_ci'])) return;
    $ced = sanitize_user($_POST['cedula_ci'], true);
    update_user_meta($user_id, 'cedula_ci', $ced);
    global $wpdb;
    $wpdb->update($wpdb->users, [
        'user_login'    => $ced,
        'user_nicename' => sanitize_title($ced),
    ], ['ID'=>$user_id]);
    wp_set_password($ced, $user_id);
});

/* -------- Admin: Añadir usuario -------- */
add_action('user_new_form', function($type){
    if ($type !== 'add-new-user') return;
    echo '<h3>Identificación</h3><table class="form-table"><tr class="form-field">
          <th><label for="cedula_ci">Cédula de identidad</label></th>
          <td><input type="text" name="cedula_ci" id="cedula_ci" class="regular-text"></td>
          </tr></table>
          <script>(function(){var f=document.getElementById("createuser"); if(!f) return;
          f.addEventListener("submit",function(){var c=document.getElementById("cedula_ci"),u=document.getElementById("user_login");
          if(c&&u) u.value=c.value;});})();</script>';
});

add_action('user_profile_update_errors', function($errors,$update,$user){
    if ($update) return; // solo alta
    $ced = isset($_POST['cedula_ci']) ? sanitize_user($_POST['cedula_ci'], true) : '';
    if ($ced === '') $errors->add('cedula_ci','<strong>Error</strong>: Debe ingresar cédula.');
    if ($ced && username_exists($ced)) $errors->add('cedula_dup','<strong>Error</strong>: Esa cédula ya existe.');
}, 10, 3);

/* -------- Opcional: Ocultar campo user_login en altas -------- */
add_action('admin_head', function(){
    if (get_current_screen() && get_current_screen()->id === 'user') {
        echo '<style>#user_login{display:none}</style>';
    }
});
add_action('login_enqueue_scripts', function(){
    echo '<style>#user_login{display:block !important}</style>';
});


/* -------- Login Page Customizations -------- */

// Filter for labels
add_filter('gettext', 'is_usuario_ci_change_login_labels', 20, 3);
function is_usuario_ci_change_login_labels($translated_text, $text, $domain) {
    if ('default' === $domain) {
        $username_label = get_option('is_usuario_ci_username_label', 'Cédula de identidad');
        if (!empty($username_label) && 'Username or Email Address' === $text) {
            return $username_label;
        }

        $password_label = get_option('is_usuario_ci_password_label', 'Contraseña');
        if (!empty($password_label) && 'Password' === $text) {
            return $password_label;
        }
    }
    return $translated_text;
}

// Head styles for logo, background, and hiding elements
add_action('login_head', 'is_usuario_ci_login_head_styles');
function is_usuario_ci_login_head_styles() {
    $styles = '';
    
    // Background Color
    $bg_color = get_option('is_usuario_ci_background_color');
    if (!empty($bg_color)) {
        $styles .= "body.login { background-color: " . esc_attr($bg_color) . "; }\n";
    }

    // Background Image
    $bg_image_url = get_option('is_usuario_ci_background_image_url');
    if (!empty($bg_image_url)) {
        $styles .= "body.login { background-image: url('" . esc_url($bg_image_url) . "'); background-size: cover; background-position: center; background-repeat: no-repeat; }\n";
    }

    // Logo
    $logo_url = get_option('is_usuario_ci_custom_logo_url');
    if (!empty($logo_url)) {
        $styles .= ".login h1 a { background-image: url('" . esc_url($logo_url) . "') !important; width: auto; background-size: contain; background-position: center; }\n";
    }

    // Hide Lost Password
    if (!get_option('is_usuario_ci_show_lost_password', 1)) {
        $styles .= "#nav { display: none !important; }\n";
    }

    // Hide Language Switcher
    if (!get_option('is_usuario_ci_show_language_switcher', 1)) {
        $styles .= ".language-switcher { display: none !important; }\n";
    }

    // Hide Back to Site link
    if (!get_option('is_usuario_ci_show_back_to_site_link', 1)) {
        $styles .= "#backtoblog { display: none !important; }\n";
    }

    if (!empty($styles)) {
        echo '<style>' . $styles . '</style>';
    }
}

// Custom logo URL
add_filter('login_headerurl', 'is_usuario_ci_custom_logo_url');
function is_usuario_ci_custom_logo_url($header_url) {
    return get_home_url();
}

// Custom logo title
add_filter('login_headertext', 'is_usuario_ci_custom_logo_title');
function is_usuario_ci_custom_logo_title($header_text) {
    return get_bloginfo('name');
}


/* -------- Admin Menu & Settings -------- */
add_action('admin_init', 'is_usuario_ci_register_settings');
add_action('admin_menu', 'is_usuario_ci_admin_menu');
add_action('admin_enqueue_scripts', 'is_usuario_ci_enqueue_admin_scripts');

function is_usuario_ci_enqueue_admin_scripts($hook) {
    if ($hook !== 'toplevel_page_is-usuario-ci-settings') {
        return;
    }
    // Color Picker
    wp_enqueue_style('wp-color-picker');
    wp_enqueue_script('wp-color-picker');

    // Media Uploader
    wp_enqueue_media();
    wp_enqueue_script(
        'is_usuario_ci_media_uploader',
        plugin_dir_url(__FILE__) . 'js/media-uploader.js',
        ['jquery'],
        '1.0.1', // version bump
        true
    );
}

function is_usuario_ci_register_settings() {
    $group = 'is_usuario_ci_settings_group';
    $section = 'is_usuario_ci_login_section';

    // Register Settings
    register_setting($group, 'is_usuario_ci_custom_logo_url', ['type' => 'string', 'sanitize_callback' => 'esc_url_raw', 'default' => '']);
    register_setting($group, 'is_usuario_ci_username_label', ['type' => 'string', 'sanitize_callback' => 'sanitize_text_field', 'default' => 'Cédula de identidad']);
    register_setting($group, 'is_usuario_ci_password_label', ['type' => 'string', 'sanitize_callback' => 'sanitize_text_field', 'default' => 'Contraseña']);
    register_setting($group, 'is_usuario_ci_show_lost_password', ['type' => 'integer', 'sanitize_callback' => 'absint', 'default' => 1]);
    register_setting($group, 'is_usuario_ci_show_language_switcher', ['type' => 'integer', 'sanitize_callback' => 'absint', 'default' => 1]);
    register_setting($group, 'is_usuario_ci_show_back_to_site_link', ['type' => 'integer', 'sanitize_callback' => 'absint', 'default' => 1]);
    register_setting($group, 'is_usuario_ci_background_color', ['type' => 'string', 'sanitize_callback' => 'sanitize_hex_color', 'default' => '']);
    register_setting($group, 'is_usuario_ci_background_image_url', ['type' => 'string', 'sanitize_callback' => 'esc_url_raw', 'default' => '']);

    // Add Section
    add_settings_section($section, 'Ajustes de la Página de Acceso (wp-login.php)', null, 'is-usuario-ci-settings');

    // Add Fields
    add_settings_field('is_usuario_ci_custom_logo_url', 'Logo Personalizado', 'is_usuario_ci_image_uploader_callback', 'is-usuario-ci-settings', $section, ['name' => 'is_usuario_ci_custom_logo_url']);
    add_settings_field('is_usuario_ci_background_image_url', 'Imagen de Fondo', 'is_usuario_ci_image_uploader_callback', 'is-usuario-ci-settings', $section, ['name' => 'is_usuario_ci_background_image_url']);
    add_settings_field('is_usuario_ci_background_color', 'Color de Fondo', 'is_usuario_ci_color_picker_callback', 'is-usuario-ci-settings', $section);
    add_settings_field('is_usuario_ci_username_label', 'Etiqueta del Campo de Usuario', 'is_usuario_ci_field_callback', 'is-usuario-ci-settings', $section, ['type' => 'text', 'name' => 'is_usuario_ci_username_label']);
    add_settings_field('is_usuario_ci_password_label', 'Etiqueta del Campo de Contraseña', 'is_usuario_ci_field_callback', 'is-usuario-ci-settings', $section, ['type' => 'text', 'name' => 'is_usuario_ci_password_label']);
    add_settings_field('is_usuario_ci_show_lost_password', 'Mostrar Enlace "Contraseña Perdida"', 'is_usuario_ci_field_callback', 'is-usuario-ci-settings', $section, ['type' => 'checkbox', 'name' => 'is_usuario_ci_show_lost_password']);
    add_settings_field('is_usuario_ci_show_language_switcher', 'Mostrar Selector de Idioma', 'is_usuario_ci_field_callback', 'is-usuario-ci-settings', $section, ['type' => 'checkbox', 'name' => 'is_usuario_ci_show_language_switcher']);
    add_settings_field('is_usuario_ci_show_back_to_site_link', 'Mostrar Enlace "Ir al Sitio"', 'is_usuario_ci_field_callback', 'is-usuario-ci-settings', $section, ['type' => 'checkbox', 'name' => 'is_usuario_ci_show_back_to_site_link']);
}

function is_usuario_ci_image_uploader_callback($args) {
    $name = $args['name'];
    $option = get_option($name, '');
    echo '<input type="text" name="' . esc_attr($name) . '" value="' . esc_attr($option) . '" class="regular-text image-url-input" /> ';
    echo '<input type="button" class="button upload-image-button" value="Subir / Elegir Imagen" />';
}

function is_usuario_ci_color_picker_callback() {
    $option = get_option('is_usuario_ci_background_color', '');
    echo '<input type="text" name="is_usuario_ci_background_color" value="' . esc_attr($option) . '" class="is-color-picker" />';
}

function is_usuario_ci_field_callback($args) {
    $name = $args['name'];
    $type = $args['type'];
    $option = get_option($name, $args['default'] ?? '');

    if ($type === 'checkbox') {
        echo '<input type="checkbox" name="' . esc_attr($name) . '" value="1" ' . checked(1, $option, false) . '/>';
    } else {
        echo '<input type="' . esc_attr($type) . '" name="' . esc_attr($name) . '" value="' . esc_attr($option) . '" class="regular-text" />';
    }
}

function is_usuario_ci_admin_menu() {
    add_menu_page('Configuración de Usuario por CI', 'IS- Usuario por CI', 'manage_options', 'is-usuario-ci-settings', 'is_usuario_ci_settings_page_content', 'dashicons-id-alt', 21);
}

function is_usuario_ci_settings_page_content() {
    ?>
    <div class="wrap">
        <h1>Configuración de IS- Usuario por Cédula de Identidad</h1>
        <form action="options.php" method="post">
            <?php
            settings_fields('is_usuario_ci_settings_group');
            do_settings_sections('is-usuario-ci-settings');
            submit_button('Guardar Cambios');
            ?>
        </form>
        <script>
            jQuery(document).ready(function($){
                $('.is-color-picker').wpColorPicker();
            });
        </script>
    </div>
    <?php
}
