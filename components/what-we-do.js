import React from 'react'
import BRow from 'react-bootstrap/Row'
import BCol from 'react-bootstrap/Col'

import Card from './card'
import CameraSVG from '../assets/camera.svg'
import VelocimeterSVG from '../assets/velocimeter.svg'
import SuitcaseSVG from '../assets/suitcase.svg'

export default class WhatWeDo extends React.Component {

  constructor(props) {

    super(props);

    this.cardDefaults = {
      title: 'Lorem Ipsum',
      description: 'This is Photoshop\'s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor',
      link: {
        url: '#link',
        text: 'Learn more'
      }
    }

  }

  render() {
    return (
      <section id="what-we-do" className="bg-white">

        <div className="text-center mt-4 mb-3 p-3">
          <h2 className="font-montserrat-semibold text-uppercase h5 title-with-line">What
            we do</h2>
          <p className="font-open-sans-light">Lorem ipsum dolor sit
            amet. Proin gravida nibh vel velit auctor aliquet</p>
        </div>

        <div className="p-5">
          <BRow noGutters>

            <BCol md={4}>
              <Card svgIcon={CameraSVG} {...this.cardDefaults} />
            </BCol>

            <BCol md={4}>
              <Card
                svgIcon={VelocimeterSVG} {...this.cardDefaults} />
            </BCol>

            <BCol md={4}>
              <Card
                svgIcon={SuitcaseSVG} {...this.cardDefaults} />
            </BCol>

          </BRow>
        </div>

      </section>
    )
  }
}