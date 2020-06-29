import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
      margin-bottom: 20px;
    }
    form {
      width: 400px;
      display: flex;
      flex-direction: column;
      label {
        font-weight:bold;
        text-transform: uppercase;
        margin-bottom: 5px;
        letter-spacing: 1px;
      }
      input {
        border: 1px solid #b3b3b3;
        padding: 10px;
        margin-bottom: 15px;
        height: 50px;
        &:focus {
          border-color: #2296F3;
          box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        }
      }
      button {
        background: #2296F3;
        color:#fff;
        height: 50px;
        border: none;
        &:hover {
          background: #097DDA;
        }
      }
    }
`;
