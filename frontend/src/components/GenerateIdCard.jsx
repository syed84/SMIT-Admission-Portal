import React, { useState } from 'react';
import axios from 'axios';
import Navbar2 from './Navbar2';

function GenarateIdCard() {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [email, setEmail] = useState('');
    const [serialNo, setSerialNo] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !studentId || !email || !serialNo) {
            setError('All fields are required');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await axios({
                url: 'http://localhost:5000/api/pdf/generate-id',
                method: 'post',
                data: {
                    name,
                    studentId,
                    email,
                    serialNo,
                },
                responseType: 'blob', // Important to handle the PDF file
            });

            // Create a URL for the PDF blob and download it
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${name}_id_card.pdf`);
            document.body.appendChild(link);
            link.click();
        } catch (err) {
            console.error('Error generating ID card:', err);
            setError('There was an error generating the ID card.');
        } finally {
            setLoading(false);
        }
    };

    return (

        <div>
            <div>
                <Navbar2 />
            </div>

            <div className="container mt-4">
                <h2 className="mb-4">ID Card Generator</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="studentId" className="form-label">Student ID:</label>
                        <input
                            type="text"
                            id="studentId"
                            className="form-control"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="serialNo" className="form-label">Serial No:</label>
                        <input
                            type="text"
                            id="serialNo"
                            className="form-control"
                            value={serialNo}
                            onChange={(e) => setSerialNo(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Generating...' : 'Generate ID Card'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default GenarateIdCard;
