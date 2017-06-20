import { Component } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const renderPriceCard = (title, price, features, soon) => (
  <div className="card text-center">
    <div className="card-block">
      {soon && <div className="ribbon"><span>COMING SOON</span></div>}
      <h2 className="card-title">{title}</h2>
      <p>Vanaf</p>
      <h3 className="price-euro">€ {price}</h3>
      <p className="card-text">per maand, jaarlijks gefactureerd</p>
      <div className="divider" />
      {features.map((feature, index) => (
        <p className="card-text" key={index}>{feature}</p>
      ))}
    </div>
  </div>
);

const expressFeatures = [
  'Volledige toegang slim meldpunt',
  'Ongelimiteerd aantal meldingen',
  'Ongelimiteerd aantal gebruikers',
  'SSL Encryptie',
  'Automatische backups (dagelijks)',
];

const plusFeatures = expressFeatures.concat([
  'Opvolging meldingen huurders',
  'Opvolging meldingen beheerder',
]);

const proFeatures = plusFeatures.concat([
  'Platform voor leveranciers'
]);

export class Pricing extends Component {

  render() {
    return (
      <Layout>
        <div className="container pricing page text-center">
          <h1>Prijzen op maat</h1>
          <div className="row">
            <div className="col-md-4">
              {renderPriceCard('Express', '35', expressFeatures)}
            </div>
            <div className="col-md-4">
              {renderPriceCard('Plus', '55', plusFeatures)}
            </div>
            <div className="col-md-4">
              {renderPriceCard('Pro', '70', proFeatures, true)}
            </div>
          </div>
          <Link href="/probeer"><a className="btn btn-success btn-lg mb-2 mr-2 ml-2">Probeer nu 2 weken gratis</a></Link>
        </div>
      </Layout>
    )
  }
}

export default Pricing;
