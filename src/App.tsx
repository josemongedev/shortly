import Boost from "./components/Home/Boost";
import Features from "./components/Home/Features";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import ShortenIt from "@/components/Home/ShortenIt";

function App() {
  return (
    <main
      className={`flex h-full flex-col items-center overflow-x-hidden font-poppins`}
    >
      {/* Basic page scaffold */}
      {/* Login and Sign up */}
      <Navbar />
      {/* Call to action */}
      <Hero />
      {/* Create new short link, if logged in, otherwise redirects to login page */}
      <ShortenIt />
      {/* App characteristics */}
      <Features />
      {/* CTA banner */}
      <Boost />
      {/* Site links and social media */}
      <Footer />
    </main>
  );
}

export default App;
