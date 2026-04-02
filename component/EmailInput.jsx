'use client';
import { useState } from "react";

export default function EmailInput() {
    const [email, setEmail] = useState('');

    async function handleAddSub() {
        try {
            // make a post request to the backend with the email in the body
        } catch (error) {
            console.log('Error adding subscriber:', error.message);
        }
    }

    return (
        <div className="sign-up">
            <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button-card" onClick={handleAddSub}>
                Sign Up
            </button>
        </div>
    );
}