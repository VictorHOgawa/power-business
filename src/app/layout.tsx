import type { Metadata } from "next";
import { CookiesProvider } from "next-client-cookies/server";
import { Poppins } from "next/font/google";
import "swiper/css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Power Business",
  icons: {
    icon: "/icon.svg",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      {/* <Script type="text/javascript" id="clarity">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qdcx4ukh2o");`}
      </Script>
      <GoogleAnalytics gaId={"G-WTC5FXCT9Y"} /> */}
      <CookiesProvider>
        <body className={`${poppins.className} `}>{children}</body>
      </CookiesProvider>
    </html>
  );
}
