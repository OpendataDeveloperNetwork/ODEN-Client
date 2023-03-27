const countryList = document.getElementById("country-list");
const countryTable = document.getElementById("country-table");

// download data from json file
fetch("https://raw.githubusercontent.com/tofubeer/test/main/data.json")
  .then(response => response.json())
  .then(data => {
    // sort data by country, region, and city
    data.sort((a, b) => {
      if (a.country !== b.country) {
        return a.country.localeCompare(b.country);
      } else if (a.region !== b.region) {
        return a.region.localeCompare(b.region);
      } else {
        return a.city.localeCompare(b.city);
      }
    });
    let currentCountry = null;
    let currentRegion = null;
    let regionList;
    let cityList;
    let cityCount = 0;

    const countryTableHeader = document.createElement("tr");
    const countryTableHeaderCountry = document.createElement("th");
    const countryTableHeaderRegion = document.createElement("th");
    const countryTableHeaderCity = document.createElement("th");
    countryTableHeaderCountry.innerText = "Country";
    countryTableHeaderRegion.innerText = "Region";
    countryTableHeaderCity.innerText = "City";
    countryTableHeaderCountry.classList.add("table-header");
    countryTableHeaderRegion.classList.add("table-header");
    countryTableHeaderCity.classList.add("table-header");
    countryTableHeader.appendChild(countryTableHeaderCountry);
    countryTableHeader.appendChild(countryTableHeaderRegion);
    countryTableHeader.appendChild(countryTableHeaderCity);

    data.forEach(entry => {
      // create a new list for the country if it's different from the previous entry
      if (entry.country !== currentCountry) {
        currentCountry = entry.country;
        const countryItem = document.createElement("li");
        countryItem.innerText = currentCountry;
        regionList = document.createElement("ul");
        countryItem.appendChild(regionList);
        countryList.appendChild(countryItem);
        currentRegion = null;
      }

      // create a new list for the region if it's different from the previous entry
      if (entry.region !== currentRegion) {
        currentRegion = entry.region;
        const regionItem = document.createElement("li");
        regionItem.innerText = currentRegion;
        cityList = document.createElement("ul");
        regionItem.appendChild(cityList);
        regionList.appendChild(regionItem);
        cityCount = 0;
      }
      if (cityCount < 3) {
        // create a new list item for the city
        const cityItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = entry.url;
        link.innerText = entry.city;
        cityItem.appendChild(link);
        cityList.appendChild(cityItem);
        cityCount++;
      }
    });
  });

