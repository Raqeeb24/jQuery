$(document).ready(function () {
    $("#disappear").click(function () {
        $(this).hide();
    });
});
$(document).ready(function () {
    $("#coordination").on({
        mouseenter: function () {
            console.log("enter");
        },
        mouseleave: function () {
            console.log("left");
        }
    });
});

$(document).ready(function(){
    $("#color").on({
        mouseenter: function () {
            $(this).css("background-color", "blue");
        },
        mouseleave: function () {
            $(this).css("background-color", "white");
        }
    });
});

$(document).ready(function(){
    $("tbody tr").on({
        mouseover: function(){
            $(this).css("background-color", "blue");
        },
        mouseout: function(){
            $(this).css("background-color", "#fafad2");
        }
    });
});

document.getElementById("table-body").style.backgroundColor = "#fafad2";