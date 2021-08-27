$(document).ready(function() {
   
   $('.switch_en').click(function (e) { 
       $('.switch_en').css('background','gray').css('color','black');
       $('.switch_ch').css('background','black').css('color','white');
      
       $('.ch').addClass('close');
       $('.en').removeClass('close');
      
   });

   $('.switch_ch').click(function (e) { 
      $('.switch_ch').css('background','gray').css('color','black');
      $('.switch_en').css('background','black').css('color','white');
     
      $('.ch').removeClass('close');
      $('.en').addClass('close');
     
  });

});