// contains STRETCH TABLE COVERS below

Template.nonfitted.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Piece 4C2D',
                  fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'ft',
                            size = str.split(unit),
                            myString = "" + size[0] + " " + unit + " " + size[1] + "";
                        
                        var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
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

Template.stretch.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Piece 4C2D',
                    fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'ft',
                            size = str.split(unit),
                            myString = "" + size[0] + " " + unit + " " + size[1] + "";
                        
                        var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
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
    };
};