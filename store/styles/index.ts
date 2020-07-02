import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  h2 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #353535;
    font-size: 36px;
    margin-bottom: 40px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: 260px;
    }
    > div {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      strong{
        color: #b3b3b3;
        font-size:16px;
        letter-spacing: 0.06em;
      }
      small{
        margin-top: 10px;
        color: #353535;
        font-weight:bold;
        font-size: 16px;
        letter-spacing: 0.06em;
        line-height: 20px;
      }
      button {
        margin-top: 10px;
        width: 100%;
        height: 50px;
        padding: 0 10px;
        border: none;
        background: #C867A8;
        color: #fff;
      }
    }
  }
`