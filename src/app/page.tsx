export function LandingPage() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto my-auto">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-theme-primary leading-tight sm:leading-tight">
        Make better money decisions in under{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] via-[#22e6b2] to-[#5B6DFF]">
          2 minutes
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-5 sm:mt-6 text-base sm:text-xl text-theme-secondary max-w-2xl font-normal leading-relaxed">
        India&apos;s most user-friendly financial calculator platform. 15+ calculators. No login required. 100% free.
      </p>

      {/* Main content area kept empty for future calculators */}
    </div>
  );
}
