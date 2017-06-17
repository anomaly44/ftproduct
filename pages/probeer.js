import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import Layout from '../components/Layout'

class Register extends Component {

  render() {
    return (
      <Layout>
        <div className="container page">
          <h1>Aan de slag met FixTrack</h1>
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Register)