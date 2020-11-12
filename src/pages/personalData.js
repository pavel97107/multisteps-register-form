import React from "react";
import {Input} from '../components/input'


export default function ({nameValue, sNameValue, handlerChangeInput,sex, errors: {name, surname}}) {
  return (
    <>
      <Input
        value={nameValue}
        name="name"
        type="text"
        id="name"
        onChange={handlerChangeInput}
        label="Name"
        error={name}
      />
      <Input
        value={sNameValue}
        name="surname"
        type="text"
        id="surname"
        onChange={handlerChangeInput}
        label="Surname"
        error={surname}
      />
      <div className="sex">
        <Input
          value={"man"}
          label={"man"}
          sex={sex}
          name="sex"
          type="radio"
          id="man"
          onChange={handlerChangeInput}
        />
        <Input
          value={"female"}
          label={"female"}
          sex={sex}
          name="sex"
          type="radio"
          id="female"
          onChange={handlerChangeInput}
        />
      </div>
    </>
  );
}
