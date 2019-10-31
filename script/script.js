var apiKey = "6e27f67d5b1eed622cee73e1d80b3160";
// var searched = $("#searchBar").val().trim()
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
//     $("#searchBar").val().trim() + "&units=imperial&appid" + apiKey;

$("#searchButton").on("click", function (event) {
    event.preventDefault();
    var weather = $("#searchBar").val().trim()
    console.log(weather);
});
function weatherSearch() {
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
         .then(function (response) {

             console.log(queryURL);

            console.log(response);
        });
        console.log(searched)
};


