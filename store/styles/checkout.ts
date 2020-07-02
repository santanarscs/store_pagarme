import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  h1 {
    margin-bottom: 20px;
  }

`;

export const CartList = styled.ul`
  list-style:none;
  margin-bottom: 40px;
  li {
    padding: 10px;
    strong {
      font-weight: bold;
      text-transform: uppercase;
      margin-right: 10px;
    }
    > div {
      span {
        margin: 0 5px;
      }
      button {
        padding: 0 5px;
        border: none;
        background: #2979ff;
        color: #fff;
        border-radius: 5px;
      }
    }
    p {
      color: #b3b3b3;
      max-width: 400px;
    }
    
  }
`
export const Select = styled.select`
  height: 50px;
  padding: 10px;
  border: 1px solid #b3b3b3;
  background: transparent;
  width: 200px;
`
export const SumaryContainer = styled.div`
  margin: 20px 0;
`;
export const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .form-area {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input {
      height: 50px;
      border: 1px solid #b3b3b3;
      padding: 10px;
      margin-bottom: 15px;
    }
    .group {
      display: flex;
      > div {
        display: flex;
        flex-direction: column;
        margin-right: 10px;

      }
    }
  }

`
export const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  background: #00e676;
  color: #fff;
  height: 60px;
  border: none;
`
