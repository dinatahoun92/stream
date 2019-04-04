import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
      >
        <Field name="title" component={this.renderInput} label="enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="enter descriotion"
        />
        <button type="submit" className="ui button primary">
          submit
        </button>
      </form>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "you must enter a title";
  }
  if (!formValues.description) {
    errors.description = "you must enter a description";
  }
  return errors;
};
export default reduxForm({
  form: "StreamForm",
  validate
})(StreamForm);
