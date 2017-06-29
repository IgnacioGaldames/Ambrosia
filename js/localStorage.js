$(document).ready(function() {
    $(window).unload(saveSettings);
    loadSettings();
});

function loadSettings() {
    $('#valor1').val(localStorage.premio1);

}

function saveSettings() {
    localStorage.valor = $('#valor1').val();
}
