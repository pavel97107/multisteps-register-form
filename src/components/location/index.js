import React from "react";
import { countr1y, city } from "../../data";
import { Select } from "./select";
import "./style.css";

export const Location = React.memo(
  ({ handlerClickCity, handlerClickCountry, country, cityValue }) => {
    const filterCityByCountryValue = (value) => {
      if (!value) {
        return [];
      }

      let newArr = [];
      for (let key in city) {
        if (value === key) {
          newArr = [...city[key]];
        }
      }
      return newArr;
    };

    const newFliterArrayCities = filterCityByCountryValue(country);
    return (
      <div className="location">
        <Select
          onClick={handlerClickCountry}
          data={countr1y}
          defaultValue={"Выберите страну"}
        />
        <Select
          cityValue={cityValue}
          onClick={handlerClickCity}
          data={newFliterArrayCities}
          defaultValue={"Выберите город"}
        />
      </div>
    );
  }
);
