
$(document).ready(function() {
    squares = 5;
    $(".container").append('<div style="text-align:center;"><button onclick="redraw()">New Sketch</button></div>');
    drawGrid(squares, squares);
});

function redraw() {
    var squares = prompt("How many squares per side?");
    if (squares == 0 || squares > 100) {
        alert('Better if the number is between 1 and 100 ;)');
    } else {
        drawGrid(squares, squares);
    }
}

function clearGrid() {
    $(".tile").remove();
    $(".row").remove();
    $(".tile").css('background', 'none')
}

function drawGrid(nx, ny) {
    clearGrid();
    var tilex = $(".grid").width() / nx;
    var tiley = $(".grid").height() / ny;

    for (i = 0; i < nx; i++) {
        for (j = 0; j < ny; j++) {
           $(".grid").append('<div class="tile"></div>');
        }
        $(".grid").append('<div class="row"></div>');
    }
    $(".tile").css({
        'width': tilex,
        'height': tiley,
    })

    $(".tile").hover(
        function(){
            var opacity = Number($(this).css('opacity')) + 0.1;
            if (opacity == 1.0) {
                opacity = 0.0;
            }
            $(this).css({
                'background': 'black',
                'opacity': opacity
            });
        },
        function(){});

        $(".tile").click(function() {
            $(this).css('background', 'none');
        })
}


