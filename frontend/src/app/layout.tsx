import type { Metadata } from "next";
import { Inter, Montserrat, Syne } from "next/font/google";
import "./globals.css";
import "../assets/markdown.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import TanstackProvider from "@/lib/providers/TanstackProvider";
import Script from "next/script";

const fontInter = Inter({
    subsets: ["latin"],
    variable: "--",
});

const fontMontserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

const fontSyne = Syne({
    subsets: ["latin"],
    weight: ["700"],
    variable: "--font-syne",
});

export const metadata: Metadata = {
    title: "Kleenestar v2",
    description: "Empower your Marketing with Cutting-edge AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen h-full bg-background  antialiased",
                    fontInter.variable,
                    fontMontserrat.variable,
                    fontSyne.variable,
                )}
            >
                <TanstackProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster expand={true} position="bottom-right" richColors />
                    </ThemeProvider>
                </TanstackProvider>

                {/* Google Tag Manager script */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-5V1STFY91V"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-5V1STFY91V');
                    `}
                </Script>
            </body>
        </html>
    );
}
