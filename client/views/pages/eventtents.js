Template.eventtents.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Piece 4C',
                    fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'ft.',
                            size = str.split(unit),
                            myString = "" + size[0] + " " + unit + " " + size[1] + "";
                        
                        var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
                }, {
                    key: 'Locations',
                    label: 'Print Locations',
                    fn: function (str) {
                        return parseInt(str);
                    }
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '2 to 5',
                    label: '2 to 5'
                }, {
                    key: '6 to 11',
                    label: '6 to 11'
                }, {
                    key: '12 to 24',
                    label: '12 to 24'
                }
            ]
    };
};

Template.eventtentwalls.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Piece 4C'
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '2 to 5',
                    label: '2 to 5'
                }, {
                    key: '6 to 11',
                    label: '6 to 11'
                }, {
                    key: '12 to 24',
                    label: '12 to 24'
                }
            ]
    };
};
