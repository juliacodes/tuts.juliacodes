import React, { useState, useEffect } from "react"
import logo from "../images/logo.png"
import logoDark from "../images/logo-dark.png"
import { ThemeProvider } from "styled-components"
import lightTheme, { darkTheme } from "../theming/themeContext"
import GlobalStyles from "../theming/global"
import MarqueeCont from "../components/MarqueeCont"
import Form from "../components/Form"

import {
  Inner,
  Container,
  LogoCont,
  Main,
  TextAnimate,
  InnerText,
} from "../theming/styles"

const App = () => {
  const [theme, setTheme] = useState("dark")
  const [viewing, setViewing] = useState(true)

  useEffect(() => {
    window.addEventListener("focus", onFocus)
    window.addEventListener("blur", onBlur)

    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const mode = `${mq.matches ? "dark" : "light"}`
    setTheme(mode)

    return () => {
      window.removeEventListener("focus", onFocus)
      window.removeEventListener("blur", onBlur)
    }
  }, [])

  const onFocus = () => {
    setViewing(true)
    console.log("Tab is in focus")
  }
  const onBlur = () => {
    setViewing(false)
    console.log("Tab is blurred")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Inner>
          <LogoCont>
            <img src={theme === "light" ? logo : logoDark} />
            <div class="comingSoon">COMING SOON</div>
          </LogoCont>
          <Main>
            <h1>Tutorials Reimagined</h1>
            <p>
              Videos designed with comprehensive steps and side-by-side code
              view and explanation
            </p>
            <p>Subscribe to be the first to see new content.</p>
            <Form />
          </Main>
        </Inner>
        <MarqueeCont viewing={viewing} />
      </Container>
    </ThemeProvider>
  )
}
export default App
