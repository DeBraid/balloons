Template.threecolourplustable.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Balloon ABCD',
                    fn: function (str, obj) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'inch',
                            str1 = str.split(unit),
                            size = str1,
                            myString = "" + size[0] + " " + unit + " " + str1[1] + "";
                        
                        var html = "<p sortString=" + sortString + ">" + myString + "</p>" + 
                                    "<p>" + obj["Product Description_fr"] + "</p>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
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
                }, {
                    key: '25000',
                    label: '25000',
                    fn : function (value) {
                        return value.toFixed(2)
                    }
                }
            ]
        };
    }
}); 