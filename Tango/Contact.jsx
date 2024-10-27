import React, { useState } from 'react';
import axios from 'axios';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone:''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form data submitted:", formData);
    //     // Reset form after submission
    //     setFormData({
    //         name: '',
    //         email: '',
    //         message: ''
    //     });
    // };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send form data to the backend
        axios.post('https://api.targuanagro.com/send-email', formData)
            .then((response) => {
                setStatus('Message sent successfully!');
                console.log('Form data submitted:', response.data);
            })
            .catch((error) => {
                setStatus('Failed to send message.');
                console.error('Error:', error);
            });

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone :'',
            message: ''
        });
    };
    return (
        <div className="d-flex  vh-110">
            <div className="container my-5" style={{ maxWidth: "1400px" }}>
            <h2 className="text-center mb-4">Contact Us</h2>
                <div className="row">
                    
                <div className="col-md-12 col-lg-4 ">
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
                          <label htmlFor="phone" className="form-label text-black">Mob</label>
                        <input 
                            type="noumber" 
                            className="form-control" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
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
                <div className="col-md-12  col-lg-4">
                 <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115293.28983757322!2d78.47988655243067!3d25.441094863732385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55c3481ca!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726985368570!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: '0',borderRadius:"5px",height:'52vh'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe> 
            </div>
            <div className="col-md-12  col-lg-4 text-black">
                <h1>Add .</h1>
                <h2 className='text-black'> C/O - Brajlal Niranjan Unac Targuawan Datiya Maadhya Pradesh India (475671)</h2>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;
