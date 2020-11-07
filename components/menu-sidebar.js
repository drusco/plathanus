import Menu from '../components/menu'
import Link from 'next/link'
import React from 'react'

export default class MenuSidebar extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      menuKey: props.menuKey
    }

  }

  render() {
    return (
      <aside className="sidebar-menu full d-flex flex-column bg-darkest">
        <header className="p-4">
          <Link href="/">
            <a className="keep-out">
              <img src="/images/logo.png" alt="Plathanus"/>
            </a>
          </Link>
        </header>
        {/* article */}
        <article className="d-flex h-100">
          {/* scrollable */}
          <section className="position-relative full m-auto overflow-auto d-flex align-items-center">
            {/* wrapper */}
            <section className="position-absolute full">
              {/* inner-wrapper */}
              <div className="position-relative h-100 d-flex flex-column">

                {/* custom-content */}
                <Menu activeKey={this.state.menuKey} />

              </div>
            </section>
          </section>
        </article>
      </aside>
    )
  }

}