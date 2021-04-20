

fetch("https://api.openweathermap.org/data/2.5/forecast?q=sacramento&units=imperial&appid=9960537bc504b12a81ff658aa9dd27bd")
    .then((res) => res.json())
    .then((data) => {
        document.querySelector("#temp").innerHTML = data.list[0].main.temp + "F";

        console.log(data)

        document.querySelector("#weatherIcon").src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    })


