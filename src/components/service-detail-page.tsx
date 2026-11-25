import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Award,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetailItem {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  image: string;
  category: string;
  tagline: string;
  architecture: string;
  specifications: { label: string; value: string }[];
  features: string[];
  standards: string;
  suitableFor: string;
  workflow: { step: string; title: string; desc: string }[];
}

interface ServiceDetailPageProps {
  service: ServiceDetailItem;
  allServices: readonly ServiceDetailItem[];
  onBack: () => void;
  onSelectService: (service: ServiceDetailItem) => void;
  onNavigateHome: (sectionId?: string) => void;
}

export function ServiceDetailPage({
  service,
  allServices,
  onBack,
  onSelectService,
  onNavigateHome,
}: ServiceDetailPageProps) {
  const Icon = service.icon;
  const otherServices = allServices.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen bg-brand-cream text-foreground selection:bg-[#E02424] selection:text-white">
      {/* Top Breadcrumb & Action Bar */}
      <div className="border-b border-border/70 bg-white/95 backdrop-blur-md sticky top-[68px] sm:top-[72px] z-40 shadow-xs">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500" aria-label="Breadcrumb">
            <button
              type="button"
              onClick={() => onNavigateHome("home")}
              className="hover:text-slate-900 transition-colors cursor-pointer font-medium"
            >
              Home
            </button>
            <span className="text-slate-400">/</span>
            <button
              type="button"
              onClick={() => onNavigateHome("services")}
              className="hover:text-slate-900 transition-colors cursor-pointer font-medium"
            >
              Services
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-[#E02424] font-bold truncate max-w-[200px] sm:max-w-xs">{service.title}</span>
          </nav>

          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:border-[#E02424] hover:bg-[#E02424] hover:text-white hover:shadow-[0_0_15px_rgba(224,36,36,0.3)] cursor-pointer"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </button>
        </div>
      </div>

      {/* Main Service Overview: Left Details + 5 Key Features, Right Image */}
      <section className="bg-brand-cream py-4 sm:py-5 lg:py-6 border-b border-brand-orange/10">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
            
            {/* LEFT SIDE: Category, Title, 4-Line Details, 5 Key Features, Action Buttons */}
            <div className="lg:col-span-7 space-y-3.5">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#E02424]">
                <span className="size-1.5 rounded-full bg-[#E02424] animate-pulse" />
                <span>{service.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-700">HANVI Solution</span>
              </div>

              {/* Title with Red Icon */}
              <div className="flex items-center gap-3">
                <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-[#E02424] text-white shadow-md shadow-red-500/20">
                  <Icon className="size-5 sm:size-6 text-white" />
                </div>
                <div>
                  <h1 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold tracking-tight text-slate-900 leading-snug">
                    {service.title}
                  </h1>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#E02424] mt-0.5 text-left leading-normal">
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* 4 Lines Details Narrative */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs relative overflow-hidden">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="h-3.5 w-1 rounded-full bg-[#E02424]" />
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#E02424]">Engineering Overview</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed text-left font-normal">
                  {service.details}
                </p>
              </div>

              {/* 5 Key Features */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3.5 w-1 rounded-full bg-brand-orange" />
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900">5 Key Technical Capabilities</h2>
                  </div>
                  <span className="rounded-full bg-red-50 border border-red-200 px-2 py-0.5 text-[10px] font-bold text-[#E02424]">
                    Core Features
                  </span>
                </div>

                <div className="space-y-2">
                  {service.features.slice(0, 5).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 rounded-lg border border-slate-200/80 bg-brand-cream/60 p-2.5 transition-all duration-200 hover:border-red-200 hover:bg-white"
                    >
                      <div className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#E02424] mt-0.5">
                        <CheckCircle2 className="size-3 text-[#E02424]" />
                      </div>
                      <span className="text-xs sm:text-[12.5px] text-slate-800 font-medium leading-snug text-left">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action Buttons: Enquiry Button + Phone + WhatsApp */}
              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                <button
                  type="button"
                  onClick={() => onNavigateHome("contact")}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#E02424] hover:bg-red-700 text-white px-4 py-2 text-xs sm:text-[13px] font-bold shadow-md shadow-red-500/20 transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="size-3.5" />
                </button>
                <a
                  href="tel:+919392673103"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-3.5 py-2 text-xs sm:text-[13px] font-semibold shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Phone className="size-3.5 text-brand-orange" />
                  <span>Call: +91 9392673103</span>
                </a>
                <a
                  href={`https://wa.me/919392673103?text=Hello%20HANVI%20Global%20Tech%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20solution.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white px-3.5 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: High Resolution Image & Technical Specs */}
            <div className="lg:col-span-5 space-y-3.5">
              
              {/* Solution Image Card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 shadow-md shadow-slate-200/50">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-2.5 py-0.5 text-[10.5px] font-semibold text-white flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="size-3 text-emerald-400" />
                    <span>OEM Certified Solution</span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg bg-gradient-to-t from-black/85 via-black/50 to-transparent p-2.5 text-white">
                    <p className="text-xs font-bold leading-tight truncate">{service.title}</p>
                    <p className="text-[10px] text-white/80 line-clamp-1 mt-0.5">{service.standards}</p>
                  </div>
                </div>
              </div>

              {/* 4 Key Specifications Grid */}
              <div className="grid grid-cols-2 gap-2">
                {service.specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-xs transition-all duration-200 hover:border-[#E02424]/40 hover:shadow-xs"
                  >
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-[12.5px] font-extrabold text-slate-900 leading-tight block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Standards & Suitable Applications Card */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-xs space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="size-3.5 text-[#E02424]" />
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">Regulatory Compliance</h3>
                  </div>
                  <p className="text-xs text-slate-700 font-medium text-left">
                    {service.standards}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Award className="size-3.5 text-brand-orange" />
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">Suitable Applications</h3>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed text-left">
                    {service.suitableFor}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Turnkey Execution Workflow */}
      <section className="bg-brand-cream py-6 sm:py-8 border-b border-brand-orange/10">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02424] block mb-0.5">
              Execution Roadmap
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              HANVI Turnkey Deployment Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {service.workflow.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all duration-300 hover:border-red-200 hover:shadow-md"
              >
                <span className="inline-block text-[10.5px] font-extrabold text-[#E02424] uppercase tracking-wider mb-0.5">
                  {item.step}
                </span>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Specialized Solutions Section */}
      <section className="bg-brand-cream-alt py-8 sm:py-10">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02424] block mb-0.5">
                Browse More Capabilities
              </span>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
                Explore Other Specialized Solutions
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigateHome("services")}
              className="text-xs font-semibold text-[#E02424] hover:text-red-700 transition-colors cursor-pointer"
            >
              View All 6 Solutions in Grid →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {otherServices.map((item) => {
              const OtherIcon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectService(item)}
                  className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E02424]/70 hover:shadow-[0_10px_24px_-6px_rgba(224,36,36,0.2)] cursor-pointer"
                >
                  <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 flex items-center justify-between gap-2.5 bg-white">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#E02424] text-white shadow-xs">
                        <OtherIcon className="size-4.5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-xs sm:text-[13px] font-bold text-slate-900 truncate group-hover:text-[#E02424] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[10.5px] text-slate-500 line-clamp-1">{item.category}</p>
                      </div>
                    </div>
                    <ArrowRight className="size-3.5 text-slate-400 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#E02424]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
