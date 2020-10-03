import React, { useState } from "react"
import logo from "../images/logo.png"
import logoDark from "../images/logo-dark.png"
import { ThemeProvider } from "styled-components"
import lightTheme, { darkTheme } from "../theming/themeContext"
import GlobalStyles from "../theming/global"
import {
  FormCont,
  Container,
  LogoCont,
  Main,
  TextAnimate,
  InnerText,
} from "../theming/styles"

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
          <img src={theme === "light" ? logo : logoDark} />
          <div class="comingSoon">COMING SOON</div>
        </LogoCont>
        <Main>
          <h1>Tutorials Reimagined</h1>
          <p>
            Videos designed with comprehensive steps and side-by-side code view
            and explanation
          </p>
          <p>Subscribe to be the first to see new content.</p>
          <FormCont>
            <form>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email Address"
              />
              <button
                id="submit"
                type="submit"
                form="form1"
                value="Submit"
              ></button>
            </form>
          </FormCont>
        </Main>
      </Container>
      <TextAnimate>
        <InnerText>
          <p>coding environment</p>
          <p>github setup</p>
          <p className="heavy">structuring projects</p>
          <p>dom manipulation</p>
          <p>javascript events</p>
          <p>styled-components</p>
          <p className="heavy">react hooks</p>
          <p>advanced styling</p>
          <p>coding environment</p>
          <p className="heavy">github setup</p>
          <p>structuring projects</p>
          <p>dom manipulation</p>
          <p>javascript events</p>
          <p>styled-components</p>
          <p>react hooks</p>
          <p>advanced styling</p>
        </InnerText>
        <InnerText id="row2">
          <p>coding environment</p>
          <p>github setup</p>
          <p className="heavy">structuring projects</p>
          <p>dom manipulation</p>
          <p>javascript events</p>
          <p>styled-components</p>
          <p className="heavy">react hooks</p>
          <p>advanced styling</p>
          <p>coding environment</p>
          <p className="heavy">github setup</p>
          <p>structuring projects</p>
          <p>dom manipulation</p>
          <p>javascript events</p>
          <p>styled-components</p>
          <p>react hooks</p>
          <p>advanced styling</p>
        </InnerText>
        <InnerText>
          <p>coding environment</p>
          <p>github setup</p>
          <p className="heavy">structuring projects</p>
          <p>dom manipulation</p>
          <p>javascript events</p>
          <p>styled-components</p>
          <p className="heavy">react hooks</p>
          <p>advanced styling</p>
          <p>coding environment</p>
          <p className="heavy">github setup</p>
          <p>structuring projects</p>
          <p>dom manipulation</p>
          <p>javascript events</p>
          <p>styled-components</p>
          <p>react hooks</p>
          <p>advanced styling</p>
        </InnerText>
      </TextAnimate>
    </ThemeProvider>
  )
}
export default App
