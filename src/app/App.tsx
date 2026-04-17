import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useIsMobile } from "./components/ui/use-mobile";
import imgDownload21 from "figma:asset/6e1d1ab0ffe931f26d9969ed17ad9ef421548b8a.png";
import imgLogo from "figma:asset/1f2061a97aad5d88e1694e4b104e221864e0e1be.png";
import imgImage1 from "figma:asset/feb1f42572c0af70952e77830c7c51e966e8fd72.png";
import img11 from "figma:asset/1186cb6867cf9c6eb1c0875bc848cf82bead24cc.png";
import img31 from "figma:asset/7d568bee9c62d4880b48a666c3efd19aa779a549.png";
import img61 from "figma:asset/d8b2a97602e16ff787036b131864f6603f8ad1ff.png";
import img71 from "figma:asset/100c21b7537dfedba0f19f9d93df371e9120d136.png";
import img91 from "figma:asset/83ef50264d745a9d81950066cea41371b2eb52e0.png";
import img81 from "figma:asset/47bb5839d6567efa9982da8c771236f7606a44b7.png";
import img101 from "figma:asset/1863a721d45a8fdfd3d8058ad7fe0f4350c7704e.png";
import img111 from "figma:asset/65b331fd91b7623ee77a797313b09b485cd4a8cd.png";
import img121 from "figma:asset/55ce1223bc0061f9f3d3f711c4966367497742e7.png";
import img131 from "figma:asset/c2f63f1fe7f29f70ebab94c43548aac25c765996.png";
import imgImage2 from "figma:asset/514293ae20b7141dc297601399d23c4af1f064ff.png";
import imgStartWithUs from "../imports/image.png";
import imgPhotojournalism from "../imports/image-1.png";
import imgPhotojournalism2 from "../imports/Desktop6-13/4638ad39246a464347efd0cd3086e6a76032927c.jpg";
import img21 from "../imports/Desktop7/d81b03d74f2eb673e1f26befbf97730863b199d2.jpg";

const slides = [
  {
    title: "Professional Photography",
    description: "Delivering pristine, high-fidelity imagery across all disciplines. We combine expert lighting, advanced camera systems, and precise color grading to produce visually striking, technically flawless assets that demand attention.",
    image: img11,
    imgH: 368,
    imgW: 461,
  },
  {
    title: "Business Photography",
    description: "Visual assets engineered to elevate your corporate identity. From sharp executive portraits that project authority to dynamic shots of your operations and facilities, we craft imagery that builds trust and aligns with premium brand standards.",
    image: img31,
    imgH: 361,
    imgW: 451,
  },
  {
    title: "Photojournalism",
    description: "Authentic, unscripted storytelling. We capture raw, compelling narratives as they unfold in real-time, utilizing a discreet documentary approach to freeze genuine moments and deliver impactful, truth-driven imagery.",
    image: imgPhotojournalism2,
    imgH: 368,
    imgW: 461,
  },
  {
    title: "Event Photography",
    description: "Comprehensive, dynamic coverage of your most important milestones. We seamlessly document the energy and scale of your events—from intimate corporate gatherings to large-scale tech conferences—ensuring every critical detail and interaction is captured with clarity.",
    image: img21,
    imgH: 428,
    imgW: 535,
  },
  {
    title: "Product Photography",
    description: "Studio-grade product imagery that sells. Every texture, contour, and detail is captured with meticulous precision to showcase your products at their absolute best across all platforms.",
    image: img31,
    imgH: 361,
    imgW: 451,
  },
];

const navItems = [
  { label: "Our Work", id: "gallery" },
  { label: "Color Lab", id: "color-lab" },
  { label: "Our Stories", id: "works" },
];

function Company() {
  return (
    <div className="flex gap-[8px] items-center relative shrink-0">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-[36px] relative shrink-0 w-[90px]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Logomark" className="absolute h-[250%] left-0 max-w-none top-[-65.28%] w-full" src={imgLogo} />
        </div>
      </motion.div>
      <div className="hidden sm:flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.4px]">
        <p className="leading-[1.4]">Uranus Creative</p>
      </div>
    </div>
  );
}

