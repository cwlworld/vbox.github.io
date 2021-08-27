$(document).ready(function() {
   
   $('.switch_en').click(function (e) { 

       $('.switch_en').css('background','gray').css('color','black').addClass('animate__bounce');

       $('.switch_ch').css('background','black').css('color','white').removeClass('animate__bounce');
      
       $('.ch').addClass('close');
       $('.en').removeClass('close');
      
   });



   $('.switch_ch').click(function (e) { 

      $('.switch_ch').css('background','gray').css('color','black').addClass('animate__bounce');

      $('.switch_en').css('background','black').css('color','white').removeClass('animate__bounce');
     
      $('.ch').removeClass('close');
      $('.en').addClass('close');
     
  });

  $('.link').hover(
    function() {
      $( this ).addClass('animate__heartBeat');
    }, function() {
      $( this ).removeClass('animate__heartBeat');
    }
  );

});