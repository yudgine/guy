

$(function () {
    $("input[type=submit], a, button")
      .button()
      .click(function (event) {
          event.preventDefault();
      });
});




function dance() {
    $(".left_1").animate({
        transform: 'rotate(-70deg)',
        marginTop: '236px',
        marginLeft: '66px'
    });
    $(".left_1").animate({
        transform: 'rotate(-34deg)',
        marginTop: '221px',
        marginLeft: '45px'
    });

    $(".left_2").animate({
        transform: 'rotate(7deg)',
        marginTop: '280px',
        marginLeft: '92px'
    });
    $(".left_2").animate({
        transform: 'rotate(13deg)',
        marginTop: '256px',
        marginLeft: '51px'
    });


    $(".right_1").animate({
        transform: 'rotate(-67deg)',
        marginTop: '151px',
        marginLeft: '189px'
    });
    $(".right_1").animate({
        transform: 'rotate(-34deg)',
        marginTop: '170px',
        marginLeft: '207px'
    });


    $(".right_2").animate({
        transform: 'rotate(60deg)',
        marginTop: '76px',
        marginLeft: '184px'
    });
    $(".right_2").animate({
        transform: 'rotate(73deg)',
        marginTop: '103px',
        marginLeft: '231px'
    });
};


$(document).ready(function () {



    // ТАНЦЫ ЖМАНЦЫ ------------------------------------------------------------------------
    
    $('.moov').click(function () {
        var stopDance = setInterval(dance, 800);

        $('.stop').click(function () {
            clearInterval(stopDance);
        });
    });

  

    // ШПАГАТ -----------------------------------------------------------------------

    $(".shpagat").click(function () {

        if ('-19px' === document.getElementsByClassName('left_leg_01')[0].style.marginTop) {
            alert("мудак, я и так сижу");
        }
        else {
            $(".left_leg_01").animate({
                transform: 'rotate(-10deg)',
                marginTop: '-19px',
                marginLeft: '15px'
            });
            $(".left_leg_02").animate({
                transform: 'rotate(-6deg)',
                marginTop: '-3px',
                marginLeft: '-78px'
            });
            $(".right_leg_01").animate({
                transform: 'rotate(-170deg)',
                marginTop: '-19px',
                marginLeft: '211px'
            });
            $(".right_leg_02").animate({
                transform: 'rotate(-174deg)',
                marginTop: '-4px',
                marginLeft: '318px'
            });
            $(".human_bady").animate({
                marginTop: '175px'
            });
        }
    });

    $(".stand_up").click(function () {
        if ('29px' === document.getElementsByClassName('left_leg_01')[0].style.marginTop) {
            alert("мудак, я и так стою");
        }
        else {
            $(".left_leg_01").animate({
                transform: 'rotate(-84deg)',
                marginTop: '29px',
                marginLeft: '67px'
            });
            $(".left_leg_02").animate({
                transform: 'rotate(-97deg)',
                marginTop: '130px',
                marginLeft: '74px'
            });
            $(".right_leg_01").animate({
                transform: 'rotate(-84deg)',
                marginTop: '29px',
                marginLeft: '147px'
            });
            $(".right_leg_02").animate({
                transform: 'rotate(-97deg)',
                marginTop: '130px',
                marginLeft: '154px'
            });
            $(".human_bady").animate({
                marginTop: '0px'
            });
        }
    });

    // ДЕНЬ НОЧЬ ----------------------------------------------------------------------------

    $('body').css('backgroundColor', '#fff')
    $(".color").click(function () {
        if (document.getElementsByTagName("body")[0].style.backgroundColor === "rgb(255, 255, 255)")
        {
            $("body").css('backgroundColor', '#000'),
            $(".body, .nack, .head").css('backgroundColor', '#c91414')
        }
        else {
            alert("мудак, и так темно");
        }
    });

    $(".color2").click(function () {
        if (document.getElementsByTagName("body")[0].style.backgroundColor === "rgb(0, 0, 0)") {
            $("body").css('backgroundColor', '#fff'),
            $(".body, .nack, .head").css('backgroundColor', 'black')
        }
        else {
            alert("мудак, и так светло");
        }
    });
  
});




// ЦВЕТ ФОНА -------------------------------------------------------------------------------------

function hexFromRGB(r, g, b) {
    var hex = [
      r.toString(16),
      g.toString(16),
      b.toString(16)
    ];
    $.each(hex, function (nr, val) {
        if (val.length === 1) {
            hex[nr] = "0" + val;
        }
    });
    return hex.join("").toUpperCase();
}
function refreshSwatch() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $(".head, .nack, .body").css("background-color", "#" + hex);
}
$(function () {
    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $("#red").slider("value", 16);
    $("#green").slider("value", 16);
    $("#blue").slider("value", 16);
});


$(function () {
    $("#draggable").draggable();
});







