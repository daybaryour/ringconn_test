import "./css/style.css";

export const metadata = {
  title: "RingConnect: Enterprise-grade Voice AI for Businesses",
  description:
    "RingConnect helps businesses automate sales outreach, lead qualification, appointment booking, customer support, and account management—all through AI-powered voice interactions and calls in over 30 languages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth w-full">
      <body className={`antialiased bg-[#070707] max-w-[1442px] mx-auto`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
