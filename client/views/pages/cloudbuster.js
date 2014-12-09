Template.cloudbuster.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Balloon ABCD',
                  fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'ft',
                            str1 = str.split(unit),
                            size = str1,
                            myString = "" + size[0] + " " + unit + " " + str1[1] + "";
                        
                        var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
                }, {
                    key: 'Colours',
                    label: 'Colours'
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '10',
                    label: '10'
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