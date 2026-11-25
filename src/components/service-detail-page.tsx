import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Commercial Facility",
    message: `Hello HANVI Global Tech, I would like to request technical consultation and an engineering site inspection for your ${service.title} solution.`,
  });

  const Icon = service.icon;
  const otherServices = allServices.filter((s) => s.id !== service.id);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#E02424] selection:text-white">
      {/* Top Breadcrumb & Action Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-[68px] sm:top-[72px] z-40">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-400" aria-label="Breadcrumb">
            <button
              type="button"
              onClick={() => onNavigateHome("home")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-600">/</span>
            <button
              type="button"
              onClick={() => onNavigateHome("services")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold truncate max-w-[200px] sm:max-w-xs">{service.title}</span>
          </nav>

          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/80 px-4 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-200 hover:border-[#E02424] hover:bg-[#E02424] hover:text-white hover:shadow-[0_0_15px_rgba(224,36,36,0.4)] cursor-pointer"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </button>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-slate-900 py-12 sm:py-16 lg:py-20">
        {/* 4K Background Image with Cinematic Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover object-center filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="max-w-3xl">
            {/* Category Tag */}
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF5050] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#E02424] animate-pulse" />
              <span>{service.category}</span>
              <span className="text-white/30">|</span>
              <span className="text-slate-300">HANVI Solution</span>
            </div>

            {/* Title with Icon Badge */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex size-14 sm:size-16 shrink-0 items-center justify-center rounded-2xl bg-[#E02424] text-white shadow-xl shadow-red-950/50">
                <Icon className="size-7 sm:size-8 text-white" />
              </div>
              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.title}
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed mb-3">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl text-justify mb-6">
              {service.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#enquiry-section"
                className="inline-flex items-center gap-2 rounded-full bg-[#E02424] hover:bg-red-700 text-white px-6 py-2.5 text-xs sm:text-sm font-bold shadow-lg shadow-red-900/40 transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <span>Request Solution Consultation</span>
                <ArrowRight className="size-4" />
              </a>
              <a
                href="tel:+919392673103"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:border-slate-500 cursor-pointer"
              >
                <Phone className="size-4 text-brand-orange" />
                <span>Call Specialist: +91 9392673103</span>
              </a>
              <a
                href={`https://wa.me/919392673103?text=Hello%20HANVI%20Global%20Tech%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20solution.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Key Specifications Metric Bar */}
      <section className="border-b border-slate-800/80 bg-slate-950 py-6 sm:py-8">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {service.specifications.map((spec, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800/90 bg-slate-900/70 p-4 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:shadow-lg"
              >
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {spec.label}
                </span>
                <span className="text-sm sm:text-base font-extrabold text-white leading-tight block">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 lg:gap-12 items-start">
            {/* Left Column: Architecture Narrative & Capabilities */}
            <div className="space-y-8">
              {/* Engineering Overview */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-4 w-1 rounded-full bg-[#E02424]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#E02424]">Engineering Overview</h2>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  Turnkey Infrastructure Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                  {service.details}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify">
                  {service.architecture}
                </p>
              </div>

              {/* Technical Capabilities Grid */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-4 w-1 rounded-full bg-brand-orange" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange">Core Specifications</h2>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                  Key Technical Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-slate-800/90 bg-slate-900/60 p-3.5 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900"
                    >
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-[#E02424] mt-0.5">
                        <CheckCircle2 className="size-4 text-[#E02424]" />
                      </div>
                      <span className="text-xs sm:text-[13px] text-slate-200 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Turnkey Execution Workflow */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-4 w-1 rounded-full bg-brand-gold" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Execution Roadmap</h2>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                  HANVI Turnkey Deployment Lifecycle
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.workflow.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:border-slate-700"
                    >
                      <span className="inline-block text-[10px] font-extrabold text-[#E02424] uppercase tracking-wider mb-1">
                        {item.step}
                      </span>
                      <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Standards, Suitable Sectors & Inquiry Form */}
            <div className="space-y-6">
              {/* Compliance & Standards Card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="size-5 text-[#E02424]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Standards &amp; Regulatory Compliance</h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-300 font-semibold mb-3 leading-snug">
                  {service.standards}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10.5px] font-medium text-slate-300">NBC 2016 Compliant</span>
                  <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10.5px] font-medium text-slate-300">ISO 9001 Quality</span>
                  <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10.5px] font-medium text-slate-300">Tier-1 OEM Hardware</span>
                </div>
              </div>

              {/* Suitable Deployment Applications */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="size-5 text-brand-orange" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Suitable Applications &amp; Sectors</h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed text-justify">
                  {service.suitableFor}
                </p>
              </div>

              {/* Dedicated Solution Enquiry Form */}
              <div id="enquiry-section" className="rounded-2xl border border-red-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E02424] block mb-1">
                    Direct Solution Enquiry
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Request Proposal &amp; Site Inspection
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Connect directly with our engineering department for {service.title}.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/40 p-4 text-center">
                    <CheckCircle2 className="size-7 text-emerald-400 mx-auto mb-2" />
                    <h4 className="text-sm font-bold text-white">Thank You! Request Received</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Our engineering specialist for {service.title} will contact you within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 block mb-1">Full Name</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name or Enterprise Name"
                        className="h-9 bg-slate-950/80 border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-[#E02424]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 block mb-1">Phone Number</label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 9876543210"
                          className="h-9 bg-slate-950/80 border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-[#E02424]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 block mb-1">Work Email</label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="h-9 bg-slate-950/80 border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-[#E02424]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 block mb-1">Project Requirements</label>
                      <Textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-slate-950/80 border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-[#E02424] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#E02424] hover:bg-red-700 text-white font-bold text-xs py-2.5 shadow-lg shadow-red-900/40 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
                    >
                      Submit Consultation Request →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Specialized Solutions Section */}
      <section className="border-t border-slate-800/80 bg-slate-900/60 py-12 sm:py-16">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02424] block mb-1">
                Browse More Capabilities
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                Explore Other Specialized Solutions
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigateHome("services")}
              className="text-xs font-semibold text-brand-orange hover:text-white transition-colors cursor-pointer"
            >
              View All 6 Solutions in Grid →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {otherServices.map((item) => {
              const OtherIcon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectService(item)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-950 border border-slate-800/80 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E02424]/70 hover:shadow-[0_12px_30px_-6px_rgba(224,36,36,0.35)] cursor-pointer"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  </div>
                  <div className="p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E02424] text-white">
                        <OtherIcon className="size-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-xs sm:text-[13px] font-bold text-white truncate group-hover:text-[#E02424] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{item.category}</p>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-slate-400 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#E02424]" />
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
