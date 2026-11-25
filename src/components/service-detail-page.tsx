import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Award,
  Clock,
  Mail,
  type LucideIcon,
} from "lucide-react";
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
    <div className="min-h-screen bg-brand-cream text-foreground selection:bg-[#E02424] selection:text-white">
      {/* Top Breadcrumb & Action Bar */}
      <div className="border-b border-border/70 bg-white/95 backdrop-blur-md sticky top-[68px] sm:top-[72px] z-40 shadow-xs">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 flex flex-wrap items-center justify-between gap-3">
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
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:border-[#E02424] hover:bg-[#E02424] hover:text-white hover:shadow-[0_0_15px_rgba(224,36,36,0.3)] cursor-pointer"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </button>
        </div>
      </div>

      {/* Main Service Overview: Left Details + 5 Key Features, Right Image */}
      <section className="bg-brand-cream py-8 sm:py-12 lg:py-14 border-b border-brand-orange/10">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT SIDE: Category, Title, 4-Line Details, 5 Key Features, Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#E02424]">
                <span className="size-2 rounded-full bg-[#E02424] animate-pulse" />
                <span>{service.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-700">HANVI Solution</span>
              </div>

              {/* Title with Red Icon */}
              <div className="flex items-center gap-4">
                <div className="flex size-14 sm:size-16 shrink-0 items-center justify-center rounded-2xl bg-[#E02424] text-white shadow-lg shadow-red-500/25">
                  <Icon className="size-7 sm:size-8 text-white" />
                </div>
                <div>
                  <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-[#E02424] mt-1">
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* 4 Lines Details Narrative */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="h-4 w-1 rounded-full bg-[#E02424]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E02424]">Engineering Overview</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify font-normal">
                  {service.details}
                </p>
              </div>

              {/* 5 Key Features */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-1 rounded-full bg-brand-orange" />
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">5 Key Technical Capabilities</h2>
                  </div>
                  <span className="rounded-full bg-red-50 border border-red-200 px-2.5 py-0.5 text-[10.5px] font-bold text-[#E02424]">
                    Core Features
                  </span>
                </div>

                <div className="space-y-2.5">
                  {service.features.slice(0, 5).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-brand-cream/60 p-3 transition-all duration-200 hover:border-red-200 hover:bg-white"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#E02424] mt-0.5">
                        <CheckCircle2 className="size-3.5 text-[#E02424]" />
                      </div>
                      <span className="text-xs sm:text-[13px] text-slate-800 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#service-contact-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E02424] hover:bg-red-700 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-red-500/25 transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <span>Enquire for this Service</span>
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="tel:+919392673103"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-4.5 py-2.5 text-xs sm:text-sm font-semibold shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Phone className="size-4 text-brand-orange" />
                  <span>Call: +91 9392673103</span>
                </a>
                <a
                  href={`https://wa.me/919392673103?text=Hello%20HANVI%20Global%20Tech%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20solution.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: High Resolution Image & Technical Specs */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Solution Image Card */}
              <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-2.5 shadow-lg shadow-slate-200/60">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-xs">
                    <ShieldCheck className="size-3.5 text-emerald-400" />
                    <span>OEM Certified Solution</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3.5 text-white">
                    <p className="text-xs font-bold leading-tight truncate">{service.title}</p>
                    <p className="text-[10px] text-white/80 line-clamp-1 mt-0.5">{service.standards}</p>
                  </div>
                </div>
              </div>

              {/* 4 Key Specifications Grid */}
              <div className="grid grid-cols-2 gap-3">
                {service.specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all duration-200 hover:border-[#E02424]/40 hover:shadow-xs"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-[13px] font-extrabold text-slate-900 leading-tight block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Standards & Suitable Applications Card */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-xs space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <ShieldCheck className="size-4 text-[#E02424]" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Regulatory Compliance</h3>
                  </div>
                  <p className="text-xs text-slate-700 font-medium">
                    {service.standards}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Award className="size-4 text-brand-orange" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Suitable Applications</h3>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {service.suitableFor}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Related Service Contact Form Section */}
      <section id="service-contact-form" className="bg-brand-cream-alt py-12 sm:py-16 border-b border-brand-orange/10 scroll-mt-20">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Context & Contact Details */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02424] block mb-1">
                  Tailored Engineering Consultation
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Enquire for {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Request a complete technical proposal, site audit, and bill of quantities (BOQ) prepared specifically for your project by our senior engineers.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E02424]">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">2-Hour Rapid Response</h4>
                    <p className="text-[11px] text-slate-500">Dedicated engineer assigned to your inquiry</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E02424]">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Certified Compliance</h4>
                    <p className="text-[11px] text-slate-500">NBC, NFPA, BIS and ISO 9001 standard engineering</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E02424]">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Direct Hotline</h4>
                    <a href="tel:+919392673103" className="text-[11px] font-bold text-[#E02424] hover:underline">
                      +91 9392673103 (Sourvi Saie Kumar)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E02424]">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Technical Inquiries Email</h4>
                    <a href="mailto:saie@hanviglobaltech.com" className="text-[11px] font-bold text-[#E02424] hover:underline">
                      saie@hanviglobaltech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-brand-orange/30 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 mb-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-[11px] font-bold text-[#E02424] mb-2">
                    <span>Direct Solution Inquiry</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Request Technical Proposal &amp; Site Inspection
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill the details below to receive a formal quotation for <strong className="text-slate-800">{service.title}</strong>.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="rounded-2xl border border-emerald-500/40 bg-emerald-50 p-6 text-center">
                    <CheckCircle2 className="size-10 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-base font-bold text-slate-900">Thank You! Request Received</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-md mx-auto">
                      Our engineering specialist for <strong className="text-slate-900">{service.title}</strong> has received your inquiry and will reach out within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name / Organization *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma (ABC Enterprises)"
                        className="h-10 bg-brand-cream border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:border-[#E02424] focus:ring-1 focus:ring-[#E02424]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number *</label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 9876543210"
                          className="h-10 bg-brand-cream border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:border-[#E02424] focus:ring-1 focus:ring-[#E02424]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address *</label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="h-10 bg-brand-cream border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:border-[#E02424] focus:ring-1 focus:ring-[#E02424]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Facility / Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full h-10 rounded-md bg-brand-cream border border-slate-300 text-slate-900 text-xs sm:text-sm px-3 focus:outline-none focus:border-[#E02424] focus:ring-1 focus:ring-[#E02424]"
                      >
                        <option value="Commercial Facility">Commercial Facility / Tech Park</option>
                        <option value="Industrial Plant / Warehouse">Industrial Plant / Warehouse</option>
                        <option value="Residential Gated Community">Residential Gated Community / High-rise</option>
                        <option value="Hospital / Healthcare Facility">Hospital / Healthcare Facility</option>
                        <option value="Educational Campus">Educational Campus</option>
                        <option value="Government / Infrastructure Hub">Government / Infrastructure Hub</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Project Details &amp; Requirements</label>
                      <Textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-brand-cream border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:border-[#E02424] focus:ring-1 focus:ring-[#E02424] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#E02424] hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-3 shadow-lg shadow-red-500/25 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
                    >
                      Submit Consultation Request for {service.title} →
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Turnkey Execution Workflow */}
      <section className="bg-brand-cream py-10 sm:py-14 border-b border-brand-orange/10">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02424] block mb-1">
              Execution Roadmap
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              HANVI Turnkey Deployment Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.workflow.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs transition-all duration-300 hover:border-red-200 hover:shadow-md"
              >
                <span className="inline-block text-[11px] font-extrabold text-[#E02424] uppercase tracking-wider mb-1">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Specialized Solutions Section */}
      <section className="bg-brand-cream-alt py-12 sm:py-16">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02424] block mb-1">
                Browse More Capabilities
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {otherServices.map((item) => {
              const OtherIcon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectService(item)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E02424]/70 hover:shadow-[0_12px_30px_-6px_rgba(224,36,36,0.25)] cursor-pointer"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-4 flex items-center justify-between gap-3 bg-white">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E02424] text-white shadow-xs">
                        <OtherIcon className="size-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-xs sm:text-[13px] font-bold text-slate-900 truncate group-hover:text-[#E02424] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{item.category}</p>
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
