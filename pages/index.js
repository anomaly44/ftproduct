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

import Jumbotron from '../components/Home/Jumbotron'
import Footer from '../components/Footer'


const NavLinkHelper = (props) => {
  console.log(props);
  return (<Link href={'contact'}><a className={props.className}>{props.children}</a></Link> );
}

class Home extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
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
                crossorigin="anonymous"/>
        </Head>
        <Navbar inverse toggleable color="inverse">
          <NavbarToggler right onClick={this.toggle}/>
          <div className="container">
            <NavbarBrand href="/">FixTrack</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={NavLinkHelper} to="/contact">Components</NavLink>
                </NavItem>
                <NavItem style={{marginRight: 20}}>
                  <NavLink >Github</NavLink>
                </NavItem>
              </Nav>
              <Button outline color="success">Probeer nu</Button>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron />
        <Container>
          test
        </Container>
        <Footer/>
      </div>
    );
  }
}


export default Home