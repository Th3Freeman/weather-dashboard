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
        $("#searchBar").val().trim() + "&units=imperial&" + "appid=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            console.log(response)
            var weatherDiv = $("#weatherShow").append(
                $("<div class='forecast'>")
            );

            var cityName = response.name;

            var humidity = response.main.humidity;

            var date = Date(Date.now());

            var Temperature = response.main.temp;

            var windSpeed = response.wind.speed;

            var p1 = $("<p>").text(cityName);

            var p2 = $("<p>").text("Temperature: " + Temperature);

            var p3 = $("<p>").text("Humidity:" + humidity);

            var p4 = $("<p>").text("Windspeed:" + windSpeed);

            var p5 = $("<p>").text(date);
            
            weatherDiv.append(p1);
            weatherDiv.append(p2);
            weatherDiv.append(p3);
            weatherDiv.append(p4);
            weatherDiv.append(p5);



            $("#weatherShow").prepend(weatherDiv);
        });

});



