import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ChangeButton = () => {
  const { changeMode } = useContext(ThemeContext);

  return <button onClick={changeMode}>Toggle Theme</button>;
};

export default ChangeButton;