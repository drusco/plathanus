import BNav from 'react-bootstrap/Nav'
import React from 'react'

export default class Menu extends React.Component {

  constructor(props) {

    super(props);

    this.defaultKey = 'home'

    this.state = {
      activeKey: props.activeKey || this.defaultKey
    }

    this.onSelect = this._onSelect.bind(this)
    this.onHashChange = this._onHashChange.bind(this)

  }

  _onSelect(key) {
    this.setState({activeKey: key})
    if (typeof this.props.onSelect == 'function') {
      this.props.onSelect(key)
    }
  }

  _onHashChange() {
    if(!location.hash.startsWith('#!/')) return
    const key = location.hash ? location.hash.substring(3) : (this.state.activeKey || this.defaultKey)
    this.setState({activeKey: key})
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange)
    this.onHashChange()
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChange)
  }

  render() {
    return (
      <div className="main-menu">
        <BNav activeKey={this.state.activeKey} onSelect={this.onSelect}>
          <BNav.Item>
            <BNav.Link eventKey="home" href="#!/home">Home</BNav.Link>
          </BNav.Item>
          <BNav.Item>
            <BNav.Link eventKey="what-we-do" href="#!/what-we-do">What we do?</BNav.Link>
          </BNav.Item>
          <BNav.Item>
            <BNav.Link eventKey="testimonial" href="#!/testimonial">Testimonial</BNav.Link>
          </BNav.Item>
          <BNav.Item>
            <BNav.Link eventKey="contact" href="#!/contact">Contact</BNav.Link>
          </BNav.Item>
        </BNav>
      </div>
    )
  }

}