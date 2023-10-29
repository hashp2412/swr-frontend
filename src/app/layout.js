import "tailwindcss/tailwind.css";
import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: 'SGI',
  description: 'Surendra Group Of Institutions',
  author:'Harsh Parashar & Sachi Srivastav'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
      
      <Script src="/scroll-entrance.js"></Script>
      <style>
          {`
            [data-entrance] { visibility: hidden; }
          `}
        </style>
      </head>
      <body>{children}</body>
    </html>
  )
}
