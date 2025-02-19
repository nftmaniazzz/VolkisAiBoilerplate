import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { geistSans } from "../lib/fonts";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the current pathname
  const headersList = await Headers();
  const pathname = headersList.get("x-pathname") || "";

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              {/*
                Removed nav/header block here so it never renders on any page.
                Previously, the following block rendered:
                {!isDashboard && (
                  <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                    <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                      <div className="flex gap-5 items-center font-semibold">
                        <Link href={"/"}>Next.js Supabase Starter</Link>
                        <div className="flex items-center gap-2">
                          <DeployButton />
                        </div>
                      </div>
                      {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                    </div>
                  </nav>
                )}
              */}
              <div className={`flex flex-col ${isDashboard ? '' : 'gap-20 max-w-5xl p-5'}`}>
                {children}
              </div>

              {/* Only show footer if we're not in the dashboard */}
              {!isDashboard && (
                <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                  <p>
                    Powered by{" "}
                    <a
                      href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                      target="_blank"
                      className="font-bold hover:underline"
                      rel="noreferrer"
                    >
                      Supabase
                    </a>
                  </p>
                  <ThemeSwitcher />
                </footer>
              )}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
} 