import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const Header = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  display: flex;
  flex-blow: row nowrap;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

const Navigation = styled.div`
  margin-right: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  max-width: 300px;
`

const HeaderContainer = ({ siteTitle }) => (
  <Header className={'header'}>
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Navigation className={'navigation'}>
      <Link to="/">Home</Link>
      <Link to="/discography/">Discography</Link>
    </Navigation>
  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default HeaderContainer
