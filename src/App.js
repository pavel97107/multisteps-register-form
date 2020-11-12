import "./styles.css";

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
  }
}
