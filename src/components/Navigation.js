import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeConsumer } from '../contexts/ThemeContext';

function Navigation({ logout, name }) {
  return (
    <ThemeConsumer>
      {
        ({ theme, toggleTheme, locale, toggleLocale }) => {
          return (
            <nav className="navigation">
              <ul>
                <li><Link to="/"><FiHome /></Link></li>
                <li><Link to="/add"><FiPlusCircle /></Link></li>
                <li><a onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</a></li>
                <li><a onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</a></li>
                <li><a onClick={logout}>{name} <FiLogOut /></a></li>
              </ul>
            </nav>
          );
        }
      }
    </ThemeConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;