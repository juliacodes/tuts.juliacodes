import React, { useState } from "react"
import logo from "../images/logo.png"
import { ThemeProvider } from "styled-components"
import lightTheme, { darkTheme } from "../theming/themeContext"
import GlobalStyles from "../theming/global"
import { Container, LogoCont, Main } from "../theming/styles"

const App = () => {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    if (theme === "light") {
      setTimeout(() => {
        setTheme("dark")
      }, 2000)
    } else {
      setTimeout(() => {
        setTheme("light")
      }, 2000)
    }
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <LogoCont>
          <img src={logo} />
          <div class="comingSoon">COMING SOON</div>
        </LogoCont>
        <Main>
          <h1>Tutorials Reimagined</h1>
          <p>
            Videos designed with comprehensive steps and side-by-side code view
            and explanation
          </p>
          <p>Subscribe to be the first to see new content.</p>
          <form>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="enter your email"
            />
            <input type="submit" value="Submit" />
          </form>
        </Main>
      </Container>
    </ThemeProvider>
  )
}
export default App
