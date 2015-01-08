Template.outdoorballoons.helpers({
    settings: function () {
        return {
            showFilter: true,
            showNavigation: 'never',
            fields: [{
                      key: 'Product Description',
                      label: 'Product -- Price Per Balloon 3ABC -- Description du produit',
                        fn: function (str, obj) {
                            var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                                unit = 'inch',
                                size = str.split(unit),
                                myString = "" + size[0] + " " + unit + " " + size[1] + "",
                                french = obj["Product Description_fr"];

                            var html = "<p sortString=" + french + ">" + myString + "</p>" + 
                                        "<p>" + french + "</p>";
                            return Spacebars.SafeString(html);
                        }
                    }, {
                        key: '1 Side Printing',
                        label: '1 Side Printing'
                    }, {
                        key: '200',
                        label: '200'
                    }, {
                        key: '500',
                        label: '500'
                    }, {
                        key: '1000',
                        label: '1000'
                    }, {
                        key: '2500',
                        label: '2500'
                    },{
                        key: '5000',
                        label: '5000'
                    }
                ]
        };        
    },
  outdoorbasic: function () {
    return [
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Blue.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Green.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Orange.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Pink.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Red.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/White.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Yellow.png' }
    ]
  },
  outdoorcrystal: function () {
    return [
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/black.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/blue.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/brown.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/burgundy.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/green.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/purple.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/red.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/yellow.png' }
    ]
  },
  outdoorfun: function () {
    return [
      { id: 'fun' , klass : 'pal-image indiv' , src : 'outdoor/fun/dark-pink.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'outdoor/fun/island-blue.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'outdoor/fun/kiwi-lime.png' }
    ]
  },
  outdoormetallic: function () {
   return [
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'outdoor/metallic/Gold.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'outdoor/metallic/Silver.png' }
    ] 
  }
});

Template.outdoorpalsAll.helpers({
  outdoorPalettes: function () {
    return { 
      setup: [
        { title : "Basic Colours - Couleurs de base", src : 'outdoor/basic/basic-colours-all.png' , myTemplate : "outdoorbasic" , data : "basicpals"  },
        { title : "Crystal Colours - Couleurs cristallisees", src : 'outdoor/crystal/crystal-colours-all.png' , myTemplate : "outdoorcrystal" , data : "crystalpals" },
        { title : "Fun Colours - Couleurs amusantes", src : 'outdoor/fun/fun-colours-all.png' , myTemplate : "outdoorfun" , data : "funpals" },
        { title : "Metallic Colours - Couleurs metallisees", src : 'outdoor/metallic/metallic-colours-all.png' , myTemplate : "outdoormetallic" , data : "metallicpals" }
      ],
      pals: [
          [
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Blue.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Green.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Orange.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Pink.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Red.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/White.png' },
      { id : 'basic' , klass : 'pal-image indiv' , src : 'outdoor/basic/Yellow.png' }
    ],
   [
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/black.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/blue.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/brown.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/burgundy.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/green.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/purple.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/red.png' },
      { id : 'crystal' , klass : 'pal-image indiv' , src : 'outdoor/crystal/yellow.png' }
    ],
   [
      { id: 'fun' , klass : 'pal-image indiv' , src : 'outdoor/fun/dark-pink.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'outdoor/fun/island-blue.png' },
      { id: 'fun' , klass : 'pal-image indiv' , src : 'outdoor/fun/kiwi-lime.png' }
    ],
   [
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'outdoor/metallic/Gold.png' },
      { id : 'metallic' , klass : 'pal-image indiv' , src : 'outdoor/metallic/Silver.png' }
    ] 

      ]
    }
  }
});