import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductList = styled.ul`
  display: flex;
  list-style: none;
  li {
    width: 200px;
    display: flex;
    flex-direction: column;
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
        background: #2979ff;
        color: #fff;
        border-radius: 5px;
      }
    }
    & + li {
      margin-left: 10px;
    }
  }
`