
//create an array for giphy searches
var searchGiphy = ["the simpsons", "rocket power", "naruto", "bungo stray dogs"];

//create buttons that users can click for desiered giphy reponse
function createButtons(searchGiphy, classAdd, areaAdd) {
    $(areaAdd).empty();
    for(var i=0; i < searchGiphy.length; i++) {
        var a = $('<button>');
        a.addClass(classAdd);
        a.text(searchGiphy[i]);
        a.attr('data-type', searchGiphy[i]);
        $(areaAdd).append(a);
    }
}
$(function() {
    createButtons(searchGiphy, "btnSearch", "#button");
})


//look for click of button and use correct information for button
$(document).on('click', '.btnSearch', function() {
    //delete previous gifs from screen when new search is clicked
    $('#giphys').empty();

    var btnData = $(this).data('type');

//connect to giphy api to call back giphys being searched. Want info return off the gif and the rating + click event for buttons
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + btnData + '&api_key=BSR1RzgdOrIU2fXc11rAqiIMuKDNs19y&limit=5';
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            for (var i=0; i < response.data.length; i++) {
                 var search = $('<div>');
                 var p = $('<p>').text("Rating: " + response.data[i].rating);
                 var funimage = $('<img>');
                 funimage.attr('src', response.data[i].images.fixed_height.url);
                 search.append(funimage);
                 search.append(p);
                 $('#giphys').append(search);
            }

        })
    }) 

//implement search function to add buttons into the search array
$('#submit').on('click', function(event) {
    event.preventDefault()
    var formSubmit = $('#search-info').val();
    searchGiphy.push(formSubmit);
    createButtons(searchGiphy, "btnSearch", "#button");
    $('search-info').text.empty()

})
//Have giphy on screen still image, and when clicked it will animate

//