import { useEffect, useState, useRef, type FormEvent } from "react";
import {
  Activity,
  AlertCircle,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Database,
  Droplets,
  Eye,
  Facebook,
  Flame,
  Headphones,
  Instagram,
  Layers,
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
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  User,
  Users,
  Workflow,
  Wrench,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ServiceDetailPage, type ServiceDetailItem } from "./service-detail-page";
import aboutBuilding from "@/assets/about-building.jpg";
import collaborationImage from "@/assets/hero-collaboration.webp";
import globalImage from "@/assets/hero-global.webp";
import infrastructureImage from "@/assets/hero-infrastructure.webp";
import heroFireAlarmImage from "@/assets/hero-fire-alarm.jpg";
import heroCctvImage from "@/assets/hero-cctv.jpg";
import heroNetworkingImage from "@/assets/hero-networking.jpg";
import logoHorizontal from "@/assets/hanvi-logo-horizontal.png";
import logoFull from "@/assets/hanvi-logo.png";
import logoIcon from "@/assets/hanvi-icon.png";
import apolloHospitalsImage from "@/assets/apollo-hospitals.jpg";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Clients", id: "clients" },
  { label: "Partners", id: "partners" },
] as const;

const slides = [
  { image: heroCctvImage, alt: "Advanced high-definition outdoor CCTV surveillance security camera on enterprise facility", label: "CCTV surveillance & security" },
  { image: heroFireAlarmImage, alt: "Intelligent fire alarm and life safety systems in a modern enterprise building", label: "Fire alarm systems" },
  { image: heroNetworkingImage, alt: "Enterprise network rack with Cat6A structured cabling and managed switches", label: "Network infrastructure & switching" },
] as const;

