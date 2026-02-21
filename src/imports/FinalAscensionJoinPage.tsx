import svgPaths from "./svg-2o19hx04jh";
import imgImage from "figma:asset/0949c62f9636bb32f10e91336019f5f8a312e11e.png";
import imgVerticalDivider from "figma:asset/c4a6f6d36944763f2399af4bff38f455c374769d.png";

function Svg() {
  return <div className="shrink-0 size-[60px]" data-name="SVG" />;
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2497.5px] items-start left-0 overflow-clip pb-[2437.5px] pr-[1220px] top-0 w-[1280px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[800px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 800">
        <g id="SVG">
          <path d={svgPaths.p33be5a00} id="Vector" stroke="var(--stroke-0, #A855F7)" strokeWidth="1.33333" />
          <path d={svgPaths.p36bacc00} id="Vector_2" stroke="var(--stroke-0, #A855F7)" strokeDasharray="13.33 13.33" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex inset-[-69px_0_342px_0] items-center justify-center opacity-10" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[500px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500">
        <g clipPath="url(#clip0_1_1704)" id="SVG">
          <path d="M0 0H500V500H0V0V0" fill="var(--fill-0, black)" id="Vector" opacity="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1704">
            <rect fill="white" height="500" width="500" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoiseSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[1398.5px] items-start overflow-clip pb-[898.5px] pr-[780px] relative shrink-0 w-[1280px]" data-name="noise.svg fill">
      <Svg2 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start mix-blend-overlay opacity-15" data-name="Image">
      <NoiseSvgFill />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#020105] inset-[0_0_1px_0]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(88,28,135,0.2)] blur-[50px] left-1/2 rounded-[9999px] size-[600px] top-1/2" data-name="Overlay+Blur" />
        <Image />
        <div className="absolute inset-0 mix-blend-luminosity opacity-40" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-4.63%] max-w-none top-0 w-[109.26%]" src={imgImage} />
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-[#020105] inset-0 to-[rgba(2,1,5,0)] via-1/2 via-[rgba(2,1,5,0.95)]" data-name="Gradient" />
        <div className="absolute h-[1398.5px] left-[40px] opacity-50 top-0 w-px" data-name="Vertical Divider">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider} />
        </div>
        <div className="absolute h-[1398.5px] opacity-50 right-[40px] top-0 w-px" data-name="Vertical Divider">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider} />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-[419.55px] right-[192px] size-[96px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g id="Container">
          <path d={svgPaths.p23f4edb0} fill="var(--fill-0, #A855F7)" fillOpacity="0.1" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative size-[48px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Container">
          <path d={svgPaths.p1828dc0} fill="var(--fill-0, #A855F7)" fillOpacity="0.2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute inset-[0_0_1px_0]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[56.851px] items-center justify-center left-[132.22px] top-[268.31px] w-[57.122px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-12">
            <div className="h-[47.871px] relative w-[48.223px]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.2227 47.8711">
                <path d={svgPaths.p19110a80} fill="var(--fill-0, #A855F7)" fillOpacity="0.2" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
        <Container2 />
        <div className="absolute h-[28.723px] left-[323.55px] top-[842.18px] w-[28.934px]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9336 28.7227">
            <path d={svgPaths.p2e5c0fc0} fill="var(--fill-0, #A855F7)" fillOpacity="0.15" id="Icon" />
          </svg>
        </div>
        <div className="absolute flex items-center justify-center right-[310.06px] size-[67.882px] top-[199.82px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-45">
            <Container3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="content-stretch flex flex-col items-center relative shadow-[0px_0px_5px_0px_rgba(168,85,247,0.8)] shrink-0" data-name="Shadow">
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[14px] text-center tracking-[5.6px] uppercase w-[231.16px]">
        <p className="leading-[20px] whitespace-pre-wrap">Hueco Mundo Access</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Container">
      <div className="bg-gradient-to-r from-[rgba(168,85,247,0)] h-px shadow-[0px_0px_10px_0px_#a855f7] shrink-0 to-[#a855f7] w-[96px]" data-name="Horizontal Divider" />
      <Shadow />
      <div className="bg-gradient-to-l from-[rgba(168,85,247,0)] h-px shadow-[0px_0px_10px_0px_#a855f7] shrink-0 to-[#a855f7] w-[96px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Shadow1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-center left-[calc(50%-0.01px)] pr-[8px] py-[22.5px] shadow-[0px_0px_35px_0px_rgba(168,85,247,0.8)] top-[233px]" data-name="Shadow">
      <div className="bg-clip-text bg-gradient-to-b flex flex-col font-['Cinzel:Black',sans-serif] font-black from-[#a855f7] h-[128px] justify-center leading-[0] relative shrink-0 text-[128px] text-center to-white tracking-[-6.4px] uppercase w-[445.95px]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[128px] whitespace-pre-wrap">Today</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[384px] relative shadow-[0px_0px_20px_0px_rgba(255,255,255,0.1)] shrink-0 w-[992px]" data-name="Heading 1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cinzel:Black',sans-serif] font-black h-[256px] justify-center leading-[128px] left-[calc(50%-0.01px)] text-[128px] text-center text-white top-[127.5px] tracking-[-6.4px] uppercase w-[830.86px] whitespace-pre-wrap">
        <p className="mb-0">Enter</p>
        <p>Hollow HQ</p>
      </div>
      <Shadow1 />
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] px-[19.91px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[96px] justify-center leading-[32px] not-italic relative shrink-0 text-[#d1d5db] text-[24px] text-center tracking-[0.6px] w-[632.18px] whitespace-pre-wrap">
        <p className="mb-0">Your Power Awakens. The Garganta is opening. Embrace the</p>
        <p className="mb-0">emptiness, evolve your mask, and ascend the hierarchy of Las</p>
        <p>Noches.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pb-[56px] relative shrink-0" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[28.723px] left-[-14.29px] top-[-24px] w-[28.934px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9336 28.7227">
        <g id="Container">
          <path d={svgPaths.pd01b540} fill="var(--fill-0, #A855F7)" fillOpacity="0.4" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[-24px] h-[28.723px] right-[-14.31px] w-[28.934px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9336 28.7227">
        <g id="Container">
          <path d={svgPaths.p2e5c0fc0} fill="var(--fill-0, #A855F7)" fillOpacity="0.4" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="SVG">
          <path d={svgPaths.p3a1b7800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shadow-[0px_0px_10px_0px_rgba(255,255,255,0.8)] shrink-0 size-[40px]" data-name="SVG">
      <Svg4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-80 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase w-[169.25px]">
        <p className="leading-[16px] whitespace-pre-wrap">Join The 127 Members</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Cinzel:Black',sans-serif] font-black h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white tracking-[2px] uppercase w-[163.37px]">
        <p className="leading-[28px] whitespace-pre-wrap">Join Server</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Svg3 />
        <Container11 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5865f2] content-stretch flex items-center pl-[61.129px] pr-[61.113px] py-[33px] relative" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-1.7px_0] shadow-[0px_0px_60px_-10px_rgba(168,85,247,0.8)]" data-name="Button:shadow" />
      <div className="flex items-center justify-center relative shrink-0 w-[233.008px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "63" } as React.CSSProperties}>
        <div className="flex-none skew-x-10">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container8 />
      <Container9 />
      <div className="absolute flex inset-[-4px_-4.71px_-4px_-4.7px] items-center justify-center">
        <div className="-skew-x-10 flex-none h-[119.82px] scale-y-98 w-[363.25px]">
          <div className="bg-gradient-to-r blur-[8px] from-[#a855f7] opacity-70 size-full to-[#a855f7] via-1/2 via-[#c084fc]" data-name="Gradient+Blur" />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-[374.646px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "63" } as React.CSSProperties}>
        <div className="-skew-x-10 flex-none">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="max-w-[1024px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center max-w-[inherit] px-[16px] relative">
        <Margin />
        <Heading1Margin />
        <Margin1 />
        <Container7 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="min-h-[1399.5px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip pb-[355.25px] pt-[314.25px] relative rounded-[inherit] w-full">
        <Background />
        <Container1 />
        <Container4 />
        <div className="absolute bg-gradient-to-t bottom-px from-[#020105] h-[160px] left-0 right-0 to-[rgba(2,1,5,0)] via-1/2 via-[rgba(2,1,5,0.8)]" data-name="Gradient" />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[15px] relative shrink-0 w-[30px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 15">
        <g id="Container">
          <path d={svgPaths.p1d03b200} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[2.4px] uppercase w-[147.05px]">
        <p className="leading-[16px] whitespace-pre-wrap">Active Hollows</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[60px] justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-2.4px] w-[67.45px]">
          <p className="leading-[60px] whitespace-pre-wrap">127</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[#0a0510] relative self-stretch shrink-0 w-[389.33px]" data-name="Background+Border+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[33px] relative rounded-[inherit] size-full">
        <Margin2 />
        <Container19 />
        <div className="absolute left-px opacity-50 size-[8px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#a855f7] border-l border-solid border-t inset-0 pointer-events-none" />
        </div>
        <div className="absolute bottom-[0.5px] opacity-50 right-px size-[8px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#a855f7] border-b border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute inset-[1px_1px_0.5px_1px] opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(155.563deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 27.5">
        <g id="Container">
          <path d={svgPaths.p31e0f380} fill="var(--fill-0, #EF4444)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[2.4px] uppercase w-[156.7px]">
        <p className="leading-[16px] whitespace-pre-wrap">Garganta Status</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[60px] justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-2.4px] w-[219.64px]">
          <p className="leading-[60px] whitespace-pre-wrap">Unstable</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[#0a0510] relative self-stretch shrink-0 w-[389.33px]" data-name="Background+Border+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[33px] relative rounded-[inherit] size-full">
        <Margin3 />
        <Container23 />
        <div className="absolute left-px opacity-50 size-[8px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#a855f7] border-l border-solid border-t inset-0 pointer-events-none" />
        </div>
        <div className="absolute bottom-[0.5px] opacity-50 right-px size-[8px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#a855f7] border-b border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute inset-[1px_1px_0.5px_1px] opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(155.563deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[23.75px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 23.75">
        <g id="Container">
          <path d={svgPaths.p2e2f3f00} fill="var(--fill-0, #C084FC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[2.4px] uppercase w-[154.98px]">
        <p className="leading-[16px] whitespace-pre-wrap">Evolution Stage</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-[323.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[323.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[60px] justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-2.4px] w-[242.91px]">
          <p className="leading-[60px] whitespace-pre-wrap">Arrancar</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[2px] bg-[#0a0510] relative self-stretch shrink-0 w-[389.34px]" data-name="Background+Border+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[33px] relative rounded-[inherit] size-full">
        <Margin4 />
        <Container27 />
        <div className="absolute left-px opacity-50 size-[8px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#a855f7] border-l border-solid border-t inset-0 pointer-events-none" />
        </div>
        <div className="absolute bottom-[0.5px] opacity-50 right-px size-[8px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#a855f7] border-b border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute inset-[1px_1px_0.5px_1px] opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(155.564deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderOverlayBlur />
      <BackgroundBorderOverlayBlur1 />
      <BackgroundBorderOverlayBlur2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-center leading-[45px] relative shrink-0 text-[36px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Espada</p>
        <p className="text-[#a855f7]">Decrees</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] justify-center leading-[29.25px] not-italic relative shrink-0 text-[#9ca3af] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Before stepping into the white sands, heed the laws</p>
        <p className="mb-0">of the Strongest. Survival depends on your</p>
        <p>{`compliance with Aizen's will.`}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p304eaa0} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[25px] py-[13px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[14px] tracking-[0.7px] uppercase w-[116.75px]">
        <p className="leading-[20px] whitespace-pre-wrap">Read The Tablets</p>
      </div>
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[389.33px]" data-name="Container">
      <Heading1 />
      <Container30 />
      <Link />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p15aec574} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <Container34 />
      <div className="flex flex-col font-['Cinzel:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.45px] w-[161.64px]">
        <p className="leading-[28px] whitespace-pre-wrap">Mask Breaching</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary() {
  return (
    <div className="bg-[rgba(10,5,16,0.3)] relative shrink-0 w-[776.67px]" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
        <Container33 />
        <Container35 />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="bg-[rgba(10,5,16,0.5)] relative shrink-0 w-full" data-name="Details">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-[2px] relative rounded-[inherit] w-full">
        <SlotSummary />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p19ab6100} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <Container37 />
      <div className="flex flex-col font-['Cinzel:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.45px] w-[197.94px]">
        <p className="leading-[28px] whitespace-pre-wrap">Fracción Selection</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary1() {
  return (
    <div className="bg-[rgba(10,5,16,0.3)] relative shrink-0 w-[776.67px]" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
        <Container36 />
        <Container38 />
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="bg-[rgba(10,5,16,0.5)] relative shrink-0 w-full" data-name="Details">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-[2px] relative rounded-[inherit] w-full">
        <SlotSummary1 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20.6px] relative shrink-0 w-[19.8px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8 20.6">
        <g id="Container">
          <path d={svgPaths.pee23900} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <Container40 />
      <div className="flex flex-col font-['Cinzel:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.45px] w-[159.22px]">
        <p className="leading-[28px] whitespace-pre-wrap">Pesquisa Comms</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary2() {
  return (
    <div className="bg-[rgba(10,5,16,0.3)] relative shrink-0 w-[776.67px]" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
        <Container39 />
        <Container41 />
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="bg-[rgba(10,5,16,0.5)] relative shrink-0 w-full" data-name="Details">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-[2px] relative rounded-[inherit] w-full">
        <SlotSummary2 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <Container43 />
      <div className="flex flex-col font-['Cinzel:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.45px] w-[206.72px]">
        <p className="leading-[28px] whitespace-pre-wrap">{`Aizen's Absolute Law`}</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary3() {
  return (
    <div className="bg-[rgba(10,5,16,0.3)] relative shrink-0 w-[776.67px]" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
        <Container42 />
        <Container44 />
      </div>
    </div>
  );
}

function Details3() {
  return (
    <div className="bg-[rgba(10,5,16,0.5)] relative shrink-0 w-full" data-name="Details">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-[2px] relative rounded-[inherit] w-full">
        <SlotSummary3 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[778.67px]" data-name="Container">
      <Details />
      <Details1 />
      <Details2 />
      <Details3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container32 />
    </div>
  );
}

function Container14() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container15 />
        <Container28 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#020105] content-stretch flex flex-col items-start pb-[48px] pt-[49px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="absolute bg-gradient-to-r from-[rgba(168,85,247,0)] h-px left-[33.33%] right-[33.33%] shadow-[0px_0px_10px_0px_#a855f7] to-[rgba(168,85,247,0)] top-px via-1/2 via-[#a855f7]" data-name="Horizontal Divider" />
      <Container14 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[69px]" data-name="Main">
      <Container />
      <Section />
      <Section1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative size-[25px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p24894b00} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(168,85,247,0.1)] content-stretch flex h-[55.996px] items-center justify-center p-px relative w-[56px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-center relative shrink-0 w-[29.408px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none skew-x-10">
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center pb-[0.004px] relative shrink-0" data-name="Overlay+Border:css-transform">
      <div className="flex items-center justify-center relative shrink-0 w-[65.874px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-skew-x-10 flex-none">
          <OverlayBorder />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[2px] uppercase w-[273.64px]">
        <p className="leading-[28px] whitespace-pre-wrap">Hollow HQ Central</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[14px] tracking-[0.35px] w-[175.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">Where the masks are broken.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <Container50 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[19.06px] items-center relative shrink-0" data-name="Container">
      <OverlayBorderCssTransform />
      <Container49 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p352d4240} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative size-[24px]" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Svg6 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#0a0510] content-stretch flex items-center justify-center p-px relative size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-center relative shrink-0 w-[28.232px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none skew-x-10">
          <Svg5 />
        </div>
      </div>
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0" data-name="Link:css-transform">
      <div className="flex items-center justify-center relative shrink-0 w-[56.464px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-skew-x-10 flex-none">
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p1a91400} fill="var(--fill-0, #9CA3AF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative size-[24px]" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Svg8 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#0a0510] content-stretch flex items-center justify-center p-px relative size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-center relative shrink-0 w-[28.232px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none skew-x-10">
          <Svg7 />
        </div>
      </div>
    </div>
  );
}

function LinkCssTransform1() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0" data-name="Link:css-transform">
      <div className="flex items-center justify-center relative shrink-0 w-[56.464px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-skew-x-10 flex-none">
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[15.536px] items-start relative shrink-0" data-name="Container">
      <LinkCssTransform />
      <LinkCssTransform1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.3px] uppercase w-[225.05px]">
          <p className="leading-[16px] whitespace-pre-wrap">© 2024 Hollow HQ. Fan Project.</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[1.2px] uppercase w-[82.77px]">
        <p className="leading-[16px] whitespace-pre-wrap">Espada Laws</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[1.2px] uppercase w-[77.53px]">
        <p className="leading-[16px] whitespace-pre-wrap">Hollow Web</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[1.2px] uppercase w-[122.52px]">
        <p className="leading-[16px] whitespace-pre-wrap">Banishment Appeal</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative">
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-[1232px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container45() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] pl-[19.066px] pr-[19.77px] relative w-full">
          <Container46 />
          <HorizontalBorder />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black left-0 right-0 top-[2207.5px]" data-name="Footer">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[40px] pt-[81px] relative rounded-[inherit] w-full">
        <div className="absolute bg-gradient-to-t from-[rgba(168,85,247,0.05)] inset-[1px_0_0_0] opacity-20 to-[rgba(168,85,247,0)]" data-name="Gradient" />
        <div className="absolute bg-gradient-to-r bottom-0 from-[rgba(168,85,247,0)] h-px left-0 right-0 to-[rgba(168,85,247,0)] via-1/2 via-[rgba(168,85,247,0.5)]" data-name="Horizontal Divider" />
        <Container45 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.2)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p24894b00} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_0px_5px_0px_rgba(168,85,247,0.5)] shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[2.4px] uppercase w-[182.92px]">
        <p className="leading-[32px] whitespace-pre-wrap">Hollow HQ</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container56 />
      <Heading3 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Medium',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] w-[82.13px]">
        <p className="leading-[28px] whitespace-pre-wrap">Las Noches</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Medium',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] w-[53.05px]">
        <p className="leading-[28px] whitespace-pre-wrap">Espada</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Medium',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] w-[60.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">Archives</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#a855f7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Medium',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[52.64px]">
        <p className="leading-[28px] whitespace-pre-wrap">Submit</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Nav">
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[14px] tracking-[1.4px] w-[91.03px]">
          <p className="leading-[20px] whitespace-pre-wrap">127 HOLLOWS</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0a0510] relative shrink-0" data-name="Background+Border">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[17px] py-[7px] relative rounded-[inherit]">
        <div className="bg-[#a855f7] rounded-[9999px] shadow-[0px_0px_8px_0px_#a855f7] shrink-0 size-[8px]" data-name="Background+Shadow" />
        <Container57 />
        <div className="absolute bg-[rgba(168,85,247,0.1)] inset-[1px_140.03px_1px_-138.03px]" data-name="Overlay" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.3)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container54() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Container55 />
          <Nav />
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(2,1,5,0.9)] content-stretch flex flex-col items-start left-0 pb-px right-0 top-0" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.2)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_15px_0px_rgba(168,85,247,0.1)]" />
      <Container54 />
    </div>
  );
}

export default function FinalAscensionJoinPage() {
  return (
    <div className="bg-[#020105] relative size-full" data-name="Final Ascension Join Page">
      <ImageFill />
      <Main />
      <Footer />
      <Header />
    </div>
  );
}