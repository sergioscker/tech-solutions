import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background-color: ${(props) =>
    props.theme === 'blue' ? theme.colors.lightblue : theme.colors.purple};
  padding: 1.5 1rem;
  width: ${(props) => (props.theme === 'blue' ? '11.5rem' : '9.0625rem')};
  height: 3.5rem;
  color: ${(props) =>
    props.theme === 'blue' ? theme.colors.dark : theme.colors.white};
  border-radius: 0.25rem;
  border: ${(props) => (props.theme === 'blue' ? 'none' : '1px theme.colors.white')};
  font-size: 1.125rem;
  font-weight: 500;
  line-height: auto;
  text-align: center;
  letter-spacing: 0%;
`;
