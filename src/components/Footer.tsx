export default function Footer() {
  return (
    <footer className="bg-[#1B262C] border-t border-[#98c1d9]/20 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-lexend text-sm text-[#98c1d9]">
          © {new Date().getFullYear()} haaziq ali the learner. All rights reserved.
          
        </p>
        <p className="text-center text-sm font-suse">deployed at karou.me</p>
          <p className="text-center text-sm font-suse font-extrabold mt-2"> haaziq@karou.me</p>
      </div>
    </footer>
  );
}
