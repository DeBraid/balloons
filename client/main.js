Meteor.Spinner.options = {
    lines: 8, // The number of lines to draw
    length: 5, // The length of each line
    width: 3, // The line thickness
    radius: 10, // The radius of the inner circle
    corners: 0.7, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#fff', // #rgb or #rrggbb
    speed: 0.75, // Rounds per second
    trail: 20, // Afterglow percentage
    shadow: true, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9 // The z-index (defaults to 2000000000)
};


// UI.registerHelper('hasPalDropdown', function () {

//     var route = Router.current();
//     var routeName = route.route.name.toString();
//     var noPals = ['tablecovers','popupbanners','eventtents', 'promoflags'];

//     return !_.contains(noPals, routeName);

// });


