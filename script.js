var TableNum = "";

$('.available').click(function() {
    TableNum = $(this).text() ;
    console.log(TableNum);
    $("#Pop").show();

});

$('#Pop').click(function() {    
    $("#Pop").hide();
});

$('#SaveTable').click( function(event){
    event.stopPropagation(); 
});

$('#ResSubmit').click( function(event){
    $('#seating'+ TableNum).removeClass('available');
    $('#seating'+ TableNum).addClass('reserved');
    $('#seating'+ TableNum).unbind("click");
    $("#Pop").hide();
});