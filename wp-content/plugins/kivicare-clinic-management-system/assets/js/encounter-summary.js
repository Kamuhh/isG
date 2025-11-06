(function () {
    'use strict';

    if (typeof window === 'undefined') {
        return;
    }

    const requestData = window.request_data || {};
    if (!requestData.ajaxurl) {
        return;
    }

    const defaultLabels = {
        modalTitle: 'Resumen de atención / Care Summary',
        emailButton: 'Enviar por e-mail / Send by email',
        pdfButton: 'Ver PDF / View PDF',
        closeButton: 'Cerrar / Close',
        loading: 'Cargando información / Loading information',
        noData: 'No hay datos disponibles / No data available',
        emailSuccess: 'Resumen enviado correctamente / Summary sent successfully',
        emailError: 'No se pudo enviar el resumen / Unable to send the summary',
        pdfError: 'No se pudo generar el PDF / Unable to generate the PDF',
    };

    const labels = Object.assign({}, defaultLabels, window.kcEncounterSummaryLabels || {});

    const SummaryModal = {
        init() {
            this.ajaxUrl = requestData.ajaxurl;
            this.getNonce = requestData.get_nonce || '';
            this.postNonce = requestData.nonce || '';
            this.role = (requestData.current_user_role || '').toLowerCase();
            this.encounterId = this.extractEncounterId();
            this.loading = false;

            if (!this.encounterId) {
                return;
            }

            if (this.role === 'kivicare_patient') {
                this.removePrintButton();
                return;
            }

            this.injectStyles();
            this.createModal();
            this.bindGlobalHandler();
            this.observeButton();
        },

        extractEncounterId() {
            const hash = window.location.hash || '';
            const hashMatch = hash.match(/patient-encounter\/dashboard\/(\d+)/);
            if (hashMatch && hashMatch[1]) {
                return parseInt(hashMatch[1], 10);
            }

            const searchParams = new URLSearchParams(window.location.search || '');
            const paramId = searchParams.get('encounter_id') || searchParams.get('id');
            if (paramId && !Number.isNaN(Number(paramId))) {
                return parseInt(paramId, 10);
            }

            return null;
        },

        observeButton() {
            const attemptEnhance = () => {
                const button = document.getElementById('kc-encounter-print');
                if (button) {
                    this.enhanceButton(button);
                }
            };

            attemptEnhance();

            this.buttonObserver = new MutationObserver(() => attemptEnhance());
            this.buttonObserver.observe(document.body, {
                childList: true,
                subtree: true,
            });
        },

        enhanceButton(button) {
            if (!button || button.dataset.kcEncounterSummary === 'true') {
                return;
            }

            button.dataset.kcEncounterSummary = 'true';
            button.setAttribute('title', labels.modalTitle);

            const icon = button.querySelector('i');
            if (icon) {
                icon.className = 'fa fa-file-alt';
            }

            button.removeAttribute('onclick');
            button.onclick = null;

            const onClick = (event) => {
                this.handleButtonClick(event, button);
            };

            button.addEventListener('click', onClick, true);
        },

        removePrintButton() {
            const button = document.getElementById('kc-encounter-print');
            if (button && button.parentElement) {
                button.parentElement.removeChild(button);
            }
        },

        bindGlobalHandler() {
            if (this.globalClickHandler) {
                return;
            }

            this.globalClickHandler = (event) => {
                this.handleButtonClick(event);
            };

            document.addEventListener('click', this.globalClickHandler, true);
        },

        handleButtonClick(event, sourceButton) {
            if (!event) {
                return;
            }

            const button = sourceButton || (event.target ? event.target.closest('#kc-encounter-print') : null);
            if (!button || this.role === 'kivicare_patient') {
                return;
            }

            this.squelchLegacyHandlers(event);

            if (button.dataset.kcEncounterSummary !== 'true') {
                this.enhanceButton(button);
            }

            this.openModal();
        },

        squelchLegacyHandlers(event) {
            event.preventDefault();
            if (typeof event.stopImmediatePropagation === 'function') {
                event.stopImmediatePropagation();
            }
            if (typeof event.stopPropagation === 'function') {
                event.stopPropagation();
            }
            event.cancelBubble = true;
            event.returnValue = false;
        },

        injectStyles() {
            if (document.getElementById('kc-encounter-summary-styles')) {
                return;
            }

            const style = document.createElement('style');
            style.id = 'kc-encounter-summary-styles';
            style.textContent = `
                .kc-summary-modal { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.55); display: none; align-items: center; justify-content: center; padding: 1.5rem; z-index: 9999; box-sizing: border-box; }
                .kc-summary-modal--visible { display: flex; }
                .kc-summary-modal__dialog { position: relative; background: #ffffff; border-radius: 12px; max-width: 960px; width: 100%; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25); }
                .kc-summary-modal__header { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid rgba(15, 23, 42, 0.08); background: linear-gradient(90deg, #f8faff 0%, #eef2ff 100%); }
                .kc-summary-modal__header h2 { margin: 0; font-size: 1.25rem; font-weight: 600; color: #1f2937; }
                .kc-summary-close { border: none; background: transparent; font-size: 1.6rem; line-height: 1; cursor: pointer; color: #4b5563; transition: color 0.2s ease; }
                .kc-summary-close:hover { color: #1f2937; }
                .kc-summary-modal__body { flex: 1; overflow-y: auto; padding: 1.5rem; background: #fdfdff; }
                .kc-summary-modal__footer { display: flex; justify-content: flex-end; gap: 0.75rem; padding: 1rem 1.5rem; border-top: 1px solid rgba(15, 23, 42, 0.08); background: #ffffff; }
                .kc-summary-btn { border-radius: 8px; padding: 0.65rem 1.4rem; font-size: 0.95rem; font-weight: 500; cursor: pointer; transition: all 0.2s ease; border: 1px solid transparent; }
                .kc-summary-btn:disabled { opacity: 0.6; cursor: not-allowed; }
                .kc-summary-btn--primary { background: #4874dc; color: #ffffff; }
                .kc-summary-btn--primary:hover:not(:disabled) { background: #3b5fb5; }
                .kc-summary-btn--outline { background: #ffffff; border-color: #d1d5db; color: #374151; }
                .kc-summary-btn--outline:hover:not(:disabled) { border-color: #4874dc; color: #2742a6; }
                .kc-summary-btn--ghost { background: transparent; color: #4874dc; }
                .kc-summary-btn--ghost:hover { color: #2742a6; }
                .kc-summary-section { margin-bottom: 1.5rem; background: #ffffff; border-radius: 10px; padding: 1.1rem 1.25rem; border: 1px solid rgba(15, 23, 42, 0.05); box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); }
                .kc-summary-section h3 { margin: 0 0 0.85rem 0; font-size: 1.05rem; font-weight: 600; color: #1f2937; }
                .kc-summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem 1.25rem; }
                .kc-summary-field { display: flex; flex-direction: column; gap: 0.15rem; }
                .kc-summary-label { font-size: 0.75rem; letter-spacing: 0.05em; text-transform: uppercase; color: #6b7280; font-weight: 600; }
                .kc-summary-value { font-size: 0.95rem; color: #111827; font-weight: 500; }
                .kc-summary-text { font-size: 0.95rem; color: #1f2937; line-height: 1.6; white-space: pre-line; }
                .kc-summary-list { margin: 0; padding-left: 1.25rem; color: #1f2937; }
                .kc-summary-list li { margin-bottom: 0.35rem; }
                .kc-summary-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
                .kc-summary-table th, .kc-summary-table td { border: 1px solid rgba(15, 23, 42, 0.08); padding: 0.6rem 0.7rem; text-align: left; vertical-align: top; }
                .kc-summary-table th { background: #f3f4ff; color: #1f2937; font-weight: 600; }
                .kc-summary-alert { margin-bottom: 1rem; font-size: 0.9rem; border-radius: 8px; padding: 0.75rem 1rem; display: none; }
                .kc-summary-alert--info { display: block; background: #eff6ff; color: #1d4ed8; }
                .kc-summary-alert--success { display: block; background: #ecfdf5; color: #047857; }
                .kc-summary-alert--error { display: block; background: #fef2f2; color: #b91c1c; }
                .kc-summary-modal--loading .kc-summary-modal__dialog::after { content: ''; position: absolute; inset: 0; background: rgba(255, 255, 255, 0.55); }
                .kc-summary-modal--loading .kc-summary-modal__dialog::before { content: ''; position: absolute; top: 50%; left: 50%; width: 48px; height: 48px; margin: -24px 0 0 -24px; border-radius: 999px; border: 3px solid #dbeafe; border-top-color: #4874dc; animation: kc-summary-spin 0.75s linear infinite; }
                .kc-summary-signature { margin-top: 1rem; display: flex; flex-direction: column; gap: 0.35rem; }
                .kc-summary-signature img { max-width: 200px; height: auto; object-fit: contain; }
                body.kc-summary-modal-open { overflow: hidden; }
                @keyframes kc-summary-spin { to { transform: rotate(360deg); } }
            `;
            document.head.appendChild(style);
        },

        createModal() {
            this.modalContainer = document.createElement('div');
            this.modalContainer.className = 'kc-summary-modal';
            this.modalContainer.setAttribute('role', 'dialog');
            this.modalContainer.setAttribute('aria-modal', 'true');

            const dialog = document.createElement('div');
            dialog.className = 'kc-summary-modal__dialog';

            const header = document.createElement('div');
            header.className = 'kc-summary-modal__header';

            const title = document.createElement('h2');
            title.textContent = labels.modalTitle;

            const closeButton = document.createElement('button');
            closeButton.type = 'button';
            closeButton.className = 'kc-summary-close';
            closeButton.setAttribute('aria-label', labels.closeButton);
            closeButton.innerHTML = '&times;';
            closeButton.addEventListener('click', () => this.closeModal());

            header.append(title, closeButton);

            const body = document.createElement('div');
            body.className = 'kc-summary-modal__body';

            this.messageBox = document.createElement('div');
            this.messageBox.className = 'kc-summary-alert';
            body.appendChild(this.messageBox);

            this.modalBody = document.createElement('div');
            body.appendChild(this.modalBody);

            const footer = document.createElement('div');
            footer.className = 'kc-summary-modal__footer';

            this.emailButton = document.createElement('button');
            this.emailButton.type = 'button';
            this.emailButton.className = 'kc-summary-btn kc-summary-btn--primary';
            this.emailButton.textContent = labels.emailButton;
            this.emailButton.addEventListener('click', () => this.sendEmail());

            this.pdfButton = document.createElement('button');
            this.pdfButton.type = 'button';
            this.pdfButton.className = 'kc-summary-btn kc-summary-btn--outline';
            this.pdfButton.textContent = labels.pdfButton;
            this.pdfButton.addEventListener('click', () => this.openPdf());

            this.closeActionButton = document.createElement('button');
            this.closeActionButton.type = 'button';
            this.closeActionButton.className = 'kc-summary-btn kc-summary-btn--ghost';
            this.closeActionButton.textContent = labels.closeButton;
            this.closeActionButton.addEventListener('click', () => this.closeModal());

            footer.append(this.emailButton, this.pdfButton, this.closeActionButton);

            dialog.append(header, body, footer);
            this.modalContainer.appendChild(dialog);
            document.body.appendChild(this.modalContainer);

            this.modalContainer.addEventListener('click', (event) => {
                if (event.target === this.modalContainer) {
                    this.closeModal();
                }
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && this.modalContainer.classList.contains('kc-summary-modal--visible')) {
                    this.closeModal();
                }
            });
        },

        openModal() {
            if (!this.modalContainer) {
                return;
            }

            this.clearMessage();
            this.modalBody.innerHTML = '';
            this.modalContainer.classList.add('kc-summary-modal--visible');
            document.body.classList.add('kc-summary-modal-open');
            this.setLoading(true);
            this.loadSummary();
        },

        closeModal() {
            if (!this.modalContainer) {
                return;
            }

            this.modalContainer.classList.remove('kc-summary-modal--visible');
            document.body.classList.remove('kc-summary-modal-open');
            this.loading = false;
            this.modalContainer.classList.remove('kc-summary-modal--loading');
            this.modalBody.innerHTML = '';
            this.clearMessage();
        },

        setLoading(isLoading) {
            this.loading = isLoading;
            this.modalContainer.classList.toggle('kc-summary-modal--loading', Boolean(isLoading));
            this.toggleActionButtons(!isLoading);
            if (isLoading) {
                this.showMessage(labels.loading, 'info');
            }
        },

        toggleActionButtons(enabled) {
            if (this.emailButton) {
                this.emailButton.disabled = !enabled;
            }
            if (this.pdfButton) {
                this.pdfButton.disabled = !enabled;
            }
        },

        loadSummary() {
            this.fetchSummary()
                .then((response) => {
                    if (response && response.status && response.data) {
                        this.renderSummary(response.data);
                        this.clearMessage();
                    } else {
                        const message = response && response.message ? response.message : labels.noData;
                        this.handleError(message);
                    }
                })
                .catch(() => {
                    this.handleError(labels.noData);
                })
                .finally(() => {
                    this.setLoading(false);
                });
        },

        fetchSummary() {
            const params = new URLSearchParams({
                action: 'ajax_get',
                route_name: 'get_encounter_summary',
                _ajax_nonce: this.getNonce,
                id: this.encounterId,
            });

            return fetch(`${this.ajaxUrl}?${params.toString()}`, {
                method: 'GET',
                credentials: 'same-origin',
            }).then((response) => response.json());
        },

        renderSummary(data) {
            if (!this.modalBody) {
                return;
            }

            this.modalBody.innerHTML = '';

            const sections = [];

            sections.push(this.buildGridSection('Detalles de la cita / Appointment details', [
                this.buildField('Fecha / Date', data?.appointment?.date),
                this.buildField('Hora / Time', data?.appointment?.time),
                this.buildField('Estado / Status', this.formatStatus(data?.appointment?.status)),
                this.buildField('Clínica / Clinic', data?.appointment?.clinic_name),
                this.buildField('Dirección / Address', data?.appointment?.clinic_address),
                this.buildField('Teléfono / Phone', data?.appointment?.clinic_phone),
            ]));

            sections.push(this.buildGridSection('Paciente / Patient', [
                this.buildField('Nombre / Name', data?.patient?.name),
                this.buildField('Identificación / ID', data?.patient?.identification),
                this.buildField('Correo / Email', data?.patient?.email),
                this.buildField('Teléfono / Phone', data?.patient?.phone),
                this.buildField('Edad / Age', this.formatAge(data?.patient?.age)),
                this.buildField('Fecha de nacimiento / Date of birth', data?.patient?.dob),
                this.buildField('Sexo / Sex', data?.patient?.gender),
                this.buildField('Dirección / Address', data?.patient?.address),
            ]));

            const doctorFields = [
                this.buildField('Nombre / Name', data?.doctor?.name),
                this.buildField('Identificación / ID', data?.doctor?.identification),
                this.buildField('Correo / Email', data?.doctor?.email),
                this.buildField('Teléfono / Phone', data?.doctor?.phone),
                this.buildField('Especialidades / Specialties', (data?.doctor?.specialties || []).join(', ')),
                this.buildField('Calificaciones / Qualifications', (data?.doctor?.qualifications || []).join(', ')),
            ];
            sections.push(this.buildGridSection('Profesional / Physician', doctorFields));

            if (data?.summary?.description) {
                sections.push(this.buildTextSection('Resumen / Summary', data.summary.description));
            }

            sections.push(this.buildListSection('Diagnóstico(s) / Diagnosis', data?.summary?.diagnosis));
            sections.push(this.buildListSection('Indicaciones / Indications', data?.summary?.indications));
            sections.push(this.buildListSection('Órdenes médicas / Medical orders', data?.summary?.medical_orders));

            if (Array.isArray(data?.summary?.prescriptions) && data.summary.prescriptions.length) {
                sections.push(this.buildPrescriptionSection(data.summary.prescriptions));
            }

            sections.forEach((section) => {
                if (section) {
                    this.modalBody.appendChild(section);
                }
            });

            if (data?.doctor?.signature) {
                const signatureSection = document.createElement('div');
                signatureSection.className = 'kc-summary-section';

                const heading = document.createElement('h3');
                heading.textContent = 'Firma / Signature';
                signatureSection.appendChild(heading);

                const signatureWrapper = document.createElement('div');
                signatureWrapper.className = 'kc-summary-signature';

                const image = document.createElement('img');
                image.src = data.doctor.signature;
                image.alt = (data.doctor.name || 'signature');
                signatureWrapper.appendChild(image);

                const caption = document.createElement('div');
                caption.className = 'kc-summary-value';
                const doctorId = this.valueOrFallback(data?.doctor?.identification);
                caption.textContent = `${this.valueOrFallback(data?.doctor?.name)}${doctorId ? ` (${doctorId})` : ''}`;
                signatureWrapper.appendChild(caption);

                signatureSection.appendChild(signatureWrapper);
                this.modalBody.appendChild(signatureSection);
            }
        },

        buildGridSection(title, fields) {
            if (!fields || !fields.length) {
                return null;
            }

            const section = document.createElement('div');
            section.className = 'kc-summary-section';

            const heading = document.createElement('h3');
            heading.textContent = title;
            section.appendChild(heading);

            const grid = document.createElement('div');
            grid.className = 'kc-summary-grid';

            fields.forEach((field) => {
                if (!field) {
                    return;
                }
                const fieldWrapper = document.createElement('div');
                fieldWrapper.className = 'kc-summary-field';

                const label = document.createElement('span');
                label.className = 'kc-summary-label';
                label.textContent = field.label;

                const value = document.createElement('span');
                value.className = 'kc-summary-value';
                value.textContent = this.valueOrFallback(field.value);

                fieldWrapper.append(label, value);
                grid.appendChild(fieldWrapper);
            });

            section.appendChild(grid);
            return section;
        },

        buildTextSection(title, text) {
            const section = document.createElement('div');
            section.className = 'kc-summary-section';

            const heading = document.createElement('h3');
            heading.textContent = title;

            const paragraph = document.createElement('div');
            paragraph.className = 'kc-summary-text';
            paragraph.textContent = this.valueOrFallback(text);

            section.append(heading, paragraph);
            return section;
        },

        buildListSection(title, items) {
            const section = document.createElement('div');
            section.className = 'kc-summary-section';

            const heading = document.createElement('h3');
            heading.textContent = title;
            section.appendChild(heading);

            if (!Array.isArray(items) || !items.length) {
                const fallback = document.createElement('div');
                fallback.className = 'kc-summary-text';
                fallback.textContent = labels.noData;
                section.appendChild(fallback);
                return section;
            }

            const list = document.createElement('ul');
            list.className = 'kc-summary-list';
            items.forEach((entry) => {
                const listItem = document.createElement('li');
                listItem.textContent = this.valueOrFallback(entry);
                list.appendChild(listItem);
            });

            section.appendChild(list);
            return section;
        },

        buildPrescriptionSection(prescriptions) {
            const section = document.createElement('div');
            section.className = 'kc-summary-section';

            const heading = document.createElement('h3');
            heading.textContent = 'Prescripciones / Prescriptions';
            section.appendChild(heading);

            const table = document.createElement('table');
            table.className = 'kc-summary-table';

            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            ['Medicamento / Medication', 'Frecuencia / Frequency', 'Duración / Duration', 'Indicaciones / Instructions'].forEach((title) => {
                const th = document.createElement('th');
                th.textContent = title;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            prescriptions.forEach((prescription) => {
                const row = document.createElement('tr');
                ['name', 'frequency', 'duration', 'instruction'].forEach((key) => {
                    const td = document.createElement('td');
                    td.textContent = this.valueOrFallback(prescription[key]);
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });
            table.appendChild(tbody);

            section.appendChild(table);
            return section;
        },

        buildField(label, value) {
            return { label, value };
        },

        formatStatus(status) {
            const normalized = typeof status === 'string' ? status.trim() : status;
            if (normalized === 0 || normalized === '0') {
                return 'Cerrada / Closed';
            }
            if (normalized === 1 || normalized === '1') {
                return 'Abierta / Open';
            }
            return this.valueOrFallback('');
        },

        formatAge(age) {
            if (age === null || age === undefined || age === '') {
                return this.valueOrFallback('');
            }
            const numericAge = Number(age);
            if (Number.isNaN(numericAge)) {
                return this.valueOrFallback(age);
            }
            return `${numericAge}`;
        },

        valueOrFallback(value) {
            if (value === null || value === undefined || value === '') {
                return labels.noData;
            }
            return `${value}`;
        },

        handleError(message) {
            this.modalBody.innerHTML = '';
            this.showMessage(message || labels.noData, 'error');
        },

        showMessage(message, type) {
            if (!this.messageBox) {
                return;
            }
            this.messageBox.textContent = message;
            this.messageBox.className = `kc-summary-alert kc-summary-alert--${type}`;
        },

        clearMessage() {
            if (!this.messageBox) {
                return;
            }
            this.messageBox.textContent = '';
            this.messageBox.className = 'kc-summary-alert';
        },

        sendEmail() {
            if (this.loading) {
                return;
            }

            this.toggleActionButtons(false);
            this.showMessage(labels.loading, 'info');

            const form = new FormData();
            form.append('action', 'ajax_post');
            form.append('route_name', 'send_encounter_summary');
            form.append('_ajax_nonce', this.postNonce);
            form.append('encounter_id', this.encounterId);

            fetch(this.ajaxUrl, {
                method: 'POST',
                credentials: 'same-origin',
                body: form,
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json && json.status) {
                        this.showMessage(labels.emailSuccess, 'success');
                    } else {
                        const message = json && json.message ? json.message : labels.emailError;
                        this.showMessage(message, 'error');
                    }
                })
                .catch(() => {
                    this.showMessage(labels.emailError, 'error');
                })
                .finally(() => {
                    this.toggleActionButtons(true);
                });
        },

        openPdf() {
            if (this.loading) {
                return;
            }

            this.toggleActionButtons(false);
            this.showMessage(labels.loading, 'info');

            const params = new URLSearchParams({
                action: 'ajax_get',
                route_name: 'get_encounter_summary_pdf',
                _ajax_nonce: this.getNonce,
                id: this.encounterId,
            });

            fetch(`${this.ajaxUrl}?${params.toString()}`, {
                method: 'GET',
                credentials: 'same-origin',
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json && json.status && json.data && json.data.data_url) {
                        const pdfWindow = window.open('', '_blank', 'noopener');
                        if (pdfWindow) {
                            pdfWindow.document.write(`<iframe src="${json.data.data_url}" frameborder="0" style="width:100%;height:100%;"></iframe>`);
                        } else {
                            const link = document.createElement('a');
                            link.href = json.data.data_url;
                            link.target = '_blank';
                            link.rel = 'noopener';
                            link.click();
                        }
                        this.clearMessage();
                    } else {
                        const message = json && json.message ? json.message : labels.pdfError;
                        this.showMessage(message, 'error');
                    }
                })
                .catch(() => {
                    this.showMessage(labels.pdfError, 'error');
                })
                .finally(() => {
                    this.toggleActionButtons(true);
                });
        },
    };

    document.addEventListener('DOMContentLoaded', () => SummaryModal.init());
})();