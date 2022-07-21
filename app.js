function getRandomNumber() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.random());
      }, 500);
    });
  }

  async function printRandomNumber() {
    const randomNumber = await getRandomNumber();
    console.log(randomNumber);
  }
  printRandomNumber();

  async function fetchWeather(city) {
    const response = await fetch(`https://geocode.xyz/${city}?json=1`);
    const data = await response.json();
    console.log(data["longt"], data["latt"]);
  }
  fetchWeather('San Francisco');
