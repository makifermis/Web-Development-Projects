$("h1").click(function(){
    
})

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5})

    setTimeout(function(){
        $("h1").animate({opacity: 1})
    
       }, 1000);
 })

$("input").keydown(function(event){
    $("h1").text(event.key)
})

