$(function () {
    $(".message-form button").click(function (ev) {
        ev.preventDefault();

        var level = $(ev.target).data("level");
        var title = $("#title").val().trim();
        var message = $("#message").val().trim();

        if(title == "" && message == ""){
            $(".client-panel").effect("shake");
        } else {
            var msg = {
                title: title,
                message: message
            };

            var url = "/message/" + level;

            $("#title").val("");
            $("#message").val("");

            $.post(url, msg)
        }
    });

    $(".nopebutton").click(function(){
        $.post("/nope");
    });

    var screenResizeTimeout = null;
    function resizeScreen() {
        if(screenResizeTimeout) clearTimeout(screenResizeTimeout);
        screenResizeTimeout = setTimeout(function () {
            screenResizeTimeout = null;

            var e = $("iframe");
            if(e.width() / e.height() > 1.67)
                e.height(e.width() / 1.67);

            if(e.width() / e.height() < 1.3){
                e.height(275);
            }

        }, 100);
    }

    $(window).resize(resizeScreen);
    $(document).ready(resizeScreen);

});