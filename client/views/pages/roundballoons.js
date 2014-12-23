Template.roundballoons.helpers({
    settings: function () {
            return {
        rowsPerPage: 25,
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                key: 'Product Description',
                label: 'Product -- Price Per Balloon 4ABCD -- Description du produit',
                fn: function (str, obj) {
                    var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                        unit = 'inch',
                        size = str.split(unit),
                        myString = "" + size[0] + " " + unit + " " + size[1] + "";
                    
                    var html = "<p sortString=" + sortString + ">" + myString + "</p>" + 
                                "<p>" + obj["Product Description_fr"] + "</p>";
                    return Spacebars.SafeString(html);
                },
                sort: 'ascending'
                }, {
                    key: '250',
                    label: '250'
                }, {
                    key: '500',
                    label: '500'
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
                }
            ]
        };
    }
});


// Template.roundballoons.rendered = function (evt,tmpl) {
//     var desc = $('td.Product').innerText;
//     console.log('desc: ', desc);
//     var foo  = desc.replace(/^0+/, '');
//     console.log('foo: ', foo);

// };