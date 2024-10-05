import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container my-5" style={{ maxWidth: "600px" }}>
                <h2 className="text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="p-3 border rounded">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-black">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-black">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label text-black">Message</label>
                        <textarea 
                            className="form-control" 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows="5" 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
