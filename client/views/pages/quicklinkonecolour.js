Template.quicklinkonecolour.helpers({
    settings: function () {
        return {
            showFilter: true,
            showNavigation: 'never',
            fields: [{
                      key: 'Product Description',
                      label: 'Product -- Price Per Balloon 2A -- Description du produit',
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
                        key: 'Printing',
                        label: 'Printing - impression'
                    }, {
                        key: '200',
                        label: '200',
                        sort: 'ascending'
                    }, {
                        key: '500',
                        label: '500'
                    }
                ]
        }
    }
    
}); 
