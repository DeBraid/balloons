Template.admaxminisportballs.helpers({
  settings: function() {
    return {
      showFilter: true,
      showNavigation: 'never',
      fields: [{
        key: 'Product Description',
        label: 'Product -- Price Per Balloon 2ABCD -- Description du produit',
        fn: function(str, obj) {
          var sortString = ("0000" + parseInt(str, 10)).slice(-4),
            unit = 'inch',
            size = str.split(unit),
            myString = "" + size[0] + " " + unit + " " + size[1] + "",
            french = obj["Product Description_fr"];

          var html = "<p sortString=" + french + ">" + myString + "</p>" +
            "<p>" + french + "</p>";
          return Spacebars.SafeString(html);
        }
      }, {
        key: 'Notes',
        label: 'Notes',
        sort: 'ascending'
      }, {
        key: '100',
        label: '100'
      }, {
        key: '250',
        label: '250'
      }, {
        key: '500',
        label: '500'
      }, {
        key: '1000',
        label: '1000'
      }]
    };
  }
});

// Template.admaxPalsAll.helpers({
//   admaxPalettes: function() {
//     return [{
//       title: "Basketball Colours - Couleurs de Basketball",
//       src: 'balls/basketballs/basketball-colours.png',
//       myTemplate: "admaxBasketball",
//       data: "basicpals"
//     }, {
//       title: "Footballs Solid Colours - Couleurs de Football",
//       src: 'balls/footballs/solid/football-colours.png',
//       myTemplate: "admaxFootball",
//       data: "basicpals"
//     }, {
//       title: "Footballs Stripe Colours - Couleurs d’encre et de rayures",
//       src: 'balls/footballs/striped/stripe-colors.png',
//       myTemplate: "admaxStriped",
//       data: "basicpals"
//     }, {
//       title: "Play Ball Colours - Couleurs de ballons",
//       src: 'balls/play-balls/playball-colours.png',
//       myTemplate: "admaxPlay",
//       data: "crystalpals"
//     }, {
//       title: "Baseball Colours - Couleurs de Baseball",
//       src: 'balls/baseballs/baseball.png',
//       myTemplate: "admaxBaseball",
//       data: "funpals"
//     }, {
//       title: "Soccer Ball Colours - Couleurs de soccer",
//       src: 'balls/soccer/soccer-ball.png',
//       myTemplate: "admaxSoccer",
//       data: "soccerpals"
//     }]
//   }
// });

// Template.admaxBasketball.helpers({
//   pals: function() {
//     return [{
//       id: "basketballs",
//       klass: "pal-image indiv",
//       src: "balls/basketballs/blue.png"
//     }, {
//       id: "basketballs",
//       klass: "pal-image indiv",
//       src: "balls/basketballs/green.png"
//     }, {
//       id: "basketballs",
//       klass: "pal-image indiv",
//       src: "balls/basketballs/orange.png"
//     }, {
//       id: "basketballs",
//       klass: "pal-image indiv",
//       src: "balls/basketballs/red.png"
//     }, {
//       id: "basketballs",
//       klass: "pal-image indiv",
//       src: "balls/basketballs/white.png"
//     }, {
//       id: "basketballs",
//       klass: "pal-image indiv",
//       src: "balls/basketballs/yellow.png"
//     }, ]
//   }
// });

// Template.admaxFootball.helpers({
//   pals: function() {
//     return [{
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/black.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/blue.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/brown.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/green.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/orange.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/pink.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/purple.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/red.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/white.png"
//     }, {
//       id: "footballs",
//       klass: "pal-image indiv",
//       src: "balls/footballs/solid/yellow.png"
//     }]
//   }
// });

// // Template.admaxStriped.helpers({
// //   pals: function() {
// //     return [{
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/black-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/blue-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/gold-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/green-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/maroon-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/orange-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/purple-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/red-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/silver-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/white-stripe.png"
// //     }, {
// //       id: "footballs",
// //       klass: "pal-image indiv",
// //       src: "balls/footballs/striped/yellow-stripe.png"
// //     }]
// //   }
// // });

// // Template.admaxPlay.helpers({
// //   pals: function() {
// //     return [{
// //       id: "playballs",
// //       klass: "pal-image indiv",
// //       src: "balls/play-balls/blue.png"
// //     }, {
// //       id: "playballs",
// //       klass: "pal-image indiv",
// //       src: "balls/play-balls/lime-green.png"
// //     }, {
// //       id: "playballs",
// //       klass: "pal-image indiv",
// //       src: "balls/play-balls/orange.png"
// //     }, {
// //       id: "playballs",
// //       klass: "pal-image indiv",
// //       src: "balls/play-balls/pink.png"
// //     }]
// //   }
// // });
// // Template.admaxBaseball.helpers({
// //   pals: function() {
// //     return [{
// //       id: "baseball",
// //       klass: "pal-image indiv",
// //       src: "balls/baseballs/baseball.png"
// //     }, ]
// //   }
// // });
// // Template.admaxSoccer.helpers({
// //   pals: function() {
// //     return [{
// //       id: "soccer",
// //       klass: "pal-image indiv",
// //       src: "balls/soccer/soccer-ball.png"
// //     }]
// //   }
// // });