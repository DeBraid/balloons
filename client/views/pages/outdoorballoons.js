Template.outdoorballoons.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Balloon 3ABC',
                  fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'inch',
                            str1 = str.split(unit),
                            size = str1,
                            myString = "" + size[0] + " " + unit + " " + str1[1] + "";
                        
                        var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
                }, {
                    key: '1 Side Printing',
                    label: '1 Side Printing'
                }, {
                    key: '200',
                    label: '200'
                }, {
                    key: '500',
                    label: '500'
                }, {
                    key: '1000',
                    label: '1000'
                }, {
                    key: '2500',
                    label: '2500'
                },{
                    key: '5000',
                    label: '5000'
                }
            ]
    };
};