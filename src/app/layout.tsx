import '@/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Empty Cheats',
    template: '%s | Empty Cheats'
  }
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <meta name="website developer" content="discord: faelcanalha" />

      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css" />
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-thin.css" />
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-solid.css" />
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-regular.css" />
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-light.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <script src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js" async />

      <body>{children}</body>
    </html>
  );
}
