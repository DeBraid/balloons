Template.accord.created = function() {
  this.showAll = new ReactiveVar(false);
};

Template.accord.helpers({
  shown: function() {
    return Template.instance().showAll.get();
  }
})
  
Template.accord.events({
  'click #pal-headers': function(e, template) {
    e.preventDefault();
    console.log("clicked pal headerss");
    template.showAll.set(true);
  },
  'click #hideMyElement': function(e, template) {
    e.preventDefault();
    console.log("#hideMyElement run");
    template.showAll.set(false);      
  }
});

Template.accord.helpers({
  adritePalettes: function () {
    return [
      { title : "Basic Colours - Couleurs de base", src : 'adrite/basic/basic-colours-all.png' , myTemplate : "adritebasic" , data : "basicpals"  },
      { title : "Crystal Colours - Couleurs cristallisees", src : 'adrite/crystal/crystal-colours-all.png' , myTemplate : "adritecrystal" , data : "crystalpals" },
      { title : "Fun Colours - Couleurs amusantes", src : 'adrite/fun/fun-colours-all.png' , myTemplate : "adritefun" , data : "funpals" },
      { title : "Metallic Colours - Couleurs metallisees", src : 'adrite/metallic/metallic-colours-all.png' , myTemplate : "adritemetallic" , data : "metallicpals" }
    ]
  }
});

Template.pills.helpers({
  palType: function  (argument) {
    var data = {tmplName: "basicpals", tmplName: "crystalpals", tmplName: "funpals", tmplName: "metallicpals"};
    return Template['pills'](data);
  },
  basicpals: function () {
    return [
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Blue.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Green.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Orange.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Pink.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Red.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/White.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/Yellow.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'adrite/basic/light-blue.png' }
    ]
  },
  crystalpals: function () {
    return [
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
  },
  funpals: function () {
    return [
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/Butterscotch.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/Lilac.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/dark-pink.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/island-blue.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/kiwi-lime.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/teal.png' }
    ]
  },
  metallicpals: function () {
   return [
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

Template.adritebasic.helpers({
  pals: function () {
    return [
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

Template.adritecrystal.helpers({
  pals: function () {
    return [
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

Template.adritefun.helpers({
  pals: function () {
    return [
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/Butterscotch.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/Lilac.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/dark-pink.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/island-blue.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/kiwi-lime.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'adrite/fun/teal.png' }
    ]
  }
});  

Template.adritemetallic.helpers({
  pals: function () {
   return [
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