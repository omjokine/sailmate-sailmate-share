import '../styles/globals.css'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

export const metadata = {
  title: {
    template: '%s | Nautics Sailmate',
    default: 'Nautics Sailmate',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
