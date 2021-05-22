$('a.open-form').click(function (e) {
    e.preventDefault();
    $('.popup.popup-form').toggleClass('show');
    $('.bg-menu').toggleClass('show');
});

$('.bg-menu').click(function () {
    $('.popup').removeClass('show');
    $('.bg-menu').removeClass('show');
});
$('.close').click(function () {
    $('.popup').removeClass('show');
    $('.bg-menu').removeClass('show');
});


$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});



$('.slider__item').click(function(){
	if(!$(this).hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	}
});


// document.getElementById("container").addEventListener("wheel", myFunction);            
//         var i = 0; 
//         function stopTheScroll(){
//             $('body').removeClass('stop-scrolling');
//         }        
//         function myFunction(e){            
//         //prevent body scrolling
//         $('body').addClass('stop-scrolling');

//         //Check if the position is greater/less than the 
//         //width of your content and prevent the scroll from accumulating.
//            if(i < 0){
//              i =0;
//              return;
//            }                
//            else if( i > 5787){
//              i = 5787;
//              return;
//            }else if(i === 5787){
//             $('body').removeClass('stop-scrolling');
//           } else if(i === 0){
//             $('body').removeClass('stop-scrolling');
//           }
        
//            //Scroll by w.e speed you want.
//            e.wheelDelta > 0?i -= 50: i += 50;            
//            $( "#container" ).scrollLeft(i);
//         }         



