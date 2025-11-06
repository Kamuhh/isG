window.IS_ResumenAtencion = {
    modal: null,
    modalBody: null,
    encounterId: null,

    init: function() {
        // This object is now initialized and ready to be called.
    },

    getEncounterIdFromUrl: function() {
        const hash = window.location.hash || '';
        const match = hash.match(/patient-encounter\/dashboard\/(\d+)/);
        return match ? parseInt(match[1], 10) : null;
    },

    createModal: function() {
        if (document.getElementById('is-resumen-modal')) return;

        const modalHtml = `
            <div class="is-resumen-modal" id="is-resumen-modal" style="display:none;">
                <div class="is-resumen-dialog">
                    <div class="is-resumen-header">
                        <h2>Resumen de la Atención</h2>
                        <button type="button" class="is-resumen-close">&times;</button>
                    </div>
                    <div class="is-resumen-body"></div>
                    <div class="is-resumen-footer">
                        <button type="button" class="btn btn-secondary is-resumen-close-btn">Cerrar</button>
                        <button type="button" class="btn btn-primary is-resumen-email-btn">Enviar por E-mail</button>
                        <button type="button" class="btn btn-primary is-resumen-pdf-btn">Ver PDF</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        this.modal = document.getElementById('is-resumen-modal');
        this.modalBody = this.modal.querySelector('.is-resumen-body');

        this.modal.addEventListener('click', e => {
            if (e.target.matches('.is-resumen-modal, .is-resumen-close, .is-resumen-close-btn')) {
                this.closeModal();
            }
            if (e.target.matches('.is-resumen-email-btn')) { this.sendEmail(); }
            if (e.target.matches('.is-resumen-pdf-btn')) { this.openPdf(); }
        });
    },

    openModal: function() {
        this.encounterId = this.getEncounterIdFromUrl();
        if (!this.encounterId) {
            alert('Error: No se pudo identificar el encuentro actual.');
            return;
        }

        if (!this.modal) this.createModal();
        this.modal.style.display = 'flex';
        this.loadSummary();
    },

    closeModal: function() {
        if (this.modal) this.modal.style.display = 'none';
    },

    loadSummary: function() {
        this.modalBody.innerHTML = '<p>Cargando...</p>';
        const restUrl = isResumenConfig.restUrl + 'resumen/' + this.encounterId;
        
        fetch(restUrl, { headers: { 'X-WP-Nonce': isResumenConfig.nonce } })
            .then(response => response.json())
            .then(data => {
                if (data.status && data.html) {
                    this.modalBody.innerHTML = data.html;
                } else {
                    this.modalBody.innerHTML = `<p>Error: ${data.message || 'No se pudo cargar el resumen.'}</p>`;
                }
            })
            .catch(() => {
                this.modalBody.innerHTML = '<p>Error de red al cargar el resumen.</p>';
            });
    },

    sendEmail: function() {
        const email = prompt('Introduce la dirección de correo del paciente:');
        if (!email) return;

        const restUrl = isResumenConfig.restUrl + 'resumen/email';
        fetch(restUrl, {
            method: 'POST',
            headers: { 'X-WP-Nonce': isResumenConfig.nonce, 'Content-Type': 'application/json' },
            body: JSON.stringify({ encounter_id: this.encounterId, email: email })
        })
        .then(response => response.json())
        .then(data => { alert(data.message || 'Ocurrió un error.'); });
    },

    openPdf: function() {
        const pdfUrl = isResumenConfig.restUrl + 'resumen/pdf?encounter_id=' + this.encounterId + '&_wpnonce=' + isResumenConfig.nonce;
        window.open(pdfUrl, '_blank');
    }
};

window.IS_ResumenAtencion.init();
