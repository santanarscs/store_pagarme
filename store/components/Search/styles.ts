import styled from 'styled-components';

export const Container = styled.div`
  height:50px;
  border: 1px solid #B3B3B3;
  padding:10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  
  input {
    background: transparent;
    border:none;
    width: 100%;
    &::placeholder {
      color: #353535;
      text-transform: uppercase;
    }
  }
`;
