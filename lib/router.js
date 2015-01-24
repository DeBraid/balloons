Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});
// Filters
var filters = {
  clearInputValue: function () {
    var inp = $('.reactive-table-input');
    inp.val('');
    inp.trigger('keyup');
    this.next();
  },
  setBackground: function () {
    document.body.className = "noBackgroundImage";
    this.next();
  }, 
  showScrollToTopButton: function () {
    $('#scrollToTop').show();
  }, 
  scrollToTop: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  makeColumnUnsortable: function () {
    Meteor.defer(function  (argument) {
      $('.Product').map(function()  {
        this.className = "Product Description";
      });

      var item = "▼",
        desc = $('th.Product'), 
        stub = desc.text().split(item);

      desc.text = stub[0];  


    })
  }
}

Router.onBeforeAction(filters.setBackground);
Router.onBeforeAction(filters.clearInputValue);
Router.onAfterAction(filters.showScrollToTopButton);
Router.onAfterAction(filters.scrollToTop);
Router.onAfterAction(filters.makeColumnUnsortable);

// Routes
Router.map(function() {
  
  this.route('homepage', {
      path: '/'
  });
  this.route('contact');
  this.route('categories');


  this.route('geninfo', {
    path: '/geninfo',
    template: 'geninfo',
    subscriptions: function () {
      // return Meteor.subscribe('geninfo');
    },
    data: function () {
      return {
        // geninfo: Geninfo.find()
      }
    }
  });

  this.route('roundballoons', {
    path: '/roundballoons',
    template: 'roundballoons',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    },
    subscriptions: function() {
      return [
        Meteor.subscribe('roundpals'),
        Meteor.subscribe('roundballoons'),
        Meteor.subscribe('charges')
      ]
    },
    // Meteor.subscribe('charges'),
    // Meteor.subscribe('qualatexpals'),
    // Meteor.subscribe('tags')];
    data: function () {
      return {
        roundballoons: Roundballoons.find(),
        pals: Roundpals.find(),
        charges: Charges.find()
        // tags: Tags.find(),
        // pals: Qualatexpals.find()
      }
    }
  });

  this.route('heartballoons', {
    path: '/heartballoons',
    template: 'heartballoons',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'},
    }, 
    subscriptions: function () {
      return [
        Meteor.subscribe('heartpals'),
        Meteor.subscribe('heartballoons'),
        Meteor.subscribe('charges')
      ];
      //         Meteor.subscribe('hearttags'),
      //         Meteor.subscribe('adwpals'),
              
    },
    data: function () {
      return {
        pals: Heartpals.find(),
        heartballoons: Heartballoons.find(),
        charges: Charges.find()
      //   tags: Hearttags.find(),
      }
    }
  });

  this.route('quicklinkonecolour', {
    path: '/quicklinkonecolour',
    template: 'quicklinkonecolour',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('quicklinkonecolour'),
        Meteor.subscribe('charges'),
        Meteor.subscribe('qlpals')
      ];
      
    //           Meteor.subscribe('qltags')];
    },
     data: function () {
      return {
        quicklinkonecolour: Quicklinkonecolour.find(),
        charges: Charges.find(),
        pals: Qlpals.find()
    //     tags: Qltags.find(),
      }
    }
  });

  this.route('adwave', {
    path: '/adwave',
    template: 'adwave',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    subscriptions: function () {
      return [
        Meteor.subscribe('charges'), 
        Meteor.subscribe('adwave'),
        Meteor.subscribe('adwpals')
      ];
      // return [,
      //         ,
      //         Meteor.subscribe('charges'),
      //         Meteor.subscribe('adwavetags')];
    },
    data: function () {
      return {
        adwave: Adwave.find(),
        pals: Adwpals.find(),
        charges: Charges.find()
        // tags: Adwavetags.find(),
      }
    }
  });


  this.route('adwrap', {
    path: '/adwrap',
    template: 'adwrap',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    subscriptions: function () {
      return [
        Meteor.subscribe('charges'),
        Meteor.subscribe('adwpals'),
        Meteor.subscribe('adwrap')
      ];
    //   return [,
    //           ,
    //           Meteor.subscribe('qltags')];
    },
    data: function () {
      return {
        adwrap: Adwrap.find(),
        pals: Adwpals.find(),
        charges: Charges.find()
    //     tags: Qltags.find(),
      }
    }
  });

  this.route('adriteeconomyline', {
    path: '/adriteeconomyline',
    template: 'adriteeconomyline',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    subscriptions: function () {
      return [
        Meteor.subscribe('charges'), 
        Meteor.subscribe('adritepals'),
        Meteor.subscribe('adriteeconomyline')
      ]
    },
    data: function () {
      return {
        charges: Charges.find(),
        pals: Adritepals.find(),        
        adriteeconomyline: Adriteeconomyline.find()
      }
    }
    // subscriptions: function () {
    //   return [Meteor.subscribe('adriteeconomyline'),
    //           Meteor.subscribe('charges'),
    //           Meteor.subscribe('adritetags')];
    // },
    // data: function () {
    //   return {
    //     adriteeconomyline: Adriteeconomyline.find(),
    //     tags: Adritetags.find(),
    //     charges: Charges.find()
    //   }
    // }
  });

  this.route('cloudbuster', {
    path: '/cloudbuster',
    template: 'cloudbuster',
    yieldTemplates: {
      'allPals': {to: 'pals'}, 
      'filterdropdown': {to: 'filterdropdown'} 
    }, 
    subscriptions: function () {
      return [
        Meteor.subscribe('cloudpals'),
        Meteor.subscribe('cloudbusterkits'),
        Meteor.subscribe('cloudbuster')
      ];
    },
    data: function () {
      return {
        cloudbuster: Cloudbuster.find(),
        cloudbusterkits: Cloudbusterkits.find(),
        pals: Cloudpals.find()
      }
    }
  });
  
  this.route('outdoorballoons', {
    path: '/outdoorballoons',
    template: 'outdoorballoons',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals' },
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    subscriptions: function () {
      return [
        Meteor.subscribe('outdoorballoons'),
        Meteor.subscribe('charges'),
        Meteor.subscribe('outdoorpals')
      ]
    },
    data: function () {
      return {
        outdoorballoons: Outdoorballoons.find(),
        pals: Outdoorpals.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('microfoilvalved', {
    path: '/microfoilvalved',
    template: 'microfoilvalved1820',
    yieldTemplates: {
      'smallmicrofoilcharges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    subscriptions: function () {
      return [
        Meteor.subscribe('microfoilvalved1820'),
        Meteor.subscribe('microfoilvalved36'),
        Meteor.subscribe('microfoilpals')
      ]
    },
    data: function () {
      return {
        microfoilvalved1820: Microfoilvalved1820.find(),
        microfoilvalved36: Microfoilvalved36.find(),
        pals: Microfoilpals.find()
      }
    }
  });

  this.route('largequantmicrofoil', {
    path: '/largequantmicrofoil',
    template: 'largequantmicrofoil',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    subscriptions: function () {
      return [Meteor.subscribe('largequantmicrofoil'),
              Meteor.subscribe('charges'),
              // Meteor.subscribe('largequanttags'),
              Meteor.subscribe('microfoilpals')];
    },
    data: function () {
      return {
        largequantmicrofoil: Largequantmicrofoil.find(),
        pals: Microfoilpals.find(),
        // tags: Largequanttags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('giantlatexballoons', {
    path: '/giantlatexballoons',
    template: 'giantlatexballoons',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    subscriptions: function () {
      return [
        Meteor.subscribe('giantpals'),
        Meteor.subscribe('giantlatexballoons')
      ];

      //         Meteor.subscribe('charges'),
      //         Meteor.subscribe('gianttags'),
      //         Meteor.subscribe('qualatexpals')];
    },
    data: function () {
      return {
        giantlatexballoons: Giantlatexballoons.find(),
        pals: Giantpals.find()
        // pals: Qualatexpals.find(),
      //   tags: Gianttags.find(),
      //   charges: Charges.find()
      }
    }
  });


  this.route('charges', {
    path: '/charges',
    template: 'charges',
    subscriptions: function () {
      return Meteor.subscribe('charges');
    },
    data: function () {
      return {
        charges: Charges.find()
      }
    }
  });

  // newroutes
  this.route('eventtents', {
    path: '/eventtents',
    template: 'eventtents',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'}
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('eventtents'),
        Meteor.subscribe('eventtentwalls')
      ]
      //         Meteor.subscribe('eventtags')]
    },
    data: function () {
      return {
        eventtents: Eventtents.find(),
        eventtentwalls: Eventtentwalls.find()
      //   tags: Eventtags.find()
      }
    }
  });

  this.route('popupbanners', {
    path: '/popupbanners',
    template: 'popupbanners',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'}
    },
    subscriptions: function () {
      return Meteor.subscribe('popupbanners');
              // Meteor.subscribe('popuptags')];
    },
    data: function () {
      return {
        popupbanners: Popupbanners.find()
      //   tags: Popuptags.find()
      }
    }
  });

  this.route('tablecovers', {
    path: '/tablecovers',
    template: 'tablecovers',
    subscriptions: function () {
      return [
        Meteor.subscribe('nonfittedtablecovers'),
        Meteor.subscribe('stretchtablecovers')
      ];
      //         Meteor.subscribe('tablecovertags')]
    },
    data: function () {
      return {
        stretchtablecovers: Stretchtablecovers.find(),
        nonfittedtablecovers: Nonfittedtablecovers.find()
        // tags: Tablecovertags.find(),
      }
    }
  });

  this.route('promoflags', {
    path: '/promoflags',
    template: 'promoflags',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'}
    },
    subscriptions: function () {
      return [Meteor.subscribe('promoflags'),
              // Meteor.subscribe('flagtags'),
              Meteor.subscribe('econflags')];
    },
    data: function () {
      return {
        promoflags: Promoflags.find(),      
        // tags: Flagtags.find(),      
        econflags: Econflags.find()      
      }
    }
  });

  this.route('multicolourprint', {
    path: '/multicolourprint',
    template: 'multicolourprint',
    yieldTemplates: {
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    },
    subscriptions: function () {
      return [Meteor.subscribe('twocolourballoons'),
              Meteor.subscribe('threecolourplus'),
              // Meteor.subscribe('multitags'),
              Meteor.subscribe('multicolourpals'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        twocolourballoons: Twocolourballoons.find(),      
        threecolourplus: Threecolourplus.find(),      
        pals: Multicolourpals.find(),
        // tags: Multitags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('admaxminisportballs', {
    path: '/admaxminisportballs',
    template: 'admaxminisportballs',
    yieldTemplates: {
      'allPals': {to: 'pals'},
      'filterdropdown': {to: 'filterdropdown'}
    },
    subscriptions: function () {
      return [ 
        Meteor.subscribe('admaxminisportballs'),
        Meteor.subscribe('admaxpals')
      ];
      // return [Meteor.subscribe('admaxminisportballs'),
      //         Meteor.subscribe('admaxtags'),
    },
    data: function () {
      return {
        admaxminisportballs: Admaxminisportballs.find(),
        pals: Admaxpals.find()
      //   tags: Admaxtags.find()
      }
    }
  });

  this.route('adpunchballs', {
    path: '/adpunchballs',
    template: 'adpunchballs',
    yieldTemplates: {
      allPals: { to: 'pals' }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('adpunchpals'),
        Meteor.subscribe('adpunch')
      ]
    },
    data: function () {
      return {
        pals: Adpunchpals.find(),
        adpunch: Adpunch.find()
      }
    }
  });

  this.route('beachballs', {
    path: '/beachballs',
    template: 'beachballs',
    yieldTemplates: {
      'allPals': { to : 'pals'}
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('beachballs'),
        Meteor.subscribe('beachpals')
      ]
    },
    data: function () {
      return {
        beachballs: Beachballs.find(),
        pals: Beachpals.find()
      }
    }
  });

  this.route('stockballoons', {
    path: '/stockballoons',
    template: 'stockballoons',
    subscriptions: function () {
      // return Meteor.subscribe('beachballs');
    },
    data: function () {
      return {
        // beachballs: Beachballs.find()
      }
    }
  });

  

});
