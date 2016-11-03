$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7'],
        sectionsColor: ['#f8a109', '#4BBFC3', '#7BAABE', '#01c86d', '#f8a109', '#4BBFC3', '#7BAABE'],
    });

    testill = new function(){
    	$('.tlt').textillate({ 
	    	 selector: '.texts',
			  loop: false,
			  minDisplayTime: 2000,
			  initialDelay: 0,
			  autoStart: true,
			  inEffects: [],
			  outEffects: [ 'hinge' ],
	    	 in: { 
	    	 	effect: 'fadeIn',
	    	 	delayScale: 1.5,
			    delay: 20,
			    sync: false,
			    shuffle: true,
			    reverse: false,
	    	 },
	    	 out: {
			    effect: 'hinge',
			    delayScale: 1.5,
			    delay: 50,
			    sync: false,
			    shuffle: false,
			    reverse: false,
			    callback: function () {}
	  		},
   		});
   	}
	setTimeout(function(){
	  $('div[data-anchor="slide1"] .sign').fadeIn().addClass('animated bounceIn')}, 2000);

	$(".arrow.bounce").click(function(){
		setTimeout(function(){
	  		$('div[data-anchor="slide2"] .sign').fadeIn().addClass('animated fadeInUp')}, 1000);
		setTimeout(function(){
	  		$('div[data-anchor="slide2"] p span').css({'color':'#FFAB00'})}, 2500);

	});

	$(".ingeneer").click(function(){
		setTimeout(function(){
	  		$('.right').addClass('active');
	  		$('.left').slideToggle()
	  		}, 1500);

		setTimeout(function(){
	  		$('div[data-anchor="slide3"] p span').css({'color':'rgba(255,74,83,1)'})}, 3500);
	});
	$(".arrowbottom").click(function(){
		setTimeout(function(){
	  		$('div[data-anchor="slide5"] .sign').fadeIn().addClass('animated fadeInUp')}, 1000);

		setTimeout(function(){
	  		$('div[data-anchor="slide5"] p span').css({'color':'#333'})}, 2500);
	});

});