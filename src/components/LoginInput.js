import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { ThemeConsumer } from '../contexts/ThemeContext';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();

    return login({
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
              <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
              <input type="password" placeholder={locale === 'id' ? 'Kata kunci' : 'Password'} value={password} onChange={onPasswordChange} />
              <button>{locale === 'id' ? 'Masuk' : 'Login'}</button>
            </form>
          );
        }
      }
    </ThemeConsumer>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginInput;