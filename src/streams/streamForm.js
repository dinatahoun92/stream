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
  renderTextArea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
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
          name="youtube"
          component={this.renderInput}
          label="enter youtube link"
        />
        <Field
          name="description"
          component={this.renderTextArea}
          label="enter description"
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
  if (!formValues.youtube) {
    errors.youtube = "you must enter a youtube link";
  }
  return errors;
};
export default reduxForm({
  form: "StreamForm",
  validate
})(StreamForm);
