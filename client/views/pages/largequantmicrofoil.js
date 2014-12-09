Template.largequantmicrofoil.settings = function () {
    return {
        rowsPerPage: 25,
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price per Balloon CDEF',
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
                    key: 'Printing',  
                    label: 'Printing'
                }, {
                    key: '2500',
                    label: '2500'
                }, {
                    key: '5000',
                    label: '5000'
                },{
                    key: '10000',
                    label: '10000'
                },{
                    key: '15000',
                    label: '15000'
                }
            ]
    };
};