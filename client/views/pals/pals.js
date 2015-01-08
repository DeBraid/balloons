Template.palsContainer.created = function() {
  this.showAll = new ReactiveVar(false);
};

Template.palsContainer.helpers({
  shown: function() {
    return Template.instance().showAll.get();
  }
});

Template.palsContainer.events({
  'click [data-action=show]': function(e, template) {
    e.preventDefault();
    console.log("clicked pal headerss");
    template.showAll.set(true);
  },
  'click [data-action=hide]': function(e, template) {
    e.preventDefault();
    console.log("#hideMyElement run");
    template.showAll.set(false);      
  }
});