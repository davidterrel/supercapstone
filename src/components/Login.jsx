import { useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com/auth/login';

export default function Login({ token }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                // Handle successful login (e.g., save token, navigate user)
                console.log('Login successful:', result);
            } else {
                setErrorMessage(result.message || 'Login failed');
            }
        } catch (err) {
            console.error('Login error:', err);
            setErrorMessage('An error occurred during login.');
        }
    }

    return (
        <div className='signUp-body'>
            <form className='login' onSubmit={handleLogin}>
                <label>Username:</label>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter Username'
                    required
                />
                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Password'
                    required
                />
                <div className='login-button-wrapper'>
                    <button type='submit'>Login</button>
                </div>
            </form>

            {errorMessage && <p className='error-message'>{errorMessage}</p>}

            <div className='Profile-Container'></div>
        </div>
    );
}