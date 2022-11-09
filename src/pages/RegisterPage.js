import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { register } from '../utils/api';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <ThemeConsumer>
      {
        ({ locale }) => {
          return (
            <section className="auth-input">
              <h2 className="auth-input__title">{locale === 'id' ? 'Daftar' : 'Register'}</h2>
              <RegisterInput register={onRegisterHandler} />
              <p>{locale === 'id' ? 'Kembali ke' : 'Back to'} <Link to="/">{locale === 'id' ? 'Masuk' : 'Login'}</Link></p>
            </section>
          );
        }
      }
    </ThemeConsumer>
  );
}

export default RegisterPage;