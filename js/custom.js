/* 
 *  Author Jakub Radziwon JWEB
 *  email: j.radziwon@jweb.com.pl
 */


$(document).on('pjax:beforeSend', function (event, xhr, settings) {
    
    var opts = {
        lines: 15, // The number of lines to draw
        length: 34, // The length of each line
        width: 6, // The line thickness
        radius: 38, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '/*#9F0B0B*/#000', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 83, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner-pjax', // The CSS class to assign to the spinner
        zIndex: 400, // The z-index (defaults to 2000000000)
        top: '50vh', // Top position relative to parent
        left: '50%' // Left position relative to parent
    };

    $('#' + event.target.id + '').css({'position': 'relative', 'z-index': '999'});
    $('#' + event.target.id + '').remove('#spinner_' + event.target.id);
    $('#' + event.target.id + '').prepend('<div id="spinner_' + event.target.id + '">');
    var spiner_id = 'spinner_' + event.target.id;
    $('#' + spiner_id).css('height', '100%');
    $('#' + spiner_id).css('width', '100%');
    $('#' + spiner_id).css('background-color', 'rgba(255, 255, 255,0.4)');
    $('#' + spiner_id).css('z-index', '400');
    $('#' + spiner_id).css('position', 'absolute');
    $('#' + spiner_id).css('top', '0');
    $('#' + spiner_id).css('left', '0');
    var target = document.getElementById(spiner_id);
    var spinner = new Spinner(opts).spin(target);
    setTimeout(function () {
        $('#' + event.target.id + '').remove('#spinner_' + event.target.id);
    }, 3000);

});
$(document).on('pjax:complete', function (e) {

    $('#' + e.target.id + '').remove('#spinner_' + e.target.id);
    $('#' + e.target.id + '').css({'position': 'static', 'z-index': '1'});
});

window.onpopstate = function (event) {
   
    $('#spinner_pjax-content').remove();
    $('#pjax-content').css({'position': 'static', 'z-index': '1'});
    setTimeout(function () {

        $('#spinner_pjax-content').remove();
        $('#pjax-content').css({'position': 'static', 'z-index': '1'});

    }, 1000);
};

$(document).on('pjax:complete', function (event, xhr, textStatus, options) {
//$(document).ajaxComplete(function (event, xhr, settings) {

    var url = xhr.getResponseHeader('X-Pjax-Url');
    if (!url && xhr.getResponseHeader('X-Pjax')) {
        url = xhr.getResponseHeader('Referer');
    }

    if (url) {
        $('#' + event.target.id + '').remove('#spinner_' + event.target.id);
        $('#' + event.target.id + '').css({'position': 'static', 'z-index': '1'});
        //     history.replaceState(false, false, url);
        // document.
        // alert('tia');
        //document.location.href=url;
    }
    $('#' + event.target.id + '').remove('#spinner_' + event.target.id);
    $('#' + event.target.id + '').css({'position': 'static', 'z-index': '1'});
});