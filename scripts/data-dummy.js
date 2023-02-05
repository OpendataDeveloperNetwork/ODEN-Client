const countryList = document.getElementById("country-list");

// data from json file
const data = [
  {
    country: "USA",
    region: "Washington",
    city: "Seattle",
    url: "https://www.example.com/seattle"
  },
  {
    country: "USA",
    region: "Washington",
    city: "Tacoma",
    url: "https://www.example.com/tacoma"
  },
  {
    country: "USA",
    region: "Washington",
    city: "Spokane",
    url: "https://www.example.com/spokane"
  },
  {
    country: "USA",
    region: "California",
    city: "Los Angeles",
    url: "https://www.example.com/los-angeles"
  },
  {
    country: "USA",
    region: "California",
    city: "San Francisco",
    url: "https://www.example.com/san-francisco"
  },
  {
    country: "USA",
    region: "California",
    city: "San Diego",
    url: "https://www.example.com/san-diego"
  },
  {
    country: "USA",
    region: "New York",
    city: "New York City",
    url: "https://www.example.com/new-york-city"
  },
  {
    country: "USA",
    region: "New York",
    city: "Buffalo",
    url: "https://www.example.com/buffalo"
  },
  {
    country: "USA",
    region: "New York",
    city: "Rochester",
    url: "https://www.example.com/rochester"
  },
   {
    country: "Canada",
    region: "Ontario",
    city: "Toronto",
    url: "https://www.example.com/toronto"
    },
    {
    country: "Canada",
    region: "Ontario",
    city: "Ottawa",
    url: "https://www.example.com/ottawa"
    },
    {
    country: "Canada",
    region: "Ontario",
    city: "Hamilton",
    url: "https://www.example.com/hamilton"
    },
    {
    country: "Canada",
    region: "Quebec",
    city: "Montreal",
    url: "https://www.example.com/montreal"
    },
    {
    country: "Canada",
    region: "Quebec",
    city: "Quebec City",
    url: "https://www.example.com/quebec-city"
    },
    {
    country: "Canada",
    region: "Quebec",
    city: "Gatineau",
    url: "https://www.example.com/gatineau"
    },
    {
    country: "Canada",
    region: "British Columbia",
    city: "Vancouver",
    url: "https://www.example.com/vancouver"
    },
    {
    country: "Canada",
    region: "British Columbia",
    city: "Victoria",
    url: "https://www.example.com/victoria"
    },
    {
    country: "Canada",
    region: "British Columbia",
    city: "Kelowna",
    url: "https://www.example.com/kelowna"
    },
{
    country: "Australia",
    region: "New South Wales",
    city: "Sydney",
    url: "https://www.example.com/sydney"
    },
    {
    country: "Australia",
    region: "New South Wales",
    city: "Wollongong",
    url: "https://www.example.com/wollongong"
    },
    {
    country: "Australia",
    region: "New South Wales",
    city: "Newcastle",
    url: "https://www.example.com/newcastle"
    },
    {
    country: "Australia",
    region: "Victoria",
    city: "Melbourne",
    url: "https://www.example.com/melbourne"
    },
    {
    country: "Australia",
    region: "Victoria",
    city: "Geelong",
    url: "https://www.example.com/geelong"
    },
    {
    country: "Australia",
    region: "Victoria",
    city: "Ballarat",
    url: "https://www.example.com/ballarat"
    },
    {
    country: "Australia",
    region: "Queensland",
    city: "Brisbane",
    url: "https://www.example.com/brisbane"
    },
    {
    country: "Australia",
    region: "Queensland",
    city: "Gold Coast",
    url: "https://www.example.com/gold-coast"
    },
    {
    country: "Australia",
    region: "Queensland",
    city: "Cairns",
    url: "https://www.example.com/cairns"
    }
];

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
  }

  // create a new list item for the city
  const cityItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = entry.url;
  link.innerText = entry.city;
  cityItem.appendChild(link);
  cityList.appendChild(cityItem);
});
