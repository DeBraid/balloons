Template.palsContainer.created = function() {
  this.showAll = new ReactiveVar(false);
};

Template.palsContainer.helpers({
  shown: function() {
    return Template.instance().showAll.get();
  }
});

Template.palsContainer.events({
  'click #showMore': function(e, template) {
    e.preventDefault();
    console.log("clicked pal headerss");
    template.showAll.set(true);
  },
  'click #showLess': function(e, template) {
    e.preventDefault();
    console.log("#hideMyElement run");
    template.showAll.set(false);      
  }
});