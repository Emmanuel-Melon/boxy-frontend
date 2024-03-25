import { Navbar } from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`min-h-screen`}>{children}</main>
    </>
  );
}
