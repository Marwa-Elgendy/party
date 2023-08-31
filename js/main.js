/// <reference types="../@types/jquery/" />

$(".openIcon").on('click',function(){
    
    $(".open").css("left", "0")
})

$(".close").on('click', function(){
    $(".open").css("left", "-200px")
})

$(".singer .singer-h").on('click', function(){
    $(this).next().slideToggle()

    $(".singer .singer-text").not($(this).next()).slideUp()
   
})

$("textarea").keyup(function(){
    let length=$(this).val().length;

    $("#chars").text(
        100-length <=0 ? "your available character finished" : 100-length
    )
})




window.onload = function() {
   
    countDownToTime("1 october 2024 12:00:00");
  }

  function countDownToTime(countTo) {
  
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }