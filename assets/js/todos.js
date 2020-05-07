// Check of specific Todo By Clicking
$("li").click(function () {
    // Old School method
    /*    if ($(this).css("color") === "rgb(128, 128, 128)") {
            $(this).css({
                color: "black",
                textDecoration: "none"
            });
        }
    
        else {
            $(this).css({
                color: "gray",
                textDecoration: "line-through"
            });
        }
    */
    //Recommended
    $(this).toggleClass("complete");
});

// Click on X to delete ToDo
$("span").click(function () {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// Trigger textfield
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});