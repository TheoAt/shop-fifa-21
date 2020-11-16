$(document).ready(function(){
    $(".product-colors span").click(function(){
        $(".product-colors span").removeClass("active");
        $(this).addClass("active");
        $(".product-pic").css("background-image",$(this).attr("data-pic"));
        $(".product-price").html($(this).attr("data-price"));
        $(".product-legend").html($(this).attr("data-legend"));

        if($(this).attr("data-legend") === "edition standard"){
            $(".color-standard").css("background-color","#29ffc9");
            $(".color-champions").css("background-color","#888888");
            $(".color-ultimate").css("background-color","#888888");
        }

        if($(this).attr("data-legend") === "edition champions"){
            $(".color-standard").css("background-color","#888888");
            $(".color-champions").css("background-color","#29ffc9");
            $(".color-ultimate").css("background-color","#888888");
        }

        if($(this).attr("data-legend") === "edition ultimate"){
            $(".color-standard").css("background-color","#888888");
            $(".color-champions").css("background-color","#888888");
            $(".color-ultimate").css("background-color","#29ffc9");
        }
    });

    $(".plateform span").click(function(){
        $(".plateform span").removeClass("active");
        $(this).addClass("active");
        $(".plateform .choix-plateform").css("color","#bbbbbb");
        $(".plateform .choix-plateform.active").css("color",$(this).attr("data-color"));
        $(".product-button").css("background-color",$(this).attr("data-color"));
        $(".product-colors span").css("background",$(this).attr("data-color"));
        $(".product-price").css("color",$(this).attr("data-color"));
        $(".product-legend").css("color",$(this).attr("data-color"));
    })
})