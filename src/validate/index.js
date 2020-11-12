export default function ({ data, step }) {
  const errors = {};

  if (step == 0) {
    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.length < 3) {
      errors.name = "Min symbols is 3";
    }

    if (!data.surname.trim()) {
      errors.surname = "Surname is required";
    } else if (data.surname.length < 5) {
      errors.surname = "Min symbols is 5";
    }
  } else if (step == 1) {
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!data.email.includes("@")) {
      errors.email = "Symbol @ is required";
    }

    if (!data.tel.trim()) {
      errors.tel = "Tel is required";
    } else if (!data.tel.includes("+")) {
      errors.tel = "Symbol (+) is required";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 5) {
      errors.password = "Min symbols is 5";
    }
  }

  return errors;
}