/* ---- Mobile Menu ---- */
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          {/* panel */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-[280px] bg-black z-50 flex flex-col pt-[80px] px-[32px] gap-[8px]"
          >
            {/* close button */}
            <button
              onClick={onClose}
              className="absolute top-[20px] right-[20px] text-white cursor-pointer bg-transparent border-none"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => scrollTo(item.id)}
                className="text-left text-white font-['Inter:Medium',sans-serif] font-medium text-[18px] py-[16px] border-b border-white/10 bg-transparent cursor-pointer hover:text-[#fb0000] transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + navItems.length * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => scrollTo("contact")}
              className="mt-[16px] bg-white text-black font-['Inter:Medium',sans-serif] font-medium text-[16px] py-[12px] px-[24px] rounded-[4px] cursor-pointer hover:bg-gray-200 transition-colors"
            >
              Contact for work
            </motion.button>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---- Header (responsive) ---- */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    // Try to find the desktop specific ID first if not on mobile
    const targetId = !isMobile ? `${id}-desktop` : id;
    let element = document.getElementById(targetId);

    // Fallback to original ID
    if (!element) {
      element = document.getElementById(id);
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop header – hidden on mobile */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex fixed items-center justify-center left-1/2 -translate-x-1/2 px-[320px] py-[24px] top-[12px] w-[1440px] z-50"
      >
        <div className="backdrop-blur-[35px] bg-black/90 content-stretch flex h-[47px] items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[10px] shrink-0 w-[906px] border border-white/10">
          <Company />
          <nav className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[485px]">
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                onClick={() => scrollTo(item.id)}
                whileHover={{ y: -2 }}
                className="cursor-pointer hover:text-[#fb0000] transition-colors flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] whitespace-nowrap"
              >
                <p className="leading-[1.45]">{item.label}</p>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("contact")}
              className="bg-white hover:bg-gray-200 transition-colors content-stretch cursor-pointer flex h-[25px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[2px] shrink-0 w-[160px]"
            >
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.08px] whitespace-nowrap">
                <p className="leading-[1.45]">Contact for work</p>
              </div>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile header */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-[16px] py-[12px]"
      >
        <div className="backdrop-blur-[35px] bg-black/90 flex items-center justify-between w-full rounded-[10px] px-[12px] py-[8px]">
          <Company />
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white cursor-pointer bg-transparent border-none p-[4px]"
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </motion.header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

// Dot grid for the footer section (desktop only)
function DotGrid() {
  const cols = [56, 158, 268, 345, 447, 557, 659, 769, 875, 967, 1069, 1179, 1275, 1371];
  const rows = [6793, 6889, 6985, 7081, 7177, 7273, 7369];
  return (
    <div className="hidden lg:block">
      {cols.map((x, ci) =>
        rows.map((y, ri) => {
          const adjustedX = ri >= 5 ? x - 4 : x;
          return (
            <div key={`dot-${ci}-${ri}`} className="absolute size-[7px]" style={{ left: `${adjustedX}px`, top: `${y}px` }}>
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 7 7">
                <circle cx="3.5" cy="3.5" fill="#FF0000" r="3.5" />
              </svg>
            </div>
          );
        })
      )}
    </div>
  );
}

