const btn = document.querySelector("#ip-finder"),
  container = document.querySelector(".container"),
  countryDiv = document.querySelector(".info__country"),
  regionDiv = document.querySelector(".info__region"),
  cityDiv = document.querySelector(".info__city");

function getInfo(countryDiv, regionDiv, cityDiv, country, region, city) {
  countryDiv.textContent = `Country: ${country}`;
  regionDiv.textContent = `Region: ${region}`;
  cityDiv.textContent = `City: ${city}`;
}

const sendRequest = async () => {
  try {

    const res = await fetch("https://api.ipify.org/?format=json");
    const { ip } = await res.json();
    const res2 = await fetch(`http://ip-api.com/json/${ip}`);
    const { city, country, regionName } = await res2.json();
    getInfo(countryDiv, regionDiv, cityDiv, country, regionName, city);
    
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", sendRequest);