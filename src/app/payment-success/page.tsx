"use client"
import { useEffect } from "react";

const paymentSuccessUrl = process.env.NEXT_PUBLIC_PAYMENT_SUCCESS || "your-schema://payment-success";

export default function PaymentSuccess() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = paymentSuccessUrl;
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>Payment success redirecting to the app...</div>
    );
}
