import React, { useContext } from 'react';
// import './App.css';
import Quiz from '../components/quizapplication/quiz/Quiz';
import Login from '../components/quizapplication/login/Login';
import Register from '../components/quizapplication/register/Register';
import AdminPanel from '../components/quizapplication/adminpanel/AdminPanel';
import Stats from '../components/quizapplication/state/State';
import AuthProvider, { AuthContext } from '../context/AuthContext';
import AdminProvider from '../context/AdminContext';

function QuizAPP() {
    const { user, logout } = useContext(AuthContext);

    return (
        <AuthProvider>
            <AdminProvider>
                <div className="App">
                    <header className="App-header">
                        <h1>Quiz App</h1>
                        {user ? (
                            <>
                                <button onClick={logout}>Logout</button>
                                {user.role === 'admin' ? <AdminPanel /> : <Quiz />}
                                <Stats />
                            </>
                        ) : (
                            <>
                                <Login />
                                <Register />
                            </>
                        )}
                    </header>
                </div>
            </AdminProvider>
        </AuthProvider>
    );
}

export default QuizAPP;
