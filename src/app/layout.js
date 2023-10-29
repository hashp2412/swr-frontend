import "tailwindcss/tailwind.css";
import "./globals.css";
export const metadata = {
  title: 'SGI',
  description: 'Surendra Group Of Institutions',
  author:'Harsh Parashar & Sachi Srivastav'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
      
      <script src="/scroll-entrance.js"></script>
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
