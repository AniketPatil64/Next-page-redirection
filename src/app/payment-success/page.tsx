"use client"
import { useEffect } from "react";

export default function PaymentSuccess() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'crowd-searched://payment-success';
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>Redirecting to the app...</div>
    );
}
