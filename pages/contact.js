import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import Layout from '../components/Layout'
import ContactForm from '../components/contact/ContactForm'
import { submitMessage } from '../components/contact/reducer'
import { selectSubmitted } from '../components/contact/selectors'
import GoogleMaps from '../components/contact/GoogleMaps'

class Contact extends Component {

  handleSubmitMessage = (data) => {
    return new Promise((resolve, reject) => {
      this.props.submitMessage(data, resolve, reject);
    });
  };

  render() {
    const {submitted} = this.props;
    return (
      <Layout>
        <div className="container contact page">
          <h1>Contacteer ons</h1>
          <div className="row">
            <div className="col-md-8">
              <h3 style={{ marginBottom: 20}}>Stel een vraag</h3>
              { submitted ?
                (<div className="alert alert-success" role="alert">
                  <strong>Bedankt voor uw bericht.</strong> We antwoorden u zo snel mogelijk.
                </div>) :
                <ContactForm onSubmit={this.handleSubmitMessage} />}
            </div>
            <div className="col-md-4">
              <h3>Contact Info</h3>
              <h4 className="pt-4">Email</h4>
              <p><a href="mailto:info@fixtrack.be">info@fixtrack.be</a></p>
              <h4 className="pt-2">Telefoon</h4>
              <p>+32 474 906 221</p>
              <h4 className="pt-2">Adres</h4>
              <p>Pietelbeekstraat 19 bus 1.2<br />
                3500 Hasselt</p>
              <ul className="social">
                <li><a href="https://www.facebook.com/fixtrack" title="Facebook" className="fa fa-facebook"/></li>
                <li><a href="https://twitter.com/FixTrack" title="Twitter" className="fa fa-twitter"/></li>
                <li><a href="https://www.linkedin.com/in/rob-indesteege/" title="LinkedIn" className="fa fa-linkedin"/></li>
                <div className="clear"></div>
              </ul>
            </div>
          </div>
        </div>
        <GoogleMaps />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  submitted: selectSubmitted(state),
});

const mapDispatchToProps = {
  submitMessage
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Contact)
