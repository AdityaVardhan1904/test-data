import React, { useState, useEffect } from "react";
import "./App.css";
import { InputLabel, Select, FormControl, MenuItem } from "@material-ui/core";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountries();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="ui container">
        <div className="drop_down">
          {/* <h4>Select Country :</h4> */}
          <FormControl variant="outlined">
            <InputLabel>Country</InputLabel>
            <Select value={"country"} label="Country">
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => {
                return (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default App;
