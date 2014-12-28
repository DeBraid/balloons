Template.adritepals.events({
  'click .pal-headers': function(e, template) {
    e.preventDefault();
    console.log("clicked pal-headers");
    template.showAll.set(true);
  },
  'click #close': function(e, template) {
    e.preventDefault();
    template.showAll.set(false);
  }
});

Template.adritepals.helpers({
  shown: function() {
    return Template.instance().showAll.get();
  }
});

Template.adritepals.created = function() {
  this.showAll = new ReactiveVar(false);
};

Template.adritepals.rendered = function () {
  $(".palCollapse").collapse();
};

Template.accord.helpers({
  adritePalettes: function () {
    return [
      { title : "Basic Colours - Couleurs de base", myTemplate : "basic"  },
      { title : "Crystal Colours - Couleurs cristallisees", myTemplate : "crystal" },
      { title : "Fun Colours - Couleurs amusantes", myTemplate : "fun" },
      { title : "Metallic Colours - Couleurs metallisees", myTemplate : "metallic" }
    ]
  }
});

Template.basic.helpers({
  pals: function () {
    return [
      { id : 'basic' , klass : 'pal-image all' , src : 'adrite/basic/basic-colours-all.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Blue.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Green.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Orange.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Pink.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Red.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/White.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Yellow.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/light-blue.png' }
    ]
  }
});

Template.crystal.helpers({
  pals: function () {
    return [
      { id : 'crystal' , klass : 'pal-image all' , src : 'adrite/crystal/crystal-colours-all.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Black.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Blue.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Brown.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Burgundy.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Green.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Magenta.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Purple.pxr' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Red.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Turquoise.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'adrite/crystal/Yellow.png' }
    ]
  }
});

Template.fun.helpers({
  pals: function () {
    return [
      { id: 'fun' , klass : 'pal-image all' , src : 'adrite/fun/fun-colours-all.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/Butterscotch.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/Lilac.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/dark-pink.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/island-blue.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/kiwi-lime.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/teal.png' }
    ]
  }
});  

Template.metallic.helpers({
  pals: function () {
   return [
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/metallic-colours-all.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/Blue.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/Gold.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/Pink.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/Purple.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/Raspberry.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/Red.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/Silver.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/White.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'adrite/metallic/dark-blue.png' }
    ] 
  }
});