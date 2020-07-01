import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  background: transparent;
  color: #353535;
  border-bottom: 1px solid #B3B3B3;
`;
export const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #353535;
    position: relative;
    & + a {
      margin-left: 10px;
    }
    svg {
      color: #555555;
      transition: color .2s;
    }
    span {
      position: absolute;
      top: -10px;
      right: -8px;
      background: #C867A8;
      color: #fff;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    &:hover {
      svg {
        color: #C867A8
      }
    }
  }
`