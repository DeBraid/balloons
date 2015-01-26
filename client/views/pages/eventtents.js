Template.eventtents.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Balloon 3C -- Description du produit',
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
                    key: 'Locations',
                    label: 'Print Locations - surfaces',
                    fn: function (str) {
                        return parseInt(str);
                    }
                }, {
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
                    key: '6 to 11',
                    label: '6 to 11',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }
            ]
        }
    }
}); 

Template.eventtentwalls.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Piece 3C  -- Description du produit',
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
                }, {
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
                    key: '6 to 11',
                    label: '6 to 11',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }
            ]
        }
    }
}); 

