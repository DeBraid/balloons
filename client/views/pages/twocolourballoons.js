Template.multicolourprint.settings = function () {
        return {
            showFilter: true,
            showNavigation: 'never',
            fields: [{
                            key: 'Product Description',
                            label: 'Product -- Price per Balloon 2ABCD',
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
                            key: '1000',
                            label: '1000'
                        }, {
                            key: '2500',
                            label: '2500'
                        }, {
                            key: '5000',
                            label: '5000'
                        }, {
                            key: '10000',
                            label: '10000'
                        }, {
                            key: '25000',
                            label: '25000'
                        }
                    ]
        };
    };
