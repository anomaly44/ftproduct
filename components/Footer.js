export default () => (
  <footer className="footer-1">
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
    <div className="container-fluid">
      <div className="divider"></div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-left mt-2 mb-3 pt-1">
          <p className="copyright">Copyright &copy; FixTrack 2017. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-center text-md-right mb-4">
          <ul className="social">
            <li><a href="https://www.facebook.com/fixtrack" title="Facebook" className="fa fa-facebook"/></li>
            <li><a href="https://twitter.com/FixTrack" title="Twitter" className="fa fa-twitter"/></li>
            <li><a href="https://www.linkedin.com/in/rob-indesteege/" title="LinkedIn" className="fa fa-linkedin"/></li>
            {/* <li><a href="#" title="Instagram" className="fa fa-instagram"/></li>*/}
            <div className="clear"></div>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
