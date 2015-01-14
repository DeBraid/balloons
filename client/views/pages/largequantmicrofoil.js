Template.largequantmicrofoil.settings = function () {
    return {
        rowsPerPage: 25,
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                    label: 'Product -- Price Per Balloon CDEF -- Description du produit',
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
                    label: 'Printing'
                }, {
                    key: '2500',
                    label: '2500'
                }, {
                    key: '5000',
                    label: '5000'
                },{
                    key: '10000',
                    label: '10000'
                },{
                    key: '15000',
                    label: '15000'
                }
            ]
    };
};