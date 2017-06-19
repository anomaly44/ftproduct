import { Component } from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import Layout from '../components/Layout'
import RegisterForm1 from '../components/register/RegisterForm1'
import RegisterForm2 from '../components/register/RegisterForm2'
import { storeStep1, submitRegistrationData } from '../components/register/reducer'
import { selectSubmitting, selectSubmitted, selectStep } from '../components/register/selectors'
import { SubmissionError } from 'redux-form'

class Register extends Component {

  handleSubmitRegistration = (data) => {
    return new Promise((resolve, reject) => {
      this.props.submitRegistrationData(data, resolve, reject);
    }).catch(err => {
      throw new SubmissionError(err)
    });
  };

  render() {
    const {step, submitted, submitting, storeStep1 } = this.props;

    return (
      <Layout>
        <div className="container page">
          <h1>Aan de slag met FixTrack</h1>
          {submitted ? (<div className="alert alert-success" role="alert">
              <strong>Bedankt voor uw registratie!</strong> U ontvangt zodadelijk een e-mail ter bevestiging.
            </div>) :
            <div>
            {(step === 1) ? <RegisterForm1
                onSubmit={storeStep1}
              /> :
              <RegisterForm2
                onSubmit={this.handleSubmitRegistration}
                initialValues={{ version: "2", type: "0" }}
                submitting={submitting}
              />}
          </div>}

        </div>
      </Layout>
    );
  }
}

Register.propTypes = {
  submitted: PropTypes.bool,
  submitting: PropTypes.bool,
  step: PropTypes.number,
  storeStep1: PropTypes.func,
  submitRegistrationData: PropTypes.func,
}

const mapStateToProps = state => ({
  step: selectStep(state),
  submitted: selectSubmitted(state),
  submitting: selectSubmitting(state),
});

const mapDispatchToProps = {
  submitRegistrationData,
  storeStep1
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Register)