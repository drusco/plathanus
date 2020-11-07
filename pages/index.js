import slideshowCSS from '../styles/modules/slideshow.module.scss'

import Link from 'next/link'
import React from 'react'
import BCol from 'react-bootstrap/Col'
import BRow from 'react-bootstrap/Row'
import BButton from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

import PageHead from '../components/head'
import Breakpoint from '../utils/breakpoint'
import MenuSidebar from '../components/menu-sidebar'
import MainHeader from '../components/main-header'
import WhatWeDo from '../components/what-we-do'
import ArrowDownSVG from '../assets/arrow-down.svg'

import {connectToDatabase} from '../utils/mongodb'

export default class HomePage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      slides: props.slides,
      currentSlide: null,
      isConnected: props.isConnected,
      showSidebarMenu: false,
      allowSidebarMenu: false
    }

    this.toggleSidebarMenu = this._toggleSidebarMenu.bind(this)
    this.onResize = this._onResize.bind(this)
    this.scrollDown = this._scrollDown.bind(this)
    this.onCarouselSelect = this._onCarouselSelect.bind(this)

  }

  componentDidMount() {

    let slide

    if(this.state.slides.length) slide = this.state.slides[0]

    window.addEventListener('resize', this.onResize)
    this.setState({ breakpoint: Breakpoint(), currentSlide: slide})
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

  _onCarouselSelect(key, event) {
    this.setState({ currentSlide: this.state.slides[key] })
  }

  _onResize(event) {
    const breakpoint = Breakpoint()
    const {index, name} = breakpoint
    this.setState({allowSidebarMenu: index < 3, breakpoint})
  }

  _toggleSidebarMenu(e) {
    this.setState({showSidebarMenu: !this.state.showSidebarMenu})
  }

  render() {

    let contentWrapperStyles = 'position-fixed full animate-x'

    contentWrapperStyles += !this.state.showSidebarMenu ? '' : ' offset-9 offset-sm-5 offset-md-4 offset-lg-0'
    contentWrapperStyles += this.state.allowSidebarMenu && this.state.showSidebarMenu ? ' allow-blur' : ''

    return (
      <main>

        <PageHead title="Desafio Técnico - Pedro Gallado"/>

        <div className="position-absolute h-100 p-0 col-9 col-sm-5 col-md-4 animate-x">
          <MenuSidebar show={this.state.showSidebarMenu}/>
        </div>

        <div className={contentWrapperStyles}>
          <section className={slideshowCSS.background + ' full d-flex flex-column bg-dark'}
                   style={{'backgroundImage': this.state.currentSlide ? 'url("' + this.state.currentSlide.image + '")' : ''}}>
            {/* article */}
            <article className="d-flex h-100 blur">
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
                            <MainHeader className='d-none' onHamburgerClick={this.toggleSidebarMenu}/>
                            <article className="h-100 d-flex flex-1">
                              <div className="position-relative full m-auto overflow-auto d-flex align-items-center">
                                <section className="h-100 w-100 position-absolute">
                                  <div className="h-100 d-flex flex-column">

                                    <Carousel onSelect={this.onCarouselSelect} pause={false} indicators={false} fade={true} className="carousel-h-100 carousel-ui-on-hover">
                                      {this.state.slides.map((slide, i) => (
                                        <Carousel.Item key={i}>

                                          <div className="text-center pl-5 pr-5">
                                            {slide.text ? (
                                              <h1 className={slideshowCSS.title + ' font-montserrat-bold'}>{slide.text}</h1>
                                            ) : ''}
                                            {slide.button ? (
                                              <Link href={slide.url}>
                                                <BButton
                                                  size={this.state.breakpoint && this.state.breakpoint.index > 0 ? 'lg' : 'md'}
                                                  className="rounded-pill font-open-sans text-white mt-3 text-uppercase pl-4 pr-4">{slide.button}</BButton>
                                              </Link>
                                            ) : ''}
                                          </div>

                                        </Carousel.Item>
                                      ))}
                                    </Carousel>

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

export async function getServerSideProps(context) {

  const {client, db} = await connectToDatabase()
  const isConnected = await client.isConnected() // Returns true or false
  const slides = await db.collection('slides').find({}).toArray();

  return {
    props: {
      isConnected,
      slides: JSON.parse(JSON.stringify(slides))
    },
  }
}