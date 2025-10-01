import Image from 'next/image'

import '@/assets/scss/style.scss'
import AppProviders from '../components/wrappers/AppProviders'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: {
    default:
      'Cash 4 edu - Where Learning Meets Opportunity',
    template:
      '%s - Cash 4 edu',
  },
  description:
    'A Fully Responsive Tailwind CSS Template, personal, agency, application, business, clean, creative, it solutions, startup, career, blog, modern, creative, multipurpose, portfolio, saas, software, tailwind css, etc.',
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <title>Cash 4 edu</title>
      <body className={`antialiased`}>
        
        <div id="__next_splash">
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  )
}
