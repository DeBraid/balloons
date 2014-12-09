Template.microfoilvalved36.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Balloon 4AB',
                  fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'inch',
                            size = str.split(unit),
                            myString = "" + size[0] + " " + unit + " " + size[1] + "";
                        
                        var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
                }, {
                    key: 'Number of Colours', 
                    label: '# of Ink Colours',
                    fn: function (str) {
                        return parseInt(str)
                    }
                }, {
                    key: '10',
                    label: '10'
                }, {
                    key: '25',
                    label: '25'
                }, {
                    key: '50',
                    label: '50'
                },{
                    key: '100',
                    label: '100'
                },{
                    key: '250',
                    label: '250'
                }
            ]
    };
};