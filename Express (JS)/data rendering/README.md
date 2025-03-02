## WORK_FLOW
### STEP # 1 : 
1. backend (folder)
2. Create a server
3. Add another route /weather/:cityName,
When a request is made to /weather/London, the value London is captured and assigned to req.params.cityName; in get function create a variable to store a obj of obj
```
app.get("/weather/:cityName", (req, res) => {
  let weatherData = {
    karachi: {
      city: "karachi",
      tempInC: 26,
      humidity: 56,
      high: 32,
      low: 23
    },
    lahore: {
      city: "lahore",
      tempInC: 28,
      humidity: 56,
      high: 32,
      low: 23
    }
  }
  })

```

4. Whatever user writes in a route that converted into lowercase

```
let userInputCity = req.params.cityName.toLowerCase();
```


5. "This is called bracket notation in JavaScript, which allows you to dynamically access object properties using a variable."

weatherData[userInputCity] is used to access a value in the weatherData object using a dynamic key (userInputCity); Use an if statement to check if a value is undefined (or falsy).

The if statement checks weatherDataToSend has a truthy value.
In JavaScript, undefined, null, 0, false, NaN, and an empty string ("") are considered falsy.
Any other value is considered truthy.
```
let weatherDataToSend = weatherData[userInputCity];
  if (weatherDataToSend) {
    res.send(weatherDataToSend);
  } else {
    res.status(404).send(`Data for ${req.params.cityName} not found`);
  }
```

### STEP # 2 : 
1. frontend (folder)
2. Create a file of index.html Design a ui, however you want
3. See the code; I have tried to explain all of the code in those particular files
