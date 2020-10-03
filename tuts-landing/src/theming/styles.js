import styled from "styled-components"

const QUERIES = {
  large: `min-width: 1200px`,
  medium: `min-width: 870px`,
  small: `min-width: 660px`,
  maxWidth: `1500px`,
}
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  max-width: 1500px;

  @media (${QUERIES.large}) {
    margin: 30px auto 30px auto;
    padding: 0px;
  }
`

export const LogoCont = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: auto;
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
  width: 500px;
  margin: 100px auto;
  h1 {
    color: ${({ theme }) => theme.textMain};
    font-size: 65px;
    font-weight: 800;
    line-height: 112.69%;
    display: flex;
    align-items: center;
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.textMain};
    font-weight: 200;
    font-size: 20px;
    line-height: 165.69%;
    /* identical to box height, or 30px */

    text-align: center;
    margin: 40px 0 20px 0px;
  }
`
