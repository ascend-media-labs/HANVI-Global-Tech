import { useEffect, useState, type FormEvent } from "react";
import {
  Activity,
  AlertCircle,
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Droplets,
  Eye,
  Facebook,
  Flame,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Pause,
  Phone,
  Play,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  User,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import collaborationImage from "@/assets/hero-collaboration.webp";
import globalImage from "@/assets/hero-global.webp";
import infrastructureImage from "@/assets/hero-infrastructure.webp";
import logoHorizontal from "@/assets/hanvi-logo-horizontal.png";
import logoFull from "@/assets/hanvi-logo.png";
import logoIcon from "@/assets/hanvi-icon.png";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Clients", id: "clients" },
  { label: "Partners", id: "partners" },
] as const;

const slides = [
  { image: infrastructureImage, alt: "Rows of servers in a modern data center", label: "Digital infrastructure" },
  { image: collaborationImage, alt: "Technology professionals collaborating around a digital display", label: "Collaborative thinking" },
  { image: globalImage, alt: "A connected city at dusk viewed through a glass office", label: "A connected world" },
] as const;

const services = [
  {
    badge: "Life Safety",
    title: "FIRE ALARM SYSTEM",
    description:
      "Advanced addressable and conventional fire detection networks, smart multi-criteria smoke & heat sensors, emergency voice evacuation systems, and certified life-safety alarm control panels.",
    icon: Flame,
    image: "/services/fire-alarm.jpg",
    tags: ["Life Safety", "Addressable Detection", "Compliance Certified"],
  },
  {
    badge: "Fire Protection",
    title: "FIRE HYDRANT SYSTEM",
    description:
      "Heavy-duty commercial and industrial fire protection infrastructure, high-pressure diesel/electric booster pump stations, automated wet/dry sprinkler piping, and fire brigade hydrant valves.",
    icon: Droplets,
    image: "/services/fire-hydrant.jpg",
    tags: ["Industrial Hydrants", "Sprinkler Networks", "High-Pressure Pumps"],
  },
  {
    badge: "Data Centers",
    title: "CYBER SECURITY DATA CENTER DESIGN",
    description:
      "Tier-standard high-density server farm architecture, zero-trust cybersecurity protocols, cold/hot aisle containment, hardware security modules, precision HVAC, and redundant power infrastructure.",
    icon: Server,
    image: "/services/data-center.jpg",
    tags: ["Tier Architecture", "Zero-Trust Security", "Power Redundancy"],
  },
  {
    badge: "Enterprise Fiber",
    title: "NETWORK COMMUNICATIONS & INTERCOM SOLUTIONS",
    description:
      "Enterprise structured cabling (Cat6A / Fiber Optics), high-speed backbone routing, IP/SIP video intercoms, digital PA broadcast systems, and seamless unified telecommunication networks.",
    icon: Network,
    image: "/services/networking.jpg",
    tags: ["Structured Cabling", "Fiber Backbone", "SIP Intercom"],
  },
  {
    badge: "Smart Automation",
    title: "SMART NODE HOME AUTOMATION & TOUCH SWITCH PANELS",
    description:
      "Intelligent IoT smart home ecosystems, luxury capacitive feather-touch switchboard panels, multi-room smart scene control, automated lighting, HVAC integration, and centralized mobile/touch management.",
    icon: Cpu,
    image: "/services/smart-home.jpg",
    tags: ["IoT Smart Nodes", "Touch Switch Panels", "Intelligent Automation"],
  },
] as const;

