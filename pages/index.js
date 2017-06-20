import Layout from '../components/Layout'
import Jumbotron from '../components/Home/Jumbotron'
import Features from '../components/Features'
import PhoneDisplay from '../components/Home/PhoneDisplay'

export default () => (
  <Layout
    title="Reparaties en problemen opvolgen in de cloud"
    meta={[
      { name: 'description', content: 'FixTrack, de enige software die het beheer van reparaties en problemen ' +
      'echt gemakkelijk maakt voor de moderne rentmeester en syndicus.' },
    ]}
  >
    <Jumbotron />
    <Features />
    <PhoneDisplay />
  </Layout>
)