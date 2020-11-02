/**
 * Exercise
 * Change the background-color of the input based
 * on the length of the password
 * At a length of 0-4 it should be a red to orange
 * At a length of around 10 it should become green
 * It should never become blue, so stop at green
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

// const getInputColor = (PasswordInput) => {
//   if (PasswordInput.value.length >= 10) {
//     return 'hsl(100, 100%, 50%)';
//   }
//   if (PasswordInput.value.length >= 4) {
//     return 'hsl(40, 100%, 50%)';
//   }
//   return 'hsl(0, 100%, 50%)';
// };

const Input = styled.input`
  background: ${(props) =>
    `hsl(${
      props.value.length * 10 > 100 ? 100 : props.value.length * 10
    }, 100%, 50%)`};
`;

const PasswordInput = ({ value, onChange }) => {
  const [password, setPassword] = useState(value);
  useEffect(() => {
    onChange(password);
  }, [password]);
  return (
    <Input
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  );
};
PasswordInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
PasswordInput.defaultProps = {
  value: '',
};
export default PasswordInput;
