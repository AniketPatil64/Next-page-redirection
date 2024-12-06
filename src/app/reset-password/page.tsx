'use client';
import { ResetPasswordUsingToken } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui';
import { useEffect, useState } from 'react';
import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';

const appName = process.env.NEXT_PUBLIC_APPNAME;
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN
const apiBasePath = process.env.NEXT_PUBLIC_API_BASE_PATH;

export default function Auth() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        SuperTokens.init({
            appInfo: {
                appName: `${appName}`,
                apiDomain: `${apiDomain}`,
                websiteDomain: `${websiteDomain}`,
                apiBasePath: `${apiBasePath}`
            },
            recipeList: [
                EmailPassword.init({
                    resetPasswordUsingTokenFeature: {
                        disableDefaultUI: true,
                    },
                }),
            ],
        });
    }, []);

    if (!isClient) {
        return null;
    }
    return (
        <div>
            <ResetPasswordUsingToken />
        </div>
    );
}
