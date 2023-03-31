import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-screen">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
