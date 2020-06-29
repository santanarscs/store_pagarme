import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    margin: 20px 0;
    justify-content: flex-start;
    li {
      padding: 5px 0;
      strong {
        font-weight: bold;
      }
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
  }
  a {
    width: 100%;
    text-decoration: none;
    padding: 15px;
    border: none;
    background-color: #fcf7e6;
    border-color: #fcf7e6;
    color: #bf9d36;
    text-align: center;
  }
`;
