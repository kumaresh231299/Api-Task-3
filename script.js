document.addEventListener('DOMContentLoaded', function () {
    //Here Dom we are accessing the html elements  
    const location = document.querySelector(".locationFinding");
    const button = document.querySelector(".btn");
    const city = document.querySelector(".city");
    const state = document.querySelector(".state");
    const country = document.querySelector(".country");
    const region = document.querySelector(".region");
    const lat = document.querySelector(".lat");
    const long = document.querySelector(".long");
    const timeZone = document.querySelector(".timeZone");


    //Click the button show the city Results
    button.addEventListener("click", () => {
        // Define your API endpoint URL 
        const apiUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

        // Define your query parameters as an object
        const queryParams = {
            apikey: 'CaAITcWZMtnmvrtMR2wZqb9PLRmmrPDU',
            q: location.value
        };

        const queryString = new URLSearchParams(queryParams).toString();
        const urlWithParams = `${apiUrl}?${queryString}`;
        fetch(urlWithParams)
            .then(response => {
                return response.json()
            }).then(data => {
                //Dom Api result show in display
                city.textContent = "City: " + data[0].LocalizedName;
                state.textContent = "State: " + data[0].AdministrativeArea.LocalizedName;
                country.textContent = "Country: " + data[0].Country.LocalizedName;
                region.textContent = "Region: " + data[0].Region.LocalizedName;
                lat.textContent = "Latitude: " + data[0].GeoPosition.Latitude;
                long.textContent = "Longitude: " + data[0].GeoPosition.Longitude;
                timeZone.textContent = "Time Zone: " + data[0].TimeZone.Name;
            })
            .catch(error => {
                console.log(error)
            });
            handleSubmit();
    });

    function handleSubmit() {
        document.querySelector('.cityContainer').style.display = "block";
    }

});