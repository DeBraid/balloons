// adpunch-colours-all.png
Template.adpunchpalsAll.helpers({
  adpunchPalettes: function () {
    return [
      { title : "AdPunch Palettes All", src : 'adpunch/adpunch-colours-all.png' , myTemplate : "adpunchpals"  }
    ]
  }
});

Template.adpunchpals.helpers({
  pals: function () {
    return [
      { id : 'adpunch' , klass : 'pal-image indiv' , src : 'adpunch/Blue.png' },
      { id : 'adpunch' , klass : 'pal-image indiv' , src : 'adpunch/Lilac.png' },
      { id : 'adpunch' , klass : 'pal-image indiv' , src : 'adpunch/Orange.png' },
      { id : 'adpunch' , klass : 'pal-image indiv' , src : 'adpunch/Pink.png' },
      { id : 'adpunch' , klass : 'pal-image indiv' , src : 'adpunch/Red.png' },
      { id : 'adpunch' , klass : 'pal-image indiv' , src : 'adpunch/White.png' },
      { id : 'adpunch' , klass : 'pal-image indiv' , src : 'adpunch/Yellow.png' },
      { id : 'adpunch' , klass : 'pal-image indiv' , src : 'adpunch/kiwi.png' }
    ]
  }
});

Template.adpunchballs.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',            
                  label: 'Product -- Price Per Ball 4A',
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
    }
}
    
}); 


