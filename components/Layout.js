import { Component } from 'react';
import Head from 'next/head'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import Link from 'next/link'
import Footer from '../components/Footer'
import { initGA, logPageView } from '../utils/analytics'


import stylesheet from 'styles/index.scss'

const NavLinkHelper = (props) => {
  return (<Link href={props.to} prefetch><a className={props.className}>{props.children}</a></Link> );
};

const NavLinkHelperButton = (props) => {
  return (<Link href={props.to} prefetch><a className="btn btn-outline-success">{props.children}</a></Link> );
};

const renderNavItem = (item) => (
  <NavItem key={item.page}>
    <NavLink tag={NavLinkHelper} to={item.page}>{item.name}</NavLink>
  </NavItem>
);

const navMenuItems = [
  {
    name: 'Home',
    page: '/',
  },
  {
    name: 'Prijzen',
    page: 'prijzen'
  },
  {
    name: 'Contact',
    page: 'contact'
  }
];


class Layout extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { children } = this.props;
    return (<div className="page-container">
        <Head>
          <title>FixTrack</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
                integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
                crossOrigin="anonymous"/>
          <script src="https://use.fontawesome.com/33db5f5655.js"/>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
        </Head>
        <Navbar className="navbar-custom" inverse toggleable color="inverse">
          <NavbarToggler right onClick={this.toggle}/>
          <div className="container">
            <NavbarBrand href="/">FixTrack</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {navMenuItems.map(renderNavItem)}
                <NavItem>
                  <NavLink tag={NavLinkHelperButton} to="/probeer">Probeer nu</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {children}
        <Footer navMenuItems={navMenuItems}/>
      </div>
    );
  }
}


export default Layout