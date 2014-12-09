Template.carousel.helpers({
  carouselItems: function () {
    return [
      { src : "catalogue-cover.png" , path : "promoflags" , klass : "item active" },
      { src : "quicklink-carousel.png" , path : "quicklinkonecolour" , klass : "item" },
      { src : "event-tents-carousel.jpg" , path : "eventtents" , klass : "item" },
      { src : "play-balls-carousel.jpg" , path : "admaxminisportballs" , klass : "item" }      
    ]
  } 
}); 

Template.carousel.rendered = function () {
  $('.carousel').carousel({
    interval: 4000
  });
};