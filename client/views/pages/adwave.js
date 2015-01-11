Template.adwave.helpers({
settings: function () {
    return {
        showNavigation: 'never',
        showFilter: true,
        fields: [{
                key: 'Product Description',
                label: 'Product -- Price Per Balloon 2ABCD -- Description du produit',
                fn: function (str, obj) {
                    var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                        unit = 'inch',
                        size = str.split(unit),
                        myString = "" + size[0] + "",
                        french = obj["Product Description_fr"];

                    var html = "<p sortString=" + french + ">" + myString + "</p>" + 
                                "<p>" + french + "</p>";
                    return Spacebars.SafeString(html);
                }
            }, {
                key: '1000',
                label: '1000'
            }, {
                key: '2500',
                label: '2500'
            }, {
                key: '5000',
                label: '5000'
            }, {
                key: '10000',
                label: '10000'
            }, {
                key: '25000',
                label: '25000'
            }
        ]
    }
  }
});

