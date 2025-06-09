import { useState } from 'react';

import '../../App.css';
import { authService } from '../../shared/auth';
import { useTranslation } from 'react-i18next';

export function Auth() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { t } = useTranslation(['auth']);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        void authService.login({ login, password })
            .then((response) => {
                console.log('Login successful:', response);
                if (response.token) {
                    localStorage.setItem('token', response.token);
                }
            })
            .catch((err) => {
                setError('Login failed. Please check your credentials.');
                console.error('Login error:', err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>{t('auth:login')}</h2>
                {error && <div className="error-message">{t('auth:loginError')}</div>}
                <div className="form-group">
                    <label htmlFor="login">{t('auth:login')}:</label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">{t('auth:password')}:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? t('auth:loggingIn') : t('auth:loginButton')}
                </button>
            </form>
        </div>
    );
} 