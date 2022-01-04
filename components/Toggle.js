import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const Button = styled.button`
  background: ${({ theme }) => theme.bg.background};
  border: 2px solid ${({ theme }) => theme.bg.colorBorder};
  color: ${({ theme }) => theme.text.primary};
  border-radius: 50%;
  cursor: pointer;
  font-size: 2rem;
  padding: 0.8rem;
  margin: 0.8rem;
  position: absolute;
  z-index: 100;
  top: 11%;
  right: 0;
  display: flex;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const icon = theme === "light" ? <FaMoon /> : <FaSun />;
  return <Button onClick={toggleTheme}>{icon}</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
