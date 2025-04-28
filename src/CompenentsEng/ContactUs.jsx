import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function ContactUs() {
    const [agreed, setAgreed] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let newErrors = {};

        ['firstName', 'lastName', 'email', 'message'].forEach((field) => {
            if (!formData.get(field)) {
                newErrors[field] = 'This field is required';
            }
        });

        if (!agreed) {
            newErrors.agreed = 'You must agree to the privacy policy';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setLoading(true);
        setSuccessMessage('');

        const mailData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mailData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Your message has been successfully sent!');
                event.target.reset();
                setAgreed(false);
            } else {
                setErrors({ general: data.error || 'An error occurred, please try again.' });
            }
        } catch (error) {
            setErrors({ general: 'Connection error, please check your internet connection.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative isolate px-6 py-12 sm:py-20 lg:px-8 bg-[rgb(40,10,90)]">
            <section id='contact'>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-[rgb(245,215,150)] sm:text-5xl mb-5">
                        Contact With Us
                    </h2>
                    <p className="mt-2 text-lg text-[rgb(245,215,150,0.8)] mb-8">
                        Get in touch with our team for any inquiries or support.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-14">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {[{ label: 'First Name', name: 'firstName' }, { label: 'Last Name', name: 'lastName' }, { label: 'Email', name: 'email' }].map(({ label, name }, index) => (
                            <div key={index} className={name === 'email' ? 'sm:col-span-2' : ''}>
                                <label className="block text-sm font-medium text-[rgb(245,215,150)]">{label}</label>
                                <input
                                    type={name === 'email' ? 'email' : 'text'}
                                    name={name}
                                    placeholder={label === 'Email' ? 'you@example.com' : label}
                                    className={`mt-2 block w-full rounded-lg border ${errors[name] ? 'border-red-500' : 'border-[rgb(245,215,150,0.6)]'} bg-[rgb(245,215,150,0.1)] px-4 py-3 text-white shadow-md`}
                                />
                                {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
                            </div>
                        ))}
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-[rgb(245,215,150)]">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                placeholder="Enter your message"
                                className={`mt-2 block w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-[rgb(245,215,150,0.6)]'} bg-[rgb(245,215,150,0.1)] px-4 py-3 text-white shadow-md`}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <div className="sm:col-span-2 flex items-center gap-x-4">
                            <Switch checked={agreed} onChange={setAgreed} className={`${agreed ? 'bg-purple-700' : 'bg-gray-500'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer`}>
                                <span className={`${agreed ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                            </Switch>
                            <label className="text-sm text-[rgb(245,215,150)]">
                                By selecting this, you agree to our privacy policy.
                            </label>
                        </div>
                        {errors.general && <p className="text-red-500 text-sm mt-1">{errors.general}</p>}
                        {successMessage && <p className="text-green-500 text-sm mt-1">{successMessage}</p>}
                    </div>
                    <div className="mt-10">
                        <button type="submit" disabled={loading} className="w-full rounded-lg bg-purple-700 px-5 py-3 text-white text-lg font-semibold shadow-md cursor-pointer">{loading ? 'Sending...' : 'Send'}</button>
                    </div>
                </form>
            </section>
        </div>
    );
}