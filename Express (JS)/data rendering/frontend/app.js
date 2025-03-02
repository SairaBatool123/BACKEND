// window is use for globally accessible while we use anonymous function as well and store in getWeather

window.getWeather = function () {
  let cityName = document.getElementById("cityName").value;
  fetch(`http://localhost:3000/weather/${cityName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`City not found or server error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const { city, tempInC, high, humidity, low } = data;
      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `<fieldset>
      <legend><i>Weather Updates</i></legend>
       <h2>${city}</h2>
       <p>Temperature: ${tempInC}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>High: ${high}°C</p>
                <p>Low: ${low}°C</p>
    </fieldset>
     `;
    })
    .catch((error) => {
      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
      <fieldset>
        <legend><i>Weather Updates</i></legend>
        <h2>Error</h2>
        <p>${error.message}</p>
      </fieldset>`;
    });
};
