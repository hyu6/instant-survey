// SurveyForm shows a form for users to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          type="text"
          component={SurveyField}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          className="survey-form"
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="cancel-link btn-flat white left">
            Cancel
          </Link>
          <button
            className="next-button btn-flat white-text teal right"
            type="submit"
          >
            Next
            <i className="material-icons right">navigate_next</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ label, name }) => {
    if (!values[name]) {
      errors[name] = `${label} is required`;
    }
  });

  return errors;
}

export default reduxForm({ validate, form: 'surveyForm' })(SurveyForm);
