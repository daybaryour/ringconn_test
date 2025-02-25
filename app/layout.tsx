import "./css/style.css";

export const metadata = {
  title: "Ringconnect",
  description: "AI powered voice platform to help businesses drive sales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased bg-[#070707] bg-no-repeat md:bg-[0px_269px] bg-[50%_305px] md:bg-[100%__784.1819458007812px] bg-[200%__784.1819458007812px]`}
        style={{
          backgroundImage: "url(images/PerspectiveGrid.png)",
          //backgroundPositionY: "269px",
          //backgroundPositionX: "-2816.96px",
          //backgroundSize: "100% 784.1819458007812px",
        }}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
