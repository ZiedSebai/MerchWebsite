
$(document).ready(function(){
    var conHeight = $(".login-image").height();
    var imgHeight = $(".login-image img").height();
    var gap = (imgHeight - conHeight) / 2;
    $(".login-image img").css("margin-top", -gap);
    if($(".selected-photo").html()!==''){
        $(".photos-selector img").first().css("border","1px solid black")
    }
    $('.dropdown-filter').click(function(){
        $(this).children('label').children('i').toggleClass('rotate0');
        $(this).children('label').children('i').toggleClass('rotate180');
        // $(this).children('label').toggle(function(){
        //     $(this).css("border-bottom-left-radius", "10px");
        // },function(){
        //     $(this).css("border-bottom-left-radius", "0");
        // })
        $(this).children('.section-dropdown').slideToggle();
    })
    $("#discover").mouseover(function(){
        $("#discover").animate({"backgroundColor" : 'rgba(0, 0, 0, 0.479)'}, 'fast');
    }).mouseout(function(){
        $("#discover").css({"background" : 'none'}, 'fast');
    })
    $("#add-qu").click(function(){
        $("#quantity").val(String(parseInt($("#quantity").val())+1)) 
    });
    $("#less-qu").click(function(){
        if($("#quantity").val()>1){
           $("#quantity").val(String(parseInt($("#quantity").val())-1));
        }
    });
    $(".cart-div").click(function(){
        $('.put-shadow').addClass('big-shadow');
        $(".cart-prods").slideDown();
        $('body').css('overflow',"hidden");
        $('.cart-div').css('display','none')
    });
    $("#closelog").click(function(){
        $('.put-shadow').removeClass('big-shadow');
        $(".cart-prods").slideUp();
        $('body').css('overflow',"visible");
        $('.cart-div').css('display','block')
    });
});
$(".photos-selector img").mouseenter(function(){
    $(".photos-selector img").css("border","none")
    $(this).css("border","1px solid black")
    $(".selected-photo img").attr("src",$(this).attr("src"));
})
