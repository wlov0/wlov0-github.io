  $(function(){
  $('.testymonials__slider').slick({
    arrows:false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable:false,
    waitForAnimate:false,
    dots:true,
    appendDots:$('.testymonials__dots'),
  })
  $('.testymonials__slider-prev').on('click',function(e){
    e.preventDefault()
    $('.testymonials__slider').slick('slickPrev')
  })
  $('.testymonials__slider-next').on('click',function(e){
    e.preventDefault()
    $('.testymonials__slider').slick('slickNext')
  })

  $(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});


  let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 40.71637407133431, lng: -73.99333464336607 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

setInterval(() =>{
  if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open')===false){
    $('.burger').addClass('burger__follow')
  }
  else{
    $('.burger').removeClass('burger__follow')
  }
},0)

$('.burger , .overlay').on('click',function(e){
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay-show')
  $('.burger').toggleClass('burger-open')
})
})
  
