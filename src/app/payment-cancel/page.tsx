"use client"
import { useEffect } from "react";

const paymentCancelUrl = process.env.NEXT_PUBLIC_PAYMENT_CANCEL || "your-schema://payment-cancel";

export default function PaymentSuccess() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = paymentCancelUrl;
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>Redirecting...</div>
    );
}