const services: readonly ServiceDetailItem[] = [
  {
    id: "fire-alarm",
    title: "Fire Alarm System",
    category: "Life Safety & Early Warning",
    tagline: "Pinpoint early detection and rapid automated evacuation systems",
    description: "Early detection and alert systems for complete fire safety.",
    details:
      "Engineered to deliver rapid, pinpoint fire detection and life-saving alerts before smoke spreads. Our intelligent addressable and conventional alarm systems integrate multi-criteria optical sensors, manual call points, hooters with flashers, and central control panels with 24/7 telemetry monitoring.",
    icon: Flame,
    image: "/services/ref-fire-alarm.jpg",
    architecture:
      "Our intelligent addressable fire detection infrastructure utilizes micro-processed multi-criteria sensors across zones linked to redundant Fire Alarm Control Panels (FACP). Integrates automated emergency sounders, voice evacuation routing, and BMS interlocks for damper and elevator recall.",
    specifications: [
      { label: "Detection Delay", value: "< 3 Seconds" },
      { label: "Sensor Tech", value: "Dual Optical & Thermal" },
      { label: "Panel Loops", value: "Up to 8 Loops (2000+ Pts)" },
      { label: "Battery Backup", value: "48-Hour Standby 24V" },
    ],
    features: [
      "Intelligent multi-criteria smoke, heat & multi-sensor detectors",
      "Centralized addressable fire alarm control panels (FACP)",
      "Automated voice evacuation & directional emergency sounders",
      "Seamless BMS, access control, and HVAC damper trip integration",
      "Certified compliance with NFPA 72, EN 54, NBC 2016 and local Fire Directorate guidelines",
    ],
    standards: "NFPA 72, EN 54, BIS & NBC Compliant",
    suitableFor: "Commercial Towers, SEZs, Hospitals, Tech Parks & Residential Apartments",
    workflow: [
      { step: "01", title: "Site Survey & Zone Mapping", desc: "Detailed risk appraisal, acoustic coverage, and detector placement design." },
      { step: "02", title: "FACP & Loop Installation", desc: "Fire-rated armored cabling, addressable smoke/heat sensors, and panel mount." },
      { step: "03", title: "Testing & BMS Interlock", desc: "Smoke chamber trigger verification, HVAC trips, and sounder acoustic decibel checks." },
      { step: "04", title: "Statutory Certification", desc: "Handover with Fire Department & NBC compliance certificates." },
    ],
  },
  {
    id: "fire-hydrant",
    title: "Fire Hydrant System",
    category: "Hydraulic Fire Suppression",
    tagline: "Industrial-grade water distribution networks engineered for instant thermal suppression",
    description: "Reliable water-based fire protection for buildings and facilities.",
    details:
      "Industrial-grade water-based firefighting networks engineered for high-pressure suppression. Designed with automatic diesel and electrical booster pump assemblies, wet & dry riser pipelines, landing valves, hose reels, and automated sprinkler networks that activate instantly during thermal emergencies.",
    icon: Droplets,
    image: "/services/ref-fire-hydrant.jpg",
    architecture:
      "Heavy-duty wet and dry riser pipeline network supplied by multi-stage centrifugal pumps (Electric Main + Standby Diesel + Jockey Pump). Integrated with UL/FM certified landing valves, hose reels, and high-density sprinkler heads across all operational floors.",
    specifications: [
      { label: "Operating Pressure", value: "7 to 10 Bar Continuous" },
      { label: "Pumping System", value: "Electric + Standby Diesel" },
      { label: "Pipe Standard", value: "Heavy-Gauge MS C-Class" },
      { label: "Coverage", value: "100% Floor & Shaft Envelope" },
    ],
    features: [
      "Heavy-duty electric, diesel standby & jockey booster pump skids",
      "Automated wet & dry riser pipeline systems with fire brigade inlets",
      "High-velocity spray nozzles, hose reel drums & landing valves",
      "Pressure maintenance valves and certified flow monitoring gauges",
      "Full hydrostatic pressure tested to 1.5x working pressure with NBC & IS 3844 compliance",
    ],
    standards: "NFPA 13 & 14, IS 3844, NBC Fire Safety Norms",
    suitableFor: "Manufacturing Plants, Warehouses, High-Rise Buildings & Infrastructure Hubs",
    workflow: [
      { step: "01", title: "Hydraulic Calculation", desc: "Water storage capacity, pump head calculation, and riser pipe sizing." },
      { step: "02", title: "Pump Skid & Piping", desc: "Precision fabrication, grooved/welded piping, and hydrant post placement." },
      { step: "03", title: "Hydrostatic Pressure Testing", desc: "1.5x working pressure leak test and flow meter discharge calibration." },
      { step: "04", title: "Fire Safety Sign-off", desc: "Full statutory compliance inspection and operational training." },
    ],
  },
  {
    id: "cctv-surveillance",
    title: "CCTV Surveillance",
    category: "Enterprise Physical Security",
    tagline: "AI-driven high-resolution optical surveillance and perimeter defense ecosystems",
    description: "Advanced video monitoring for homes, offices & commercial spaces.",
    details:
      "End-to-end IP video surveillance ecosystems offering crystal-clear visual monitoring, smart threat detection, and centralized evidence recording. Powered by AI-driven analytics including perimeter tripwire, facial detection, motion tracking, and ultra low-light night vision.",
    icon: Camera,
    image: "/services/ref-cctv.jpg",
    architecture:
      "Centralized IP surveillance matrix with Starlight low-light optics, high-throughput PoE switches, and Enterprise NVR servers with RAID-6 redundant storage. Features neural-network AI vision for intrusion detection, license plate recognition, and face tracking.",
    specifications: [
      { label: "Resolution", value: "4K UHD / 8 Megapixels" },
      { label: "Night Vision", value: "ColorNight / IR up to 60m" },
      { label: "Storage Architecture", value: "RAID-6 Redundant NVR" },
      { label: "AI Analytics", value: "Perimeter, Face & ANPR" },
    ],
    features: [
      "4K Ultra-HD IP dome, bullet, and 360° PTZ cameras with Starlight night vision",
      "AI video analytics: intrusion detection, crowd density & license plate recognition",
      "Network Video Recorders (NVR) with RAID redundancy & cloud backup",
      "Multi-screen command center software and remote mobile streaming apps",
      "Cyber-hardened NDAA compliant hardware, IP67 weatherproof & IK10 vandal resistance",
    ],
    standards: "ONVIF Profile S/G/T, NDAA Compliant Hardware, IP67 Weatherproof",
    suitableFor: "Corporate Campuses, Banks, Retail Chains, Gated Communities & Smart Cities",
    workflow: [
      { step: "01", title: "Blind Spot Audit", desc: "Field-of-view mapping, optical focal length calculation, and lighting evaluation." },
      { step: "02", title: "Cabling & Camera Mounting", desc: "Cat6A PoE infrastructure, weather-sealed IP67 junction enclosures." },
      { step: "03", title: "NVR Configuration & AI Setup", desc: "Perimeter tripwire calibration, motion zones, and RAID storage tuning." },
      { step: "04", title: "Command Center Handover", desc: "Multi-screen video wall setup, secure mobile access, and security staff training." },
    ],
  },
  {
    id: "data-center",
    title: "Cyber Security Data Center Design",
    category: "Mission-Critical IT Infrastructure",
    tagline: "Tier-standard server rooms engineered for maximum uptime and cyber-physical defense",
    description: "Secure, high-availability and scalable data center infrastructure.",
    details:
      "Tier-standard mission-critical IT infrastructure engineered for maximum uptime, physical cyber defense, and energy efficiency. We handle turnkey server room architecture, precision cooling, cold/hot aisle containment, redundant UPS backup, and physical security access control.",
    icon: Server,
    image: "/services/ref-data-center.jpg",
    architecture:
      "Turnkey modular server room environment designed with N+1 or 2N electrical redundancy, modular high-efficiency UPS systems, precision air conditioning (PAC) with cold/hot aisle containment, FM-200 / Novec clean agent fire suppression, and biometric biometric perimeter control.",
    specifications: [
      { label: "Tier Standard", value: "Tier III & Tier IV Ready" },
      { label: "Power Redundancy", value: "2N UPS + Dual DG Sync" },
      { label: "Precision Cooling", value: "In-Row PAC Cold Aisle" },
      { label: "Fire Suppression", value: "Clean Agent Gas (Novec/FM-200)" },
    ],
    features: [
      "Tier III & IV compliant modular server farm architecture",
      "Precision air conditioning (PAC) with cold/hot aisle containment",
      "Zero-trust network architecture, hardware security modules & firewall integration",
      "2N redundant modular UPS systems, lithium battery banks & DG synchronization",
      "FM-200 / Novec clean agent waterless fire suppression & biometric dual-factor access",
    ],
    standards: "TIA-942, Uptime Institute Standards, ISO 27001 Security",
    suitableFor: "Enterprise IT, FinTech, Cloud Providers, Telecom Hubs & Government SEZs",
    workflow: [
      { step: "01", title: "Civil & Thermal Design", desc: "Raised flooring, containment layouts, heat load BTU calculations." },
      { step: "02", title: "Electrical & UPS Skids", desc: "Modular busbar trunking, 2N UPS, battery racks, and isolated earthing." },
      { step: "03", title: "PAC & Fire Suppression", desc: "In-row cooling setup, gas discharge nozzles, and aspiration smoke detectors." },
      { step: "04", title: "Commissioning & Audit", desc: "Integrated System Test (IST), thermal imaging, and Tier certification audit." },
    ],
  },
  {
    id: "networking-intercom",
    title: "Network Communications & Intercom Solutions",
    category: "Structured Cabling & Communications",
    tagline: "High-throughput campus backbones, managed switching, and IP SIP intercom matrices",
    description: "Seamless connectivity, intercom and communication systems.",
    details:
      "Enterprise-grade connectivity networks ensuring high-throughput data transmission, crystal-clear SIP intercom communications, and campus-wide broadcasting. Engineered with high-speed Cat6A/Fiber optic backbones, managed core switches, and commercial video door phones.",
    icon: Network,
    image: "/services/ref-networking.jpg",
    architecture:
      "High-speed unified network architecture consisting of single-mode/multi-mode fiber optic risers, Cat6A horizontal cabling, Layer-2/Layer-3 managed switches, campus WiFi 6/7 arrays, and SIP-enabled IP multi-tenant video intercom systems.",
    specifications: [
      { label: "Backbone Bandwidth", value: "10G / 40G Fiber Optic" },
      { label: "Intercom Protocol", value: "SIP 2.0 / IP Video" },
      { label: "Switching Fabric", value: "L2/L3 PoE+ Enterprise" },
      { label: "Structured Cable", value: "Cat6A 500MHz Shielded" },
    ],
    features: [
      "Structured Cat6A and multi-core fiber optic campus backbones",
      "Enterprise managed switches, routers & high-density WiFi 6/7 access points",
      "SIP-based IP multi-apartment video door phones & guard consoles",
      "Digital Public Address (PA) and emergency voice broadcast systems",
      "100% Fluke DSX-8000 certified channel link testing with full network topology blueprints",
    ],
    standards: "TIA/EIA-568-C, IEEE 802.3 Ethernet, SIP 2.0 Protocols",
    suitableFor: "Corporate Offices, Educational Campuses, Gated Communities & Tech Centers",
    workflow: [
      { step: "01", title: "Network Topology Blueprint", desc: "Bandwidth forecasting, rack layout design, and RF WiFi heatmapping." },
      { step: "02", title: "Fiber & Copper Pulling", desc: "Structured cable routing, patch panel punch-down, and OTDR fiber splicing." },
      { step: "03", title: "Switch & SIP Intercom Setup", desc: "VLAN segmentation, QoS prioritization, and door-station IP mapping." },
      { step: "04", title: "Fluke Certification", desc: "100% channel link testing, Fluke cert reports, and operational sign-off." },
    ],
  },
  {
    id: "smart-home",
    title: "Smart Node Home Automation & Touch Switch Boards",
    category: "Luxury IoT & Building Automation",
    tagline: "Capacitive glass touch switchboards and intelligent wireless automation ecosystems",
    description: "Intelligent automation and premium touch switch panels for modern living.",
    details:
      "Luxury smart home ecosystems combining capacitive feather-touch glass switchboards with invisible IoT automation nodes. Control lights, air conditioning, motorized curtains, and custom ambiance scenes effortlessly through intuitive touch, voice commands, or mobile apps from anywhere.",
    icon: Cpu,
    image: "/services/ref-smart-home.jpg",
    architecture:
      "State-of-the-art building automation integrating capacitive feather-touch tempered glass panels, retrofit micro smart nodes, and mesh IoT communication. Offers seamless scene scheduling, multi-zone lighting, HVAC control, motorized curtain drives, and voice AI integration.",
    specifications: [
      { label: "Panel Finish", value: "Toughened Glass Touch" },
      { label: "Wireless Protocol", value: "Dual WiFi & Zigbee 3.0" },
      { label: "App & Voice", value: "Alexa, Google & iOS/Android" },
      { label: "Installation Type", value: "Retrofit (No Rewiring)" },
    ],
    features: [
      "Ultra-responsive capacitive glass touch switch panels with ambient backlighting",
      "Retrofit micro smart nodes that fit behind existing modular gang boxes",
      "Custom scene control: Welcome, Movie, Night & Away automated presets",
      "Voice integration (Alexa & Google Home) + remote mobile app automation",
      "End-to-end 128-bit encrypted wireless mesh communication (Dual WiFi & Zigbee 3.0)",
    ],
    standards: "BIS Certified, CE, RoHS Compliant, Secure 128-bit IoT Encryption",
    suitableFor: "Luxury Villas, Premium Apartments, Executive Suites & Boutique Hotels",
    workflow: [
      { step: "01", title: "Lifestyle Ambience Planning", desc: "Gang box assessment, lighting load mapping, and scene preference workshop." },
      { step: "02", title: "Glass Panel & Node Fitting", desc: "Seamless replacement of manual switches with capacitive glass touchboards." },
      { step: "03", title: "Gateway & App Scene Sync", desc: "WiFi/Zigbee bridge pairing, smartphone automation routines, and voice skills setup." },
      { step: "04", title: "Personalized Walkthrough", desc: "Master scene demo, multi-user household setup, and concierge support activation." },
    ],
  },
];

