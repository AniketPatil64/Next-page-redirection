'use client';
import { EmailVerification } from 'supertokens-auth-react/recipe/emailverification/prebuiltui';
import { useEffect, useState } from 'react';
import SuperTokens from 'supertokens-auth-react';
import * as CustomEmailVerification from 'supertokens-auth-react/recipe/emailverification';
import Session from 'supertokens-auth-react/recipe/session';

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
                CustomEmailVerification.init({
                    mode: 'REQUIRED',
                }),
                Session.init(),
            ],
        });
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div>
            <EmailVerification />
        </div>
    );
}
