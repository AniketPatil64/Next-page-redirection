'use client';

import { useEffect, useState } from "react";
import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { ResetPasswordUsingToken } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui';

export default function Auth() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        SuperTokens.init({
            appInfo: {
                appName: "Crowd-Searched",
                apiDomain: "http://localhost:4000",
                websiteDomain: "http://localhost:3000"
            },
            recipeList: [
                EmailPassword.init({
                    resetPasswordUsingTokenFeature: {
                        disableDefaultUI: true,
                    },
                }),
            ]
        });
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div>
            <h1>Reset Your Password</h1>
            <ResetPasswordUsingToken />
        </div>
    );
}
