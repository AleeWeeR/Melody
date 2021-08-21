$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".arrow-up");
    var counterDown = $(".arrow-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    var flatIcon = $(".flats path");
    var flatLink = $(".flat-link");

    // Highliting while mouseover on the floor
    floorPath.on("mouseover", function(){
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });


    // showing modal on click floor
    floorPath.on("click", toggleModal);

    modalCloseButton.on("click", toggleModal);

    viewFlatsButton.on("click", toggleModal);

    flatIcon.on("mouseover", function(){
        deleteClass();
        $(`[data-flat-link = "${$(this).attr('data-flat')}"]`).toggleClass("current-flat");
    });
    
    flatLink.on("mouseover", function(){
        deleteClass();
        $(`[data-flat = "${$(this).attr('data-flat-link')}"]`).toggleClass("current-flat");
    })

    // on press up button
    counterUp.on("click", function(){
        if(currentFloor < 18) {
            currentFloor ++;
            usCurrentFloor = currentFloor.toLocaleString('en-US',{
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    // on press down button
    counterDown.on("click", function() {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US',{
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })

    function toggleModal(){
        modal.toggleClass("is-open");
    };

    function deleteClass(){
        flatIcon.removeClass("current-flat");
        flatLink.removeClass("current-flat");
    };
}); 