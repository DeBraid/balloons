// if button is clicked insert text into filter box
Template.filterdropdown.events({
    'click': function (e,t) {
        e.preventDefault();
        console.log(e.target.id);
        
        var selection = e.target.id,
        inp = $('.reactive-table-input');
        
        // 1.  insert text into filter/search bar
        inp.val(selection);
        
        // 2.  simulate key event and filter table
        inp.trigger('keyup');

    }
});