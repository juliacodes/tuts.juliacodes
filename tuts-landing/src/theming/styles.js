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
  }
`
