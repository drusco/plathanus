import React from 'react'
import BCol from 'react-bootstrap/Col'
import BRow from 'react-bootstrap/Row'
import BButton from 'react-bootstrap/Button'

import PageHead from '../components/head'
import Breakpoint from '../components/breakpoint'
import MenuSidebar from '../components/menu-sidebar'
import MainHeader from '../components/main-header'
import WhatWeDo from '../components/what-we-do'

import ArrowDownSVG from '../assets/arrow-down.svg'

export default class HomePage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      showSidebarMenu: false,
      allowSidebarMenu: false
    }

    this.toggleSidebarMenu = this._toggleSidebarMenu.bind(this)
    this.onResize = this._onResize.bind(this)
    this.scrollDown = this._scrollDown.bind(this)

  }

  async componentDidMount() {
    window.addEventListener('resize', this.onResize)
    await this.setState({breakpoint: Breakpoint()})
    this.onResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  _scrollDown(e) {
    e.preventDefault()
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }

  _onResize(event) {
    const {index, name} = Breakpoint()
    this.setState({allowSidebarMenu: index < 3})
  }

  _toggleSidebarMenu(e) {
    this.setState({showSidebarMenu: !this.state.showSidebarMenu})
  }

  render() {

    let menuWrapperStyles = 'position-absolute h-100 p-0 col-9 col-sm-5 col-md-4 animate-x'
    let contentWrapperStyles = 'home position-fixed full animate-x'

    contentWrapperStyles += !this.state.showSidebarMenu ? '' : ' offset-9 offset-sm-5 offset-md-4 offset-lg-0'
    contentWrapperStyles += this.state.allowSidebarMenu && this.state.showSidebarMenu ? ' has-menu' : ''

    return (
      <main>

        <PageHead title="Desafio Técnico - Pedro Gallado"/>

        <div className={menuWrapperStyles}>
          <MenuSidebar show={this.state.showSidebarMenu}/>
        </div>

        <div className={contentWrapperStyles}>
          <section className="slideshow slideshow-bg full d-flex flex-column"
                   style={{'backgroundImage': 'url("/images/slide.png")'}}>
            {/* article */}
            <article className="d-flex h-100 blur-out">
              {/* scrollable */}
              <section className="position-relative full m-auto overflow-auto d-flex align-items-center">
                {/* wrapper */}
                <section className="position-absolute full">
                  {/* inner-wrapper */}
                  <div className="position-relative h-100 d-flex flex-column">
                    {/* custom-content */}
                    <div className="position-absolute h-100">
                      <BRow noGutters className="h-100">
                        <BCol sm={12} className="h-100">
                          <section className="h-100 d-flex flex-column">
                            <MainHeader onHamburgerClick={this.toggleSidebarMenu}/>
                            <article className="h-100 d-flex flex-1">
                              <div
                                className="position-relative full m-auto overflow-auto d-flex align-items-center">
                                <section className="mh-100 w-100 position-absolute">
                                  <div className="d-flex flex-column">

                                    <div className="text-center p-5">
                                      <h1 className="font-montserrat-bold slideshow-title">Art
                                        is Eternal Happiness</h1>
                                      <BButton size="lg"
                                               className="rounded-pill text-white mt-3 text-uppercase pl-4 pr-4">work
                                        with us</BButton>
                                    </div>

                                  </div>
                                </section>
                              </div>
                            </article>
                            <footer className="text-center p-4">
                              <BButton as='a' href="#what-we-do" size="sm" variant="glass"
                                       className="rounded-pill pl-3 pr-3" onClick={this.scrollDown}>
                                scroll down
                                <ArrowDownSVG className="ml-2 svg-color-inherit mt-n1"/>
                              </BButton>
                            </footer>
                          </section>
                        </BCol>
                        <BCol sm={12} className='h-100 bg-white'>
                          <WhatWeDo/>
                        </BCol>
                      </BRow>
                    </div>
                  </div>
                </section>
              </section>
            </article>
          </section>
        </div>
      </main>
    )
  }
}