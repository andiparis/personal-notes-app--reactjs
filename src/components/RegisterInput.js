import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { ThemeConsumer } from '../contexts/ThemeContext';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();

    return register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <ThemeConsumer>
      {
        ({ locale }) => {
          return (
            <form onSubmit={onSubmitHandler} className="auth-input__body">
              <input type="text" placeholder={locale === 'id' ? 'Nama' : 'Name'} value={name} onChange={onNameChange} />
              <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
              <input type="password" placeholder={locale === 'id' ? 'Kata kunci' : 'Password'} value={password} onChange={onPasswordChange} />
              <button>{locale === 'id' ? 'Kirim' : 'Submit'}</button>
            </form>
          );
        }
      }
    </ThemeConsumer>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired
}

export default RegisterInput;