var searched
var apiKey = "6e27f67d5b1eed622cee73e1d80b3160";

$("#searchBar").val().trim(); + "&units=imperial&appid" + apiKey;


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


$("#searchButton").on("click", function (event) {
    event.preventDefault();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        $("#searchBar").val().trim() + "&units=imperial&appid=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            console.log(queryURL);

            console.log(response);
        });
});



