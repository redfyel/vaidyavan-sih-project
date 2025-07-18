import React, { useState, useCallback } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { FaLeaf, FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage = ({ isAuthenticated, setIsAuthenticated, setUserID }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emoji, setEmoji] = useState('🌿');  
  const navigate = useNavigate();

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleLogin = useCallback(async () => {
    setIsSubmitting(true);
    setError('');
    try {
      const loginResponse = await fetch(`https://vaidyavan-app.onrender.com/user-api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!loginResponse.ok) {
        const errorData = await loginResponse.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const userResponse = await fetch(`https://vaidyavan-app.onrender.com/user-api/login`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.json();
        throw new Error(errorData.message || 'Error fetching user details');
      }

      const users = await userResponse.json();
      const user = users.find((user) => user.email === credentials.email);

      if (user) {
        setIsAuthenticated(true);
        setUserID(user._id);
        navigate(`/${user._id}`);
      } else {
        throw new Error('User not found');
      }
    } catch (err) {
      setError(err.message || 'Invalid user or password');
    } finally {
      setIsSubmitting(false);
    }
  }, [credentials, navigate, setIsAuthenticated, setUserID]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { email, password } = credentials;

      if (email && password) {
        handleLogin();
      } else {
        setError('Please enter both email and password');
      }
    },
    [credentials, handleLogin]
  );

  const handleEmojiChange = useCallback(() => {
    const plantEmojis = ['🌿', '🌻', '🌵', '🍃', '🌴'];
    setEmoji(plantEmojis[Math.floor(Math.random() * plantEmojis.length)]);
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#cfe2d9' }}>
      <form className="p-5 bg-light rounded shadow-lg" onSubmit={onSubmit} style={{ width: '100%', maxWidth: '400px' }} aria-label="Login Form">
        {/* Icon and Title */}
        <div className="text-center mb-4">
          <FaLeaf size={50} color="#4caf50" aria-hidden="true" />
          <h1 className="text-center mt-2" style={{ color: '#4caf50' }}>Login</h1>
        </div>

        {/* Email Input with Icon */}
        <div className="form-group mb-3">
          <label htmlFor="email" className="text-muted">Email</label>
          <div className="input-group input-group-custom">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaEnvelope color="#4caf50" />
              </span>
            </div>
            <input
              id="email"
              className="form-control border-secondary"
              type="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-label="Email input"
            />
          </div>
        </div>

        {/* Password Input with Icon */}
        <div className="form-group mb-4">
          <label htmlFor="password" className="text-muted">Password</label>
          <div className="input-group input-group-custom">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaLock color="#4caf50" />
              </span>
            </div>
            <input
              id="password"
              className="form-control border-secondary"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-label="Password input"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="btn btn-success mx-auto d-block" type="submit" disabled={isSubmitting} aria-label="Sign In">
            {isSubmitting ? (
              <div className="spinner-border spinner-border-sm text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && <div className="text-danger text-center mt-3" role="alert">{error}</div>}

        {/* Signup Link */}
        <div className="text-center mt-4">
          <small>
            New to VaidyaVan?{' '}
            <Link className="text-primary" to="/signup" aria-label="Sign Up">
              Sign Up Now
            </Link>
          </small>
        </div>

        {/* Emoji Element */}
        <div className="text-center mt-5" onClick={handleEmojiChange} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
          <span className="ml-3" aria-live="polite" style={{ fontWeight: 'bold' }}>Feeling {emoji} today?</span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
