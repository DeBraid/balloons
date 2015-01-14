Template.cloudbuster.helpers({
    settings: function () {    
        return {
            showFilter: true,
            showNavigation: 'never',
            fields: [{
                        key: 'Product Description',
                        label: 'Product -- Price Per Balloon ABCD -- Description du produit',
                        fn: function (str, obj) {
                            var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                                unit = 'inch',
                                size = str.split(unit),
                                myString = "" + size[0] + "",
                                french = obj["Product Description_fr"];

                            var html = "<p sortString=" + french + ">" + myString + "</p>" + 
                                        "<p>" + french + "</p>";
                            return Spacebars.SafeString(html);
                        },
                        sort: 'ascending'
                    }, 
                    // {
                    //     key: 'Colours',
                    //     label: 'Colours'
                    // }, 
                    {
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
        }
    }
});
