// pop up when user clicks images
Template.layout.events({
    'click .pal-image': function(e,t) {
        e.preventDefault();
        $('.modal').modal();

        var myImage = e.target.src,
            id = e.target.id;
            
        var baz = document.querySelectorAll('#' + id + ".indiv");
            // console.log("baz", baz);
            // console.log("baz length", baz.length);
            // console.log(Template.instance());
            


        myText = t.find('h1').textContent;
        
        var newTitle = $('.modal-title');
        var newModal = $('.modal-body > div');

        newTitle.text('' + myText + '');
        newModal.html('<div class="col-lg-12"><img id="modalImage" class="img-responsive" src="'+ 
                        myImage + 
                        '" /></div>');
        
    }
    // 'click .pal-image': function (e,t) {
    //     e.preventDefault();
    //     $('.modal').modal();

    //     _this = $(e.target);
    //     myImage = _this.attr('src');
    //     myText = _this.attr('alt');

    //     sectionHeadline = t.find('h1').textContent;
        
    //     var newTitle = $('.modal-title');
    //     var newModal = $('.modal-body > div');

    //     newTitle.text('' + sectionHeadline + ' -- ' + myText + '');
    //     newModal.html('<div class="col-lg-12"><img id="modalImage" src="'+ myImage + '" /></div>');
        
    // }
});
