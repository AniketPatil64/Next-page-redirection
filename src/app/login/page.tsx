"use client"
import { useEffect } from "react";

const loginRedirectUrl = process.env.NEXT_PUBLIC_REDIRECT_TO_LOGIN || "your-schema://login";

export default function PaymentSuccess() {

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = loginRedirectUrl;
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>Redirecting...</div>
    );
}
