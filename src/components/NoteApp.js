import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import Navigation from './Navigation';
import { ThemeProvider } from '../contexts/ThemeContext';
import { getUserLogged, putAccessToken } from '../utils/api';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authedUser: null,
      initializing: true,
      themeContext: {
        theme: localStorage.getItem('theme') || 'dark',
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme = prevState.themeContext.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);

            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme,
              }
            };
          });
        },

        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.themeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);

            return {
              themeContext: {
                ...prevState.themeContext,
                locale: newLocale,
              }
            };
          });
        }
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
    const { data } = await getUserLogged();
    
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.themeContext.theme !== this.state.themeContext.theme) {
      document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
 
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state.themeContext}>
          <div className="note-app">
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>          
      );
    }

    return (
      <ThemeProvider value={this.state.themeContext}>
        <div className="note-app">
          <header className="note-app__header">
            <h1>Notes</h1>
            <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/note/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default NoteApp;