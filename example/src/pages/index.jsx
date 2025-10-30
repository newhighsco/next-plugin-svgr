import React from 'react'

import logoUrl, { ReactComponent as Logo } from '~images/logo.svg'

const Page = () => (
  <div style={{ maxWidth: 100 }}>
    <img src={logoUrl} alt="star" />
    <Logo />
  </div>
)

export default Page
