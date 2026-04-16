import { useState } from "react";
import imgDownload21 from "./6e1d1ab0ffe931f26d9969ed17ad9ef421548b8a.png";
import imgLogo from "./1f2061a97aad5d88e1694e4b104e221864e0e1be.png";
import imgImage1 from "./feb1f42572c0af70952e77830c7c51e966e8fd72.png";
import img11 from "./1186cb6867cf9c6eb1c0875bc848cf82bead24cc.png";
import img31 from "../Desktop3/7d568bee9c62d4880b48a666c3efd19aa779a549.png";
import img61 from "./d8b2a97602e16ff787036b131864f6603f8ad1ff.png";
import img71 from "./100c21b7537dfedba0f19f9d93df371e9120d136.png";
import img91 from "./83ef50264d745a9d81950066cea41371b2eb52e0.png";
import img81 from "./47bb5839d6567efa9982da8c771236f7606a44b7.png";
import img101 from "./1863a721d45a8fdfd3d8058ad7fe0f4350c7704e.png";
import img111 from "./65b331fd91b7623ee77a797313b09b485cd4a8cd.png";
import img121 from "./55ce1223bc0061f9f3d3f711c4966367497742e7.png";
import img131 from "./c2f63f1fe7f29f70ebab94c43548aac25c765996.png";
import imgImage2 from "./514293ae20b7141dc297601399d23c4af1f064ff.png";

function Company() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[256px]" data-name="Company">
      <div className="h-[36px] relative shrink-0 w-[90px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Logomark" className="absolute h-[250%] left-0 max-w-none top-[-65.28%] w-full" src={imgLogo} />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-[179px]">
        <p className="leading-[1.4]">Uranus Creative</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <button className="bg-white content-stretch cursor-pointer flex h-[25px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[2px] shrink-0 w-[140px]" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Contact for work</p>
      </div>
    </button>
  );
}

function Buttons() {
  return (
    <nav className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[485px]" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Our Work</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Color LAB</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Our Stories</p>
      </div>
      <PrimaryButton />
    </nav>
  );
}

