Template.beachballs.helpers({
    settings: function () {
        // ...
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Ball 2ABC',
                  fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'inch',
                            size = str.split(unit),
                            myString = "" + size[0] + " " + unit + " " + size[1] + "";
                        
                        var html = "<span sortString=" + sortString + ">" + myString + "</span>";
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


Template.beachballPalsAll.helpers({
  beachballPalettes: function() {
    return [{
      title: "Beachballs 12 Inch",
      src: 'balls/beachballs/beachball-12inch.png',
      myTemplate: "beachballs12"
    }, {
      title: "Beachballs 16 Inch",
      src: 'balls/beachballs/beachball-16inch.png',
      myTemplate: "beachballs16"
    }
    ]
}
});

Template.beachballs12.helpers({
  pals: function() {
    return [{
      id: "Beachballs 12 Inch",
      klass: "beachballs",
      src: "balls/beachballs/beachball-12inch.png"
    }
    ]
  }
});
Template.beachballs16.helpers({
  pals: function() {
    return [{
      id: "Beachballs 16 Inch",
      klass: "beachballs",
      src: "balls/beachballs/beachball-16inch.png"
    }
    ]
  }
});