Template.microfoilvalved36.helpers({
    settings: function () {    
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                    label: 'Product -- Price Per Balloon 4AB -- Description du produit',
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
                    key: 'Number of Colours', 
                    label: '# Ink Colours - couleurs d\'encre',
                    fn: function (str) {
                        return parseInt(str)
                    }
                }, {
                    key: '10',
                    label: '10',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }, {
                    key: '25',
                    label: '25',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }, {
                    key: '50',
                    label: '50',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                },{
                    key: '100',
                    label: '100',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                },{
                    key: '250',
                    label: '250',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }
            ]
        }
    }
}); 