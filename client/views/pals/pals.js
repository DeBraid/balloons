Template.palsAll.created = function() {
  this.showAll = new ReactiveVar(false);
};

Template.palsAll.helpers({
  shown: function() {
    return Template.instance().showAll.get();
  }
})
  
Template.palsAll.events({
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