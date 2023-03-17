$(window).on('load',function() {

  //for in PDP [BUY MORE SAVE MORE] APP BLOCK POSITION
  if($(window).width() < 990){
    // console.log("inside",$("[data-buy-more-save-more-desk]").length);
    $("[data-buy-more-save-more-desk]").remove();
  }
});

$(document).ready(function(){
  navigationMegaMenu();

  //PRODUCT PAGE SLIDER
  $('[data-slider-main]').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '[data-slider-thumbnail]',
    responsive: [
    {
      breakpoint: 990,
      settings: {
        infinite: false,
        dots: true
      }
    }
  ]
  });
  $('[data-slider-thumbnail]').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '[data-slider-main]',
    focusOnSelect:true,
    vertical: true,
    verticalSwiping: true
  });

  // PRODUCT PAGE -- ACCORDION
  $(document).on("click","[data-accordion-btn]",function(){
    $(this).parent("[data-accordion-wrap]").siblings().removeClass("active").find("[data-accordion-content]").slideUp();
    $(this).parent("[data-accordion-wrap]").find("[data-accordion-content]").slideToggle();
    if($(this).parent("[data-accordion-wrap]").hasClass("active"))
    {
      $(this).parent("[data-accordion-wrap]").removeClass("active");
    }else{
      $(this).parent("[data-accordion-wrap]").addClass("active");
    }
    
  });

  
});


// header search [ MOBILE ]
let searchBtn = document.querySelector("[data-search-btn-mobile]") || null;
if(searchBtn){
  let searchWrap = document.querySelector("[data-header-search-wrap-mobile]") || null;
  searchBtn.addEventListener("click",function() {
    if(searchWrap){
      if(searchWrap.classList.contains("active")){
        searchWrap.classList.remove("active");
      }else{
        searchWrap.classList.add("active");
      }
    }  
  });
}


function navigationMegaMenu(){

  //Prevent SUMMARY click event
  $(".header__inline-menu summary").click(function(e){
    e.preventDefault();
  });
  
  // console.log("navigationMegaMenu");
  // open 3rd level mega menu
  $('.submenu-li .submenu-detail').on('mouseenter',function(e){
    // console.log("mouse enter in submenu");
    $(this).closest(".submenu-li").siblings().find(".submenu-detail").removeAttr("open");
    $(this).attr("open","true");
  })
  .mouseleave(function(){
    // console.log("mouse leave from submenu");
    // $(this).closest(".submenu-li .submenu-detail").removeAttr("open");
  });

  //hide opened submenu when anothor links hover that has not SUBMENU
  $(".submenu-li .has-not-links").on('mouseenter',function(e){
    // console.log("mouse enter in submenu");
    $(this).closest(".submenu-li").siblings().find(".submenu-detail").removeAttr("open");
    // $(this).attr("open","true");
  });
  
  //open-close main desktop menu
  $('.has-mega-menu')
  .mouseenter(function(){
    // console.log("mouse enter");
    $(this).attr("open","true");
  })
  .mouseleave(function(){
    // console.log("mouse leave");
    $(this).closest(".menu-li__main .has-mega-menu").removeAttr("open");
  });
  
}


