// contains code for sub-template ECONOMY FLAGS below

Template.promoflagscontent.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Piece 5C',
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
                    label: '1'
                }, {
                    key: '2 to 5',
                    label: '2 to 5'
                }, {
                    key: '6 to 10',
                    label: '6 to 10'
                }, {
                    key: '11 to 25',
                    label: '11 to 25'
                }, {
                    key: '26 to 99',
                    label: '26 to 99'
                }
            ]
    };
};

Template.econflags.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                key: 'Product Description',
                label: 'Product -- Price Per Piece 4C',
                fn: function (str) {
                    var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                        unit = 'ft',
                        size = str.split(unit),
                        myString = "" + size[0] + " " + unit + " " + size[1] + "";
                    
                    var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                    return Spacebars.SafeString(html);
                },
                sort: 'ascending'
            },{
                key: 'Printing',  
                label: 'Printing'
            },  {
                key: 'Includes',
                label: 'Includes'
            },{
                key: '2 to 5',
                label: '2 to 5'
            }, {
                key: '6 to 10',
                label: '6 to 10'
            }, {
                key: '11 to 25',
                label: '11 to 25'
            }, {
                key: '26 to 99',
                label: '26 to 99'
            }
        ]
    };
};
