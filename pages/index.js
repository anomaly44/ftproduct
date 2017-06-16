import { Component } from 'react';
import Head from 'next/head'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap'
import Link from 'next/link'
import Router from 'next/router'
import Jumbotron from '../components/Home/Jumbotron'
import Footer from '../components/Footer'
import Features from '../components/Features'

import stylesheet from 'styles/index.scss'

const NavLinkHelper = (props) => {
  return (<Link href={props.to}><a className={props.className}>{props.children}</a></Link> );
};

Router.onRouteChangeStart = (url) => {
  console.log(url);
};

class Home extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    function handleHashChange() {
      console.log('hash changed');
    }
    console.log('mounted');
    window.addEventListener('hashchange', handleHashChange, false);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
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
        <Navbar inverse toggleable color="inverse">
          <NavbarToggler right onClick={this.toggle}/>
          <div className="container">
            <NavbarBrand href="/">FixTrack</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={NavLinkHelper} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={NavLinkHelper} to="/#features">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={NavLinkHelper} to="/#footer">Contact</NavLink>
                </NavItem>
              </Nav>
              <Button outline color="success">Probeer nu</Button>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron />
        <Features />
        <Footer/>
      </div>
    );
  }
}


export default Home