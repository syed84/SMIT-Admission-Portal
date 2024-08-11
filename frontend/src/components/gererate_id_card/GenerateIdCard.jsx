import React, { useState } from 'react';
import { generateIdCard } from '../../services/id_card/id.card';

const GenerateIdCard = () => {
    const [form, setForm] = useState({ name: '', studentId: '', email: '', serialNo: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleGenerate = async () => {
        try {
            const response = await generateIdCard(form);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'id_card.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="studentId" placeholder="Student ID" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="serialNo" placeholder="Serial No" onChange={handleChange} />
            <button onClick={handleGenerate}>Generate ID Card</button>
        </div>
    );
};

export default GenerateIdCard;
