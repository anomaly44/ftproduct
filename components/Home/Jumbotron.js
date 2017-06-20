import Link from 'next/link'

export default () => (
  <div>
    <div className="cover text-center">
      <div className="cover-container pb-5">
        <div className="container cover-inner">
          <h1 className="jumbotron-heading"><em>Slimmer</em> omgaan met reparaties</h1>
          <p className="lead">Cloud software voor de moderne rentmeester, syndicus en vastgoedbeheerder.</p>
          <p>
            <Link href="/probeer"><a className="btn btn-success btn-lg mb-2 mr-2 ml-2">Probeer FixTrack gratis</a></Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);