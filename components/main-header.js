import css from '../styles/modules/main-header.module.scss'

import React from 'react'
import Link from 'next/link'
import BRow from 'react-bootstrap/Row'
import BCol from 'react-bootstrap/Col'
import BFormControl from 'react-bootstrap/FormControl'

import Menu from './menu'

export default class MainHeader extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      menuKey: props.menuKey,
      hamburgerIsActive: false
    }

    this.onHamburgerClick = this._onHamburgerClick.bind(this)

  }

  _onHamburgerClick(event) {
    this.setState({hamburgerIsActive: !this.state.hamburgerIsActive})
    if (typeof this.props.onHamburgerClick === 'function') {
      this.props.onHamburgerClick(event)
    }
  }

  render() {

    let hamburgerStyles = 'hamburger hamburger--emphatic btn mr-3 d-lg-none'

    hamburgerStyles += this.state.hamburgerIsActive ? ' is-active' : ''

    return (
      <header className={css.mainHeader + ' w-100 header-shadow highlight pl-4 pr-4 pb-4'}>
        <BRow noGutters>

          <BCol md={5} xl={4} className="d-none d-lg-block">
            <Menu activeKey={this.state.menuKey} />
          </BCol>

          <BCol xs={12} sm={7} md={8} lg={{span: 4}}>
            <div className="pt-4 text-lg-left text-xl-center">
              <button className={hamburgerStyles} type="button" onClick={this.onHamburgerClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"/>
                </span>
              </button>
              <Link href="/">
                <a className="keep-out">
                  <img src="/images/logo.png" className="img-fluid" alt="Plathanus"/>
                </a>
              </Link>
            </div>
          </BCol>

          <BCol xs={12} sm={5} md={4} lg={{span: 2, offset: 1}} xl={{offset: 2}}>
            <div className={css.search + ' pt-4 keep-out'}>
              <BFormControl type="text" placeholder="Search..." size="sm" className="bg-glass rounded-pill w-100 pl-3"/>
            </div>
          </BCol>

        </BRow>
      </header>
    )
  }
}