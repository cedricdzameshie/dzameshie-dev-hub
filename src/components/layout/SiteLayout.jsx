import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-140px)] max-w-7xl px-6 py-10 md:px-8 lg:px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}