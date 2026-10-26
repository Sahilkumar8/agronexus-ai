
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CloudSun,
  Leaf,
  Menu,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Upload,
  Users,
  X,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "AI Crop Recommendation",
    text: "Get crop recommendations using soil, location, season and farm conditions.",
    tag: "Decision Engine",
  },
  {
    icon: CloudSun,
    title: "Weather & Risk Intelligence",
    text: "Understand weather conditions and identify potential farming risks early.",
    tag: "Risk Analysis",
  },
  {
    icon: TrendingUp,
    title: "Profit & Cost Prediction",
    text: "Estimate investment, production cost, expected yield and potential profit.",
    tag: "Financial AI",
  },
  {
    icon: Upload,
    title: "Crop Health Analysis",
    text: "Upload crop images for AI-assisted health and disease-risk analysis.",
    tag: "Computer Vision",
  },
  {
    icon: BarChart3,
    title: "Market Demand Intelligence",
    text: "Use market signals and demand insights to plan better selling decisions.",
    tag: "Market AI",
  },
  {
    icon: Users,
    title: "Farmer Marketplace",
    text: "Connect farmers and buyers through direct crop listings and transparent pricing.",
    tag: "Marketplace",
  },
];

const steps = [
  {
    number: "01",
    title: "Build your farm profile",
    text: "Add your location, land size, soil type and farming conditions.",
  },
  {
    number: "02",
    title: "Let AgroNexus analyze",
    text: "Our decision engine combines farm inputs, weather and market signals.",
  },
  {
    number: "03",
    title: "Take a smarter decision",
    text: "Get recommendations, risks, estimates and actionable next steps.",
  },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F4EA] text-[#17211B]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#E3E9E2] bg-[#F7F4EA]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#173F2A] text-white shadow-sm">
              <Leaf size={23} />
            </div>

            <div>
              <div className="text-lg font-extrabold tracking-tight text-[#173F2A]">
                AgroNexus
              </div>
              <div className="text-xs font-medium text-[#68736B]">
                AI for smarter farming
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-semibold text-[#536057] hover:text-[#2F7D4A]">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-semibold text-[#536057] hover:text-[#2F7D4A]">
              How it works
            </a>
            <a href="#intelligence" className="text-sm font-semibold text-[#536057] hover:text-[#2F7D4A]">
              Intelligence
            </a>
            <a href="#marketplace" className="text-sm font-semibold text-[#536057] hover:text-[#2F7D4A]">
              Marketplace
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl px-4 py-2.5 text-sm font-bold text-[#2F7D4A] hover:bg-[#EEF6EF]">
              Sign in
            </button>
            <button className="rounded-xl bg-[#2F7D4A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#25643B]">
              Get started
            </button>
          </div>

          <button
            className="rounded-xl p-2 text-[#173F2A] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-[#E3E9E2] bg-[#F7F4EA] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#features" onClick={() => setMobileOpen(false)} className="font-semibold">
                Features
              </a>
              <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="font-semibold">
                How it works
              </a>
              <a href="#intelligence" onClick={() => setMobileOpen(false)} className="font-semibold">
                Intelligence
              </a>
              <a href="#marketplace" onClick={() => setMobileOpen(false)} className="font-semibold">
                Marketplace
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#EAB308]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#65A30D]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D7E6D8] bg-[#EEF6EF] px-4 py-2 text-sm font-bold text-[#2F7D4A]">
                <span className="h-2 w-2 rounded-full bg-[#65A30D]" />
                AI-powered agriculture intelligence
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-tight text-[#173F2A] sm:text-6xl lg:text-7xl">
                Make every farming decision
                <span className="text-[#2F7D4A]"> smarter.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#68736B]">
                AgroNexus AI brings crop recommendations, weather intelligence,
                risk analysis, profit forecasting and market insights together
                in one farmer-first platform.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#173F2A] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#102D1E]">
                  Explore AgroNexus
                  <ArrowRight size={17} />
                </button>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border border-[#CBD8CC] bg-white px-6 py-3.5 text-sm font-bold text-[#2F7D4A] hover:bg-[#EEF6EF]"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-[#68736B]">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-[#2F7D4A]" />
                  Data-driven
                </span>
                <span className="flex items-center gap-2">
                  <Leaf size={17} className="text-[#2F7D4A]" />
                  Farmer-first
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={17} className="text-[#2F7D4A]" />
                  AI-powered
                </span>
              </div>
            </div>

            {/* HERO DASHBOARD */}
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#EAB308]/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#245A3C] bg-[#173F2A] p-4 shadow-2xl sm:p-5">
                <div className="rounded-[1.5rem] bg-[#F7F4EA] p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#7A847D]">
                        Farm intelligence
                      </p>
                      <h2 className="mt-1 text-xl font-extrabold text-[#173F2A]">
                        Your farm overview
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-[#EEF6EF] px-3 py-2 text-xs font-bold text-[#2F7D4A]">
                      <span className="h-2 w-2 rounded-full bg-[#65A30D]" />
                      AI Active
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs text-[#7A847D]">Crop health</p>
                      <p className="mt-2 text-3xl font-extrabold text-[#2F7D4A]">92%</p>
                      <p className="mt-1 text-xs font-semibold text-[#65A30D]">
                        Healthy condition
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs text-[#7A847D]">Risk level</p>
                      <p className="mt-2 text-3xl font-extrabold text-[#173F2A]">Low</p>
                      <p className="mt-1 text-xs font-semibold text-[#65A30D]">
                        Stable forecast
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-2xl bg-[#EEF6EF] p-5">
                    <div className="flex gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2F7D4A] text-white">
                        <Sprout size={21} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#6B756D]">
                          AI recommendation
                        </p>
                        <h3 className="mt-1 font-extrabold text-[#173F2A]">
                          Consider wheat for the upcoming season
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#68736B]">
                          Based on soil profile, season conditions and expected
                          market demand.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-2xl bg-[#DDEBDD]" />
                    <div className="h-16 rounded-2xl bg-[#C9DEC9]" />
                    <div className="h-16 rounded-2xl bg-[#B5D1B7]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-[#E3E9E2] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-8 sm:grid-cols-4 lg:px-8">
            <div className="border-r border-[#E3E9E2] px-5 text-center">
              <p className="text-2xl font-extrabold text-[#173F2A]">6+</p>
              <p className="mt-1 text-xs font-medium text-[#68736B]">AI decision modules</p>
            </div>
            <div className="border-r border-[#E3E9E2] px-5 text-center">
              <p className="text-2xl font-extrabold text-[#173F2A]">360°</p>
              <p className="mt-1 text-xs font-medium text-[#68736B]">Farm intelligence</p>
            </div>
            <div className="border-r border-[#E3E9E2] px-5 text-center">
              <p className="text-2xl font-extrabold text-[#173F2A]">AI</p>
              <p className="mt-1 text-xs font-medium text-[#68736B]">Decision support</p>
            </div>
            <div className="px-5 text-center">
              <p className="text-2xl font-extrabold text-[#173F2A]">1</p>
              <p className="mt-1 text-xs font-medium text-[#68736B]">Connected platform</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-widest text-[#2F7D4A]">
                One intelligent platform
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#173F2A] sm:text-4xl lg:text-5xl">
                Everything you need to make better farming decisions.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#68736B]">
                From selecting the right crop to understanding market demand,
                AgroNexus connects the most important parts of modern farming.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-3xl border border-[#E3E9E2] bg-[#F7F4EA] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BFD7C3] hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173F2A] text-white">
                        <Icon size={22} />
                      </div>

                      <span className="rounded-full bg-[#EEF6EF] px-3 py-1 text-[11px] font-bold text-[#2F7D4A]">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold text-[#173F2A]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#68736B]">
                      {feature.text}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#2F7D4A]">
                      Explore capability
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bg-[#F7F4EA]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-widest text-[#2F7D4A]">
                  How it works
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#173F2A] sm:text-4xl">
                  Turn farm data into practical decisions.
                </h2>

                <p className="mt-5 leading-7 text-[#68736B]">
                  AgroNexus is designed around a simple principle:
                  complicated agricultural intelligence should result in
                  simple, actionable recommendations.
                </p>

                <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#173F2A] px-5 py-3 text-sm font-bold text-white hover:bg-[#102D1E]">
                  Start your farm profile
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-5 rounded-3xl border border-[#DCE6DD] bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#173F2A] text-sm font-extrabold text-white">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-[#173F2A]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#68736B]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTELLIGENCE */}
        <section id="intelligence" className="bg-[#173F2A]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-widest text-[#A9D2AF]">
                  AgroNexus intelligence
                </p>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  One decision engine.
                  <br />
                  Multiple farming signals.
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-[#C7D8CB]">
                  The platform is designed to combine farm profile,
                  environmental conditions, crop information, financial
                  inputs and market signals into a unified recommendation.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "Soil",
                    "Weather",
                    "Season",
                    "Crop",
                    "Market",
                    "Costs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-bold text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
                <div className="rounded-3xl bg-[#F7F4EA] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#7A847D]">
                        Decision engine
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold text-[#173F2A]">
                        Recommendation summary
                      </h3>
                    </div>

                    <div className="rounded-xl bg-[#EEF6EF] p-3 text-[#2F7D4A]">
                      <Zap size={20} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl bg-white p-4">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-[#173F2A]">Crop suitability</span>
                        <span className="text-[#2F7D4A]">High</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-[#E3E9E2]">
                        <div className="h-2 w-[88%] rounded-full bg-[#2F7D4A]" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-[#173F2A]">Weather stability</span>
                        <span className="text-[#65A30D]">Good</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-[#E3E9E2]">
                        <div className="h-2 w-[76%] rounded-full bg-[#65A30D]" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-[#173F2A]">Market opportunity</span>
                        <span className="text-[#2F7D4A]">Strong</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-[#E3E9E2]">
                        <div className="h-2 w-[82%] rounded-full bg-[#2F7D4A]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl bg-[#EEF6EF] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#6B756D]">
                      Suggested action
                    </p>
                    <p className="mt-2 font-extrabold text-[#173F2A]">
                      Review wheat as a high-potential seasonal option.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARKETPLACE */}
        <section id="marketplace" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-widest text-[#2F7D4A]">
                  Farmer marketplace
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#173F2A] sm:text-5xl">
                  From better decisions to better selling.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-[#68736B]">
                  Farmers can list crops with quantity and pricing while
                  buyers discover available produce through a direct,
                  transparent marketplace.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#EEF6EF] px-4 py-2 text-sm font-bold text-[#2F7D4A]">
                    Direct listings
                  </span>
                  <span className="rounded-full bg-[#EEF6EF] px-4 py-2 text-sm font-bold text-[#2F7D4A]">
                    Transparent pricing
                  </span>
                  <span className="rounded-full bg-[#EEF6EF] px-4 py-2 text-sm font-bold text-[#2F7D4A]">
                    Buyer discovery
                  </span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#DCE6DD] bg-[#F7F4EA] p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#7A847D]">
                      Fresh listings
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-[#173F2A]">
                      Crop marketplace
                    </h3>
                  </div>

                  <button className="rounded-xl bg-[#173F2A] px-4 py-2 text-xs font-bold text-white">
                    View all
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    ["Wheat", "500 kg", "₹28/kg"],
                    ["Tomato", "250 kg", "₹34/kg"],
                    ["Potato", "800 kg", "₹22/kg"],
                  ].map(([crop, quantity, price]) => (
                    <div
                      key={crop}
                      className="flex items-center justify-between rounded-2xl bg-white p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF6EF]">
                          <Leaf size={19} className="text-[#2F7D4A]" />
                        </div>
                        <div>
                          <p className="font-extrabold text-[#173F2A]">{crop}</p>
                          <p className="text-xs text-[#7A847D]">{quantity}</p>
                        </div>
                      </div>

                      <p className="font-extrabold text-[#2F7D4A]">{price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F7F4EA] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#2F7D4A] px-7 py-14 text-center shadow-xl sm:px-12">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#D9F0DD]">
              Built for the future of farming
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Turn agricultural data into your next smart decision.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#E0F0E2]">
              Create your farm profile and explore how AgroNexus can connect
              crop intelligence, risk analysis, profitability and markets.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#173F2A] shadow-lg hover:bg-[#F7F4EA]">
              Get started with AgroNexus
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#E3E9E2] bg-[#F7F4EA]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-extrabold text-[#173F2A]">AgroNexus AI</p>
            <p className="mt-1 text-xs text-[#68736B]">
              AI-powered agriculture decision platform.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-semibold text-[#68736B]">
            <a href="#features" className="hover:text-[#2F7D4A]">Features</a>
            <a href="#how-it-works" className="hover:text-[#2F7D4A]">How it works</a>
            <a href="#marketplace" className="hover:text-[#2F7D4A]">Marketplace</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
