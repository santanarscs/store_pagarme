import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #353535;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  li {
    width: 200px;
    padding: 2%;
    flex-grow: 1;
    display: flex;
    img {
      width: 100%;
      height: 150px;
    }
    > div {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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