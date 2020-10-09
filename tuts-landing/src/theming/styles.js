import styled, { keyframes } from "styled-components"
import send from "../images/send.svg"
import error from "../images/error.svg"

const QUERIES = {
  large: `min-width: 1200px`,
  medium: `min-width: 870px`,
  small: `min-width: 660px`,
  maxWidth: `1500px`,
  height: `min-height: 700px`,
}

export const Container = styled.div`
  width: 100vw;
  max-height: 100%;
  padding: 0;
  overflow: hidden;

  @media (${QUERIES.small}) {
    height: 100%;
  }
`
export const Inner = styled.div`
  max-height: calc(100vh - 50px);
  height: 100vh;
  padding: 0;
  margin: 50px auto 0 auto;
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

export const Sending = keyframes`
  from {
    transform-origin: 50% 50%;
    transform:  rotate(45deg) translateX(0px);

  }

  to {
    transform-origin: initial;
    transform: scale(2) translateX(100vw);
  }
`

export const Shake = keyframes`
  0% {
    transform: translateX(0px);
  }

  16.6% {
    transform: translateX(3px);
  }
 
  33.3% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-3px);
  }

  66.6%{
    transform: translateX(0px);

  }
  83.3%{
    transform: translateX(3px);
  }

  100%{
    transform: translateX(0px);

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
      left: 35px;
    }
  }

  .form-error {
    border: 1px solid #e4453a;
  }

  .error-anim {
    animation: ${Shake} linear 0.2s;
  }

  .error-icon::after {
    content: "";
    position: absolute;
    display: inline-block;
    top: 33px;
    right: 135px;
    width: 25px;
    height: 25px;
    background-size: cover;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${error});

    z-index: 99;

    @media (${QUERIES.small}) {
      right: 70px;
    }
  }

  #form {
    width: calc(100vw - 70px);
    max-width: 400px;
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

    .sent {
      animation: ${Sending} ease-in-out 3s;
      position: relative;
      display: inline-block;
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
    transition-duration: 0.4s;

    :hover {
      transform-origin: 50% 50%;
      transform: rotate(45deg);
    }
  }
`

export const Button = styled.button`
  content: "";
  width: 30px;
  height: 30px;
  background-size: fit;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${send});
  transition-duration: 0.4s;

  @media (${QUERIES.small}) {
    :hover {
      transform-origin: 50% 50%;
      transform: rotate(45deg);
    }
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
    transform: translateX(-80%);
  }

  to {
    transform: translateX(0);
  }
`

export const TextAnimate = styled.div`
  position: absolute;
  width: 100vw;
  height: auto;
  bottom: 0px;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  display: none;

  @media (${QUERIES.small}) {
    display: none;
  }
  @media (${QUERIES.height}) and (${QUERIES.small}) {
    display: block;
    bottom: 0;
  }

  @media (${QUERIES.height}) {
    display: block;
  }

  #row2 {
    animation: ${slideRev} linear infinite 20s;
  }
`

export const SlidingText = styled.div`
  p {
    color: ${({ theme }) => theme.superLightText};
    display: inline;
    margin: 20px;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    font-family: "Spartan", sans-serif;
    text-transform: lowercase;

    @media (${QUERIES.small}) {
      font-size: 18px;
      margin: 30px;
    }
  }
  .heavy {
    color: ${({ theme }) => theme.textMain};
  }
`
