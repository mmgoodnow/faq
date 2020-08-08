import React from "react";
import "./App.css";

const QUESTIONS = [
  {
    question: "what is life1",
    answer: "stuff1",
  },
  {
    question: "what is life2",
    answer: "stuff2",
  },
  {
    question: "what is life3",
    answer: "stuff3",
  },
];

class FaqItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <React.Fragment>
        <div className="whatever" onClick={this.handleClick}>
          {this.props.question}
          <img
            alt=""
            width="10px"
            className={`chevron ${this.state.open ? "down" : "right"}`}
            src="https://image.freepik.com/free-icon/chevron-left_318-10769.jpg"
          />
        </div>
        {this.state.open && <div>{this.props.answer}</div>}
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {QUESTIONS.map((q) => (
          <FaqItem question={q.question} answer={q.answer} />
        ))}
      </div>
    );
  }
}

export default App;
