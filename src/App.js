import React from 'react'
import { PersonalData, ConfidentialData, AboutMySelf, Finish } from "./pages";
import Steps from "./step";
import "./styles.css";
import validate from "./validate";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      pages: [
        { title: "Personal Data", isActive: true, isCompleted: false },
        { title: "Confidential data", isActive: false, isCompleted: false },
        { title: "About myself", isActive: false, isCompleted: false },
        { title: "Finish", isActive: false, isCompleted: false },
      ],
      data: {
        name: "",
        surname: "",
        email: "",
        password: "",
        sex: "man",
        tel: "",
        country: "",
        city: "",
        skills: [],
      },
      errors: {
        name: "",
        surname: "",
        email: "",
        password: "",
        tel: "",
      },
    };

    this.handlerChangeInput = this.handlerChangeInput.bind(this);
    this.handlerClickOnCountry = this.handlerClickOnCountry.bind(this);
    this.handlerClickOnCity = this.handlerClickOnCity.bind(this);
    this.handlerClickSkills = this.handlerClickSkills.bind(this);
  }

  handlerChangeInput({ target }) {
    this.setState((state) => ({
      errors: { ...state.errors, [target.name]: "" },
      data: { ...state.data, [target.name]: target.value },
    }));
  }

  handlerClickOnCountry(value) {
    this.setState((state) => ({ data: { ...state.data, country: value } }));
    this.setState((state) => ({ data: { ...state.data, city: "" } }));
  }

  handlerClickOnCity(value) {
    this.setState((state) => ({ data: { ...state.data, city: value } }));
  }

  handlerClickSkills(item) {
    if (item instanceof Array) {
      return this.setState((state) => ({
        data: { ...state.data, skills: [...item] },
      }));
    }
    this.setState((state) => ({
      data: { ...state.data, skills: [...state.data.skills, item] },
    }));
  }

  prevStep = () => {
    if (this.state.step <= 0) return;
    this.setState({ step: this.state.step - 1 }, () => {
      const copyPages = [...this.state.pages];
      copyPages[this.state.step].isActive = true;
      copyPages[this.state.step].isCompleted = false;
      copyPages[this.state.step + 1].isActive = false;

      this.setState({ pages: copyPages });
    });
  };

  checkingInputDataAndNextStep = () => {
    const { step, data } = this.state;
    const errors = validate({ data, step });

    if (Object.keys(errors).length !== 0) {
      this.setState(() => ({ errors }));
    } else {
      this.setState({ errors: {} });
      this.nextStep();
    }
  };

  nextStep = () => {
    if (this.state.step >= this.state.pages.length - 1) return;
    this.setState({ step: this.state.step + 1 }, () => {
      console.log(this.state.step);
      const copyPages = [...this.state.pages];
      copyPages[this.state.step - 1].isActive = false;
      copyPages[this.state.step - 1].isCompleted = true;
      copyPages[this.state.step].isActive = true;

      this.setState({ pages: copyPages });
    });
  };

  render() {
    const { name, surname, email, tel, password } = this.state.errors;
    return (
      <div className="App">
        <Steps data={this.state.pages} />
        <h1>{this.state.pages[this.state.step].title}</h1>
        {this.state.pages[0].isActive && (
          <PersonalData
            errors={{ name, surname }}
            sex={this.state.data.sex}
            nameValue={this.state.data.name}
            sNameValue={this.state.data.surname}
            handlerChangeInput={this.handlerChangeInput}
          />
        )}
        {this.state.pages[1].isActive && (
          <ConfidentialData
            errors={{ email, tel, password }}
            emailValue={this.state.data.email}
            passwordValue={this.state.data.password}
            telValue={this.state.data.tel}
            cityValue={this.state.data.city}
            countryValue={this.state.data.country}
            handlerChangeInput={this.handlerChangeInput}
            handlerClickOnCity={this.handlerClickOnCity}
            handlerClickOnCountry={this.handlerClickOnCountry}
          />
        )}
        {this.state.pages[2].isActive && (
          <AboutMySelf
            selectedItems={this.state.data.skills}
            setSelectedItems={this.handlerClickSkills}
          />
        )}
        {this.state.pages[3].isActive && <Finish />}
        <div className="navigate">
          {!this.state.pages[0].isActive && (
            <button className="navigate__prev" onClick={this.prevStep}>
              prev
            </button>
          )}
          {!this.state.pages[3].isActive && (
            <button
              className="navigate__next"
              onClick={this.checkingInputDataAndNextStep}
            >
              next
            </button>
          )}
        </div>
      </div>
    );
  }
}
