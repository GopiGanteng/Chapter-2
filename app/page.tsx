import Image from "next/image";


export default async function Home() {
  return (
    <div className="min-h-screen bg-[#000001] flex flex-col">
      {/* Navbar */}
      
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center text-center px-6 relative">
        <div className="max-w-2xl bg-opacity-80 flex items-center space-x-6">
  {/* Foto */}
  <img
    src="img/gopi.jpeg"
    alt="Profile"
    width={150}
    height={150}
    className="rounded-full border-4 border-white"
  />

  {/* Teks */}
  <div>
    <h2 className="text-3xl font-bold text-white mb-2 text-left">Hi, I’m Raffi</h2>
    <p className="text-white text-lg mb-4 text-left">A Frontend Developer</p>
    <p className="text-white text-base text-left">
      I craft the digital experiences users see and interact with. 
      From beautiful layouts to responsive designs, I turn ideas into 
      engaging, user-friendly interfaces that work seamlessly across all  devices.
    </p>
  </div>
</div>
      </main>
    </div>
  );
}