const clientPlaceholders = [
  {
    name: "L&T Construction & Infra",
    sector: "Industrial & Metro Transit",
    tag: "Metro & Infra",
    logo: (
      <svg viewBox="0 0 200 48" className="h-12 sm:h-14 md:h-[3.65rem] w-auto max-w-[92%] object-contain" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#0C2340" />
        <text x="24" y="28" textAnchor="middle" fill="#FDB913" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="-0.5">L&amp;T</text>
        <path d="M12 33h24" stroke="#FDB913" strokeWidth="2" strokeLinecap="round" />
        <text x="52" y="23" fill="#0C2340" fontFamily="sans-serif" fontWeight="800" fontSize="13.5" letterSpacing="0.2">L&amp;T Construction</text>
        <text x="52" y="36" fill="#64748B" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.8">INFRASTRUCTURE</text>
      </svg>
    ),
  },
  {
    name: "GMR Aerospace & Tech Park",
    sector: "Mission-Critical Facilities",
    tag: "Aviation Hub",
    logo: (
      <svg viewBox="0 0 200 48" className="h-12 sm:h-14 md:h-[3.65rem] w-auto max-w-[92%] object-contain" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#0A1E3F" />
        <path d="M14 22C14 16 18 12 24 12C30 12 34 16 34 22C34 26 31 29 25 29H20" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 22H32" stroke="#FDB913" strokeWidth="2.5" strokeLinecap="round" />
        <text x="52" y="24" fill="#0A1E3F" fontFamily="sans-serif" fontWeight="900" fontSize="17" letterSpacing="1.2">GMR</text>
        <text x="52" y="36" fill="#EA580C" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.8">AEROSPACE &amp; TECH</text>
      </svg>
    ),
  },
  {
    name: "Phoenix Cyber Towers",
    sector: "Cyber Data Centers & SEZ",
    tag: "Cyber SEZ",
    logo: (
      <svg viewBox="0 0 200 48" className="h-12 sm:h-14 md:h-[3.65rem] w-auto max-w-[92%] object-contain" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#1C0F0A" />
        <path d="M24 9C26 15 31 17 33 23C35 28 32 33 24 34C16 33 13 28 15 23C17 17 22 15 24 9Z" fill="#FF501E" />
        <path d="M24 16C25 19 28 21 29 25C30 28 28 30 24 31C20 30 18 28 19 25C20 21 23 19 24 16Z" fill="#FDB913" />
        <text x="52" y="23" fill="#1C0F0A" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.8">PHOENIX</text>
        <text x="52" y="36" fill="#64748B" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="1">CYBER TOWERS</text>
      </svg>
    ),
  },
  {
    name: "My Home Group Habitats",
    sector: "Smart Living & High-Rise",
    tag: "Smart Living",
    logo: (
      <svg viewBox="0 0 200 48" className="h-12 sm:h-14 md:h-[3.65rem] w-auto max-w-[92%] object-contain" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#14241C" />
        <path d="M16 32V20L24 13L32 20V32H27V24H21V32H16Z" fill="#2EAA68" />
        <path d="M24 17L29 21V32H27V23H21V32H19V21L24 17Z" fill="#75D99F" />
        <circle cx="24" cy="9.5" r="1.5" fill="#FDB913" />
        <text x="52" y="23" fill="#14241C" fontFamily="sans-serif" fontWeight="800" fontSize="14.5" letterSpacing="0.6">MY HOME</text>
        <text x="52" y="36" fill="#16A34A" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="1">GROUP HABITATS</text>
      </svg>
    ),
  },
  {
    name: "Apollo Hospitals Enterprise",
    sector: "Healthcare & Critical Life Safety Infra",
    tag: "Healthcare",
    logo: (
      <img
        src={apolloHospitalsImage}
        alt="Apollo Hospitals Enterprise Healthcare"
        className="h-full w-full object-cover object-top rounded-xl sm:rounded-2xl"
        loading="lazy"
      />
    ),
  },
  {
    name: "Tata Projects Limited",
    sector: "Industrial Mega EPC & Transit",
    tag: "Mega EPC",
    logo: (
      <svg viewBox="0 0 200 48" className="h-12 sm:h-14 md:h-[3.65rem] w-auto max-w-[92%] object-contain" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#002D62" />
        <path d="M14 15H34M24 15V29" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 21H32" stroke="#38B6FF" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <text x="52" y="23" fill="#002D62" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.8">TATA PROJECTS</text>
        <text x="52" y="36" fill="#0284C7" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.8">INFRASTRUCTURE</text>
      </svg>
    ),
  },
  {
    name: "Mindspace Business Parks",
    sector: "Grade-A IT & Tech SEZ",
    tag: "Tech Parks",
    logo: (
      <svg viewBox="0 0 200 48" className="h-12 sm:h-14 md:h-[3.65rem] w-auto max-w-[92%] object-contain" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#0C2538" />
        <circle cx="24" cy="14" r="3.5" fill="#00D2D3" />
        <circle cx="16" cy="27" r="3" fill="#FF9F43" />
        <circle cx="32" cy="27" r="3" fill="#54A0FF" />
        <path d="M24 14L16 27M24 14L32 27M16 27H32" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.75" />
        <text x="52" y="23" fill="#0C2538" fontFamily="sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.8">MINDSPACE</text>
        <text x="52" y="36" fill="#0891B2" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.8">BUSINESS PARKS</text>
      </svg>
    ),
  },
  {
    name: "Adani ConneX Data Centers",
    sector: "Hyperscale Cloud Infrastructure",
    tag: "Hyperscale",
    logo: (
      <svg viewBox="0 0 200 48" className="h-12 sm:h-14 md:h-[3.65rem] w-auto max-w-[92%] object-contain" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#18132B" />
        <rect x="14" y="12" width="8" height="8" rx="1.5" fill="#A855F7" />
        <rect x="26" y="12" width="8" height="8" rx="1.5" fill="#6366F1" />
        <rect x="14" y="24" width="8" height="8" rx="1.5" fill="#EC4899" />
        <rect x="26" y="24" width="8" height="8" rx="1.5" fill="#3B82F6" />
        <path d="M22 16H26M18 20V24M30 20V24M22 28H26" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <text x="52" y="23" fill="#18132B" fontFamily="sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.5">adani <tspan fill="#7C3AED">conneX</tspan></text>
        <text x="52" y="36" fill="#64748B" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.8">DATA CENTERS</text>
      </svg>
    ),
  },
  {
    name: "Infosys SEZ Campuses",
    sector: "Enterprise Facilities & Digital Smart Hubs",
    tag: "Global Hub",
    logo: (
      <svg viewBox="0 0 200 48" className="h-12 sm:h-14 md:h-[3.65rem] w-auto max-w-[92%] object-contain" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#071B36" />
        <path d="M15 22C15 17 20 15 24 22C28 29 33 27 33 22C33 17 28 15 24 22C20 29 15 27 15 22Z" stroke="#007CC3" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="22" r="2.2" fill="#FDB913" />
        <text x="52" y="25" fill="#007CC3" fontFamily="sans-serif" fontWeight="900" fontSize="17" letterSpacing="0.5">Infosys</text>
        <text x="52" y="37" fill="#F59E0B" fontFamily="sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.8">NAVIGATE YOUR NEXT</text>
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
      <svg viewBox="0 0 170 36" className="h-7 sm:h-8 md:h-9 w-auto max-w-[85%] object-contain" fill="none">
        <rect x="2" y="2" width="32" height="32" rx="6" fill="#EE3124" />
        <path d="M11 10H15V16H21V10H25V26H21V20H15V26H11V10Z" fill="#FFFFFF" />
        <text x="42" y="26" fill="#EE3124" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="23" letterSpacing="-0.3">Honeywell</text>
      </svg>
    ),
  },
  {
    name: "Schneider Electric & APC",
    sector: "Cyber Data Centers & Power Resilience",
    tag: "Power & DC",
    logo: (
      <svg viewBox="0 0 195 36" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[90%] object-contain" fill="none">
        <g transform="translate(2, 2)">
          <circle cx="16" cy="16" r="15" fill="#009E4D" />
          <path d="M8 20C8 13 14 9 21 9M24 12C24 19 18 23 11 23" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="2.8" fill="#3DCD58" />
        </g>
        <text x="42" y="25" fill="#009E4D" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="18.5" letterSpacing="-0.2">Schneider <tspan fill="#3DCD58" fontWeight="600">Electric</tspan></text>
      </svg>
    ),
  },
  {
    name: "Cisco Systems & CommScope",
    sector: "Enterprise Networking & Fiber Backbone",
    tag: "Enterprise Net",
    logo: (
      <svg viewBox="0 0 110 48" className="h-8 sm:h-9 md:h-10 w-auto max-w-[80%] object-contain" fill="none">
        <path d="M15 20V24M25 15V24M35 10V24M45 6V24M55 2V24M65 6V24M75 10V24M85 15V24M95 20V24" stroke="#00BCEB" strokeWidth="3.5" strokeLinecap="round" />
        <text x="55" y="42" textAnchor="middle" fill="#00BCEB" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" letterSpacing="2">CISCO</text>
      </svg>
    ),
  },
  {
    name: "Siemens Smart Infrastructure",
    sector: "Building Automation & IoT Ecosystems",
    tag: "Automation",
    logo: (
      <svg viewBox="0 0 165 36" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[85%] object-contain" fill="none">
        <circle cx="12" cy="18" r="4.5" fill="#EB780A" />
        <circle cx="25" cy="18" r="4.5" fill="#00646E" />
        <text x="38" y="26" fill="#00646E" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.8">SIEMENS</text>
      </svg>
    ),
  },
  {
    name: "Bosch Security & Safety",
    sector: "IP Surveillance, Access & Public Address",
    tag: "Security OEM",
    logo: (
      <svg viewBox="0 0 145 36" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[85%] object-contain" fill="none">
        <g transform="translate(4, 2)">
          <circle cx="16" cy="16" r="14" stroke="#E21D24" strokeWidth="3.5" fill="none" />
          <rect x="11" y="9" width="10" height="14" rx="2" fill="#E21D24" />
        </g>
        <text x="44" y="26" fill="#E21D24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="23" letterSpacing="1">BOSCH</text>
      </svg>
    ),
  },
  {
    name: "Johnson Controls & Simplex",
    sector: "Commercial Fire Suppression & Life Safety",
    tag: "Fire Systems",
    logo: (
      <svg viewBox="0 0 180 36" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[88%] object-contain" fill="none">
        <g transform="translate(4, 2)">
          <path d="M4 22C4 13 10 8 20 8" stroke="#00529B" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M10 26C10 19 15 15 24 15" stroke="#78BE20" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="6" cy="6" r="3.5" fill="#FDB913" />
        </g>
        <text x="40" y="25" fill="#00529B" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17.5" letterSpacing="-0.2">Johnson <tspan fill="#78BE20">Controls</tspan></text>
      </svg>
    ),
  },
  {
    name: "Fortinet Cybersecurity",
    sector: "Data Center Firewalls & Secure SD-WAN",
    tag: "Zero Trust",
    logo: (
      <svg viewBox="0 0 160 36" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[85%] object-contain" fill="none">
        <g transform="translate(4, 6)">
          <rect x="0" y="0" width="10" height="7" rx="1.5" fill="#EE3124" />
          <rect x="13" y="0" width="10" height="7" rx="1.5" fill="#EE3124" />
          <rect x="0" y="10" width="10" height="7" rx="1.5" fill="#EE3124" />
          <rect x="13" y="10" width="10" height="7" rx="1.5" fill="#EE3124" />
          <line x1="0" y1="8.5" x2="23" y2="8.5" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="11.5" y1="0" x2="11.5" y2="17" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>
        <text x="36" y="25" fill="#EE3124" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" letterSpacing="0.8">FORTINET</text>
      </svg>
    ),
  },
  {
    name: "Legrand & Raritan Enterprise",
    sector: "Smart PDU, High-Density Server Racks & Fiber",
    tag: "DC Enclosure",
    logo: (
      <svg viewBox="0 0 150 36" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[85%] object-contain" fill="none">
        <g transform="translate(4, 4)">
          <rect x="0" y="0" width="26" height="26" rx="4" stroke="#E31837" strokeWidth="3" fill="none" />
          <path d="M7 7V19H17" stroke="#E31837" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="40" y="25" fill="#E31837" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" letterSpacing="-0.3">legrand<tspan fill="#1C181A" fontSize="13">®</tspan></text>
      </svg>
    ),
  },
  {
    name: "Sophos Cybersecurity",
    sector: "Next-Gen Firewall & Cloud Security",
    tag: "Security OEM",
    logo: (
      <svg viewBox="0 0 150 40" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[85%] object-contain" fill="none">
        <g transform="translate(6, 4)">
          <path d="M16 2L4 6V18C4 25.5 9.1 32.5 16 34C22.9 32.5 28 25.5 28 18V6L16 2Z" fill="#005B94" />
          <path d="M19.5 13C19.5 11.5 18 10.5 16 10.5C13.5 10.5 12 11.8 12 13.5C12 17.5 20 16 20 20C20 22.2 18.2 23.5 16 23.5C13 23.5 11.5 22 11.5 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text x="44" y="27" fill="#005B94" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" letterSpacing="1.2">SOPHOS</text>
      </svg>
    ),
  },
  {
    name: "HPE Juniper Networking",
    sector: "Enterprise Campus & Core Switching",
    tag: "Networking OEM",
    logo: (
      <svg viewBox="0 0 170 38" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[88%] object-contain" fill="none">
        <text x="8" y="27" fill="#000000" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="26" letterSpacing="-0.5">HPE</text>
        <rect x="68" y="7" width="2" height="24" fill="#01A982" />
        <text x="76" y="21" fill="#000000" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.2">Juniper</text>
        <text x="76" y="31" fill="#4B5563" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8.5" letterSpacing="0.4">networking</text>
      </svg>
    ),
  },
  {
    name: "NETGEAR Business",
    sector: "Managed Switch Infrastructure & Pro WiFi",
    tag: "Networking OEM",
    logo: (
      <svg viewBox="0 0 160 36" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[85%] object-contain" fill="none">
        <text x="80" y="26" textAnchor="middle" fill="#3B1C54" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="23" letterSpacing="1.8">NETGEAR</text>
      </svg>
    ),
  },
  {
    name: "D-Link Systems",
    sector: "Industrial Switching & Structured Cabling",
    tag: "Connectivity OEM",
    logo: (
      <svg viewBox="0 0 150 36" className="h-6 sm:h-7.5 md:h-8.5 w-auto max-w-[85%] object-contain" fill="none">
        <text x="75" y="27" textAnchor="middle" fill="#008299" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="25" letterSpacing="0.5">D-Link</text>
      </svg>
    ),
  },
];

