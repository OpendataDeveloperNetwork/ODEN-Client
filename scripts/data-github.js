const countryList = document.getElementById("country-list");
const countryTable = document.getElementById("country-table");

function addTableHeader() {
  const thead = document.createElement("thead");
  const countryHeader = document.createElement("th");
  countryHeader.innerText = "Country";
  countryHeader.classList.add("table-header");
  const regionHeader = document.createElement("th");
  regionHeader.innerText = "Region";
  regionHeader.classList.add("table-header");
  const cityHeader = document.createElement("th");
  cityHeader.innerText = "City";
  cityHeader.classList.add("table-header");
  thead.appendChild(countryHeader);
  thead.appendChild(regionHeader);
  thead.appendChild(cityHeader);
  countryTable.appendChild(thead);
}

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

    // create table and table headers
    addTableHeader();

    // create table body
    const tbody = document.createElement("tbody");

    let currentCountry = null;
    let currentRegion = null;
    let currentCountryCell = null;
    let currentRegionCell = null;

    data.forEach(entry => {
      // create a new row for country if country is different, otherwise increment rowspan
      const row = document.createElement("tr");
      if (entry.country !== currentCountry) {
        currentCountry = entry.country;

        const countryCell = document.createElement("td");
        countryCell.innerText = currentCountry;
        currentCountryCell = countryCell;
        row.appendChild(countryCell);
      } else {
        ++currentCountryCell.rowSpan;
      }

      // create a new row for region if region is different, otherwise increment rowspan
      if (entry.region !== currentRegion) {
        currentRegion = entry.region;

        const regionCell = document.createElement("td");
        regionCell.innerText = currentRegion;
        currentRegionCell = regionCell;
        row.appendChild(regionCell);
      } else {
        ++currentRegionCell.rowSpan;
      }

      // create a new row for city
      const cityCell = document.createElement("td");
      const link = document.createElement("a");
      link.href = entry.url;
      link.innerText = entry.city;
      cityCell.appendChild(link);
      row.appendChild(cityCell);
      tbody.appendChild(row);
    });

    countryTable.appendChild(tbody);
    document.body.appendChild(countryTable);
  });
