"use client"
import { useEffect } from "react";

const onboardingSuccesslUrl = process.env.NEXT_PUBLIC_ONBOARDING_SUCCESS || "your-schema://onboarding-success";

export default function OnboadSuccess() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = onboardingSuccesslUrl;
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>Onboard success redirecting to the app...</div>
    );
}
