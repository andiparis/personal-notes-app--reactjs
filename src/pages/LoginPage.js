import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { login } from '../utils/api';

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <ThemeConsumer>
      {
        ({ locale }) => {
          return (
            <section className="auth-input">
              <h2 className="auth-input__title">{locale === 'id' ? 'Masuk' : 'Login'}</h2> 
              <LoginInput login={onLogin} />
              <p>{locale === 'id' ? 'Belum punya akun' : 'Don\'t have an account yet'}? <Link to="/register">{locale === 'id' ? 'Daftar di sini' : 'Register in here'}.</Link></p>
            </section>
          );
        }
      }
    </ThemeConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;