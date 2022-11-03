import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  background-color: #000000aa;
  backdrop-filter: blur(5px);
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContetn = styled.div`
  width: 1000px;
  background-color: #fefefe;
  border: 2px solid #333;
  border-radius: 5px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #666;
  padding: 10px 20px;
`;

export const Button = styled.button`
  padding: 10px 40px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #87bdd8;
  font-weight: bold;
  font-size: 15px;
  color: #333;
  &:hover {
    background-color: #105b72c2;
  }
`;

export const Message = styled.h2`
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  font-size: 18px;
  border-bottom: 1px solid #666;
  h2 {
    padding: 15px;
    margin: 0px;
  }
`;

export const LaunchContent = styled.article`
  display: grid;
  grid-template-columns: 50% auto;
`;

export const BlockWrapper = styled.div`
  padding: 10px;
`;

export const InfoBlock = styled.div`
  padding: 15px 5px;
`;

export const InfoTitle = styled.span`
  font-weight: bold;
`;

export const InfoDesc = styled.span`
  font-weight: lighter;
`;
