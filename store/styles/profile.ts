import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  form {
    display: flex;
    flex-direction: column;
    fieldset{
      display: flex;
      margin: 10px 0;
      padding: 20px;
      background: #fff;
      border: none;
      box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
           0 4px 14px rgba(59, 89, 178, 0.06);
      h3 {
        margin-bottom: 20px;
      }
    }
    label {
      font-weight:bold;
      text-transform: uppercase;
      margin-bottom: 5px;
      letter-spacing: 1px;
    }
    input {
      border: 1px solid #b3b3b3;
      width: 100%;
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


export const Row = styled.div`
  display: flex;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

`