import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { StoreProvider } from "../storeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <StoreProvider>
          <Navbar/>
          {children}
          <Footer/>
          </StoreProvider>
      </div>

  );
}
