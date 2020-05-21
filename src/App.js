import React, {Component, Fragment} from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      isMobileMenuOpen: false
    }
  }

toggleMobileMenu = () => {
  this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen})
}




render() {
  return(

<Fragment> 
  <main>
    <section className="section1">
      <nav className="navbar">
        <a href=".navbar">
          <img className="logo" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg">            
          </img>
        </a>
        <div className="navbarRight">
          <button className="menu" onClick={this.toggleMobileMenu}>MENU
            <div className="bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </button>
          <a className="link link1" href=".services">SERVICES</a>
          <a className="link link2" href=".portfolio">PORTFOLIO</a>
          <a className="link link3" href=".about">ABOUT</a>
          <a className="link link4" href=".team">TEAM</a>
          <a className="link link5" href=".contact">CONTACT</a>
        </div>
      </nav>
      <div className="center">
        <h2>Welcome To Our Studio!</h2>
        <h1>IT'S NICE TO MEET YOU</h1>
        <a href=".services">
        <button className="button1" href=".services">TELL ME MORE</button>
        </a>
      </div>
    </section>
  </main>
</Fragment>
  )
}

}

