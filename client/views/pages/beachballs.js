Template.beachballs.helpers({
    settings: function () {
        // ...
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Balloon 2ABC -- Description du produit',
                        fn: function (str, obj) {
                            var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                                unit = 'inch',
                                size = str.split(unit),
                                myString = "" + size[0] + " " + unit + " " + size[1] + "",
                                french = obj["Product Description_fr"];

                            var html = "<p sortString=" + french + ">" + myString + "</p>" + 
                                        "<p>" + french + "</p>";
                            return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
                }, {
                    key: '100',
                    label: '100'
                }, {
                    key: '250',
                    label: '250' 
                },{
                    key: '500',
                    label: '500'
                },{
                    key: '1000',
                    label: '1000'
                }
            ]
    };
    }
});


// Template.beachballPalsAll.helpers({
//   beachballPalettes: function() {
//     return [{
//       title: "Beachballs 12 Inch",
//       src: 'balls/beachballs/beachball-12inch.png',
//       myTemplate: "beachballs12",
//       pals: [{
//           id: "beachballs",
//           src: "balls/beachballs/beachball-12inch.png"
//         }]
//       }, {
//       title: "Beachballs 16 Inch",
//       src: 'balls/beachballs/beachball-16inch.png',
//       myTemplate: "beachballs16",
//       pals: [{
//       id: "beachballs",
//       src: "balls/beachballs/beachball-16inch.png"
//     }]
//     }
//     ]
// }
// });

// Template.beachballs12.helpers({
  
//   }
// });
// Template.beachballs16.helpers({
//   pals: function() {
//     return 
//   }
// });