function GalleryImage({ src, className, style, delay = 0 }: { src: string; className: string; style?: React.CSSProperties; delay?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
      style={{ ...style, perspective: 800, rotateX, rotateY }}
    >
      <img alt="" loading="lazy" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

/* ---- Mobile Gallery Image (flow-based) ---- */
function MobileGalleryImage({ src, delay = 0 }: { src: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="w-full aspect-[4/3] relative overflow-hidden rounded-[8px]"
    >
      <img alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" src={src} />
    </motion.div>
  );
}

/* ==================== MOBILE LAYOUT ==================== */
function MobileLayout({ activeSlide, setActiveSlide }: { activeSlide: number; setActiveSlide: (i: number) => void }) {
  const current = slides[activeSlide];

  return (
    <div className="lg:hidden w-full overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img alt="" className="w-full h-full object-cover" src={imgDownload21} />
        </motion.div>

        <div className="relative z-[1] px-[20px] pt-[80px] pb-[40px]">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="bg-[rgba(221,221,221,0.89)] p-[20px] mb-[20px] rounded-[4px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[28px] sm:text-[36px] text-black tracking-[-0.72px] leading-[1.4]">
                <span className="font-['Roboto_Mono:Bold',sans-serif] font-bold text-[#fb0000]">Vision</span>, Precision, Execution
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Kode_Mono:SemiBold',sans-serif] font-semibold text-[14px] text-black tracking-[-0.28px] leading-[1.5] max-w-[360px]"
          >
            We architect visual narratives and data-driven media campaigns for brands that demand to be seen. From the first pre-facility study to the final color grade
          </motion.p>

          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-[24px] size-[14px]"
          >
            <svg fill="none" viewBox="0 0 14 14" className="size-full">
              <circle cx="7" cy="7" fill="#FF0000" fillOpacity="0.74" r="7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Start with US */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="px-[20px] py-[40px] flex flex-col sm:flex-row gap-[20px] items-start"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.52) 100%)" }}
      >
        <div className="flex-1">
          <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold text-[20px] text-[red] tracking-[-0.4px] leading-[1.4] mb-[12px]">Start with US</p>
          <ul className="list-disc font-['Kode_Mono:SemiBold',sans-serif] font-semibold text-[14px] text-black tracking-[-0.28px] leading-[1.6] pl-[20px]">
            <li>Who we are</li>
            <li>What we do</li>
            <li>Case Studies</li>
          </ul>
        </div>
        <div className="w-[100px] h-[66px] shrink-0">
          <img alt="" className="w-full h-full object-cover" src={imgStartWithUs} />
        </div>
      </motion.section>

      {/* About section */}
      <section className="px-[20px] py-[48px]">
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[28px] sm:text-[36px] text-[#fb0000] tracking-[-0.72px] leading-[1.4] mb-[24px]">
            URANUS is the creative media Startup.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-['Kode_Mono:SemiBold',sans-serif] font-semibold text-[16px] sm:text-[18px] text-black tracking-[-0.36px] leading-[2]">
            We are a creative media startup that delivers end-to-end premium videography and photography. We combine high-end production with robust, efficient delivery infrastructure so you get cinema-quality assets that drive actual business growth.
          </p>
        </motion.div>
      </section>

      {/* Our Works slider */}
      <section id="works" className="px-[20px] py-[48px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[32px] text-black tracking-[-0.64px] leading-[1.4] mb-[24px]"
        >
          Our Works
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleY: 0.9 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
          className="bg-black rounded-[20px] p-[20px] sm:p-[28px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-slide-${activeSlide}`}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[22px] sm:text-[28px] text-[red] tracking-[-0.56px] leading-[1.4] mb-[16px]">
                {current.title}
              </p>
              <div className="w-full aspect-[4/3] relative overflow-hidden rounded-[8px] mb-[16px]">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  src={current.image}
                />
              </div>
              <p className="font-['Kode_Mono:SemiBold',sans-serif] font-semibold text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.8]">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-[8px] mt-[24px] flex-wrap">
            {slides.map((slide, i) => (
              <motion.button
                key={`m-dot-${i}`}
                whileTap={{ scale: 0.9 }}
                layout
                className="cursor-pointer border-none p-0 flex items-center justify-center rounded-full transition-all duration-400 ease-in-out overflow-hidden"
                style={{
                  background: i === activeSlide ? "#FF0000" : "rgba(255,255,255,0.15)",
                  height: "36px",
                  width: i === activeSlide ? "140px" : "36px",
                  boxShadow: i === activeSlide ? "0 0 15px rgba(255,0,0,0.4)" : "none",
                  border: i === activeSlide ? "none" : "2px solid rgba(255,255,255,0.3)",
                }}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to slide ${i + 1}: ${slide.title}`}
              >
                {i === activeSlide ? (
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[11px] tracking-[0.3px] whitespace-nowrap px-[4px]">
                    {slide.title}
                  </span>
                ) : (
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="5" fill="rgba(255,0,0,0.6)" />
                  </svg>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-gradient-to-b from-black to-[#343030] px-[16px] py-[48px]">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          whileInView={{ opacity: 1, letterSpacing: "-0.02em" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[28px] text-[red] tracking-[-0.56px] leading-[1.4] text-center mb-[16px]"
        >
          Our Gallery
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[22px] sm:text-[28px] text-white tracking-[-0.56px] leading-[1.4] text-center mb-[32px] max-w-[500px] mx-auto"
        >
          Engineered aesthetics. Uncompromising quality. Explore the portfolio.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
          <MobileGalleryImage src={img61} delay={0} />
          <MobileGalleryImage src={img71} delay={0.1} />
          <MobileGalleryImage src={img91} delay={0} />
          <MobileGalleryImage src={img81} delay={0.1} />
          <MobileGalleryImage src={img101} delay={0} />
          <MobileGalleryImage src={img111} delay={0.1} />
          <MobileGalleryImage src={img121} delay={0} />
          <MobileGalleryImage src={img131} delay={0.1} />
        </div>
      </section>

      {/* Color Lab */}
      <section id="color-lab" className="py-[48px]">
        <div className="px-[20px] mb-[24px]">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Roboto_Mono:Bold',sans-serif] font-bold text-[28px] sm:text-[36px] text-white tracking-[-0.72px] leading-[1.4]"
          >
            Take a look on Color Lab
          </motion.p>
        </div>
        <div className="bg-black px-[20px] py-[40px] flex flex-col gap-[24px]">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[22px] sm:text-[28px] text-white tracking-[-0.56px] leading-[1.8]" style={{ fontVariationSettings: "'wdth' 100" }}>
            We use engineering methods to capture natural color.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full aspect-[4/3] relative overflow-hidden rounded-[8px]"
          >
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-[20px] py-[48px]">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[28px] sm:text-[36px] text-[red] tracking-[-0.72px] leading-[1.4] mb-[20px]"
        >
          Work with US
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Kode_Mono:SemiBold',sans-serif] font-semibold text-[16px] sm:text-[20px] text-black tracking-[-0.4px] leading-[1.6]"
        >
          <p className="mb-[8px]">Send the message to work with us.</p>
          <p className="break-all">Mail: uranus@devloominnovations.com</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-[20px] py-[48px] relative overflow-hidden">
        {/* mobile dot grid */}
        <div className="absolute inset-0 opacity-30">
          {[0, 1, 2, 3, 4].map(r =>
            [0, 1, 2, 3, 4, 5].map(c => (
              <div key={`md-${r}-${c}`} className="absolute size-[5px]" style={{ left: `${10 + c * 18}%`, top: `${15 + r * 18}%` }}>
                <svg fill="none" viewBox="0 0 7 7" className="size-full"><circle cx="3.5" cy="3.5" fill="#FF0000" r="3.5" /></svg>
              </div>
            ))
          )}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative font-['Roboto_Mono:Regular',sans-serif] font-normal text-[24px] sm:text-[36px] text-white tracking-[-0.72px] leading-[1.3] mb-[16px]"
        >
          URANUS: Creative Media Startup
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative font-['Kode_Mono:Regular',sans-serif] font-normal text-[24px] sm:text-[36px] text-[red] tracking-[-0.72px] leading-[1.3]"
        >
          Beyond the Visible
        </motion.p>
      </footer>
    </div>
  );
}

/* ==================== DESKTOP LAYOUT ==================== */
function DesktopLayout({ activeSlide, setActiveSlide }: { activeSlide: number; setActiveSlide: (i: number) => void }) {
  const current = slides[activeSlide];

  return (
    <div className="hidden lg:block bg-white relative w-[1440px]" style={{ height: 7433 }}>
      {/* Hero background */}
      <div className="absolute h-[813px] left-[-115px] top-0 w-[1670px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 pointer-events-none"
        >
          <img alt="" className="absolute h-[150.16%] left-[-0.03%] max-w-none top-[-50.16%] w-[100.05%] object-cover" src={imgDownload21} />
        </motion.div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute bg-[rgba(221,221,221,0.89)] h-[153px] left-[310px] top-[369px] w-[494px]"
      />

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[121px] justify-center leading-[0] left-[calc(50%-252px)] text-[48px] text-black top-[250.5px] tracking-[-0.96px] w-[504px]"
      >
        <p>
          <span className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[1.4] text-[#fb0000]">Vision</span>
          <span className="leading-[1.4]">, Precision, Execution</span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[102px] justify-center leading-[0] left-[340px] text-[16px] text-black top-[446px] tracking-[-0.32px] w-[446px]"
      >
        <p className="leading-[1.4]">We architect visual narratives and data-driven media campaigns for brands that demand to be seen. From the first pre-facility study to the final color grade</p>
      </motion.div>

      {/* Lines and dot */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute flex h-[127px] items-center justify-center left-[206px] top-[439px] w-0"
      >
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[127px]">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 2">
                <path d="M0 1H127" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        style={{ transformOrigin: "left" }}
        className="absolute h-0 left-[206px] top-[439px] w-[104px]"
      >
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 2">
            <line stroke="white" strokeWidth="2" x2="104" y1="1" y2="1" />
          </svg>
        </div>
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute left-[199px] size-[14px] top-[559px]"
      >
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="#FF0000" fillOpacity="0.74" r="7" />
        </svg>
      </motion.div>

      {/* Start with US section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-x-1/2 absolute h-[146px] left-[calc(50%-2px)] top-[582px] w-[450px]"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.52) 100%)" }}
      />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:Bold',sans-serif] font-bold h-[29px] justify-center leading-[0] left-[calc(50%-204px)] text-[24px] text-[red] top-[614.5px] tracking-[-0.48px] w-[372px]">
        <p className="leading-[1.4]">Start with US</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[75px] justify-center leading-[0] left-[516px] text-[16px] text-black top-[673.5px] tracking-[-0.32px] w-[223px]">
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]"><span className="leading-[1.4]">Who we are </span></li>
          <li className="mb-0 ms-[24px]"><span className="leading-[1.4]">What we do </span></li>
          <li className="ms-[24px]"><span className="leading-[1.4]">Case Studies</span></li>
        </ul>
      </div>
      <div className="absolute h-[95px] left-[776px] top-[609px] w-[143px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStartWithUs} />
      </div>

      {/* URANUS is the creative media Startup */}
      <motion.div
        initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[121px] justify-center left-[calc(50%-227px)] text-[#fb0000] text-[48px] top-[1036.5px] tracking-[-0.96px] w-[420px] whitespace-pre-wrap leading-[0]"
      >
        <p className="leading-[1.4] mb-0">URANUS is the </p>
        <p className="leading-[1.4]">creative media Startup. </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[299px] justify-center left-[calc(50%-220px)] text-[24px] text-black top-[1315.5px] tracking-[-0.48px] w-[655px] leading-[0]"
      >
        <p className="leading-[2]">We are a creative media startup that delivers end-to-end premium videography and photography. We combine high-end production with robust, efficient delivery infrastructure so you get cinema-quality assets that drive actual business growth.</p>
      </motion.div>

      {/* Our Works section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="works-desktop" className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[86px] justify-center leading-[0] left-[calc(50%-547px)] text-[48px] text-black top-[1607px] tracking-[-0.96px] w-[279px]"
      >
        <p className="leading-[1.4]">Our Works</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleY: 0.8 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute bg-black h-[637px] left-[173px] rounded-[31px] top-[1701px] w-[1158px]"
      />

      {/* Interactive slide content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`slide-content-${activeSlide}`}
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Title - stacked effect */}
          {[1820.5, 1843.5, 1867.5].map((top, i) => (
            <div
              key={`title-row-${i}`}
              className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[93px] justify-center leading-[0] left-[calc(50%-501px)] text-[36px] text-[red] tracking-[-0.72px] w-[609px] whitespace-pre-wrap"
              style={{ top: `${top}px` }}
            >
              <p className="leading-[1.4] mb-0">{current.title}</p>
              <p className="leading-[1.4]">​</p>
            </div>
          ))}

          {/* Description */}
          <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[334px] justify-center leading-[0] left-[calc(50%-498px)] text-[24px] text-white top-[2092px] tracking-[-0.48px] w-[501px]">
            <p className="leading-[2] mb-0">{current.description}</p>
            <p className="leading-[2]">​</p>
          </div>

          {/* Image */}
          <div className="absolute left-[785px] top-[1890px]" style={{ height: `${current.imgH}px`, width: `${current.imgW}px` }}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-lg" src={current.image}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[2414px] flex items-center gap-[12px] z-[2]">
        {slides.map((slide, i) => (
          <motion.button
            key={`dot-${i}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layout
            className="cursor-pointer border-none p-0 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              background: i === activeSlide ? "#FF0000" : "rgba(255,255,255,0.15)",
              height: "48px",
              width: i === activeSlide ? "200px" : "48px",
              boxShadow: i === activeSlide ? "0 0 20px rgba(255,0,0,0.4)" : "none",
              border: i === activeSlide ? "none" : "2px solid rgba(255,255,255,0.3)",
            }}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
          >
            {i === activeSlide ? (
              <span
                className="font-['Inter:Medium',sans-serif] font-medium text-white text-[14px] tracking-[0.5px] whitespace-nowrap"
                style={{ animation: "slidesFadeIn 0.3s ease" }}
              >
                {slide.title}
              </span>
            ) : (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="5" fill="rgba(255,0,0,0.6)" />
              </svg>
            )}
          </motion.button>
        ))}
      </div>

      {/* Gallery section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bg-gradient-to-b from-[83.634%] from-black h-[2927px] left-0 to-[#343030] top-[2573px] w-[1440px]"
      />
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        whileInView={{ opacity: 1, letterSpacing: "-0.02em" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        id="gallery-desktop" className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[74px] justify-center leading-[0] left-[calc(50%-116px)] text-[36px] text-[red] top-[2688px] tracking-[-0.72px] w-[232px]"
      >
        <p className="leading-[1.4]">Our Gallery</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[201px] justify-center leading-[0] left-[calc(50%-298px)] text-[48px] text-white top-[2841px] tracking-[-0.96px] w-[660px]"
      >
        <p className="leading-[1.4]">Engineered aesthetics. Uncompromising quality. Explore the portfolio.</p>
      </motion.div>

      {/* Gallery images */}
      <GalleryImage src={img61} className="absolute h-[502px] left-[93px] top-[3037px] w-[627px] overflow-hidden" delay={0} />
      <GalleryImage src={img71} className="absolute h-[502px] left-[763px] top-[3037px] w-[628px] overflow-hidden" delay={0.15} />
      <GalleryImage src={img91} className="absolute h-[497px] left-[93px] top-[3584px] w-[622px] overflow-hidden" delay={0} />
      <GalleryImage src={img81} className="absolute h-[502px] left-[763px] top-[3579px] w-[628px] overflow-hidden" delay={0.15} />
      <GalleryImage src={img101} className="absolute h-[501px] left-[89px] top-[4126px] w-[626px] overflow-hidden" delay={0} />
      <GalleryImage src={img111} className="absolute h-[506px] left-[763px] top-[4121px] w-[632px] overflow-hidden" delay={0.15} />
      <GalleryImage src={img121} className="absolute h-[513px] left-[80px] top-[4685px] w-[641px] overflow-hidden" delay={0} />
      <GalleryImage src={img131} className="absolute h-[513px] left-[754px] top-[4685px] w-[641px] overflow-hidden" delay={0.15} />

      {/* Color Lab section */}
      <div id="color-lab-desktop" className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:Bold',sans-serif] font-bold h-[74px] justify-center leading-[0] left-[calc(50%-640px)] text-[48px] text-white top-[5370px] tracking-[-0.96px] w-[674px]">
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="leading-[1.4]"
        >
          Take a look on Color Lab
        </motion.p>
      </div>
      <div className="absolute bg-black h-[725px] left-0 top-[5466px] w-[1440px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[334px] justify-center leading-[0] left-[calc(50%-622px)] text-[36px] text-white top-[5802px] tracking-[-0.72px] w-[501px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[2]">We use engineering methods to capture natural color.</p>
      </div>
      <div className="absolute h-[441px] left-[810px] top-[5603px] w-[529px] overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 30px 60px rgba(255,0,0,0.2)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2}
        />
      </div>

      {/* Work with US */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        id="contact-desktop" className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[87px] justify-center leading-[0] left-[calc(50%-622px)] text-[48px] text-[red] top-[6334.5px] tracking-[-0.96px] w-[369px]"
      >
        <p className="leading-[1.4]">Work with US</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[119px] justify-center leading-[0] left-[calc(50%-622px)] text-[36px] text-black top-[6517.5px] tracking-[-0.72px] w-[817px] whitespace-pre-wrap"
      >
        <p className="leading-none mb-0">Send the message to work with us.</p>
        <p className="leading-none mb-0">​</p>
        <p className="leading-none">Mail: uranus@devloominnovations.com</p>
      </motion.div>

      {/* Footer */}
      <div className="absolute bg-black h-[697px] left-0 top-[6736px] w-[1440px]" />
      <DotGrid />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:Regular',sans-serif] font-normal h-[119px] justify-center leading-[0] left-[calc(50%-533px)] text-[64px] text-white top-[7032.5px] tracking-[-1.28px] w-[1148px]"
      >
        <p className="leading-none">URANUS: Creative Media Startup</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:Regular',sans-serif] font-normal h-[119px] justify-center leading-[0] left-[calc(50%-293px)] text-[64px] text-[red] top-[7128.5px] tracking-[-1.28px] w-[695px]"
      >
        <p className="leading-none">Beyond the Visible</p>
      </motion.div>
    </div>
  );
}

/* ==================== MAIN APP ==================== */
export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full lg:w-[1440px] lg:mx-auto relative">
      <style>{`
        @keyframes slidesFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Header />
      <MobileLayout activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <DesktopLayout activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
    </div>
  );
}
