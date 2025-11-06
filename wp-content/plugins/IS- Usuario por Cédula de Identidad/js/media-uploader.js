jQuery(document).ready(function($){
    var mediaUploader;

    $('.upload-image-button').click(function(e) {
        e.preventDefault();
        var button = $(this);
        var inputField = button.prev('.image-url-input');

        if (mediaUploader) {
            mediaUploader.open();
            return;
        }

        mediaUploader = wp.media.frames.file_frame = wp.media({
            title: 'Elige una Imagen',
            button: {
                text: 'Elige esta imagen'
            },
            multiple: false
        });

        mediaUploader.on('select', function() {
            var attachment = mediaUploader.state().get('selection').first().toJSON();
            inputField.val(attachment.url);
        });

        mediaUploader.open();
    });
});
