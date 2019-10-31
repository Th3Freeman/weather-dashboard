var searched
var apiKey = "6e27f67d5b1eed622cee73e1d80b3160";


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
        $("#searchBar").val().trim() + "&units=imperial&"+"appid=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            console.log(response)
            var weatherDiv = $("#weatherShow").append(
                $("<div class='forecast'>")
                );

            var Temperature = response.main.temp;

            console.log(Temperature);

            var p1 = $("<p>").text("Temperature: " + Temperature);

            weatherDiv.append(p1);

            $("#weatherShow").prepend(weatherDiv);
        });

});



