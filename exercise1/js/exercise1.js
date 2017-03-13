$(function () {
    /* Selectors */
    $("#add-classes").click(function () {
        $('.selector-examples li:first').addClass('first');
        // Add remaining selectors here
        $('.selector-examples li:first').addClass('first');
        $('.selector-examples li:even').addClass('even');
        $('.selector-examples li:odd').addClass('odd');
        $('.selector-examples li:nth-child(4)').addClass('highlighter');
        $('.selector-examples li:last').addClass('last');
    });

    /* Change Text */
    $("#change-language").click(function () {
        // Step 1: Create a new variable called inputValue and set it to the value of the #newLanguage id
        var inputValue = $("#newLanguage").val();
        // Step 2: Create a new variable called element and set it to the value of the .currentLanguage class
        var element = $(".currentLanguage").val();
        // Step 4: Using .html (http://api.jquery.com/html/), update element with inputValue
        $(".currentLanguage").text(inputValue);
    });

    /* Toggles Part 1: Modifying CSS attributes with .css() */
    var boxColor = "rgb(153, 51, 51)"

    $("#button_toggle_colors").click(function () {
        /* Your code goes here */
        $(".box").each(function () {

            if ($(this).css('background-color') == boxColor) {
                // element currently has a color
                // remove it
                $(this).css('background-color', 'transparent');
            } else {
                // element currently has no background color
                // add it
                $(this).css('background-color', boxColor);
            }
        });
    });

    /* Toggles Part 2: Adding/Removing classes to manipulate shapes */
    $("#button_toggle_roundedges").click(function () {
        $(".box").each(function () {
            // Add a toggleClass using $(this) to add the class 'round-edge'
            $(this).toggleClass("round-edge");

        });
    });

    /* Toggles Part 3: Adding new elements */
    $("#button_add_box").click(function () {
        /* Your code goes here  */

        var new_box = document.createElement("div");
        var existingBoxes = $(".box").length;

        $(new_box).attr("id", "box4");
        $(new_box).addClass("box")
        $(new_box).addClass("outlined")
        $("#boxes").append(new_box);
    });
});