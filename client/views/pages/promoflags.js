// contains code for sub-template ECONOMY FLAGS below

Template.promoflagscontent.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Piece 4C',
                   fn: function (str, obj) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'inch',
                            size = str.split(unit),
                            myString = "",
                            french = obj["Product Description_fr"];

                            if ( size[1] ) {
                                myString = "" + size[0] + " " + unit + " " + size[1] + "";
                            } else {
                                myString = "" + size[0] + "";
                            }

                        var html = "<p sortString=" + french + ">" + myString + "</p>" + 
                                    "<p>" + french + "</p>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
                }, {
                    key: 'Includes',
                    label: 'Includes'
                },{
                    key: 'ItemNum',
                    label: 'Item #',
                    fn: function  (value, object) {
                        if ( value == 46307.00 || 46345.00) {
                            return parseInt(value);
                        } else {
                            return value 
                        }
                    }
                },{
                    key: '1',  
                    label: '1',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }, {
                    key: '2 to 5',
                    label: '2 to 5',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }, {
                    key: '6 to 10',
                    label: '6 to 10',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }, {
                    key: '11 to 25',
                    label: '11 to 25',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }
            ]
        }
    }
});

Template.econflags.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                key: 'Product Description',
                label: 'Product -- Price Per Piece 3C - Description du produit',
                fn: function (str, obj) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'inch',
                            size = str.split(unit),
                            myString = "",
                            french = obj["Product Description_fr"];

                            if ( size[1] ) {
                                myString = "" + size[0] + " " + unit + " " + size[1] + "";
                            } else {
                                myString = "" + size[0] + "";
                            }

                        var html = "<p sortString=" + french + ">" + myString + "</p>" + 
                                    "<p>" + french + "</p>";
                        return Spacebars.SafeString(html);
                    }
            },{
                key: 'Printing',  
                label: 'Printing'
            },  {
                key: 'Includes',
                label: 'Includes'
            },{
                key: '2 to 5',
                label: '2 to 5',
                fn : function (value) {
                    return value.toFixed(2)
                }
            }, {
                key: '6 to 10',
                label: '6 to 10',
                fn : function (value) {
                    return value.toFixed(2)
                }
            }, {
                key: '11 to 25',
                label: '11 to 25',
                fn : function (value) {
                    return value.toFixed(2)
                }
            }
        ]
    }
    }
}); 
