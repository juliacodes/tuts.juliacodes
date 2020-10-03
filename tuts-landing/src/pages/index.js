import React from "react"
import logo from "../images/logo.png"
import GlobalStyles from "../theming/global"

import { Container, LogoCont } from "../theming/styles"
export default function Home() {
  return (
    <Container>
      <GlobalStyles />
      <LogoCont>
        <img src={logo} />
        <div class="comingSoon">COMING SOON</div>
      </LogoCont>
    </Container>
  )
}
