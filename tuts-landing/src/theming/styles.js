import styled, { keyframes } from "styled-components"
import send from "../images/send.svg"

const QUERIES = {
  large: `min-width: 1200px`,
  medium: `min-width: 870px`,
  small: `min-width: 660px`,
  maxWidth: `1500px`,
  height: `min-height: 800px`,
}
export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: 0;
  margin: 50px auto 0 auto;
  max-width: 1500px;

  @media (${QUERIES.large}) {
    margin: 30px auto 0px auto;
    min-height: calc(100vh - 90px);
    padding: 0px;
  }
`

export const LogoCont = styled.div`
  width: 300px;
  margin: 0 auto 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: auto;
    @media (${QUERIES.small}) {
      width: 30px;
    }
  }

  .comingSoon {
    margin-top: 20px;
    font-size: 10px;
    line-height: 100%;
    padding: 8px 5px 5px 5px;
    border-radius: 4px;
    letter-spacing: 0.045em;
    background-color: ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.grayText};
  }
`

export const Main = styled.div`
  margin: 80px auto;
  h1 {
    color: ${({ theme }) => theme.textMain};
    font-size: 35px;
    font-weight: 800;
    line-height: 112.69%;
    text-align: center;
    padding: 0 20px;
  }
  @media (${QUERIES.small}) and (${QUERIES.height}) {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -250px;
    width: 500px;

    h1 {
      font-size: 65px;
    }
  }

  p {
    color: ${({ theme }) => theme.textMain};
    font-weight: 300;
    font-size: 17px;
    line-height: 165.69%;
    text-align: center;
    margin: 2vh 20px 2vh 20px;

    @media (${QUERIES.small}) {
      font-size: 23px;
    }
  }
`

export const FormCont = styled.div`
  width: calc(100vw - 70px);
  max-width: 400px;
  height: 70px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.main};
  margin: 4vh auto;
  border-radius: 20px;

  @media (${QUERIES.small}) {
    width: 400px;
  }

  ::before {
    content: "";
    width: calc(100vw - 140px);
    max-width: 300px;

    height: 50px;
    position: absolute;
    top: 40px;
    left: 10vw;
    box-shadow: ${({ theme }) => theme.formShadow};

    @media (${QUERIES.small}) {
      width: 350px;
      left: 25px;
    }
  }

  form {
    width: calc(100vw - 70px);
    max-width: 400px;

    height: 70px;
    padding: 20px 0;
    background-color: ${({ theme }) => theme.main};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    border-radius: 20px;

    @media (${QUERIES.small}) {
      width: 400px;
    }
  }

  #email {
    background-color: ${({ theme }) => theme.formGray};
    padding: 10px 15px;
    font-weight: normal;
    font-size: 18px;
    line-height: 165.69%;
    border-radius: 13px;
    width: 230px;
    color: ${({ theme }) => theme.textMain};

    ::placeholder {
      color: ${({ theme }) => theme.textGray};
    }
    @media (${QUERIES.small}) {
      width: 330px;
    }
  }

  #submit {
    width: 30px;
    height: 30px;
    background-size: fit;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${send});
  }
`
export const slide = keyframes`
  from {
    transform: translateX(0px);
  }

  to {
    transform: translateX(-100%);
  }
`

export const slideRev = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`

export const TextAnimate = styled.div`
  position: absolute;
  width: 100vw;
  bottom: -80px;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  display: none;
  @media (${QUERIES.height}) {
    display: block;
  }

  #row2 {
    animation: ${slideRev} linear infinite 20s;
  }
`

export const InnerText = styled.div`
  animation: ${slide} linear infinite 20s;
  margin: 30px;
  p {
    color: ${({ theme }) => theme.superLightText};
    display: inline;
    margin: 30px;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    font-family: "Spartan", sans-serif;
    text-transform: lowercase;
  }

  .heavy {
    color: ${({ theme }) => theme.textMain};
  }
`