const whyChooseUsPillars = [
  {
    icon: Workflow,
    badge: "Turnkey Delivery",
    title: "End-to-End Single-Source Execution",
    description:
      "From initial engineering blueprints and OEM hardware procurement to precision installation, testing, commissioning, and regulatory clearances.",
  },
  {
    icon: ShieldCheck,
    badge: "Zero Compromise",
    title: "Certified Safety & NBC Compliance",
    description:
      "Strict compliance with National Building Code (NBC), NFPA fire codes, ISO-aligned workflows, and Tier-standard cyber datacenter guidelines.",
  },
  {
    icon: Award,
    badge: "OEM Alliances",
    title: "Tier-1 Global Technology Partners",
    description:
      "Authorized enterprise alliances with global OEMs including Honeywell, Schneider Electric, Cisco, Siemens, Bosch, Fortinet, and Legrand.",
  },
  {
    icon: Clock,
    badge: "24/7 SLA",
    title: "Mission-Critical 24/7 Support",
    description:
      "Dedicated emergency response teams, remote telemetry, predictive maintenance, and industry-leading response times to prevent downtime.",
  },
  {
    icon: CheckCircle2,
    badge: "Proven Track Record",
    title: "Trusted by Top Enterprise Leaders",
    description:
      "Proven execution across high-density tech parks, SEZs, aerospace hubs, and mega infrastructure projects including L&T, GMR, and Tata Projects.",
  },
  {
    icon: Cpu,
    badge: "Next-Gen Tech",
    title: "Smart IoT & Cyber-Resilient Systems",
    description:
      "Smart capacitive touch switchboards, automated IoT building controls, zero-trust cybersecurity, and unified facility telemetry.",
  },
] as const;

