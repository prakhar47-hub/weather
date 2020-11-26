window.addEventListener("load", function () {
    let longi;
    let lati;
    let date = new Date();
    let num = document.querySelector('.num');
    let time = document.querySelector('.time');
    let icon = document.querySelector('.icon');
    let numday = date.getDate();
    let info = document.querySelector('.info');
    let weekday = new Array(7);

    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    let month = new Array(12);

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    time.textContent = weekday[date.getDay()] + ' ' + numday + ' | ' + month[date.getMonth()];
    


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            longi = position.coords.longitude;
            lati = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"

            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=8496abffee94f9de0fecbb43036e21dc`
            // 8496abffee94f9de0fecbb43036e21dc

            console.log(api);
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temp = data.main.temp;

                    const temperature = temp - 273.15;

                    num.textContent = temperature;

                    console.log(temperature);

                    let image = data.weather[0].icon;

                    icon.src = `http://openweathermap.org/img/wn/${image}@2x.png`;

                    let weatherdes = data.weather[0].description;

                    info.textContent = weatherdes.toUpperCase();



                    

                });
        });

    }
});