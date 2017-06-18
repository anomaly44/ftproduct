import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import Layout from '../components/Layout'
import RegisterForm1 from '../components/register/RegisterForm1'
import {submitRegistrationData} from '../components/register/reducer'

class Register extends Component {

  handleSubmitRegistration = (data) => {
    this.props.submitRegistrationData(data);
  };

  render() {
    return (
      <Layout>
        <div className="container page">
          <h1>Aan de slag met FixTrack</h1>
          <RegisterForm1 onSubmit={this.handleSubmitRegistration} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  submitRegistrationData
};

export default withRedux(initStore, null, mapDispatchToProps)(Register)