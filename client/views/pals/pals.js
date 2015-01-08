Template.outdoorpalsAll.created = function() {
  this.showAll = new ReactiveVar(false);
};

Template.outdoorpalsAll.helpers({
  shown: function() {
    return Template.instance().showAll.get();
  }
})

// UI.registerHelper('shown', function () {
//   return Template.instance().showAll.get();
// });

Template.outdoorpalsAll.events({
  'click #pal-headers': function(e, template) {
    e.preventDefault();
    console.log("clicked pal headerss");
    template.showAll.set(true);
  },
  'click #hideMyElement': function(e, template) {
    e.preventDefault();
    console.log("#hideMyElement run");
    template.showAll.set(false);      
  }
});