import React from "react";
import { Input } from "../components/input";
import { Location } from "../components/location";

export default function ({
  emailValue,
  passwordValue,
  telValue,
  handlerChangeInput,
  cityValue,
  countryValue,
  handlerClickOnCity,
  handlerClickOnCountry,
  errors: { email, tel, password },
}) {
  return (
    <>
      <Input
        value={emailValue}
        name="email"
        type="email"
        id="email"
        onChange={handlerChangeInput}
        label="Email"
        error={email}
      />
      <Input
        value={passwordValue}
        name="password"
        type="password"
        id="password"
        onChange={handlerChangeInput}
        label="Password"
        error={password}
      />
      <Input
        value={telValue}
        name="tel"
        type="tel"
        id="tel"
        onChange={handlerChangeInput}
        label="Tel"
        error={tel}
      />
      <Location
        cityValue={cityValue}
        country={countryValue}
        handlerClickCity={handlerClickOnCity}
        handlerClickCountry={handlerClickOnCountry}
      />
    </>
  );
}
