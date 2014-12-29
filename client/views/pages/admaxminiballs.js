Template.admaxminisportballs.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Balloon 2ABCD -- Description du produit',
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
                    key: 'Notes',
                    label: 'Notes',
                    sort: 'ascending'
                }, {
                    key: '100',
                    label: '100'
                }, {
                    key: '250',
                    label: '250'
                },{
                    key: '500',
                    label: '500'
                },{
                    key: '1000',
                    label: '1000'
                }
            ]
    };
};