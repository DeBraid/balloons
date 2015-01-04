Template.heartpalsAll.helpers({
  heartPalettes: function() {
    return [{
      title: "11 inch Heart Colours - Couleurs coeurs",
      src: 'hearts/11inch-hearts/hearts-all.png',
      myTemplate: "heartpalsEleven"
    }, {
      title: "15 inch Heart Colours - Couleurs coeurs",
      src: 'hearts/15inch-hearts/hearts-all.png',
      myTemplate: "heartpalsFifteen"
    }, {
      title: "3 ft Heart Colours - Couleurs coeurs",
      src: 'hearts/3ft-hearts/hearts-all.png',
      myTemplate: "heartpalsThree"
    }]
  }
});

Template.heartpalsThree.helpers({
  pals: function() {
    return [{
      id: 'heartThree',
      src: 'hearts/3ft-hearts/43966-DC.png'
    }, {
      id: 'heartThree',
      src: 'hearts/3ft-hearts/43971-P.png'
    }, {
      id: 'heartThree',
      src: 'hearts/3ft-hearts/43974-R.png'
    }, {
      id: 'heartThree',
      src: 'hearts/3ft-hearts/43975-Rose.png'
    }, {
      id: 'heartThree',
      src: 'hearts/3ft-hearts/43976-RR.png'
    }, {
      id: 'heartThree',
      src: 'hearts/3ft-hearts/43979-W.png'
    }, {
      id: 'heartThree',
      src: 'hearts/3ft-hearts/48589-IS.png'
    }]
  }
});

Template.heartpalsEleven.helpers({
  pals: function() {
    return [{
      id: 'heartEleven',
      src: 'hearts/11inch-hearts/30213-WB.png'
    }, {
      id: 'heartEleven',
      src: 'hearts/11inch-hearts/43721-DC.png'
    }, {
      id: 'heartEleven',
      src: 'hearts/11inch-hearts/43727-P.png'
    }, {
      id: 'heartEleven',
      src: 'hearts/11inch-hearts/43730-R.png'
    }, {
      id: 'heartEleven',
      src: 'hearts/11inch-hearts/43731-Rose.png'
    }, {
      id: 'heartEleven',
      src: 'hearts/11inch-hearts/43732-RR.png'
    }, {
      id: 'heartEleven',
      src: 'hearts/11inch-hearts/43735-W.png'
    }, {
      id: 'heartEleven',
      src: 'hearts/11inch-hearts/48587-IS.png'
    }]
  }
});

Template.heartpalsFifteen.helpers({
  pals: function() {
    return [{
      id: 'heartFifteen',
      src: 'hearts/15inch-hearts/24019-W.png'
    }, {
      id: 'heartFifteen',
      src: 'hearts/15inch-hearts/24020-Rose.png'
    }, {
      id: 'heartFifteen',
      src: 'hearts/15inch-hearts/24021-RR.png'
    }, {
      id: 'heartFifteen',
      src: 'hearts/15inch-hearts/24663-R.png'
    }, {
      id: 'heartFifteen',
      src: 'hearts/15inch-hearts/24693-P.png'
    }, {
      id: 'heartFifteen',
      src: 'hearts/15inch-hearts/25206-DC.png'
    }, {
      id: 'heartFifteen',
      src: 'hearts/15inch-hearts/30215-WB.png'
    }, {
      id: 'heartFifteen',
      src: 'hearts/15inch-hearts/78334-IS.png'
    }]
  }
});

Template.heartballoons.helpers({
  settings: function() {
    return {
      showFilter: true,
      showNavigation: 'never',
      fields: [{
        key: 'Product Description',
        label: 'Product -- Price Per Balloon 4ABCD -- Description du produit',
        fn: function(str, obj) {
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
      }]
    }
  }
});