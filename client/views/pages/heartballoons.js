Template.heartballoons.helpers({
  settings: function() {
    return {
      showFilter: true,
      showNavigation: 'never',
      fields: [{
        key: 'Product Description',
        label: 'Product -- Price Per Balloon 4ABC -- Description du produit',
        fn: function(str, obj) {
          var sortString = ("0000" + parseInt(str, 10)).slice(-4),
            unit = 'inch',
            str1 = str.split(unit),
            size = str1,
            myString = "" + size[0] + " " + unit + " " + str1[1] + "";

          var html = "<p sortString=" + sortString + ">" + myString + "</p>" +
            "<p>" + obj["Product Description_fr"] + "</p>";
          return Spacebars.SafeString(html);
        }
      }, {
        key: '250',
        label: '250',
        fn : function (value) {
            return value.toFixed(2)
        },
        sort: 'ascending'
      }, {
        key: '500',
        label: '500',
        fn : function (value) {
            return value.toFixed(2)
        }
      }, {
        key: '1000',
        label: '1000',
        fn : function (value) {
            return value.toFixed(2)
        }
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
      }]
    }
  }
});