// contains STRETCH TABLE COVERS below
Template.nonfitted.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Balloon 4C2D -- Description du produit',
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
                    key: 'ItemNum',
                    label: 'Item #',
                    fn: function  (value, object) {
                            return parseInt(value);
                    }
                }, {
                    key: 'Printing',
                    label: 'Printing'
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '5',
                    label: '5'
                }, {
                    key: '10',
                    label: '10' 
                }, {
                    key: '25',
                    label: '25'
                }, {
                    key: '50',
                    label: '50'
                }, {
                    key: '100',
                    label: '100'
                }
            ]
    };
};

Template.stretch.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                  label: 'Product -- Price Per Balloon 4C2D -- Description du produit',
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
                    key: 'ItemNum',
                    label: 'Item #',
                    fn: function  (value, object) {
                            return parseInt(value);
                    }
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '5',
                    label: '5'
                }, {
                    key: '10',
                    label: '10' 
                }, {
                    key: '25',
                    label: '25'
                }, {
                    key: '50',
                    label: '50'
                }, {
                    key: '100',
                    label: '100'
                }
            ]
        }
    }
}); 