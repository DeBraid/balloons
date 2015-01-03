Template.popupbanners.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Piece 5C'
                }, {
                    key: 'Panels', 
                    label: 'Panels', 
                    fn: function  (value, object) {
                        return parseInt(value);
                    }
                },{
                    key: 'ItemNum', 
                    label: 'Item #',
                     fn: function  (value, object) {
                        return parseInt(value);
                    }
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '2 to 4',
                    label: '2 to 4'
                }, {
                    key: '5 to 9',
                    label: '5 to 9'
                }, {
                    key: '10 to 24',
                    label: '10 to 24' 
                }, {
                    key: '25 to 49',
                    label: '25 to 49' 
                }
            ]
        }
    }
});
