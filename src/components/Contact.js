import React from "react";
import { connect } from "react-redux"
import { postContact } from "./store/actions/allActions"
import Submited from "./Submitted";

class Contact extends React.Component {
  state = {
    name: null,
    email: null,
    text: null,
    isSubmited: false
  };

  handleChange = e => {
    if (e.target.id === "name") {
      this.setState({
        name: e.target.value
      });
    } else if (e.target.id === "email") {
      this.setState({
        email: e.target.value
      });
    } else if (e.target.id === "textarea") {
      this.setState({
        text: e.target.value
      });
    } else return null;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isSubmited: true,
    });
    this.props.postContact(this.state.name,this.state.email,this.state.text)
  };

  render() {
    if (this.state.isSubmited === false) {
      return (
        <div className="contact-container">
          <form onSubmit={this.handleSubmit}>
            <h1>Stuff To Fill Up</h1>
            <div className="input-field">
              <input
                id="name"
                type="text"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <input
                id="email"
                type="text"
                placeholder="E-mail"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <textarea
                id="textarea"
                type="text"
                className="textarea"
                placeholder="What do you want to say?"
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <div className="button">
                <button type="submit" className="btn teal">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else if (this.state.isSubmited === true) {
      return <Submited />;
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postContact: (name, email, text) => {
      dispatch(postContact(name, email, text))
    }
  }
}


export default connect(null,mapDispatchToProps)(Contact);
