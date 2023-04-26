


$("#menuIcon").on("click", function (){
    $(".navContainer").css("display", "flex");
    $("#menuIcon").css("display", "none");
    $("#crossIcon").css("display", "block");
});

$("#crossIcon").on("click", function (){
    $(".navContainer").css('display', 'none');
    $("#crossIcon").css('display', 'none');
    $("#menuIcon").css('display', 'block');
});

