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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
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
        background: #557cf2;
        color: #fff;
        border-radius: 5px;
      }
    }
    & + li {
      margin-left: 10px;
    }
  }
`