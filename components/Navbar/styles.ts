import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  background: #557cf2;
  color: #fff;
  box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
    0 4px 14px rgba(59, 89, 178, 0.06);
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
    color: #FFFF;

  }
`