function Menu() {
  return (
    <div className="backdrop-blur-[35px] bg-black content-stretch flex h-[47px] items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[10px] shrink-0 w-[906px]" data-name="Menu">
      <Company />
      <Buttons />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute content-stretch flex items-center justify-center left-[80px] px-[320px] py-[24px] top-[12px] w-[1280px]" data-name="Header 2">
      <Menu />
    </header>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents font-semibold leading-[0] left-[calc(50%+104px)] top-[976px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] h-[121px] justify-center left-[calc(50%-227px)] text-[#fb0000] text-[48px] top-[1036.5px] tracking-[-0.96px] w-[420px] whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">{`URANUS is the `}</p>
        <p className="leading-[1.4]">{`creative media Startup. `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] h-[299px] justify-center left-[calc(50%-220px)] text-[24px] text-black top-[1315.5px] tracking-[-0.48px] w-[655px]">
        <p className="leading-[2]">We are a creative media startup that delivers end-to-end premium videography and photography. We combine high-end production with robust, efficient delivery infrastructure so you get cinema-quality assets that drive actual business growth.</p>
      </div>
    </div>
  );
}

const slides = [
  {
    title: "Professional Photography",
    description: "Delivering pristine, high-fidelity imagery across all disciplines. We combine expert lighting, advanced camera systems, and precise color grading to produce visually striking, technically flawless assets that demand attention.",
    image: img11,
    imgH: "368px",
    imgW: "461px",
  },
  {
    title: "Business Photography",
    description: "Visual assets engineered to elevate your corporate identity. From sharp executive portraits that project authority to dynamic shots of your operations and facilities, we craft imagery that builds trust and aligns with premium brand standards.",
    image: img31,
    imgH: "361px",
    imgW: "451px",
  },
  {
    title: "Event Photography",
    description: "Comprehensive event coverage with a cinematic edge. We capture the energy, emotion, and key moments of your corporate events, product launches, and brand activations with precision and artistry.",
    image: img11,
    imgH: "368px",
    imgW: "461px",
  },
  {
    title: "Product Photography",
    description: "Studio-grade product imagery that sells. Every texture, contour, and detail is captured with meticulous precision to showcase your products at their absolute best across all platforms.",
    image: img31,
    imgH: "361px",
    imgW: "451px",
  },
];

export default function Desktop() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 2">
      <div className="absolute h-[813px] left-[-115px] top-0 w-[1670px]" data-name="download (2) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.16%] left-[-0.03%] max-w-none top-[-50.16%] w-[100.05%]" src={imgDownload21} />
        </div>
      </div>
      <div className="absolute bg-[rgba(221,221,221,0.89)] h-[153px] left-[310px] top-[369px] w-[494px]" />
      <Header />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[121px] justify-center leading-[0] left-[calc(50%-252px)] text-[48px] text-black top-[250.5px] tracking-[-0.96px] w-[504px]">
        <p>
          <span className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[1.4] text-[#fb0000]">Vision</span>
          <span className="leading-[1.4]">, Precision, Execution</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[102px] justify-center leading-[0] left-[340px] text-[16px] text-black top-[446px] tracking-[-0.32px] w-[446px]">
        <p className="leading-[1.4]">We architect visual narratives and data-driven media campaigns for brands that demand to be seen. From the first pre-facility study to the final color grade</p>
      </div>
      <Group />
      <div className="absolute flex h-[127px] items-center justify-center left-[206px] top-[439px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[127px]">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 2">
                <path d="M0 1H127" id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[206px] top-[439px] w-[104px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 2">
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="2" x2="104" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[199px] size-[14px] top-[559px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #FF0000)" fillOpacity="0.74" id="Ellipse 1" r="7" />
        </svg>
      </div>
      <div className="absolute bg-black h-[637px] left-[173px] rounded-[31px] top-[1701px] w-[1158px]" />
      <div className="-translate-x-1/2 absolute h-[146px] left-[calc(50%-2px)] top-[582px] w-[450px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.52) 100%)" }} />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:Bold',sans-serif] font-bold h-[29px] justify-center leading-[0] left-[calc(50%-204px)] text-[24px] text-[red] top-[614.5px] tracking-[-0.48px] w-[372px]">
        <p className="leading-[1.4]">Start with US</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[75px] justify-center leading-[0] left-[516px] text-[16px] text-black top-[673.5px] tracking-[-0.32px] w-[223px]">
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.4]">{`Who we are `}</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.4]">{`What we do `}</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[1.4]">Case Studies</span>
          </li>
        </ul>
      </div>
      <div className="absolute h-[95px] left-[776px] top-[609px] w-[143px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[86px] justify-center leading-[0] left-[calc(50%-547px)] text-[48px] text-black top-[1607px] tracking-[-0.96px] w-[279px]">
        <p className="leading-[1.4]">Our Works</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[334px] justify-center leading-[0] left-[calc(50%-498px)] text-[24px] text-white top-[2092px] tracking-[-0.48px] w-[501px]">
        <p className="leading-[2] mb-0">Delivering pristine, high-fidelity imagery across all disciplines. We combine expert lighting, advanced camera systems, and precise color grading to produce visually striking, technically flawless assets that demand attention.</p>
        <p className="leading-[2]">​</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[64px] left-[562px] rounded-[200px] top-[2414px] w-[379px]" />
      <div className="absolute bg-[red] h-[26px] left-[593px] rounded-[200px] top-[2433px] w-[170px]" />
      <div className="absolute left-[772px] size-[26px] top-[2433px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #FF0000)" id="Ellipse 3" r="13" />
        </svg>
      </div>
      <div className="absolute left-[820px] size-[26px] top-[2433px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #FF0000)" id="Ellipse 3" r="13" />
        </svg>
      </div>
      <div className="absolute left-[868px] size-[26px] top-[2433px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #FF0000)" id="Ellipse 3" r="13" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[93px] justify-center leading-[0] left-[calc(50%-501px)] text-[36px] text-[red] top-[1820.5px] tracking-[-0.72px] w-[609px] whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">{`Professional Photography `}</p>
        <p className="leading-[1.4]">​</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[93px] justify-center leading-[0] left-[calc(50%-501px)] text-[36px] text-[red] top-[1843.5px] tracking-[-0.72px] w-[609px] whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">{`Professional Photography `}</p>
        <p className="leading-[1.4]">​</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[93px] justify-center leading-[0] left-[calc(50%-501px)] text-[36px] text-[red] top-[1867.5px] tracking-[-0.72px] w-[609px] whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">{`Professional Photography `}</p>
        <p className="leading-[1.4]">​</p>
      </div>
      <div className="absolute h-[368px] left-[785px] top-[1890px] w-[461px]" data-name="1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11} />
      </div>
      <div className="absolute bg-gradient-to-b from-[83.634%] from-black h-[2927px] left-0 to-[#343030] top-[2573px] w-[1440px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[74px] justify-center leading-[0] left-[calc(50%-116px)] text-[36px] text-[red] top-[2688px] tracking-[-0.72px] w-[232px]">
        <p className="leading-[1.4]">Our Gallery</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[201px] justify-center leading-[0] left-[calc(50%-298px)] text-[48px] text-white top-[calc(50%-879px)] tracking-[-0.96px] w-[660px]">
        <p className="leading-[1.4]">Engineered aesthetics. Uncompromising quality. Explore the portfolio.</p>
      </div>
      <div className="absolute h-[502px] left-[93px] top-[3037px] w-[627px]" data-name="6 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img61} />
      </div>
      <div className="absolute h-[502px] left-[763px] top-[3037px] w-[628px]" data-name="7 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img71} />
      </div>
      <div className="absolute h-[497px] left-[93px] top-[3584px] w-[622px]" data-name="9 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img91} />
      </div>
      <div className="absolute h-[502px] left-[763px] top-[3579px] w-[628px]" data-name="8 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img81} />
      </div>
      <div className="absolute h-[501px] left-[89px] top-[4126px] w-[626px]" data-name="10 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img101} />
      </div>
      <div className="absolute h-[506px] left-[763px] top-[4121px] w-[632px]" data-name="11 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img111} />
      </div>
      <div className="absolute h-[506px] left-[763px] top-[4121px] w-[632px]" data-name="11 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img111} />
      </div>
      <div className="absolute h-[513px] left-[80px] top-[4685px] w-[641px]" data-name="12 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img121} />
      </div>
      <div className="absolute h-[513px] left-[754px] top-[4685px] w-[641px]" data-name="13 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img131} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:Bold',sans-serif] font-bold h-[74px] justify-center leading-[0] left-[calc(50%-640px)] text-[48px] text-white top-[5370px] tracking-[-0.96px] w-[674px]">
        <p className="leading-[1.4]">Take a look on Color Lab</p>
      </div>
      <div className="absolute bg-black h-[725px] left-0 top-[5466px] w-[1440px]" />
      <div className="absolute h-[113px] left-[80px] top-[5546px] w-[537px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 9" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[334px] justify-center leading-[0] left-[calc(50%-622px)] text-[36px] text-white top-[5802px] tracking-[-0.72px] w-[501px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[2]">We use engineering methods to capture natural color.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[119px] justify-center leading-[0] left-[calc(50%-622px)] text-[36px] text-black top-[6517.5px] tracking-[-0.72px] w-[817px] whitespace-pre-wrap">
        <p className="leading-none mb-0">Send the message to work with us.</p>
        <p className="leading-none mb-0">​</p>
        <p className="leading-none">Mail: Uranus@devloominnovations.com</p>
      </div>
      <div className="absolute h-[441px] left-[810px] top-[5603px] w-[529px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[87px] justify-center leading-[0] left-[calc(50%-622px)] text-[48px] text-[red] top-[6334.5px] tracking-[-0.96px] w-[369px]">
        <p className="leading-[1.4]">Work with US</p>
      </div>
      <div className="absolute bg-black h-[697px] left-0 top-[6736px] w-[1440px]" />
      <div className="absolute left-[56px] size-[7px] top-[6793px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[56px] size-[7px] top-[6889px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[56px] size-[7px] top-[6985px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[56px] size-[7px] top-[7081px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[56px] size-[7px] top-[7177px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[52px] size-[7px] top-[7273px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[52px] size-[7px] top-[7369px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[158px] size-[7px] top-[6793px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[158px] size-[7px] top-[6889px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[158px] size-[7px] top-[6985px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[158px] size-[7px] top-[7081px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[158px] size-[7px] top-[7177px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[154px] size-[7px] top-[7273px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[154px] size-[7px] top-[7369px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[268px] size-[7px] top-[6793px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[268px] size-[7px] top-[6889px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[268px] size-[7px] top-[6985px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[268px] size-[7px] top-[7081px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[268px] size-[7px] top-[7177px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[264px] size-[7px] top-[7273px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[264px] size-[7px] top-[7369px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[345px] size-[7px] top-[6793px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[345px] size-[7px] top-[6889px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[345px] size-[7px] top-[6985px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[345px] size-[7px] top-[7081px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[345px] size-[7px] top-[7177px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[341px] size-[7px] top-[7273px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[341px] size-[7px] top-[7369px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[447px] size-[7px] top-[6793px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[447px] size-[7px] top-[6889px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[447px] size-[7px] top-[6985px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[447px] size-[7px] top-[7081px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[447px] size-[7px] top-[7177px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[443px] size-[7px] top-[7273px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[443px] size-[7px] top-[7369px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[557px] size-[7px] top-[6793px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[557px] size-[7px] top-[6889px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[557px] size-[7px] top-[6985px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[557px] size-[7px] top-[7081px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[557px] size-[7px] top-[7177px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[553px] size-[7px] top-[7273px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[553px] size-[7px] top-[7369px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[663px] size-[7px] top-[6800px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[663px] size-[7px] top-[6896px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[663px] size-[7px] top-[6992px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[663px] size-[7px] top-[7088px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[663px] size-[7px] top-[7184px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[659px] size-[7px] top-[7280px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[659px] size-[7px] top-[7376px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[765px] size-[7px] top-[6800px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[765px] size-[7px] top-[6896px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[765px] size-[7px] top-[6992px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[765px] size-[7px] top-[7088px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[765px] size-[7px] top-[7184px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[761px] size-[7px] top-[7280px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[761px] size-[7px] top-[7376px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[875px] size-[7px] top-[6800px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[875px] size-[7px] top-[6896px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[875px] size-[7px] top-[6992px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[875px] size-[7px] top-[7088px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[875px] size-[7px] top-[7184px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[871px] size-[7px] top-[7280px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[871px] size-[7px] top-[7376px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[967px] size-[7px] top-[6797px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[967px] size-[7px] top-[6893px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[967px] size-[7px] top-[6989px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[967px] size-[7px] top-[7085px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[967px] size-[7px] top-[7181px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[963px] size-[7px] top-[7277px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[963px] size-[7px] top-[7373px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1069px] size-[7px] top-[6797px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1069px] size-[7px] top-[6893px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1069px] size-[7px] top-[6989px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1069px] size-[7px] top-[7085px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1069px] size-[7px] top-[7181px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1065px] size-[7px] top-[7277px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1065px] size-[7px] top-[7373px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1179px] size-[7px] top-[6797px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1179px] size-[7px] top-[6893px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1179px] size-[7px] top-[6989px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1179px] size-[7px] top-[7085px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1179px] size-[7px] top-[7181px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1175px] size-[7px] top-[7277px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1175px] size-[7px] top-[7373px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1275px] size-[7px] top-[6797px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1275px] size-[7px] top-[6893px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1275px] size-[7px] top-[6989px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1275px] size-[7px] top-[7085px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1275px] size-[7px] top-[7181px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1271px] size-[7px] top-[7277px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1271px] size-[7px] top-[7373px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1371px] size-[7px] top-[6797px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1371px] size-[7px] top-[6893px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1371px] size-[7px] top-[6989px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1371px] size-[7px] top-[7085px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1371px] size-[7px] top-[7181px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1367px] size-[7px] top-[7277px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1367px] size-[7px] top-[7373px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0000)" id="Ellipse 6" r="3.5" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:Regular',sans-serif] font-normal h-[119px] justify-center leading-[0] left-[calc(50%-533px)] text-[64px] text-white top-[7032.5px] tracking-[-1.28px] w-[1148px]">
        <p className="leading-none">URANUS: Creative Media Startup</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:Regular',sans-serif] font-normal h-[119px] justify-center leading-[0] left-[calc(50%-293px)] text-[64px] text-[red] top-[7128.5px] tracking-[-1.28px] w-[695px]">
        <p className="leading-none">Beyond the Visible</p>
      </div>
    </div>
  );
}