Template.popupbanners.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Piece 4C -- Description du produit',
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
                    key: 'Panels', 
                    label: 'Panels - panneaux', 
                    fn: function  (value, object) {
                        return parseInt(value);
                    }
                },{
                    key: 'ItemNum', 
                    label: 'Item #',
                     fn: function  (value, object) {
                        return parseInt(value);
                    },
                    sort: 'ascending'
                }, {
                    key: '1',
                    label: '1',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }, {
                    key: '2 to 4',
                    label: '2 to 4',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }, {
                    key: '5 to 9',
                    label: '5 to 9',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }, {
                    key: '10 to 24',
                    label: '10 to 24' ,
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }
            ]
        }
    }
});
