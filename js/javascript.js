$(document).ready(function(){


	$('.video').click(function(){
		$('#facebookarchive').fadeOut('fast');
		$('#facebookarchivevideo').fadeIn('slow');
	});

	$('.turnoff').click(function(){
		$('#facebookarchive').fadeIn('slow');
		$('#facebookarchivevideo').fadeOut('fast');
		
	});

    // $('.droughtones').click(function(){
    //     $('.droughtones').css('width', '660px');       
    // });

    // $('.droughtones').click(function(){
    //     $('.droughtones').css('width', '330px');      
    // });

// 	$( window ).scroll(function() {
// 		if( scroll = false ){
// 		    $('#mybutt').css("top", "-15px");
// 	}
// });

$('.droughtones').draggable({ 
    // stop: function() {}
    cursor: "move", revert: true, cursorAt: { top: 600, left: 200 }
});

// $( "#r2009" ).resizable({
//       aspectRatio: 16 / 9
//     });
// $('#r2009').resizable();


$(window).scroll(function () {
        if ($(this).scrollTop() > -150 && $(this).scrollTop() < 500) {
            $('#r2009').css( "opacity", "1" );
            $('#r2009').css( "z-index", "2" );
            // $('.droughtones').css( "top", mouseY );
        } else {
            $('#r2009').css( "opacity", "0" );
            $('#r2009').css( "z-index", "0" );
        }

        if ($(this).scrollTop() > 500 && $(this).scrollTop() < 1000) {
            $('#r2010').css( "opacity", "1" );
            $('#r2010').css( "z-index", "2" );
        } else {
            $('#r2010').css( "opacity", "0" );
            $('#r2010').css( "z-index", "0" );
        }

        if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1500) {
            $('#r2011').css( "opacity", "1" );
            $('#r2011').css( "z-index", "2" );
        } else {
            $('#r2011').css( "opacity", "0" );
            $('#r2011').css( "z-index", "0" );
        }

        if ($(this).scrollTop() > 1500 && $(this).scrollTop() < 2000) {
            $('#r2012').css( "opacity", "1" );
            $('#r2012').css( "z-index", "2" );
        } else {
            $('#r2012').css( "opacity", "0" );
            $('#r2012').css( "z-index", "0" );
        }

        if ($(this).scrollTop() > 2000 && $(this).scrollTop() < 2500) {
            $('#r2013').css( "opacity", "1" );
            $('#r2013').css( "z-index", "2" );
        } else {
            $('#r2013').css( "opacity", "0" );
            $('#r2013').css( "z-index", "0" );
        }

        if ($(this).scrollTop() > 2500 && $(this).scrollTop() < 3000) {
            $('#r2014').css( "opacity", "1" );
            $('#r2014').css( "z-index", "2" );
        } else {
            $('#r2014').css( "opacity", "0" );
            $('#r2014').css( "z-index", "0" );
        }

        if ($(this).scrollTop() > 3000 && $(this).scrollTop() < 3500) {
            $('#r2015').css( "opacity", "1" );
            $('#r2015').css( "z-index", "2" );
        } else {
            $('#r2015').css( "opacity", "0" );
            $('#r2015').css( "z-index", "0" );
        }

        if ($(this).scrollTop() > 3500 && $(this).scrollTop() < 4000) {
            $('#r2016').css( "opacity", "1" );
            $('#r2016').css( "z-index", "2" );
        } else {
            $('#r2016').css( "opacity", "0" );
            $('#r2016').css( "z-index", "0" );
        }

        if ($(this).scrollTop() > 4000 && $(this).scrollTop() < 4500) {
            $('#r2017').css( "opacity", "1" );
            $('#r2017').css( "z-index", "2" );
        } else {
            $('#r2017').css( "opacity", "0" );
            $('#r2017').css( "z-index", "0" );
        }
    });


// $(window).scroll(_.debounce(function(){
//     $('#navbackground').css("box-shadow", "rgba(0,0,0,0.16) 0 2px 4px");
// }, 150, { 'leading': true, 'trailing': false }));

// $(window).scroll(_.debounce(function(){
//     $('#navbackground').css("box-shadow", "none");
// }, 150));

});
