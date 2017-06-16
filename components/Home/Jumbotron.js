export default () => (
  <div>
    <div className="cover text-center">
      <div className="cover-container pb-5">
        <div className="container cover-inner">
          <h1 className="jumbotron-heading"><em>Slimmer</em> omgaan met <strong>reparaties</strong></h1>
          <p className="lead">Cloud software voor rentmeesters, verhuurders en vastgoedbeheerders.</p>
          <p>
            <a href="#" className="btn btn-success btn-lg mb-2 mr-2 ml-2">Probeer gratis</a>
            <a href="#" className="btn btn-outline-success btn-lg mb-2 ml-2 ml-2">Boek een demo</a>
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
.cover {
      background: url(/static/images/city.jpg) center;
      background-size: cover;
      min-height: 25rem;
      height: auto;
      border-radius: 0;
      width: 100%;
      color: #fff;
      padding-top: 1rem;
 }
.cover-container {
  display: table;
  height: 100%;
  min-height: 30rem;
  margin: 0 auto;
}
.cover-inner {
  display: table-cell;
  vertical-align: middle;
}
 h1 {
    font-weight: 200;
 }
 p.lead {
     margin: 2rem auto;
     color: #fff;
 }
 .justify-center {
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .custom-button {
  font-size: .75rem;
  font-weight: 700;
  border-radius: .3rem;
}
.btn-outline-white, .btn-outline-white:visited {
  background: none;
  color: #fff;
  border-color: #fff;
}
.btn-outline-white:hover, .btn-outline-white:focus, .btn-outline-white:active {
  color: #46484a;
  background: #fff;
}
        `}
    </style>
  </div>

);