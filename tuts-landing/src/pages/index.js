import React, { useState } from "react"
import logo from "../images/logo.png"
import logoDark from "../images/logo-dark.png"
import { ThemeProvider } from "styled-components"
import lightTheme, { darkTheme } from "../theming/themeContext"
import GlobalStyles from "../theming/global"
import {
  FormCont,
  Inner,
  Container,
  LogoCont,
  Main,
  TextAnimate,
  InnerText,
} from "../theming/styles"

const App = () => {
  const mq = window.matchMedia("(prefers-color-scheme: dark)")
  const mode = `${mq.matches ? "dark" : "light"}`
  const [theme, setTheme] = useState(mode)
  console.log(mode)

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
        </Inner>
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
            <p className="heavy">building forms</p>
            <p>domains</p>
            <p>HTML semantics</p>
            <p>classes & IDs</p>
            <p>accessibility</p>
            <p>design</p>
            <p>advanced styling</p>
            <p>Sass</p>
            <p>seo</p>
            <p>positioning</p>
            <p className="heavy">building tables</p>
            <p>CSS grid</p>
            <p>flex box</p>
            <p>media queries</p>
            <p className="heavy">site speed</p>
            <p>color theory</p>
          </InnerText>
          <InnerText>
            <p>string methods</p>
            <p className="heavy">es6+</p>
            <p>arrow functions</p>
            <p>debugging</p>
            <p className="heavy">portfolio tips</p>
            <p>custom domains</p>
            <p>functions</p>
            <p>API calls</p>
            <p className="heavy">graphql</p>
            <p>react hooks</p>
            <p>advanced styling</p>
            <p>git basics</p>
            <p className="heavy">rebasing & merging</p>
            <p>repo hosting</p>
            <p>cypress testing</p>
            <p>jest testing</p>
          </InnerText>
        </TextAnimate>
      </Container>
    </ThemeProvider>
  )
}
export default App
