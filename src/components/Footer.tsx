export default function Footer() {
  return (
    <footer className="bg-[#1B262C] border-t border-[#98c1d9]/20 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-lexend text-sm text-[#98c1d9]">
          © {new Date().getFullYear()} haaziq ali the learner. All rights reserved.
          
        </p>
          <a className="text-center text-sm font-ibm font-extrabold mt-2"            href="mailto:haaziq@karou.me"> deployed at karou.me ~  haaziq@karou.me</a>
      </div>
    </footer>
  );
}
