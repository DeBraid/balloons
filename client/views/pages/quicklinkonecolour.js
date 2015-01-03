Template.quicklinkonecolour.helpers({
    settings: function () {
        return {
            showFilter: true,
            showNavigation: 'never',
            fields: [{
                      key: 'Product Description',
                      label: 'Product -- Price Per Balloon 3A -- Description du produit',
                      fn: function (str) {
                            var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                                unit = 'inch',
                                str1 = str.split(unit),
                                size = str1,
                                myString = "" + size[0] + " " + unit + " " + str1[1] + "";
                            
                            var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                            return Spacebars.SafeString(html);
                        }
                    }, {
                        key: 'Printing',
                        label: 'Printing'
                    }, {
                        key: '200',
                        label: '200'
                    }, {
                        key: '500',
                        label: '500'
                    }, {
                        key: '1000',
                        label: '1000'
                    }
                ]
        }
    }
    
}); 
