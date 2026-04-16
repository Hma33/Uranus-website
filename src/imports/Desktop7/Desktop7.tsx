import imgDownload21 from "./6e1d1ab0ffe931f26d9969ed17ad9ef421548b8a.png";
import imgImage1 from "./feb1f42572c0af70952e77830c7c51e966e8fd72.png";
import img21 from "./d81b03d74f2eb673e1f26befbf97730863b199d2.png";
import imgLogo from "./1f2061a97aad5d88e1694e4b104e221864e0e1be.png";

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

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 7">
      <div className="absolute h-[813px] left-[-115px] top-0 w-[1670px]" data-name="download (2) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.16%] left-[-0.03%] max-w-none top-[-50.16%] w-[100.05%]" src={imgDownload21} />
        </div>
      </div>
      <div className="absolute bg-[rgba(221,221,221,0.89)] h-[153px] left-[310px] top-[369px] w-[494px]" />
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Kode_Mono:SemiBold',sans-serif] font-semibold h-[271px] justify-center leading-[0] left-[calc(50%-501px)] text-[24px] text-white top-[2163.5px] tracking-[-0.48px] w-[501px] whitespace-pre-wrap">
        <p className="leading-[2] mb-0">Comprehensive, dynamic coverage of your most important milestones. We seamlessly document the energy and scale of your events—from intimate corporate gatherings to large-scale tech conferences—ensuring every critical detail and interaction is captured with clarity.</p>
        <p className="leading-[2] mb-0">​</p>
        <p className="leading-[2] mb-0">​</p>
        <p className="leading-[2]">​</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[64px] left-[562px] rounded-[200px] top-[2414px] w-[379px]" />
      <div className="absolute bg-[red] h-[26px] left-[743px] rounded-[200px] top-[2433px] w-[170px]" />
      <div className="absolute left-[598px] size-[26px] top-[2433px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #FF0000)" id="Ellipse 3" r="13" />
        </svg>
      </div>
      <div className="absolute left-[646px] size-[26px] top-[2433px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #FF0000)" id="Ellipse 3" r="13" />
        </svg>
      </div>
      <div className="absolute left-[694px] size-[26px] top-[2433px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #FF0000)" id="Ellipse 3" r="13" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[93px] justify-center leading-[0] left-[calc(50%-501px)] text-[36px] text-[red] top-[1820.5px] tracking-[-0.72px] w-[609px]">
        <p className="leading-[1.4] mb-0">Event Photography</p>
        <p className="leading-[1.4]">​</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[93px] justify-center leading-[0] left-[calc(50%-501px)] text-[36px] text-[red] top-[1847.5px] tracking-[-0.72px] w-[609px]">
        <p className="leading-[1.4] mb-0">Event Photography</p>
        <p className="leading-[1.4]">​</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto_Mono:SemiBold',sans-serif] font-semibold h-[93px] justify-center leading-[0] left-[calc(50%-501px)] text-[36px] text-[red] top-[1872.5px] tracking-[-0.72px] w-[609px]">
        <p className="leading-[1.4] mb-0">Event Photography</p>
        <p className="leading-[1.4]">​</p>
      </div>
      <div className="absolute h-[428px] left-[752px] top-[1862px] w-[535px]" data-name="2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img21} />
      </div>
      <Header />
    </div>
  );
}