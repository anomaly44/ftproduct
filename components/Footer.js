export default () => (
  <footer>
    <div className="footer-1">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center text-md-left">
            <a className="logo" href="#">FixTrack</a>
          </div>
          <div className="col-md-8">
            <ul className="nav-footer mt-2 mt-md-0 ">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left mt-2 mb-3 pt-1">
            <p className="copyright">Copyright &copy; FixTrack 2017. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-right mb-4">
            <ul className="social">
              <li><a href="#" title="Facebook" className="fa fa-facebook"></a></li>
              <li><a href="#" title="Twitter" className="fa fa-twitter"></a></li>
              <li><a href="#" title="Google+" className="fa fa-google"></a></li>
              <li><a href="#" title="Dribbble" className="fa fa-dribbble"></a></li>
              <li><a href="#" title="Instagram" className="fa fa-instagram"></a></li>
              <div className="clear"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
.footer-1 {
  background: #2B2D34;
  min-height: 4rem;
  width: 100%;
  color: #fff;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
}
.logo {
  color: #fff!important;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0;
}
.logo:hover{
text-decoration: none;
}
a.navbar-brand {
    color: #fff!important;
  }
      .nav-link {
      color: #DFE1E5;
    }
    .nav-link:hover {
      color: #8CC53E;
    }
    .nav-footer {
  list-style: none;
  float: right;
}
li {
    float: left;
    margin-top: .5rem;
  }
`}
    </style>
  </footer>
);