const clientPlaceholders = [
  {
    name: "L&T Construction & Infra",
    sector: "Industrial & Metro Transit",
    tag: "Metro & Infra",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#0F284E" />
        <text x="22" y="27" textAnchor="middle" fill="#F8B133" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="-0.5">L&amp;T</text>
        <path d="M9 33h26" stroke="#F8B133" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "GMR Aerospace & Tech Park",
    sector: "Mission-Critical Facilities",
    tag: "Aviation Hub",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#0A1E3F" />
        <path d="M13 22C13 16 17 12 22 12C27 12 31 16 31 22C31 26 28 29 23 29H18" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 22H30" stroke="#FDB913" strokeWidth="2.5" strokeLinecap="round" />
        <text x="22" y="37" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="800" fontSize="7.5" letterSpacing="1.2">GMR</text>
      </svg>
    ),
  },
  {
    name: "Phoenix Cyber Towers",
    sector: "Cyber Data Centers & SEZ",
    tag: "Cyber SEZ",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#1C0F0A" />
        <path d="M22 9C24 15 29 17 31 23C33 28 30 33 22 34C14 33 11 28 13 23C15 17 20 15 22 9Z" fill="#FF501E" />
        <path d="M22 16C23 19 26 21 27 25C28 28 26 30 22 31C18 30 16 28 17 25C18 21 21 19 22 16Z" fill="#FDB913" />
      </svg>
    ),
  },
  {
    name: "My Home Group Habitats",
    sector: "Smart Living & High-Rise",
    tag: "Smart Living",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#14241C" />
        <path d="M14 32V20L22 13L30 20V32H25V24H19V32H14Z" fill="#2EAA68" />
        <path d="M22 17L27 21V32H25V23H19V32H17V21L22 17Z" fill="#75D99F" />
        <circle cx="22" cy="9.5" r="1.5" fill="#FDB913" />
      </svg>
    ),
  },
  {
    name: "Tata Projects Limited",
    sector: "Industrial Mega EPC & Transit",
    tag: "Mega EPC",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#002D62" />
        <path d="M12 15H32M22 15V29" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 21H30" stroke="#38B6FF" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <text x="22" y="38" textAnchor="middle" fill="#38B6FF" fontFamily="sans-serif" fontWeight="800" fontSize="7" letterSpacing="1">TATA</text>
      </svg>
    ),
  },
  {
    name: "Mindspace Business Parks",
    sector: "Grade-A IT & Tech SEZ",
    tag: "Tech Parks",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#0C2538" />
        <circle cx="22" cy="14" r="3.5" fill="#00D2D3" />
        <circle cx="14" cy="27" r="3" fill="#FF9F43" />
        <circle cx="30" cy="27" r="3" fill="#54A0FF" />
        <path d="M22 14L14 27M22 14L30 27M14 27H30" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.75" />
      </svg>
    ),
  },
  {
    name: "Adani ConneX Data Centers",
    sector: "Hyperscale Cloud Infrastructure",
    tag: "Hyperscale",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#18132B" />
        <rect x="12" y="12" width="8" height="8" rx="1.5" fill="#A855F7" />
        <rect x="24" y="12" width="8" height="8" rx="1.5" fill="#6366F1" />
        <rect x="12" y="24" width="8" height="8" rx="1.5" fill="#EC4899" />
        <rect x="24" y="24" width="8" height="8" rx="1.5" fill="#3B82F6" />
        <path d="M20 16H24M16 20V24M28 20V24M20 28H24" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Infosys SEZ Campuses",
    sector: "Enterprise Facilities & Digital Smart Hubs",
    tag: "Global Hub",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#071B36" />
        <path d="M13 22C13 17 18 15 22 22C26 29 31 27 31 22C31 17 26 15 22 22C18 29 13 27 13 22Z" stroke="#007CC3" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="22" cy="22" r="2.2" fill="#FDB913" />
        <text x="22" y="37" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="800" fontSize="7" letterSpacing="0.8">INFOSYS</text>
      </svg>
    ),
  },
];
const partnerPlaceholders = [
  {
    name: "Honeywell Building Technologies",
    sector: "Life Safety & Intelligent Fire Detection",
    tag: "Life Safety OEM",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#EE3124" />
        <path d="M13 14H18V20H26V14H31V30H26V24H18V30H13V14Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Schneider Electric & APC",
    sector: "Cyber Data Centers & Power Resilience",
    tag: "Power & DC",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#0D2C1E" />
        <path d="M14 26C14 18 20 14 27 14M30 18C30 26 24 30 17 30" stroke="#009E4D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="22" cy="22" r="3.5" fill="#3DCD58" />
      </svg>
    ),
  },
  {
    name: "Cisco Systems & CommScope",
    sector: "Enterprise Networking & Fiber Backbone",
    tag: "Enterprise Net",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#0A1D33" />
        <path d="M12 25V27M16 21V27M20 17V27M24 17V27M28 21V27M32 25V27" stroke="#00BCEB" strokeWidth="2.5" strokeLinecap="round" />
        <text x="22" y="37" textAnchor="middle" fill="#00BCEB" fontFamily="sans-serif" fontWeight="800" fontSize="7" letterSpacing="0.8">CISCO</text>
      </svg>
    ),
  },
  {
    name: "Siemens Smart Infrastructure",
    sector: "Building Automation & IoT Ecosystems",
    tag: "Automation",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#072B30" />
        <path d="M28 17C26 15 23 15 20 16C16 17 15 20 16 22C17 24 21 25 24 26C27 27 28 29 27 31C26 33 22 34 18 32" stroke="#00E5D8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="30" cy="16" r="2" fill="#EB780A" />
      </svg>
    ),
  },
  {
    name: "Bosch Security & Safety",
    sector: "IP Surveillance, Access & Public Address",
    tag: "Security OEM",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#1C1819" />
        <circle cx="22" cy="22" r="11" stroke="#E21D24" strokeWidth="2.5" />
        <rect x="18" y="15" width="8" height="14" rx="2" fill="#E21D24" />
      </svg>
    ),
  },
  {
    name: "Johnson Controls & Simplex",
    sector: "Commercial Fire Suppression & Life Safety",
    tag: "Fire Systems",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#0A1D36" />
        <path d="M14 26C14 18 19 14 28 14" stroke="#00529B" strokeWidth="3" strokeLinecap="round" />
        <path d="M19 30C19 24 23 20 30 20" stroke="#78BE20" strokeWidth="3" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2.5" fill="#FDB913" />
      </svg>
    ),
  },
  {
    name: "Fortinet Cybersecurity",
    sector: "Data Center Firewalls & Secure SD-WAN",
    tag: "Zero Trust",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#1F0D0D" />
        <rect x="13" y="15" width="8" height="6" rx="1" fill="#EE3124" />
        <rect x="23" y="15" width="8" height="6" rx="1" fill="#EE3124" />
        <rect x="13" y="23" width="8" height="6" rx="1" fill="#EE3124" />
        <rect x="23" y="23" width="8" height="6" rx="1" fill="#EE3124" />
        <path d="M13 18H31M17 15V29M27 15V29" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
      </svg>
    ),
  },
  {
    name: "Legrand & Raritan Enterprise",
    sector: "Smart PDU, High-Density Server Racks & Fiber",
    tag: "DC Enclosure",
    logo: (
      <svg viewBox="0 0 44 44" className="size-full rounded-lg" fill="none">
        <rect width="44" height="44" rx="8" fill="#1C181A" />
        <rect x="13" y="14" width="18" height="16" rx="2" stroke="#E31837" strokeWidth="2.5" />
        <path d="M19 19V25H25" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function CompanyName({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="HANVI GLOBAL TECH PVT LTD">
      <img
        src={logoHorizontal}
        alt="HANVI GLOBAL TECH PVT LTD"
        className="h-9 sm:h-11 w-auto object-contain transition-transform hover:scale-[1.02]"
      />
    </span>
  );
}

function ScrollLink({
  id,
  children,
  onNavigate,
  active = false,
}: {
  id: string;
  children: React.ReactNode;
  onNavigate?: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onNavigate}
      aria-current={active ? "location" : undefined}
      className={`nav-link group relative inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ease-out cursor-pointer ${
        active
          ? "brand-gradient text-primary-foreground shadow-[0_0_16px_rgba(255,80,30,0.35)] scale-[1.03]"
          : "text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:scale-[1.02]"
      }`}
    >
      <span>{children}</span>
    </button>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground">
      <span className="brand-gradient h-0.5 w-8" aria-hidden="true" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-3xl" data-reveal>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${tone === "dark" ? "text-background" : "text-foreground"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${tone === "dark" ? "text-background/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function HanviSite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formMessage, setFormMessage] = useState("");
  const [legalPage, setLegalPage] = useState<string | null>(null);

  function navigateTo(sectionId: string) {
    setActiveSection(sectionId);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.setAttribute("data-scroll-reveal-ready", "true");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    revealTargets.forEach((target) => {
      if (activeSection !== "home") {
        target.setAttribute("data-visible", "true");
      } else {
        revealObserver.observe(target);
      }
    });

    return () => {
      revealObserver.disconnect();
    };
  }, [activeSection]);

  function moveSlide(direction: -1 | 1) {
    setCurrentSlide((current) => (current + direction + slides.length) % slides.length);
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  type FormFieldKey = "name" | "email" | "phone" | "subject" | "message";
  type FormErrors = Partial<Record<FormFieldKey, string | undefined>>;

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  function validateField(name: string, value: string) {
    let error = "";
    const trimmed = value.trim();
    if (name === "name") {
      if (!trimmed) {
        error = "Full name is required";
      } else if (!/^[A-Za-z\s.'-]{2,}$/.test(trimmed)) {
        error = "Please enter a valid name (letters only, min 2 characters)";
      }
    } else if (name === "email") {
      if (!trimmed) {
        error = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
        error = "Please enter a valid email address (e.g. name@example.com)";
      }
    } else if (name === "phone") {
      if (!trimmed) {
        error = "Phone number is required";
      } else if (trimmed.length !== 10) {
        error = "Phone number must be exactly 10 digits";
      }
    } else if (name === "subject") {
      if (!trimmed) {
        error = "Subject is required";
      } else if (trimmed.length < 3) {
        error = "Subject must be at least 3 characters";
      }
    } else if (name === "message") {
      if (!trimmed) {
        error = "Message is required";
      } else if (trimmed.length < 10) {
        error = "Message must be at least 10 characters";
      }
    }
    return error;
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Strictly restrict to numeric digits only and maximum 10 digits
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: cleaned }));
    if (formErrors.phone && cleaned.length === 10) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next.phone;
        return next;
      });
    }
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Prevent entering numbers into name
    const cleaned = e.target.value.replace(/[^A-Za-z\s.'-]/g, "");
    setFormData((prev) => ({ ...prev, name: cleaned }));
    if (formErrors.name && cleaned.trim().length >= 2) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next.name;
        return next;
      });
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const fieldKey = name as FormFieldKey;
    if (formErrors[fieldKey]) {
      const err = validateField(name, value);
      setFormErrors((prev) => {
        const next = { ...prev };
        if (err) {
          next[fieldKey] = err;
        } else {
          delete next[fieldKey];
        }
        return next;
      });
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const err = validateField(name, value);
    const fieldKey = name as FormFieldKey;
    setFormErrors((prev) => {
      const next = { ...prev };
      if (err) {
        next[fieldKey] = err;
      } else {
        delete next[fieldKey];
      }
      return next;
    });
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors: FormErrors = {};
    const nameErr = validateField("name", formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateField("phone", formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const subjectErr = validateField("subject", formData.subject);
    if (subjectErr) newErrors.subject = subjectErr;

    const messageErr = validateField("message", formData.message);
    if (messageErr) newErrors.message = messageErr;

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
    setFormMessage(
      `Thank you, ${formData.name}! Your inquiry has been routed directly to our official WhatsApp (+91 9392673103).`
    );

    const waText = [
      `*New Project Inquiry - HANVI Global Tech*`,
      ``,
      `*Full Name:* ${formData.name.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      `*Phone:* +91 ${formData.phone.trim()}`,
      `*Subject:* ${formData.subject.trim()}`,
      `*Message:* ${formData.message.trim()}`,
    ].join("\n");

    const waUrl = `https://wa.me/919392673103?text=${encodeURIComponent(waText)}`;
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  }

  function closeMobileMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
      {/* Top Utility Bar (Matches footer background color bg-brand-charcoal; non-sticky) */}
      <aside
        aria-label="Contact and Social Info"
        className="relative z-40 border-b border-white/10 bg-brand-charcoal text-background shadow-xs py-1.5"
      >
        <div className="mx-auto flex min-h-7.5 w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 text-xs font-medium">
          {/* Left: Official Brand Social Media Icons (matching footer) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Official Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group relative flex size-6 sm:size-6.5 items-center justify-center rounded-md bg-[#1877F2] text-white shadow-[0_0_10px_rgba(24,119,242,0.45)] transition-all duration-300 hover:scale-115 hover:shadow-[0_0_18px_rgba(24,119,242,0.8)]"
            >
              <svg className="size-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Official Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group relative flex size-6 sm:size-6.5 items-center justify-center rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_0_10px_rgba(220,39,67,0.45)] transition-all duration-300 hover:scale-115 hover:shadow-[0_0_18px_rgba(220,39,67,0.85)]"
            >
              <svg className="size-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Official LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative flex size-6 sm:size-6.5 items-center justify-center rounded-md bg-[#0A66C2] text-white shadow-[0_0_10px_rgba(10,102,194,0.45)] transition-all duration-300 hover:scale-115 hover:shadow-[0_0_18px_rgba(10,102,194,0.8)]"
            >
              <svg className="size-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Right: Contact Information */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a
              href="mailto:saie@hanviglobaltech.com"
              className="inline-flex items-center gap-1.5 text-background/80 hover:text-brand-gold hover:underline transition-colors"
            >
              <Mail className="size-3.5 sm:size-4 text-brand-orange" />
              <span className="hidden min-[420px]:inline">saie@hanviglobaltech.com</span>
              <span className="min-[420px]:hidden">Email</span>
            </a>
            <a
              href="tel:+919392673103"
              className="inline-flex items-center gap-1.5 text-background font-semibold hover:text-brand-gold hover:underline transition-colors"
            >
              <Phone className="size-3.5 sm:size-4 text-brand-orange" />
              <span>+91 9392673103</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navbar - Only this is sticky */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
        <div className="mx-auto flex h-[76px] w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="shrink-0 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              aria-label="HANVI Global Tech home"
              onClick={() => navigateTo("home")}
            >
              <CompanyName />
            </button>
          </div>

          <nav className="hidden items-center justify-center rounded-full border border-border/70 bg-muted/40 p-1.5 shadow-inner backdrop-blur-md lg:flex gap-1" aria-label="Main navigation">
            {navigation.map((item) => (
              <ScrollLink
                key={item.id}
                id={item.id}
                active={activeSection === item.id}
                onNavigate={() => navigateTo(item.id)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <Button asChild variant="outline" className="hidden xl:inline-flex h-10 rounded-full border-border/70 bg-background/80 px-4 text-xs font-semibold text-foreground backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:border-brand-orange/50 hover:shadow-[0_0_18px_rgba(255,106,0,0.3)] hover:text-brand-orange">
              <a href="tel:+919392673103" className="flex items-center gap-1.5">
                <Phone className="size-3.5 text-brand-orange" />
                <span>+91 9392673103</span>
              </a>
            </Button>
            <Button
              className="brand-gradient glow-btn-hover group h-10 rounded-full px-5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_4px_16px_rgba(255,80,30,0.3)] cursor-pointer"
              onClick={() => navigateTo("contact")}
            >
              <span className="flex items-center gap-1.5">
                <span>Get a Quote</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full border border-border/60"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>

        {menuOpen ? (
          <nav id="mobile-navigation" className="border-t border-border/60 bg-background/95 px-4 sm:px-6 pb-6 pt-4 shadow-lg backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex w-full flex-col gap-3">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.id}
                    id={item.id}
                    active={activeSection === item.id}
                    onNavigate={() => navigateTo(item.id)}
                  >
                    {item.label}
                  </ScrollLink>
                ))}
              </div>
              <div className="mt-2 flex flex-col gap-2.5 sm:flex-row border-t border-border/60 pt-3">
                <Button asChild variant="outline" className="h-11 w-full rounded-full border-border/80 text-xs font-semibold">
                  <a href="tel:+919392673103" onClick={closeMobileMenu}>
                    <Phone className="mr-1.5 size-3.5 text-brand-orange" /> +91 9392673103
                  </a>
                </Button>
                <Button
                  className="brand-gradient glow-btn-hover h-11 w-full rounded-full text-xs font-semibold text-primary-foreground shadow-sm cursor-pointer"
                  onClick={() => navigateTo("contact")}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <span>Get a Quote</span>
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </Button>
              </div>
            </div>
          </nav>
        ) : null}
      </header>

      <main>
        {activeSection !== "home" && (
          <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-5 pb-2">
            <button
              type="button"
              onClick={() => navigateTo("home")}
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange hover:text-brand-coral transition-colors group cursor-pointer"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-brand-orange/10 border border-brand-orange/30 group-hover:scale-105 transition-transform">
                ←
              </span>
              <span>Back to Full Home Overview</span>
            </button>
          </div>
        )}

        {activeSection === "home" && (
          <section id="home" className="relative isolate h-[calc(100svh-76px)] min-h-[520px] max-h-[820px] scroll-mt-20 overflow-hidden bg-brand-charcoal text-background">
            <div className="absolute inset-0" aria-hidden="true">
              {slides.map((slide, index) => (
                <img
                  key={slide.label}
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  loading={index === 0 ? "eager" : "lazy"}
                  className={`hero-image-transition absolute inset-0 h-full w-full object-cover object-center ${currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"}`}
                />
              ))}
              <div className="hero-overlay absolute inset-0" />
              <div className="hero-glow absolute inset-0 pointer-events-none" />
              <div className="hero-grid absolute inset-0 pointer-events-none opacity-50" />
            </div>

            <div className="relative mx-auto flex h-full w-full flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pb-20 pt-4 sm:pb-20 sm:pt-6">
              <div className="max-w-3xl" data-reveal>
                <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1 px-3 text-xs font-medium text-background/90 backdrop-blur-md shadow-inner shadow-white/5 sm:mb-4 sm:px-3.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                  </span>
                  <span className="font-semibold tracking-wider uppercase text-[11px] sm:text-xs text-background/90">
                    Next-Gen Enterprise Tech
                  </span>
                  <span className="text-white/25">|</span>
                  <span className="font-medium text-brand-gold text-[11px] sm:text-xs">
                    HANVI GLOBAL TECH
                  </span>
                </div>

                <h1 className="font-display text-3xl font-semibold leading-[1.1] text-background sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight">
                  Technology for a{" "}
                  <span className="brand-text-gradient drop-shadow-[0_0_30px_rgba(255,106,0,0.35)]">
                    more connected
                  </span>{" "}
                  world.
                </h1>

                <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-background/80 sm:mt-4 sm:text-base md:text-lg sm:leading-7">
                  Discover the story, services, and possibilities behind HANVI GLOBAL TECH PVT LTD. Powering resilient digital infrastructure and enterprise innovation.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
                  <Button
                    size="default"
                    className="brand-gradient glow-btn-hover group h-11 rounded-full px-6 text-sm font-semibold text-primary-foreground shadow-[0_4px_20px_rgba(255,80,30,0.4)] cursor-pointer"
                    onClick={() => navigateTo("services")}
                  >
                    <span className="flex items-center gap-1.5">
                      <span>Explore our services</span>
                      <ArrowUpRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    className="h-11 rounded-full border-white/20 bg-white/5 px-6 text-sm font-medium text-background backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_22px_rgba(255,255,255,0.3)] cursor-pointer"
                    onClick={() => navigateTo("contact")}
                  >
                    Contact us
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-4 sm:gap-7 sm:pt-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-brand-orange/20 text-brand-orange">
                      <Server className="size-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-background sm:text-sm">99.9% Uptime</div>
                      <div className="text-[10px] text-background/60">Enterprise SLA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-brand-coral/20 text-brand-coral">
                      <ShieldCheck className="size-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-background sm:text-sm">Zero-Trust</div>
                      <div className="text-[10px] text-background/60">Secure Architecture</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-gold">
                      <Network className="size-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-background sm:text-sm">Global Scale</div>
                      <div className="text-[10px] text-background/60">Connected Mesh</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:left-8 md:right-8 lg:left-10 lg:right-10 xl:left-12 xl:right-12 2xl:left-16 2xl:right-16 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3 rounded-full border border-white/10 bg-black/35 px-3.5 py-1.5 backdrop-blur-md text-xs font-medium text-background/80 sm:text-sm">
                  <span className="brand-gradient h-0.5 w-7 shrink-0" aria-hidden="true" />
                  <span className="truncate">{slides[currentSlide]?.label ?? "Global technology"}</span>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/35 p-1.5 backdrop-blur-md">
                  {slides.map((slide, index) => (
                    <Button
                      key={slide.label}
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full p-0 text-background hover:bg-white/10 hover:text-background"
                      aria-label={`Show slide ${index + 1}: ${slide.label}`}
                      aria-pressed={currentSlide === index}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <span className={`block h-1.5 rounded-full transition-all duration-500 ease-out ${currentSlide === index ? "brand-gradient w-6 shadow-[0_0_12px_rgba(255,106,0,0.85)]" : "w-1.5 bg-background/55 hover:bg-background/80"}`} />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {(activeSection === "home" || activeSection === "about") && (
          <section id="about" className={`relative isolate scroll-mt-20 overflow-hidden bg-background min-h-[500px] flex items-center justify-center py-8 sm:py-10 ${activeSection === "about" ? "min-h-[calc(100svh-120px)] lg:h-[calc(100svh-120px)] lg:max-h-[820px]" : "lg:h-[calc(100svh-76px)] lg:max-h-[760px] lg:py-0"}`}>
          {/* Subtle Ambient Glow Background Orbs */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 size-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
          <div className="absolute right-0 top-1/4 size-80 rounded-full bg-brand-rose/5 blur-3xl pointer-events-none" />

          <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] xl:gap-14">
              
              {/* Left Column: Content, Vision & Mission with Transitions */}
              <div data-reveal className="flex flex-col justify-center">
                
                {/* Eyebrow Badge with Pulse */}
                <div className="mb-3.5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-orange/25 bg-brand-orange/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-orange backdrop-blur-md shadow-sm transition-transform duration-300 hover:scale-105">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                  </span>
                  <span>About HANVI</span>
                  <span className="text-brand-orange/40">•</span>
                  <span className="text-[11px] font-medium text-foreground/75">Enterprise Engineering</span>
                </div>

                {/* Main Heading with Gradient Text */}
                <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                  Make room for <span className="brand-text-gradient drop-shadow-sm">what’s next.</span>
                </h2>

                {/* Description */}
                <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-7">
                  HANVI GLOBAL TECH PVT LTD specializes in mission-critical technology, life safety systems, tier-grade data center infrastructure, and luxury IoT home automation. We bridge complex engineering with seamless execution.
                </p>

                {/* 3 Quick Capability Chips */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground transition-all duration-300 ease-out hover:scale-105 hover:border-brand-orange/50 hover:shadow-[0_0_15px_rgba(255,106,0,0.25)] hover:bg-muted/70">
                    <CheckCircle2 className="size-3.5 text-brand-orange" /> Turnkey Life Safety
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground transition-all duration-300 ease-out hover:scale-105 hover:border-brand-coral/50 hover:shadow-[0_0_15px_rgba(255,80,30,0.25)] hover:bg-muted/70">
                    <CheckCircle2 className="size-3.5 text-brand-coral" /> Cyber Data Centers
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground transition-all duration-300 ease-out hover:scale-105 hover:border-brand-gold/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:bg-muted/70">
                    <CheckCircle2 className="size-3.5 text-brand-gold" /> Smart Automation
                  </span>
                </div>

                {/* Vision & Mission Interactive Cards with Hover Glow */}
                <div className="mt-5 grid gap-4 border-t border-border/70 pt-4 sm:grid-cols-2 sm:gap-5">
                  
                  {/* Vision Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-4 shadow-sm backdrop-blur-sm glow-card-hover hover:border-brand-orange/50 hover:bg-card hover:shadow-[0_16px_36px_-6px_rgba(255,106,0,0.22),0_0_20px_rgba(255,106,0,0.12)]">
                    <div className="absolute -right-8 -top-8 size-20 rounded-full bg-brand-orange/10 blur-xl transition-all duration-300 group-hover:bg-brand-orange/20" />
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange/20 to-brand-rose/20 text-brand-orange shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Eye className="size-4" />
                      </div>
                      <h3 className="font-display text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-orange">
                        Our Vision
                      </h3>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      To empower enterprises and modern living spaces with robust, future-ready infrastructure and intelligent automation.
                    </p>
                  </div>

                  {/* Mission Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-4 shadow-sm backdrop-blur-sm glow-card-hover hover:border-brand-coral/50 hover:bg-card hover:shadow-[0_16px_36px_-6px_rgba(255,80,30,0.22),0_0_20px_rgba(255,80,30,0.12)]">
                    <div className="absolute -right-8 -top-8 size-20 rounded-full bg-brand-coral/10 blur-xl transition-all duration-300 group-hover:bg-brand-coral/20" />
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-coral/20 to-brand-gold/20 text-brand-coral shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Rocket className="size-4" />
                      </div>
                      <h3 className="font-display text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-coral">
                        Our Mission
                      </h3>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Deliver zero-compromise safety, enterprise resilience, and high-performance engineering tailored to your operational goals.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Premium Interactive Photo with Floating Badges & Animations */}
              <div className="relative group" data-reveal>
                
                {/* Ambient Soft Glow Behind Photo */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand-orange/20 via-brand-coral/10 to-brand-gold/20 opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-75" />

                {/* Photo Frame Container */}
                <figure className="relative h-[290px] sm:h-[350px] lg:h-[410px] w-full overflow-hidden rounded-2xl border border-border/80 bg-secondary shadow-xl transition-transform duration-500 group-hover:shadow-2xl">
                  <img
                    src={collaborationImage}
                    alt="Technology professionals collaborating around a digital display"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Brand Badge (Bottom-Left) */}
                  <figcaption className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-xl border border-white/20 bg-black/60 px-3.5 py-2 text-xs font-semibold uppercase text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-black/80">
                    <img src={logoIcon} alt="" className="h-5 w-auto object-contain transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    <span className="tracking-wide">HANVI GLOBAL TECH PVT LTD</span>
                  </figcaption>

                  {/* Floating Live Badge (Top-Right) */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 shadow-lg backdrop-blur-md text-[11px] font-semibold text-white transition-all duration-300 group-hover:border-brand-orange/40">
                    <Sparkles className="size-3.5 text-brand-gold animate-pulse" />
                    <span>Future-Ready Engineering</span>
                  </div>

                  {/* Floating Live Telemetry Chip (Bottom-Right on sm screens) */}
                  <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-2.5 py-1 text-[10px] font-medium text-emerald-400 backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Certified Safety Standards</span>
                  </div>
                </figure>
              </div>

            </div>
          </div>
        </section>
        )}

        {(activeSection === "home" || activeSection === "services") && (
          <section id="services" className={`scroll-mt-20 bg-brand-cream pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10 text-foreground border-t border-brand-orange/10 ${activeSection === "services" ? "min-h-[calc(100svh-120px)] flex flex-col justify-center py-10" : ""}`}>
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
              <div className="flex flex-col gap-2" data-reveal>
                <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-end">
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-orange font-bold">
                      <span className="brand-gradient h-0.5 w-5" aria-hidden="true" />
                      <span>Specialized Services</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-[1.85rem]">
                      Engineering reliable, intelligent, and secure environments.
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigateTo("contact")}
                    className="inline-flex shrink-0 items-center gap-1.5 pb-0.5 text-xs sm:text-sm font-semibold text-brand-orange transition-colors hover:text-brand-rose cursor-pointer"
                  >
                    Discuss an opportunity <ArrowUpRight aria-hidden="true" className="size-4" />
                  </button>
                </div>
              <p className="text-xs sm:text-sm text-muted-foreground lg:whitespace-nowrap">
                Comprehensive life safety, high-pressure fire systems, tier-standard cyber data centers, structured communications, and smart touch home automation.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 grid gap-4 sm:gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.badge}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-orange/30 p-5 sm:p-5.5 lg:p-6 shadow-md backdrop-blur-md glow-card-hover hover:border-brand-orange/70 hover:shadow-[0_24px_50px_-6px_rgba(255,106,0,0.38),0_0_30px_rgba(255,106,0,0.22)] min-h-[380px] sm:min-h-[410px]"
                    data-reveal
                    style={{ '--reveal-delay': `${index * 85}ms` } as React.CSSProperties}
                  >
                    {/* Full Card Background Image Behind Text */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Gradient Dark Overlay (Subtle scrim so images remain bright and crystal clear) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-50% to-transparent transition-opacity duration-300 group-hover:via-black/25" />

                    {/* Top Edge Gradient Light Beam */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-90 transition-opacity duration-500 group-hover:opacity-100 z-10" />

                    {/* Ambient Floating Glow Orb */}
                    <div className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full bg-brand-orange/20 blur-2xl opacity-75 transition-opacity duration-500 group-hover:opacity-100 z-10" />

                    {/* Top Row: Floating Icon + Custom Domain Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex size-9.5 sm:size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-rose text-white shadow-[0_0_16px_rgba(255,106,0,0.5)] transition-transform duration-300 group-hover:scale-110">
                        <Icon aria-hidden="true" className="size-4.5" />
                      </div>

                      <span className="font-display text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-gold px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-brand-gold/40 shadow-sm">
                        {service.badge}
                      </span>
                    </div>

                    {/* Bottom Area: Title, Description, Tags & Action Button */}
                    <div className="relative z-10 mt-14 sm:mt-16 flex flex-col justify-end">
                      <h3 className="font-display text-base sm:text-[17px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-white/90 line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                        {service.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex rounded-full border border-brand-orange/35 bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-brand-gold backdrop-blur-sm transition-colors group-hover:border-brand-orange/60 group-hover:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => navigateTo("contact")}
                          className="inline-flex items-center gap-1.5 rounded-full brand-gradient glow-btn-hover px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(255,80,30,0.3)] cursor-pointer"
                        >
                          Enquire about this service <ArrowUpRight aria-hidden="true" className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}

              {/* 6th Card: Custom Turnkey Engineering Consultation with full card background image */}
              <article
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-orange/30 p-5 sm:p-5.5 lg:p-6 shadow-md backdrop-blur-md glow-card-hover hover:border-brand-orange/70 hover:shadow-[0_24px_50px_-6px_rgba(255,106,0,0.38),0_0_30px_rgba(255,106,0,0.22)] min-h-[380px] sm:min-h-[410px]"
                data-reveal
                style={{ '--reveal-delay': '450ms' } as React.CSSProperties}
              >
                {/* Full Card Background Image Behind Text */}
                <img
                  src="/services/turnkey-consulting.jpg"
                  alt="CUSTOM TURNKEY ENGINEERING & CONSULTING"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Gradient Dark Overlay (Subtle scrim so images remain bright and crystal clear) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-50% to-transparent transition-opacity duration-300 group-hover:via-black/25" />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose z-10" />
                <div className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full bg-brand-orange/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity z-10" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex size-9.5 sm:size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-rose text-white shadow-[0_0_16px_rgba(255,106,0,0.5)] transition-all duration-300 group-hover:scale-110">
                    <Layers3 aria-hidden="true" className="size-4.5" />
                  </div>

                  <span className="font-display text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-gold px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-brand-gold/40 shadow-sm">
                    Custom Solutions
                  </span>
                </div>

                <div className="relative z-10 mt-14 sm:mt-16 flex flex-col justify-end">
                  <h3 className="font-display text-base sm:text-[17px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                    CUSTOM TURNKEY ENGINEERING &amp; CONSULTING
                  </h3>

                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-white/90 line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                    Comprehensive industrial, commercial, or residential blueprints designed and executed end-to-end.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex rounded-full border border-brand-orange/35 bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-brand-gold backdrop-blur-sm">
                      Turnkey EPC
                    </span>
                    <span className="inline-flex rounded-full border border-brand-orange/35 bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-brand-gold backdrop-blur-sm">
                      Site Auditing
                    </span>
                    <span className="inline-flex rounded-full border border-brand-orange/35 bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-brand-gold backdrop-blur-sm">
                      AMC &amp; Support
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => navigateTo("contact")}
                      className="inline-flex items-center gap-1.5 rounded-full brand-gradient glow-btn-hover px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(255,80,30,0.3)] cursor-pointer"
                    >
                      Request consultation <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        )}

        {(activeSection === "home" || activeSection === "clients") && (
          <section id="clients" className={`scroll-mt-20 bg-brand-cream-alt pt-4 pb-4 sm:pt-5 sm:pb-5 text-foreground border-t border-brand-orange/10 ${activeSection === "clients" ? "min-h-[calc(100svh-120px)] flex flex-col justify-center py-12" : ""}`}>
          <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex flex-col gap-1.5" data-reveal>
              <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-orange font-bold">
                    <span className="brand-gradient h-0.5 w-5" aria-hidden="true" />
                    <span>Clients</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-[1.75rem]">
                    Built on meaningful connections.
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orange px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/25 w-fit">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
                  Enterprise Network
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground lg:whitespace-nowrap">
                Trusted enterprise partners, institutions, and infrastructure clients across diverse commercial &amp; industrial domains.
              </p>
            </div>
            {/* Infinite Horizontal Scroll Animated Tracks */}
            <div className="relative mt-5 sm:mt-6 overflow-hidden pause-hover select-none">
              {/* Left Edge Subtle Fade Mask */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-brand-cream-alt via-brand-cream-alt/80 to-transparent z-10" />

              {/* Right Edge Subtle Fade Mask */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-brand-cream-alt via-brand-cream-alt/80 to-transparent z-10" />

              {/* Row 1: Scrolling Left */}
              <div className="animate-marquee-left flex gap-4 sm:gap-5 pb-3.5">
                {[...clientPlaceholders.slice(0, 4), ...clientPlaceholders.slice(0, 4), ...clientPlaceholders.slice(0, 4), ...clientPlaceholders.slice(0, 4)].map((client, index) => (
                  <div
                    key={`r1-${client.name}-${index}`}
                    className="group relative flex w-[280px] sm:w-[315px] md:w-[335px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-brand-orange/20 bg-white/95 p-4 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_16px_36px_-6px_rgba(255,106,0,0.28),0_0_22px_rgba(255,106,0,0.18)] transition-all duration-300"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-85 group-hover:opacity-100 transition-opacity" />
                    <div className="pointer-events-none absolute -right-4 -top-4 size-20 rounded-full bg-brand-orange/10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl overflow-hidden border border-black/5 shadow-xs transition-transform duration-300 group-hover:scale-105">
                            {client.logo}
                          </div>
                          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-brand-orange px-2.5 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/25">
                            {client.tag}
                          </span>
                        </div>

                        <h3 className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors line-clamp-1">
                          {client.name}
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground line-clamp-1">
                          {client.sector}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Scrolling Right */}
              <div className="animate-marquee-right flex gap-4 sm:gap-5 pt-1">
                {[...clientPlaceholders.slice(4, 8), ...clientPlaceholders.slice(4, 8), ...clientPlaceholders.slice(4, 8), ...clientPlaceholders.slice(4, 8)].map((client, index) => (
                  <div
                    key={`r2-${client.name}-${index}`}
                    className="group relative flex w-[280px] sm:w-[315px] md:w-[335px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-brand-orange/20 bg-white/95 p-4 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_16px_36px_-6px_rgba(255,106,0,0.28),0_0_22px_rgba(255,106,0,0.18)] transition-all duration-300"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-85 group-hover:opacity-100 transition-opacity" />
                    <div className="pointer-events-none absolute -right-4 -top-4 size-20 rounded-full bg-brand-orange/10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl overflow-hidden border border-black/5 shadow-xs transition-transform duration-300 group-hover:scale-105">
                            {client.logo}
                          </div>
                          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-brand-orange px-2.5 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/25">
                            {client.tag}
                          </span>
                        </div>

                        <h3 className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors line-clamp-1">
                          {client.name}
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground line-clamp-1">
                          {client.sector}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        )}

        {(activeSection === "home" || activeSection === "partners") && (
          <section id="partners" className={`scroll-mt-20 bg-brand-cream pt-4 pb-4 sm:pt-5 sm:pb-5 text-foreground border-t border-brand-orange/10 ${activeSection === "partners" ? "min-h-[calc(100svh-120px)] flex flex-col justify-center py-12" : ""}`}>
          <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex flex-col gap-1.5" data-reveal>
              <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-orange font-bold">
                    <span className="brand-gradient h-0.5 w-5" aria-hidden="true" />
                    <span>Partners</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-[1.75rem]">
                    Stronger, side by side.
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-amber-700 w-fit">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
                  Global Alliances
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground lg:whitespace-nowrap">
                Collaborating with world-class OEM hardware manufacturers, cybersecurity alliances, and IoT smart ecosystem providers.
              </p>
            </div>
            {/* Infinite Horizontal Scroll Animated Tracks for Partners */}
            <div className="relative mt-5 sm:mt-6 overflow-hidden pause-hover select-none">
              {/* Left Edge Subtle Fade Mask */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent z-10" />

              {/* Right Edge Subtle Fade Mask */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-brand-cream via-brand-cream/80 to-transparent z-10" />

              {/* Row 1: Scrolling Left */}
              <div className="animate-marquee-left flex gap-4 sm:gap-5 pb-3.5">
                {[...partnerPlaceholders.slice(0, 4), ...partnerPlaceholders.slice(0, 4), ...partnerPlaceholders.slice(0, 4), ...partnerPlaceholders.slice(0, 4)].map((partner, index) => (
                  <div
                    key={`pr1-${partner.name}-${index}`}
                    className="group relative flex w-[280px] sm:w-[315px] md:w-[335px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-brand-orange/20 bg-white/95 p-4 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_16px_36px_-6px_rgba(255,106,0,0.28),0_0_22px_rgba(255,106,0,0.18)] transition-all duration-300"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-85 group-hover:opacity-100 transition-opacity" />
                    <div className="pointer-events-none absolute -right-4 -top-4 size-20 rounded-full bg-brand-gold/15 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl overflow-hidden border border-black/5 shadow-xs transition-transform duration-300 group-hover:scale-105">
                            {partner.logo}
                          </div>
                          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-amber-700 px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/30">
                            {partner.tag}
                          </span>
                        </div>

                        <h3 className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors line-clamp-1">
                          {partner.name}
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground line-clamp-1">
                          {partner.sector}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Scrolling Right */}
              <div className="animate-marquee-right flex gap-4 sm:gap-5 pt-1">
                {[...partnerPlaceholders.slice(4, 8), ...partnerPlaceholders.slice(4, 8), ...partnerPlaceholders.slice(4, 8), ...partnerPlaceholders.slice(4, 8)].map((partner, index) => (
                  <div
                    key={`pr2-${partner.name}-${index}`}
                    className="group relative flex w-[280px] sm:w-[315px] md:w-[335px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-brand-orange/20 bg-white/95 p-4 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_16px_36px_-6px_rgba(255,106,0,0.28),0_0_22px_rgba(255,106,0,0.18)] transition-all duration-300"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-85 group-hover:opacity-100 transition-opacity" />
                    <div className="pointer-events-none absolute -right-4 -top-4 size-20 rounded-full bg-brand-gold/15 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl overflow-hidden border border-black/5 shadow-xs transition-transform duration-300 group-hover:scale-105">
                            {partner.logo}
                          </div>
                          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-amber-700 px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/30">
                            {partner.tag}
                          </span>
                        </div>

                        <h3 className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors line-clamp-1">
                          {partner.name}
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground line-clamp-1">
                          {partner.sector}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        )}

        {(activeSection === "home" || activeSection === "contact") && (
          <section id="contact" className={`scroll-mt-20 bg-brand-cream-alt pt-4 pb-5 sm:pt-5 sm:pb-6 text-foreground border-t border-brand-orange/10 ${activeSection === "contact" ? "min-h-[calc(100svh-120px)] flex flex-col justify-center" : ""}`}>
          <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 items-center">
              <div data-reveal>
                <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-orange font-bold">
                  <span className="brand-gradient h-0.5 w-5" aria-hidden="true" />
                  <span>Contact us</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-foreground">
                  Let’s start a conversation.
                </h2>
                <p className="mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Get in touch with our team for enterprise project inquiries, site inspections, and customized safety &amp; automation solutions.
                </p>

                <dl className="mt-4 space-y-2.5 sm:space-y-3">
                  {/* Contact Person Card */}
                  <div
                    data-reveal
                    style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
                    className="group relative flex items-center gap-3.5 overflow-hidden rounded-xl border border-brand-orange/20 bg-white/95 p-3 sm:p-3.5 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_12px_28px_-6px_rgba(255,106,0,0.25),0_0_18px_rgba(255,106,0,0.15)]"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-80" />
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-orange to-brand-rose text-white shadow-sm">
                      <User aria-hidden="true" className="size-4" />
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">Contact Person</dt>
                      <dd className="mt-0.5 text-xs sm:text-sm font-bold text-foreground">SOURVI SAIE KUMAR</dd>
                    </div>
                  </div>

                  {/* Phone Number Card */}
                  <div
                    data-reveal
                    style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
                    className="group relative flex items-center gap-3.5 overflow-hidden rounded-xl border border-brand-orange/20 bg-white/95 p-3 sm:p-3.5 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_12px_28px_-6px_rgba(255,106,0,0.25),0_0_18px_rgba(255,106,0,0.15)]"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-80" />
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-orange to-brand-coral text-white shadow-sm">
                      <Phone aria-hidden="true" className="size-4" />
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">Phone Number</dt>
                      <dd className="mt-0.5 text-xs sm:text-sm font-bold text-foreground">
                        <a href="tel:+919392673103" className="transition-colors hover:text-brand-orange">
                          +91 9392673103
                        </a>
                      </dd>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div
                    data-reveal
                    style={{ '--reveal-delay': '180ms' } as React.CSSProperties}
                    className="group relative flex items-center gap-3.5 overflow-hidden rounded-xl border border-brand-orange/20 bg-white/95 p-3 sm:p-3.5 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_12px_28px_-6px_rgba(255,106,0,0.25),0_0_18px_rgba(255,106,0,0.15)]"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-80" />
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-coral to-brand-gold text-white shadow-sm">
                      <Mail aria-hidden="true" className="size-4" />
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">Email Address</dt>
                      <dd className="mt-0.5 text-xs sm:text-sm font-bold text-foreground">
                        <a href="mailto:saie@hanviglobaltech.com" className="transition-colors hover:text-brand-orange">
                          saie@hanviglobaltech.com
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Contact Form Card */}
              <div
                className="group relative overflow-hidden rounded-2xl border border-brand-orange/25 bg-white p-4.5 sm:p-5 lg:p-6 shadow-md backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_16px_36px_-6px_rgba(255,106,0,0.25),0_0_24px_rgba(255,106,0,0.15)]"
                data-reveal
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose" />
                <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-brand-orange/10 blur-2xl opacity-75" />

                <h3 className="relative z-10 font-display text-base sm:text-lg font-bold text-foreground">Send us a message</h3>
                <p className="relative z-10 mt-0.5 text-[11px] sm:text-xs text-muted-foreground">Fill out the form below and our team will get back to you shortly.</p>

                {formSubmitted ? (
                  <div className="relative z-10 my-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 sm:p-5 text-emerald-950 backdrop-blur-md animate-in fade-in zoom-in-95 duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
                        <CheckCircle2 className="size-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display text-sm sm:text-base font-bold text-emerald-900">Inquiry Sent via WhatsApp!</h4>
                        <p className="text-xs text-emerald-800 leading-relaxed">
                          {formMessage}
                        </p>
                        <p className="text-[11px] text-emerald-700/90 pt-0.5">
                          WhatsApp will open with your complete inquiry text ready to send to <strong>+91 9392673103</strong>. If it did not open automatically, click below:
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-2.5">
                          <a
                            href={`https://wa.me/919392673103?text=${encodeURIComponent(
                              [
                                `*New Project Inquiry - HANVI Global Tech*`,
                                ``,
                                `*Full Name:* ${formData.name.trim()}`,
                                `*Email:* ${formData.email.trim()}`,
                                `*Phone:* +91 ${formData.phone.trim()}`,
                                `*Subject:* ${formData.subject.trim()}`,
                                `*Message:* ${formData.message.trim()}`,
                              ].join("\n")
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md hover:bg-[#20ba59] transition-all hover:scale-105"
                          >
                            <svg className="size-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.712 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Open WhatsApp Chat
                          </a>
                          <button
                            type="button"
                            onClick={() => {
                              setFormSubmitted(false);
                              setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                              setFormErrors({});
                              setFormMessage("");
                            }}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-900 underline hover:text-emerald-700 cursor-pointer"
                          >
                            Send another inquiry →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form noValidate className="relative z-10 mt-3 space-y-2 sm:space-y-2.5" onSubmit={handleFormSubmit}>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label htmlFor="contact-name" className="text-[11px] font-medium text-foreground">
                          Full name <span className="text-brand-orange">*</span>
                        </label>
                        <Input
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          value={formData.name || ""}
                          onChange={handleNameChange}
                          onBlur={handleBlur}
                          placeholder="Your full name (letters only)"
                          className={`h-8.5 sm:h-9 rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                            formErrors.name
                              ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                              : "border-border focus:border-brand-orange focus:ring-brand-orange/20 focus:shadow-[0_0_12px_rgba(255,106,0,0.18)]"
                          }`}
                        />
                        {formErrors.name && (
                          <p className="flex items-center gap-1 text-[10.5px] font-medium text-red-500 mt-1">
                            <AlertCircle className="size-3 shrink-0" /> {formErrors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="contact-email" className="text-[11px] font-medium text-foreground">
                          Email address <span className="text-brand-orange">*</span>
                        </label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email || ""}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="you@example.com"
                          className={`h-8.5 sm:h-9 rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                            formErrors.email
                              ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                              : "border-border focus:border-brand-orange focus:ring-brand-orange/20 focus:shadow-[0_0_12px_rgba(255,106,0,0.18)]"
                          }`}
                        />
                        {formErrors.email && (
                          <p className="flex items-center gap-1 text-[10.5px] font-medium text-red-500 mt-1">
                            <AlertCircle className="size-3 shrink-0" /> {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label htmlFor="contact-phone" className="text-[11px] font-medium text-foreground">
                            Phone number <span className="text-brand-orange">*</span>
                          </label>
                          <span className={`text-[10px] font-mono ${formData.phone.length === 10 ? "text-emerald-600 font-semibold" : "text-muted-foreground"}`}>
                            {formData.phone.length}/10 digits
                          </span>
                        </div>
                        <Input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          autoComplete="tel"
                          value={formData.phone || ""}
                          onChange={handlePhoneChange}
                          onBlur={handleBlur}
                          placeholder="10-digit mobile number"
                          className={`h-8.5 sm:h-9 rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                            formErrors.phone
                              ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                              : "border-border focus:border-brand-orange focus:ring-brand-orange/20 focus:shadow-[0_0_12px_rgba(255,106,0,0.18)]"
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="flex items-center gap-1 text-[10.5px] font-medium text-red-500 mt-1">
                            <AlertCircle className="size-3 shrink-0" /> {formErrors.phone}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="contact-subject" className="text-[11px] font-medium text-foreground">
                          Subject <span className="text-brand-orange">*</span>
                        </label>
                        <Input
                          id="contact-subject"
                          name="subject"
                          value={formData.subject || ""}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="How can we help?"
                          className={`h-8.5 sm:h-9 rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                            formErrors.subject
                              ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                              : "border-border focus:border-brand-orange focus:ring-brand-orange/20 focus:shadow-[0_0_12px_rgba(255,106,0,0.18)]"
                          }`}
                        />
                        {formErrors.subject && (
                          <p className="flex items-center gap-1 text-[10.5px] font-medium text-red-500 mt-1">
                            <AlertCircle className="size-3 shrink-0" /> {formErrors.subject}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-message" className="text-[11px] font-medium text-foreground">
                        Message <span className="text-brand-orange">*</span>
                      </label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        value={formData.message || ""}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Tell us a little about your project or enquiry (min 10 characters)"
                        className={`min-h-18 sm:min-h-20 resize-y rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                          formErrors.message
                            ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                            : "border-border focus:border-brand-orange focus:ring-brand-orange/20 focus:shadow-[0_0_12px_rgba(255,106,0,0.18)]"
                        }`}
                      />
                      {formErrors.message && (
                        <p className="flex items-center gap-1 text-[10.5px] font-medium text-red-500 mt-1">
                          <AlertCircle className="size-3 shrink-0" /> {formErrors.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-start gap-2 pt-0.5 sm:flex-row sm:items-center sm:justify-between">
                      <Button type="submit" className="brand-gradient glow-btn-hover h-8.5 sm:h-9 rounded-full px-5 text-xs font-semibold text-primary-foreground shadow-[0_4px_14px_rgba(255,80,30,0.3)] cursor-pointer">
                        Send inquiry <ArrowUpRight aria-hidden="true" className="ml-1 size-3" />
                      </Button>
                      <p className="text-[10px] text-muted-foreground">Enterprise response guaranteed.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        )}
      </main>

      <footer className="bg-brand-charcoal text-background border-t border-white/5">
        <div className="mx-auto w-full px-4 pb-6 pt-8 sm:px-6 sm:pt-10 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid gap-8 border-b border-background/15 pb-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-10">
            <div>
              <button
                type="button"
                onClick={() => navigateTo("home")}
                aria-label="HANVI Global Tech home"
                className="text-left cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <CompanyName light />
              </button>
              <p className="mt-4 max-w-xs text-sm leading-6 text-background/65">
                Specializing in life safety fire alarm systems, fire hydrants, cyber data centers, enterprise networking, and smart IoT home automation.
              </p>
              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-background/60">Social connections</p>
                <div className="mt-2.5 flex items-center gap-3 text-background/80" aria-label="Social media connections">
                  {/* Official LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group relative flex size-8 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow-[0_0_14px_rgba(10,102,194,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_22px_rgba(10,102,194,0.8)]"
                  >
                    <svg className="size-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Official Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="group relative flex size-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_0_14px_rgba(220,39,67,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_22px_rgba(220,39,67,0.85)]"
                  >
                    <svg className="size-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Official Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="group relative flex size-8 items-center justify-center rounded-lg bg-[#1877F2] text-white shadow-[0_0_14px_rgba(24,119,242,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_22px_rgba(24,119,242,0.8)]"
                  >
                    <svg className="size-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <span className="text-xs text-background/60">Follow HANVI online</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase text-background/55">Quick links</h2>
              <ul className="mt-4 space-y-3">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => navigateTo(item.id)}
                      className={`text-sm text-left transition-colors cursor-pointer ${
                        activeSection === item.id ? "text-brand-gold font-semibold" : "text-background/80 hover:text-brand-gold"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase text-background/55">Services</h2>
              <ul className="mt-4 space-y-2.5">
                {services.map((service) => (
                  <li key={service.badge}>
                    <button
                      type="button"
                      onClick={() => navigateTo("services")}
                      className="text-xs text-left text-background/80 transition-colors hover:text-brand-gold line-clamp-1 block cursor-pointer"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase text-background/55">Contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-background/80">
                <li className="font-semibold text-white">SOURVI SAIE KUMAR</li>
                <li>
                  <a href="tel:+919392673103" className="transition-colors hover:text-brand-gold">
                    +91 9392673103
                  </a>
                </li>
                <li>
                  <a href="mailto:saie@hanviglobaltech.com" className="transition-colors hover:text-brand-gold">
                    saie@hanviglobaltech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HANVI GLOBAL TECH PVT LTD</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Button variant="link" size="sm" className="h-auto p-0 text-xs text-background/65 hover:text-brand-gold" onClick={() => setLegalPage("Privacy policy")}>
                Privacy policy
              </Button>
              <Button variant="link" size="sm" className="h-auto p-0 text-xs text-background/65 hover:text-brand-gold" onClick={() => setLegalPage("Terms & conditions")}>
                Terms &amp; conditions
              </Button>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-1 transition-colors hover:text-brand-gold cursor-pointer"
              >
                Back to top <ArrowDown aria-hidden="true" className="size-3 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons: Phone Call & WhatsApp (Bottom Right) */}
      <aside aria-label="Quick contact shortcuts" className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
        {/* Direct Phone Call Button */}
        <a
          href="tel:+919392673103"
          aria-label="Call +91 9392673103"
          className="group relative flex size-12 sm:size-13.5 items-center justify-center rounded-full bg-[#E11D48] text-white shadow-[0_6px_20px_rgba(225,29,72,0.45)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_10px_26px_rgba(225,29,72,0.65)] active:scale-95"
        >
          <Phone className="size-5.5 sm:size-6 text-white stroke-[2.3] transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-black/85 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
            Call +91 9392673103
          </span>
        </a>

        {/* WhatsApp Chat Button with Glowing Radar Pulse */}
        <a
          href="https://wa.me/919392673103?text=Hello%20HANVI%20Global%20Tech%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex size-12 sm:size-13.5 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_22px_rgba(37,211,102,0.45)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_10px_28px_rgba(37,211,102,0.7)] active:scale-95"
        >
          {/* Animated Ambient Radar Pulse Ring */}
          <span className="absolute -inset-1.5 -z-10 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
          <span className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/25 pointer-events-none" />

          {/* Official WhatsApp SVG Vector Icon */}
          <svg className="size-6 sm:size-6.5 fill-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.712 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-black/85 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      <Dialog open={legalPage !== null} onOpenChange={(open) => { if (!open) setLegalPage(null); }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{legalPage}</DialogTitle>
            <DialogDescription>
              Approved {legalPage?.toLowerCase()} content was not supplied. Add the company’s reviewed text before publishing.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}