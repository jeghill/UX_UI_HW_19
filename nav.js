


/*$("#menuIcon").on("click", function (){
    $(".navContainer").css("display", "flex");
    $("#menuIcon").css("display", "none");
    $("#crossIcon").css("display", "block");
});

$("#crossIcon").on("click", function (){
    $(".navContainer").css('display', 'none');
    $("#crossIcon").css('display', 'none');
    $("#menuIcon").css('display', 'block');
});*/

/*$("#menuIcon").on("click", function (){
    $(".navContainer").show("slow");
});*/

$("#menuIcon").on("click", function (){
    $("#menuIcon").css("display", "none");
    $("#crossIcon").css("display", "block");
});

$(".ToggleIcon").on("click", function(){
    $(".navContainer").toggle("ease");
});

$("#crossIcon").on("click", function (){
    $("#crossIcon").css('display', 'none');
    $("#menuIcon").css('display', 'block');
});

