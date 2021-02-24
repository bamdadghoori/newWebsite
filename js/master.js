$(document).ready(function () {
    //click on body
    $("body").click(function(e){
        if(!$(e.target).is(".leftSide") && !$(e.target).is(".leftSide *")){
            $('.remember_box').removeClass("active");
        }
    });

    $("body").click(function(e){
        if(!$(e.target).is(".buttons") && !$(e.target).is(".buttons *") && !$(e.target).is(".panel_search_box") && !$(e.target).is(".panel_search_box *")){
            $('.panel_search_box').hide();
            $(".buttons").css("opacity","1");
        }
    });
    $('[data-toggle="tooltip"]').tooltip();


});//dom ready
