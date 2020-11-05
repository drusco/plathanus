import Link from 'next/link'
import BNav from 'react-bootstrap/Nav'
import BCol from 'react-bootstrap/Col'
import BRow from 'react-bootstrap/Row'
import BButton from 'react-bootstrap/Button'
import BFormControl from 'react-bootstrap/FormControl'

import Card from './card'
import MenuSidebar from './menu-sidebar'

import ArrowDownSVG from '../assets/arrow-down.svg'
import CameraSVG from '../assets/camera.svg'
import SuitcaseSVG from '../assets/suitcase.svg'
import VelocimeterSVG from '../assets/velocimeter.svg'

export default function Layout() {

    const cardDefaults = {
        title: 'Lorem Ipsum',
        description:'This is Photoshop\'s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor',
        link: {
            url: '#link',
            text: 'Learn more'
        }
    }

    return (
        <div>
            <MenuSidebar />
            <section className="position-absolute h-100 w-100">
                <BRow className="no-gutters h-100">
                    <BCol sm={12} className="h-100">
                        <section style={{'background-image': 'url("/images/slide.png")'}} className="home-slideshow bg bg-dark h-100 d-flex flex-column">
                            <header className="header-top-shadow pl-4 pr-4">
                                <BRow noGutters={true}>

                                    <BCol md={5} xl={4} className="d-none d-lg-block">
                                        <BNav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                                            <BNav.Item>
                                                <BNav.Link href="/home">Home</BNav.Link>
                                            </BNav.Item>
                                            <BNav.Item>
                                                <BNav.Link eventKey="link-1">What we do?</BNav.Link>
                                            </BNav.Item>
                                            <BNav.Item>
                                                <BNav.Link eventKey="link-2">Testimonial</BNav.Link>
                                            </BNav.Item>
                                            <BNav.Item>
                                                <BNav.Link eventKey="disabled">Contact</BNav.Link>
                                            </BNav.Item>
                                        </BNav>
                                    </BCol>

                                    <BCol xs={12} sm={7} md={8} lg={{ span: 4 }}>
                                        <div className="pt-4 text-lg-left text-xl-center">
                                            <button className="hamburger hamburger--emphatic is-active btn mr-3 d-lg-none" type="button">
                                              <span className="hamburger-box">
                                                <span className="hamburger-inner" />
                                              </span>
                                            </button>
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/logo.png" alt="Plathanus" />
                                                </a>
                                            </Link>
                                        </div>
                                    </BCol>

                                    <BCol xs={12} sm={5} md={4} lg={{ span: 2, offset: 1 }} xl={{ offset: 2 }}>
                                        <div className="text-right home-search pt-4">
                                            <BFormControl type="text" placeholder="Search..." size="sm" className="bg-white-80 rounded-pill w-100 pl-3" />
                                        </div>
                                    </BCol>

                                </BRow>
                            </header>
                            <div className="h-100 d-flex flex-1 p-4">
                                <div className="position-relative h-100 w-100 m-auto overflow-auto d-flex align-items-center">
                                    <section className="mh-100 w-100 position-absolute">
                                        <div className="d-flex flex-column">

                                            <div className="text-center">
                                                <h1 className="font-montserrat-bold home-slideshow-title">Art is Eternal Happiness</h1>
                                                <BButton size="lg" className="rounded-pill text-white mt-3 text-uppercase pl-4 pr-4">work with us</BButton>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            </div>
                            <footer className="text-center p-4">
                                <BButton as='a' href="#welcome" size="sm" variant="white-80" className="rounded-pill pl-3 pr-3">
                                    scroll down
                                    <ArrowDownSVG className="ml-2 svg-color-inherit mt-n1" />
                                </BButton>
                            </footer>
                        </section>
                    </BCol>
                    <BCol sm={12} className='h-100'>
                        <section id="welcome" className="p-3">

                            <div className="text-center mb-3 p-3">
                                <h2 className="font-montserrat-semibold text-uppercase h5 home-title">What we do</h2>
                                <p className="font-open-sans-light">Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet</p>
                            </div>

                            <div className="p-5">
                                <BRow noGutters={true}>

                                    <BCol md={4}>
                                        <Card svgIcon={CameraSVG} {...cardDefaults} />
                                    </BCol>

                                    <BCol md={4}>
                                        <Card svgIcon={VelocimeterSVG} {...cardDefaults} />
                                    </BCol>

                                    <BCol md={4}>
                                        <Card svgIcon={SuitcaseSVG} {...cardDefaults} />
                                    </BCol>

                                </BRow>
                            </div>

                        </section>
                    </BCol>
                </BRow>
            </section>
        </div>
    )
}