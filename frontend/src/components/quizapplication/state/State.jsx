import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';

const Stats = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({ totalQuestions: 0, correctAnswers: 0 });

    useEffect(() => {
        axios.get(`http://localhost:4500/api/users/${user._id}/stats`)
            .then(response => setStats(response.data))
            .catch(err => console.error(err));
    }, [user]);

    return (
        <div>
            <h2>Your Statistics</h2>
            <p>Total Questions: {stats.totalQuestions}</p>
            <p>Correct Answers: {stats.correctAnswers}</p>
            <p>Accuracy: {((stats.correctAnswers / stats.totalQuestions) * 100).toFixed(2)}%</p>
        </div>
    );
};

export default Stats;
