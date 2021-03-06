Template.roundballoons.helpers({
    settings: function () {
            return {
        rowsPerPage: 25,
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                key: 'Product Description',
                label: 'Product -- Price Per Balloon 4ABC -- Description du produit',
                fn: function (str, obj) {
                    var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                        unit = 'inch',
                        size = str.split(unit),
                        myString = "" + size[0] + " " + unit + " " + size[1] + "",
                        french = obj["Product Description_fr"];

                    var html = "<p sortString=" + french + ">" + myString + "</p>" + 
                                "<p>" + french + "</p>";
                    return Spacebars.SafeString(html);
                },
                sortable: false
                }, {
                    key: '250',
                    label: '250',
                    sort: 'ascending',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }, {
                    key: '500',
                    label: '500',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }, {
                    key: '1000',
                    label: '1000',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }, {
                    key: '2500',
                    label: '2500',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }, {
                    key: '5000',
                    label: '5000',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }, {
                    key: '10000',
                    label: '10000',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }
            ]
        };
    }
});