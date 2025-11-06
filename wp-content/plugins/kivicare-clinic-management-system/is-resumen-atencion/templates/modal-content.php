<?php
/**
 * Modal Content Template
 */
if (!defined('ABSPATH')) exit;

// Data is extracted in the helper function that includes this template
$patient = $data['patient'] ?? [];
$doctor = $data['doctor'] ?? [];
$appointment = $data['appointment'] ?? [];
$summary = $data['summary'] ?? [];

function e_resumen($value) { echo !empty($value) ? esc_html($value) : 'N/A'; }
?>

<div class="resumen-section">
    <h3>Detalles de la Cita</h3>
    <div class="resumen-grid">
        <p><strong>Fecha:</strong> <?php e_resumen($appointment['date']); ?></p>
        <p><strong>Hora:</strong> <?php e_resumen($appointment['time']); ?></p>
    </div>
</div>

<div class="resumen-section">
    <h3>Datos del Paciente</h3>
    <div class="resumen-grid">
        <p><strong>Nombre:</strong> <?php e_resumen($patient['name']); ?></p>
        <p><strong>Cédula:</strong> <?php e_resumen($patient['identification']); ?></p>
        <p><strong>Edad:</strong> <?php e_resumen($patient['age']); ?></p>
        <p><strong>Sexo:</strong> <?php e_resumen($patient['gender']); ?></p>
        <p><strong>Teléfono:</strong> <?php e_resumen($patient['phone']); ?></p>
        <p><strong>Dirección:</strong> <?php e_resumen($patient['address']); ?></p>
    </div>
</div>

<div class="resumen-section">
    <h3>Datos del Doctor</h3>
    <div class="resumen-grid">
        <p><strong>Nombre:</strong> <?php e_resumen($doctor['name']); ?></p>
        <p><strong>Especialidad:</strong> <?php e_resumen($doctor['specialty']); ?></p>
    </div>
</div>

<?php if (!empty($summary['diagnosis'])) : ?>
<div class="resumen-section">
    <h3>Diagnóstico(s)</h3>
    <ul><?php foreach ($summary['diagnosis'] as $item) echo '<li>' . esc_html($item) . '</li>'; ?></ul>
</div>
<?php endif; ?>

<?php if (!empty($summary['indications'])) : ?>
<div class="resumen-section">
    <h3>Indicaciones</h3>
    <ul><?php foreach ($summary['indications'] as $item) echo '<li>' . esc_html($item) . '</li>'; ?></ul>
</div>
<?php endif; ?>

<?php if (!empty($summary['medical_orders'])) : ?>
<div class="resumen-section">
    <h3>Órdenes Médicas</h3>
    <ul><?php foreach ($summary['medical_orders'] as $item) echo '<li>' . esc_html($item) . '</li>'; ?></ul>
</div>
<?php endif; ?>

<?php if (!empty($summary['prescriptions'])) : ?>
<div class="resumen-section">
    <h3>Prescripciones</h3>
    <table>
        <thead><tr><th>Medicamento</th><th>Frecuencia</th><th>Duración</th><th>Indicaciones</th></tr></thead>
        <tbody>
            <?php foreach ($summary['prescriptions'] as $p) : ?>
            <tr>
                <td><?php e_resumen($p['name']); ?></td>
                <td><?php e_resumen($p['frequency']); ?></td>
                <td><?php e_resumen($p['duration']); ?></td>
                <td><?php e_resumen($p['instruction']); ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>
<?php endif; ?>

<?php if (!empty($doctor['signature_url'])) : ?>
<div class="resumen-section">
    <h3>Firma del Médico</h3>
    <div class="resumen-signature">
        <img src="<?php echo esc_url($doctor['signature_url']); ?>" alt="Firma del Médico">
        <p>
            <?php e_resumen($doctor['name']); ?><br>
            C.I: <?php e_resumen($doctor['identification']); ?><br>
            MPPS: <?php e_resumen($doctor['mpps']); ?><br>
            CM: <?php e_resumen($doctor['cm']); ?><br>
        </p>
    </div>
</div>
<?php endif; ?>
