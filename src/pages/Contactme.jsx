import React from 'react';

const Contactme = () => {
    return (
        <div className='contact-wrapper'>
            <div className='leftside-card'>
                <p>Contact Me</p>

                <div style={{ margin: '10px 0', fontSize: '15px' }}>
                    <p style={{ display: 'inline' }}>
                        <strong>Mobile:</strong>{' '}
                        <a href='tel:+919492463808'>+91 9492463808</a>
                    </p>
                    <br />
                    <p style={{ display: 'inline' }}>
                        <strong>Email:</strong>{' '}
                        <a href='mailto:vishal12viswanath@gmail.com'>
                            vishal12viswanath@gmail.com
                        </a>
                    </p>
                </div>
                <div className='google-maps'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30437.65703178784!2d78.35557808624752!3d17.521488561694785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8dff28839e11%3A0x30e1ac4d7d83c8af!2sNizampet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1718812993540!5m2!1sen!2sin'
                        style={{
                            border: 0,
                            maxWidth: '100%',
                            borderRadius: '20px',
                            height: '160px',
                        }}
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy=''
                    ></iframe>
                </div>
            </div>

            <div className='rightside-card contact-container'>
                <form className='contact-form'>
                    <input type='text' placeholder='Full Name' />
                    <input type='number' placeholder='Mobile Number' />
                    <input type='email' placeholder="What's your email?" />
                    <textarea placeholder='Your questions...'></textarea>
                    <button type='submit'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
};

export default Contactme;
