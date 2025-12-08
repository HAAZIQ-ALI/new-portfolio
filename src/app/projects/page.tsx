export default function Projects() {
  return (
    <section className="bg-[#1B262C] min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-stack font-bold text-4xl text-[#e0fbfc] mb-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add project cards here */}
          <div className="bg-[#2b2d42] rounded-lg p-6 border border-[#98c1d9]/20 hover:border-[#98c1d9]/50 transition-colors">
            <h2 className="font-stack font-semibold text-xl text-[#e0fbfc] mb-2">
              Project 1
            </h2>
            <p className="font-lexend text-[#98c1d9] text-sm">
              Description 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
