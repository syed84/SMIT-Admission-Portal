// import React, { useState } from 'react';
// import axios from 'axios';

// const NotificationSender = () => {
//     const [message, setMessage] = useState('');
//     const [status, setStatus] = useState(null);
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus(null);
//         setError(null);

//         try {
//             const response = await axios.post('http://localhost:6540/api/send-notification', { message });
//             setStatus(response.data.message);
//         } catch (err) {
//             setError(err.response ? err.response.data.message : 'Error sending notification');
//         }
//     };

//     return (
//         <div>
//             <h2>Send Notification</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Message:</label>
//                     <input
//                         type="text"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Send</button>
//             </form>
//             {status && <p>{status}</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default NotificationSender;




import React, { useState } from 'react';
import axios from 'axios';

const NotificationSender = () => {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('all'); // Default to 'all'
    const [responseMessage, setResponseMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage(null);
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/api/send-notification', { message, status });
            setResponseMessage(response.data.message);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error sending notification');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="card p-4 shadow-sm">
                    <h2 className="mb-4 text-center">Send Notification</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea
                                type="text"
                                id="message"
                                className="form-control"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status:</label>
                            <select
                                id="status"
                                className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="all">All Users</option>
                                <option value="enroll">Enroll</option>
                                <option value="pass">Pass</option>
                                <option value="fail">Fail</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send</button>
                    </form>
                    {responseMessage && <p className="mt-3 text-success">{responseMessage}</p>}
                    {error && <p className="mt-3 text-danger">{error}</p>}
                </div>

            </div>
        </div>
    );
};

export default NotificationSender;
