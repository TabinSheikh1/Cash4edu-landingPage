import Image from "next/image";
import "@/assets/scss/style.scss";
import AppProviders from "../components/wrappers/AppProviders";
import { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider"; // 👈 keeps toggle support

export const metadata: Metadata = {
  title: {
    default: "Cash 4 edu - Where Learning Meets Opportunity",
    template: "%s - Cash 4 edu",
  },
  description:
    "A Fully Responsive Tailwind CSS Template, personal, agency, application, business, clean, creative, it solutions, startup, career, blog, modern, creative, multipurpose, portfolio, saas, software, tailwind css, etc.",
};

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
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 👇 Ensures dark mode applies before hydration to prevent light flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>

      <body className="antialiased bg-white text-black dark:bg-gray-900 dark:text-white">
        <div id="__next_splash">
          {/* 👇 Wrap with ThemeProvider so toggle works globally */}
          <ThemeProvider>
            <AppProviders>{children}</AppProviders>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
