'use client'
import { useEffect, useState } from 'react';
import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import * as CustomEmailVerification from 'supertokens-auth-react/recipe/emailverification';
import Session from 'supertokens-auth-react/recipe/session';

const appName = process.env.NEXT_PUBLIC_APPNAME;
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN
const apiBasePath = process.env.NEXT_PUBLIC_API_BASE_PATH;

export default function Home() {
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Home Page</div>
    </div>
  );
}
