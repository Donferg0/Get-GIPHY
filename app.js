
//create an array for giphy searches
var searchGiphy = ["dog", "cat", "rabbit", "hamster"];

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
    createButtons(searchGiphy, 'btnSearch', "#button");
})

//connect to giphy api to call back giphys being searched. Want info return off the gif and the rating

//implement search function to add buttons into the search array

//Have giphy on screen still image, and when clicked it will animate

//