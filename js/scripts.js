$(document).ready(function(){
    $("#header").height($(window).height());
    $(window).resize(function(){
        $("#header").height($(window).height());
    });
});


/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#a8a8a9" });
		
var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('#header').width();
		this.divH = $('#header').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		
	},
	callResize: function(){
		var w,h;
		w = $("#header").width();
		h = $("#header").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('#header').find('.container, .col-md-10, .header-figure-box').css({'height': resizeDiv.divH +'px'});	
	}
	
	
}		
resizeDiv.init();		

	
	
 });

	$(document).ready(function(){
        var $menu = $(".top-header");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 80 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });
	
	$(".nav li").first().addClass('home');
	
	var map;
var egglabs = new google.maps.LatLng(50.4504996602356, 30.51102876663208);
var mapCoordinates = new google.maps.LatLng(50.4504996602356, 30.51102876663208);


var markers = [];
var image = new google.maps.MarkerImage(
    'images/ico-marker.png',
    new google.maps.Size(101,82),
    new google.maps.Point(0,0),
    new google.maps.Point(42,56)
	
  );

function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
	  icon: image,
      map: map,
      draggable: false,
	
	  
      }));
      
}

function initialize() {
  var mapOptions = {
	
    zoom: 15,
	disableDefaultUI: false,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false,
	styles:[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b4d4e1"
            }
        ]
    }
]
    
  };
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
addMarker();

}
google.maps.event.addDomListener(window, 'load', initialize);

/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 280,
        minHeight: 290,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	
   });
/*Fancybox end*/  


		
		//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});
 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
		arrows: true,
        fixed: false,
        autoCenter: false,
     
    });

 $(document).ready(function(){
   $('.top-navigation a[href*=#] ').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1400);
      e.preventDefault();
   });
   return false;
});


function windowSize(){
  if ($(window).width() < '991')
  {
    $('.send-message').detach().insertAfter('.link-box');
  } 
 
}
$(window).load(windowSize); 
$(window).resize(windowSize);

var touchHover = function() {
    $('[data-hover]').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var onHover = $this.attr('data-hover');
        var linkHref = $this.attr('href');
        if (linkHref && $this.hasClass(onHover)) {
            location.href = linkHref;
            return false;
        }
        $this.toggleClass(onHover);
    });
};

$(document).ready(function() { touchHover(); });