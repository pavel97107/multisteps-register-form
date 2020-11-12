import React from "react";
import "./style.css";
export const Input = React.memo(
  ({ type, id, value, label, sex, error, name, onChange }) => {
    const styles = {
      box: "input-group mb-b",
      input: `input-group__input ${error && "error-border"}`,
      labelVar: "input-group__label",
      span: "input-group__placeholder",
    };

    if (typeof type === "string" && type === "radio") {
      styles.box = "input-group mb-s";
      styles.input = "input-group__input-radio";
      styles.labelVar = "input-group__label-radio";
      styles.span = "input-group__placeholder-radio";
    }

    return (
      <div className={styles.box}>
        <label className={styles.labelVar} htmlFor={id}>
          <input
            className={styles.input}
            id={id}
            type={type}
            name={name}
            checked={sex === value}
            onChange={onChange}
            required
            value={value}
          />
          <span className={styles.span}>{label}</span>
        </label>
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
);