const whyChooseUsStats = [
  { target: 100, decimals: 0, suffix: "+", label: "Enterprise Projects Completed" },
  { target: 99.9, decimals: 1, suffix: "%", label: "System Reliability & Uptime" },
  { target: 15, decimals: 0, suffix: "+", label: "Global OEM Alliances" },
  { target: 24, decimals: 0, suffix: "/7", label: "Mission-Critical Support" },
] as const;

function AnimatedCounter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Snappy cubic ease-out curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * target;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

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
      className={`nav-link group relative inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ease-out cursor-pointer ${active
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
  const [currentView, setCurrentView] = useState<"home" | "service-detail">("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formMessage, setFormMessage] = useState("");
  const [legalPage, setLegalPage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceDetailItem | null>(null);
  const isNavigatingRef = useRef(false);

  function navigateTo(sectionId: string) {
    const targetSection = sectionId === "why-us" ? "about" : sectionId;
    setActiveSection(targetSection);
    setMenuOpen(false);

    if (currentView === "service-detail") {
      setCurrentView("home");
      setSelectedService(null);
    }

    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${targetSection}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function openService(serviceIndexOrIdOrTitle: number | string) {
    const targetService =
      typeof serviceIndexOrIdOrTitle === "number"
        ? services[serviceIndexOrIdOrTitle]
        : services.find(
          (s) =>
            s.id.toLowerCase() === String(serviceIndexOrIdOrTitle).toLowerCase() ||
            s.title.toLowerCase().includes(String(serviceIndexOrIdOrTitle).toLowerCase())
        ) || services[0];

    if (targetService) {
      setSelectedService(targetService);
      setCurrentView("service-detail");
      setActiveSection("services");
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `#service-${targetService.id}`);
      }
    }
  }

  // Handle URL hash changes & direct page load deep linking
  useEffect(() => {
    if (typeof window === "undefined") return;

    function parseHash() {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash.startsWith("service-")) {
        const sId = hash.replace("service-", "");
        const matched = services.find(
          (s) => s.id === sId || s.title.toLowerCase().includes(sId.toLowerCase())
        );
        if (matched) {
          setSelectedService(matched);
          setCurrentView("service-detail");
          setActiveSection("services");
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }
      if (hash) {
        const validSections = ["home", "about", "services", "clients", "partners", "contact", "why-us"];
        if (validSections.includes(hash)) {
          setCurrentView("home");
          setSelectedService(null);
          setActiveSection(hash === "why-us" ? "about" : hash);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }
    }

    parseHash();
    window.addEventListener("hashchange", parseHash);
    window.addEventListener("popstate", parseHash);

    return () => {
      window.removeEventListener("hashchange", parseHash);
      window.removeEventListener("popstate", parseHash);
    };
  }, []);

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
      { threshold: 0.05 },
    );
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    revealTargets.forEach((target) => {
      revealObserver.observe(target);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, [activeSection, currentView]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 10000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);



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


  const renderAboutSection = () => (
    <section id="about" className="relative isolate scroll-mt-20 overflow-hidden bg-white py-6 sm:py-8">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.15fr] xl:gap-10" data-reveal>
          {/* Left Column: Building Photo */}
          <div className="relative group overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs max-w-[520px] mx-auto lg:mx-0 w-full">
            <img
              src={aboutBuilding}
              alt="HANVI GLOBAL TECH PVT LTD Building & Headquarters"
              loading="lazy"
              className="w-full h-auto max-h-[330px] object-cover transition-transform duration-500 ease-out group-hover:scale-102"
            />
          </div>

          {/* Right Column: About Content & 4 Cards */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem] leading-tight">
              About <span className="text-[#E02424] font-black">Hanvi Global Tech</span>
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm lg:text-[14px] leading-relaxed text-muted-foreground text-left">
              Hanvi Global Tech Pvt Ltd is a technology solutions company delivering reliable, scalable, and integrated systems for safety, security, communication, and smart automation. We help businesses, institutions, and homeowners build safer, smarter, and more connected environments.
            </p>

            {/* 4 Feature Cards matching reference design */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {/* Card 1: Customized Solutions */}
              <div className="group relative flex flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50/70 p-2.5 sm:p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-[#E02424]/70 hover:shadow-[0_10px_28px_-4px_rgba(224,36,36,0.3),0_0_16px_rgba(255,106,0,0.2)] cursor-pointer">
                <div className="flex size-9 items-center justify-center rounded-lg bg-red-50 text-[#E02424] mb-2 transition-all duration-300 group-hover:bg-[#E02424] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(224,36,36,0.35)]">
                  <Target className="size-5 transition-colors duration-300 text-[#E02424] group-hover:text-white" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-foreground leading-tight transition-colors duration-300 group-hover:text-[#E02424]">
                  Customized<br />Solutions
                </span>
              </div>

              {/* Card 2: Industry-Grade Products */}
              <div className="group relative flex flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50/70 p-2.5 sm:p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-[#E02424]/70 hover:shadow-[0_10px_28px_-4px_rgba(224,36,36,0.3),0_0_16px_rgba(255,106,0,0.2)] cursor-pointer">
                <div className="flex size-9 items-center justify-center rounded-lg bg-red-50 text-[#E02424] mb-2 transition-all duration-300 group-hover:bg-[#E02424] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(224,36,36,0.35)]">
                  <Layers className="size-5 transition-colors duration-300 text-[#E02424] group-hover:text-white" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-foreground leading-tight transition-colors duration-300 group-hover:text-[#E02424]">
                  Industry-Grade<br />Products
                </span>
              </div>

              {/* Card 3: Professional Installation */}
              <div className="group relative flex flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50/70 p-2.5 sm:p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-[#E02424]/70 hover:shadow-[0_10px_28px_-4px_rgba(224,36,36,0.3),0_0_16px_rgba(255,106,0,0.2)] cursor-pointer">
                <div className="flex size-9 items-center justify-center rounded-lg bg-red-50 text-[#E02424] mb-2 transition-all duration-300 group-hover:bg-[#E02424] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(224,36,36,0.35)]">
                  <Wrench className="size-5 transition-colors duration-300 text-[#E02424] group-hover:text-white" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-foreground leading-tight transition-colors duration-300 group-hover:text-[#E02424]">
                  Professional<br />Installation
                </span>
              </div>

              {/* Card 4: Ongoing Support */}
              <div className="group relative flex flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50/70 p-2.5 sm:p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-[#E02424]/70 hover:shadow-[0_10px_28px_-4px_rgba(224,36,36,0.3),0_0_16px_rgba(255,106,0,0.2)] cursor-pointer">
                <div className="flex size-9 items-center justify-center rounded-lg bg-red-50 text-[#E02424] mb-2 transition-all duration-300 group-hover:bg-[#E02424] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(224,36,36,0.35)]">
                  <Headphones className="size-5 transition-colors duration-300 text-[#E02424] group-hover:text-white" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-foreground leading-tight transition-colors duration-300 group-hover:text-[#E02424]">
                  Ongoing<br />Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderWhyUsSection = () => (
    <section id="why-us" className="scroll-mt-20 bg-brand-cream-alt py-6 sm:py-8 text-foreground border-t border-brand-orange/10">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="flex flex-col gap-1.5" data-reveal>
          <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-orange font-bold">
                <span className="brand-gradient h-0.5 w-5" aria-hidden="true" />
                <span>Why Choose Us</span>
              </div>
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-[1.75rem]">
                Engineered for excellence. Trusted for reliability.
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orange px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/25 w-fit">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
              The HANVI Advantage
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl">
            Empowering commercial and industrial enterprises with turnkey engineering, certified life-safety compliance, authorized OEM technology, and 24/7 mission-critical support.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4.5">
          {whyChooseUsPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 50}ms` } as React.CSSProperties}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-orange/20 bg-white/95 p-4.5 sm:p-5 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_14px_32px_-6px_rgba(255,106,0,0.22)] hover:scale-[1.02] transition-all duration-300"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-80 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-rose text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange px-2.5 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/25">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div
          data-reveal
          className="mt-5 sm:mt-6 overflow-hidden rounded-2xl border border-brand-orange/20 bg-white/95 p-4 sm:p-5 shadow-sm backdrop-blur-md"
        >
          <div className="grid grid-cols-2 gap-4 divide-y divide-brand-orange/15 sm:grid-cols-4 sm:gap-6 sm:divide-y-0 sm:divide-x sm:divide-brand-orange/20">
            {whyChooseUsStats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col items-center text-center ${i >= 2 ? "pt-3 sm:pt-0" : ""}`}>
                <span className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-brand-orange">
                  <AnimatedCounter
                    target={stat.target}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderServicesSection = () => (
    <section id="services" className="relative isolate scroll-mt-20 overflow-hidden bg-brand-cream border-t border-brand-orange/10 py-6 sm:py-8 text-foreground">
      <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-4 sm:mb-5" data-reveal>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#E02424]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E02424] animate-pulse" />
            <span>Specialized Services</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineering reliable, intelligent, and secure environments.
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-none whitespace-normal md:whitespace-nowrap">
            Comprehensive life safety, high-pressure fire systems, tier-standard cyber data centers, structured communications, and smart automation.
          </p>
        </div>

        {/* 6 Cards Grid matching Image 2 */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                id={`service-card-${index}`}
                onClick={() => openService(service.id)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#E02424]/80 hover:shadow-[0_16px_40px_-8px_rgba(224,36,36,0.35),0_0_24px_rgba(255,106,0,0.2)] cursor-pointer scroll-mt-24"
                data-reveal
                style={{ '--reveal-delay': `${index * 80}ms` } as React.CSSProperties}
              >
                {/* Top Gradient Glow Accent on Hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E02424] via-brand-orange to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Top Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-108 group-hover:brightness-105"
                    loading="lazy"
                  />
                </div>

                {/* Bottom White Container */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 bg-white transition-colors duration-300">
                  {/* Red Square Icon Badge */}
                  <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-[#E02424] text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(224,36,36,0.6)]">
                    <Icon aria-hidden="true" className="size-6 text-white" />
                  </div>

                  {/* Title & Description */}
                  <div className="min-w-0 flex-1 text-left">
                    <h3 className="font-display text-xs sm:text-[13px] md:text-sm font-bold text-slate-900 leading-snug transition-colors duration-200 group-hover:text-[#E02424]">
                      {service.title}
                    </h3>
                    <p className="mt-0.5 text-[10.5px] sm:text-[11.5px] text-slate-500 leading-snug line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Small Circular Arrow Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openService(service.id);
                    }}
                    aria-label={`View details of ${service.title}`}
                    className="flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-full border border-[#E02424] text-[#E02424] transition-all duration-200 group-hover:bg-[#E02424] group-hover:text-white group-hover:shadow-[0_0_12px_rgba(224,36,36,0.5)] group-hover:translate-x-0.5 cursor-pointer"
                  >
                    <ArrowRight className="size-3.5 sm:size-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom Red Mesh Wave SVG Accent */}
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none opacity-40 overflow-hidden flex items-end">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full text-[#E02424]/40" preserveAspectRatio="none">
          <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="url(#redWaveGrad)" />
          <defs>
            <linearGradient id="redWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E02424" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#E02424" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#E02424" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );

  const renderClientsSection = () => (
    <section id="clients" className="scroll-mt-20 bg-brand-cream-alt py-6 sm:py-8 text-foreground border-t border-brand-orange/10">
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
            {[...clientPlaceholders.slice(0, 5), ...clientPlaceholders.slice(0, 5), ...clientPlaceholders.slice(0, 5), ...clientPlaceholders.slice(0, 5)].map((client, index) => (
              <div
                key={`r1-${client.name}-${index}`}
                className="group relative flex w-[225px] sm:w-[255px] md:w-[275px] h-[100px] sm:h-[115px] shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl border border-brand-orange/20 bg-white px-4 py-2 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_14px_30px_-6px_rgba(255,106,0,0.22)] hover:scale-105 transition-all duration-300"
                title={client.name}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="flex h-full w-full items-center justify-center">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="animate-marquee-right flex gap-4 sm:gap-5 pt-1">
            {[...clientPlaceholders.slice(5), ...clientPlaceholders.slice(5), ...clientPlaceholders.slice(5), ...clientPlaceholders.slice(5), ...clientPlaceholders.slice(5)].map((client, index) => (
              <div
                key={`r2-${client.name}-${index}`}
                className="group relative flex w-[225px] sm:w-[255px] md:w-[275px] h-[100px] sm:h-[115px] shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl border border-brand-orange/20 bg-white px-4 py-2 shadow-sm backdrop-blur-md glow-card-hover hover:border-brand-orange/60 hover:shadow-[0_14px_30px_-6px_rgba(255,106,0,0.22)] hover:scale-105 transition-all duration-300"
                title={client.name}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-rose opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="flex h-full w-full items-center justify-center">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderPartnersSection = () => (
    <section id="partners" className="scroll-mt-20 bg-brand-cream py-6 sm:py-8 text-foreground border-t border-brand-orange/10">
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

        {/* Clean Static Grid of Partner Logos - Pill / Stadium Outline Style */}
        <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4.5">
          {partnerPlaceholders.map((partner, index) => (
            <div
              key={`partner-${partner.name}-${index}`}
              className="group relative flex h-16 sm:h-[4.5rem] lg:h-[5rem] items-center justify-center rounded-full border-2 border-[#16446C]/35 bg-white px-4 sm:px-6 py-2 shadow-xs transition-all duration-300 hover:border-brand-orange hover:shadow-[0_8px_24px_-4px_rgba(255,106,0,0.22)] hover:scale-[1.03]"
              title={partner.name}
            >
              <div className="flex h-full w-full items-center justify-center">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContactSection = () => (
    <section id="contact" className="scroll-mt-20 bg-brand-cream py-6 sm:py-8 text-foreground border-t border-brand-orange/10">
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
                      className={`h-8.5 sm:h-9 rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${formErrors.name
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
                      className={`h-8.5 sm:h-9 rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${formErrors.email
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
                      className={`h-8.5 sm:h-9 rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${formErrors.phone
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
                      className={`h-8.5 sm:h-9 rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${formErrors.subject
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
                    className={`min-h-18 sm:min-h-20 resize-y rounded-lg bg-brand-cream text-xs text-foreground placeholder:text-muted-foreground transition-all duration-300 ${formErrors.message
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
  );

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
        <div className="mx-auto flex h-[68px] sm:h-[72px] w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10 xl:px-12 2xl:px-16">
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
          <nav id="mobile-navigation" className="border-t border-border/60 bg-background/98 px-4 sm:px-6 pb-6 pt-3.5 shadow-2xl backdrop-blur-xl lg:hidden animate-in fade-in slide-in-from-top-2 duration-200" aria-label="Mobile navigation">
            <div className="mx-auto flex w-full flex-col gap-2.5">
              {/* Single Column Vertical Navigation */}
              <div className="flex flex-col gap-1.5">
                {navigation.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => navigateTo(item.id)}
                      className={`group flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${isActive
                        ? "brand-gradient text-white shadow-md shadow-orange-500/25"
                        : "text-foreground/85 hover:bg-muted/70 hover:text-foreground hover:translate-x-1"
                        }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`size-1.5 rounded-full transition-all duration-200 ${isActive ? "bg-white scale-125" : "bg-brand-orange/40 group-hover:bg-brand-orange"
                            }`}
                        />
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight
                        className={`size-4 transition-transform duration-200 ${isActive
                          ? "text-white translate-x-0.5"
                          : "text-muted-foreground/40 group-hover:translate-x-0.5 group-hover:text-foreground"
                          }`}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="mt-1.5 flex flex-col gap-2.5 border-t border-border/60 pt-3">
                <Button asChild variant="outline" className="h-11 w-full rounded-full border-border/80 text-xs font-semibold justify-center hover:border-brand-orange/50 hover:text-brand-orange">
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
        {currentView === "service-detail" && selectedService ? (
          <ServiceDetailPage
            service={selectedService}
            allServices={services}
            onBack={() => {
              setCurrentView("home");
              setSelectedService(null);
              navigateTo("services");
            }}
            onSelectService={(next) => openService(next.id)}
            onNavigateHome={(secId) => navigateTo(secId || "home")}
          />
        ) : (
          <>
            {/* 1. HOME VIEW */}
            {activeSection === "home" && (
              <>
                <section id="home" className="relative isolate h-[calc(100svh-176px)] min-h-[320px] scroll-mt-20 overflow-hidden bg-brand-charcoal text-background">
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

                  <div className="relative mx-auto flex h-full w-full flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pb-8 pt-1 sm:pb-9 sm:pt-2">
                    <div className="max-w-3xl" data-reveal>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-0.5 px-3 text-xs font-medium text-background/90 backdrop-blur-md shadow-inner shadow-white/5 sm:mb-2.5 sm:px-3">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                        </span>
                        <span className="font-semibold tracking-wider uppercase text-[9.5px] sm:text-[11px] text-background/90">
                          Next-Gen Enterprise Tech
                        </span>
                        <span className="text-white/25">|</span>
                        <span className="font-medium text-brand-gold text-[9.5px] sm:text-[11px]">
                          HANVI GLOBAL TECH
                        </span>
                      </div>

                      <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-semibold leading-[1.12] text-background tracking-tight">
                        Technology for a{" "}
                        <span className="brand-text-gradient drop-shadow-[0_0_30px_rgba(255,106,0,0.35)]">
                          more connected
                        </span>{" "}
                        world.
                      </h1>

                      <p className="mt-2 max-w-xl text-xs sm:text-[13px] leading-relaxed text-background/80 sm:mt-2.5">
                        Discover the story, services, and possibilities behind HANVI GLOBAL TECH PVT LTD. Powering resilient digital infrastructure and enterprise innovation.
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2.5 sm:mt-3.5">
                        <Button
                          size="default"
                          className="brand-gradient glow-btn-hover group h-8.5 sm:h-9 rounded-full px-4 sm:px-4.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_4px_18px_rgba(255,80,30,0.35)] cursor-pointer"
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
                          className="h-8.5 sm:h-9 rounded-full border-white/20 bg-white/5 px-4 sm:px-4.5 text-xs sm:text-sm font-medium text-background backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_22px_rgba(255,255,255,0.3)] cursor-pointer"
                          onClick={() => navigateTo("contact")}
                        >
                          Contact us
                        </Button>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/10 pt-2 sm:pt-2.5">
                        <div className="flex items-center gap-2">
                          <div className="flex size-6 sm:size-6.5 items-center justify-center rounded-lg bg-brand-orange/20 text-brand-orange">
                            <Server className="size-3 sm:size-3.5" />
                          </div>
                          <div>
                            <div className="text-[11px] sm:text-xs font-bold text-background leading-tight">99.9% Uptime</div>
                            <div className="text-[9px] sm:text-[10px] text-background/60 leading-tight">Enterprise SLA</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex size-6 sm:size-6.5 items-center justify-center rounded-lg bg-brand-coral/20 text-brand-coral">
                            <ShieldCheck className="size-3 sm:size-3.5" />
                          </div>
                          <div>
                            <div className="text-[11px] sm:text-xs font-bold text-background leading-tight">Zero-Trust</div>
                            <div className="text-[9px] sm:text-[10px] text-background/60 leading-tight">Secure Architecture</div>
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                          <div className="flex size-6 sm:size-6.5 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-gold">
                            <Network className="size-3 sm:size-3.5" />
                          </div>
                          <div>
                            <div className="text-[11px] sm:text-xs font-bold text-background leading-tight">Global Scale</div>
                            <div className="text-[9px] sm:text-[10px] text-background/60 leading-tight">Connected Mesh</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-2 left-4 right-4 sm:bottom-2.5 sm:left-6 sm:right-6 md:left-8 md:right-8 lg:left-10 lg:right-10 xl:left-12 xl:right-12 2xl:left-16 2xl:right-16 flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-3 py-0.5 sm:py-1 backdrop-blur-md text-[11px] sm:text-xs font-medium text-background/85">
                        <span className="brand-gradient h-0.5 w-6 shrink-0" aria-hidden="true" />
                        <span className="truncate">{slides[currentSlide]?.label ?? "Global technology"}</span>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-md">
                        {slides.map((slide, index) => (
                          <Button
                            key={slide.label}
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 sm:h-7 sm:w-7 rounded-full p-0 text-background hover:bg-white/10 hover:text-background"
                            aria-label={`Show slide ${index + 1}: ${slide.label}`}
                            aria-pressed={currentSlide === index}
                            onClick={() => setCurrentSlide(index)}
                          >
                            <span className={`block h-1.5 rounded-full transition-all duration-500 ease-out ${currentSlide === index ? "brand-gradient w-5 shadow-[0_0_12px_rgba(255,106,0,0.85)]" : "w-1.5 bg-background/55 hover:bg-background/80"}`} />
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4-Item Feature Strip Below Hero */}
                <div className="w-full border-b border-border/60 bg-white py-1.5 sm:py-2 shadow-xs">
                  <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border/60">
                      {/* Item 1 */}
                      <div className="flex items-center gap-3 sm:justify-center px-2 py-0.5">
                        <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E02424]">
                          <Award className="size-4.5 text-[#E02424]" />
                        </div>
                        <div className="text-left text-xs font-bold leading-tight text-foreground">
                          <div>End-to-End</div>
                          <div>Technology Solutions</div>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex items-center gap-3 sm:justify-center px-2 py-0.5">
                        <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E02424]">
                          <Settings className="size-4.5 text-[#E02424]" />
                        </div>
                        <div className="text-left text-xs font-bold leading-tight text-foreground">
                          <div>Expert Installation</div>
                          <div>&amp; Integration</div>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex items-center gap-3 sm:justify-center px-2 py-0.5">
                        <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E02424]">
                          <Users className="size-4.5 text-[#E02424]" />
                        </div>
                        <div className="text-left text-xs font-bold leading-tight text-foreground">
                          <div>Reliable</div>
                          <div>After-Sales Support</div>
                        </div>
                      </div>

                      {/* Item 4 */}
                      <div className="flex items-center gap-3 sm:justify-center px-2 py-0.5">
                        <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E02424]">
                          <ShieldCheck className="size-4.5 text-[#E02424]" />
                        </div>
                        <div className="text-left text-xs font-bold leading-tight text-foreground">
                          <div>Safe, Secure &amp;</div>
                          <div>Future-Ready Systems</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* All Home Page Sections in sequence */}
                {renderAboutSection()}
                {renderServicesSection()}
                {renderClientsSection()}
                {renderPartnersSection()}
                {renderWhyUsSection()}
                {renderContactSection()}
              </>
            )}

            {/* 2. ABOUT VIEW */}
            {activeSection === "about" && (
              <>
                <div className="bg-brand-cream-alt border-b border-brand-orange/15 py-2 sm:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                  <div className="mx-auto flex w-full items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <button onClick={() => navigateTo("home")} className="hover:text-[#E02424] transition-colors cursor-pointer">Home</button>
                      <span>/</span>
                      <span className="text-[#E02424]">About Us</span>
                    </div>
                    <button
                      onClick={() => navigateTo("home")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E02424] hover:text-red-700 cursor-pointer"
                    >
                      <span>← Back to Full Home Page</span>
                    </button>
                  </div>
                </div>
                {renderAboutSection()}
                {renderWhyUsSection()}
              </>
            )}

            {/* 3. SERVICES VIEW */}
            {activeSection === "services" && (
              <>
                <div className="bg-brand-cream-alt border-b border-brand-orange/15 py-2 sm:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                  <div className="mx-auto flex w-full items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <button onClick={() => navigateTo("home")} className="hover:text-[#E02424] transition-colors cursor-pointer">Home</button>
                      <span>/</span>
                      <span className="text-[#E02424]">Specialized Services</span>
                    </div>
                    <button
                      onClick={() => navigateTo("home")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E02424] hover:text-red-700 cursor-pointer"
                    >
                      <span>← Back to Full Home Page</span>
                    </button>
                  </div>
                </div>
                {renderServicesSection()}
              </>
            )}

            {/* 4. CLIENTS VIEW */}
            {activeSection === "clients" && (
              <>
                <div className="bg-brand-cream-alt border-b border-brand-orange/15 py-2 sm:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                  <div className="mx-auto flex w-full items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <button onClick={() => navigateTo("home")} className="hover:text-[#E02424] transition-colors cursor-pointer">Home</button>
                      <span>/</span>
                      <span className="text-[#E02424]">Clients</span>
                    </div>
                    <button
                      onClick={() => navigateTo("home")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E02424] hover:text-red-700 cursor-pointer"
                    >
                      <span>← Back to Full Home Page</span>
                    </button>
                  </div>
                </div>
                {renderClientsSection()}
              </>
            )}

            {/* 5. PARTNERS VIEW */}
            {activeSection === "partners" && (
              <>
                <div className="bg-brand-cream-alt border-b border-brand-orange/15 py-2 sm:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                  <div className="mx-auto flex w-full items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <button onClick={() => navigateTo("home")} className="hover:text-[#E02424] transition-colors cursor-pointer">Home</button>
                      <span>/</span>
                      <span className="text-[#E02424]">Alliance Partners</span>
                    </div>
                    <button
                      onClick={() => navigateTo("home")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E02424] hover:text-red-700 cursor-pointer"
                    >
                      <span>← Back to Full Home Page</span>
                    </button>
                  </div>
                </div>
                {renderPartnersSection()}
              </>
            )}

            {/* 6. CONTACT VIEW */}
            {activeSection === "contact" && (
              <>
                <div className="bg-brand-cream-alt border-b border-brand-orange/15 py-2 sm:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                  <div className="mx-auto flex w-full items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <button onClick={() => navigateTo("home")} className="hover:text-[#E02424] transition-colors cursor-pointer">Home</button>
                      <span>/</span>
                      <span className="text-[#E02424]">Contact Us</span>
                    </div>
                    <button
                      onClick={() => navigateTo("home")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E02424] hover:text-red-700 cursor-pointer"
                    >
                      <span>← Back to Full Home Page</span>
                    </button>
                  </div>
                </div>
                {renderContactSection()}
              </>
            )}
          </>
        )}

      </main>

      <footer className="bg-brand-charcoal text-background border-t border-white/5">
        <div className="mx-auto w-full px-4 pt-6 pb-24 sm:px-6 sm:py-8 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid gap-6 sm:gap-8 border-b border-white/10 pb-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_1fr] lg:gap-8">
            <div>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("home");
                }}
                aria-label="HANVI Global Tech home"
                className="inline-block text-left cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <CompanyName light />
              </a>
              <p className="mt-3.5 max-w-xs text-xs sm:text-sm leading-relaxed text-background/65">
                Specializing in life safety fire alarm systems, fire hydrants, cyber data centers, enterprise networking, and smart IoT home automation.
              </p>
              <div className="mt-3.5">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="h-1 w-2.5 rounded-full bg-[#E02424]" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/90">Social Connections</p>
                </div>
                <div className="flex items-center gap-3 text-background/80" aria-label="Social media connections">
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

                  <span className="text-xs text-background/60">Follow HANVI Online</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3.5 w-1 rounded-full bg-gradient-to-b from-[#E02424] to-brand-gold" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/95">Quick Links</h3>
              </div>
              <ul className="space-y-2">
                {[
                  { label: "Home", id: "home" },
                  { label: "About Us", id: "about" },
                  { label: "Services", id: "services" },
                  { label: "Clients", id: "clients" },
                  { label: "Partners", id: "partners" },
                  { label: "Why Choose Us", id: "why-us" },
                  { label: "Contact Us", id: "contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(item.id);
                      }}
                      className={`text-xs sm:text-sm inline-block transition-all duration-200 cursor-pointer ${activeSection === item.id
                        ? "text-brand-gold font-semibold translate-x-1"
                        : "text-background/75 hover:text-brand-gold hover:translate-x-1"
                        }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3.5 w-1 rounded-full bg-gradient-to-b from-[#E02424] to-brand-gold" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/95">Services</h3>
              </div>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.title}>
                    <a
                      href={`#service-${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        openService(service.id);
                      }}
                      className="text-xs sm:text-[13px] text-background/75 transition-all duration-200 hover:text-brand-gold hover:translate-x-1 inline-block cursor-pointer line-clamp-1"
                      title={service.title}
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3.5 w-1 rounded-full bg-gradient-to-b from-[#E02424] to-brand-gold" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/95">Contact</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-background/80">
                <li>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange/90 block mb-0.5">Contact Person</span>
                  <span className="font-semibold text-white">Sourvi Saie Kumar</span>
                </li>
                <li>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange/90 block mb-0.5">Phone</span>
                  <a href="tel:+919392673103" className="font-medium text-white/90 hover:text-brand-gold transition-colors inline-block">
                    +91 9392673103
                  </a>
                </li>
                <li>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange/90 block mb-0.5">Email</span>
                  <a href="mailto:saie@hanviglobaltech.com" className="font-medium text-white/90 hover:text-brand-gold transition-colors inline-block break-all">
                    saie@hanviglobaltech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-4 pt-4 border-t border-white/10 text-[10.5px] sm:text-xs text-background/55 whitespace-nowrap overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <p className="shrink-0 font-medium tracking-tight">
              © {new Date().getFullYear()} HANVI GLOBAL TECH <span className="hidden sm:inline">PVT LTD. All Rights Reserved.</span>
            </p>
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <Button variant="link" size="sm" className="h-auto p-0 text-[10.5px] sm:text-xs text-background/65 hover:text-brand-gold cursor-pointer" onClick={() => setLegalPage("Privacy policy")}>
                Privacy<span className="hidden xs:inline"> Policy</span>
              </Button>
              <span className="text-white/20 select-none">•</span>
              <Button variant="link" size="sm" className="h-auto p-0 text-[10.5px] sm:text-xs text-background/65 hover:text-brand-gold cursor-pointer" onClick={() => setLegalPage("Terms & conditions")}>
                Terms<span className="hidden xs:inline"> &amp; Conditions</span>
              </Button>
              <span className="text-white/20 select-none">•</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-1 text-[10.5px] sm:text-xs text-background/65 transition-colors hover:text-brand-gold cursor-pointer"
              >
                <span><span className="hidden xs:inline">Back to </span>Top</span>
                <ArrowDown aria-hidden="true" className="size-2.5 sm:size-3 rotate-180" />
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