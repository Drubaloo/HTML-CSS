let time = 50
const timeDisplay = document.getElementById("timer")

console.log(timeDisplay)
fetch("https://api.openweathermap.org/data/2.5/forecast?q=sacramento&units=imperial&appid=9960537bc504b12a81ff658aa9dd27bd")
    .then((res) => res.json())
    .then((data) => {
        document.querySelector("#temp").innerHTML = data.list[0].main.temp + "F";
        document.querySelector("#high").innerHTML = data.list[0].main.temp_max + "F";
        document.querySelector("#low").innerHTML = data.list[0].main.temp_min + "F";

        document.querySelector("#weatherIcon").src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`


    });


    fetch("https://icanhazdadjoke.com/", {
        "headers": {
            "Accept": "application/json",
            "User-Agent": "homepage"
        }
    })
    .then((res) => res.json())  
    .then(data => {
        document.querySelector("#joke").innerHTML = data.joke;
    })
    .catch(err => {
        console.error(err);
    });


document.getElementById("workButton").addEventListener("click", (e) => { 
    e.preventDefault()

    window.open("https://workforcenow.adp.com/theme/index.html");
    window.open("https://docs.google.com/document/d/13Na2W6OdhcLtgn4D4CEIZSgcrN3KbU9fyQssKORnaM4/edit");
    window.open("https://docs.google.com/spreadsheets/d/1ULABLMqz8FBEbZKtTZCDIIG1bYdg82nYmoQ_relpDRg/edit#gid=0");
}) 

document.getElementById("timerStart").addEventListener("click", () => {
    setInterval( () => {
        time = time -= 1
        timeDisplay.innerHTML = time
        if(time == 0){

        }
    }, 60000)
})