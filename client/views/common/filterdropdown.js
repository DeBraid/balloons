// if button is clicked insert text into filter box
Template.filterdropdown.events({
    'click [data-action=filterKeyword]': function (e,t) {
        e.preventDefault();
        var firstWordOfselection = e.target.textContent.split(" ")[0],
        inp = $('.reactive-table-input');
        
        // 1.  insert text into filter/search bar
        inp.val(firstWordOfselection);
        
        // 2.  simulate key event and filter table
        inp.trigger('keyup');

    }
});