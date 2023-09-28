import './globals.css'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/redux/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'lihanhin',
  description: 'visualize tour dream house in 3d world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className='font-arial'>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
