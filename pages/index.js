import Layout from '../components/Layout'
import Jumbotron from '../components/Home/Jumbotron'
import Features from '../components/Features'

export default () => (
  <Layout>
    <p>api url: {API_URL}</p>
    <Jumbotron />
    <Features />
  </Layout>
)