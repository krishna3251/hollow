import svgPaths from "./svg-kaf56jm4tx";
import imgBackground from "figma:asset/10528d2422a7796145e62ec82687a4f433e6336c.png";
import imgBackground1 from "figma:asset/80f884fefeded4898aed97d64246a3c5da0d9023.png";
import imgBackgroundImage from "figma:asset/d6a5a6a7b0f707e44a4674abc447bf5bada8642c.png";
import imgVerticalDivider from "figma:asset/e86ce063aa2edbc0206db32cfca02403d62febfe.png";
import imgVerticalDivider1 from "figma:asset/0974f3cb25bc667f2e2332dc935f9ed3efc1dfed.png";
import imgVerticalDivider2 from "figma:asset/68e9a4a846a095f622acc8468ae4d061d8110503.png";
import imgVerticalDivider3 from "figma:asset/35d93aae19dcbf6010598a02f3760a4db8f9e086.png";
import { imgOverlayBorderOverlayBlur, imgOverlayBorderOverlayBlur1, imgOverlayBorderOverlayBlur2, imgOverlayBorderOverlayBlur3, imgOverlayBorderOverlayBlur4 } from "./svg-92ac1";

function Shadow() {
  return (
    <div className="h-[13.75px] relative shrink-0 w-[30px]" data-name="Shadow">
      <div className="absolute inset-[-87.27%_-40%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 37.75">
          <g filter="url(#filter0_d_1_1638)" id="Shadow">
            <path d={svgPaths.p24cc3280} fill="var(--fill-0, #A855F7)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.75" id="filter0_d_1_1638" width="54" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.658824 0 0 0 0 0.333333 0 0 0 0 0.968627 0 0 0 0.8 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1638" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1638" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Container">
      <Shadow />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] pb-[0.5px] relative shrink-0 tracking-[2px] uppercase" data-name="Paragraph">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[20px] justify-center mb-[-0.5px] relative shrink-0 text-[20px] text-white w-[152.44px]">
        <p className="leading-[20px] whitespace-pre-wrap">Hollow HQ</p>
      </div>
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center mb-[-0.5px] not-italic opacity-80 relative shrink-0 text-[#a855f7] text-[10px] w-[116.17px]">
        <p className="leading-[15px] whitespace-pre-wrap">Las Noches Comms</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Paragraph />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.7px] uppercase w-[90.34px]">
        <p className="leading-[20px] whitespace-pre-wrap">Hueco Mundo</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#a855f7] border-b border-solid inset-0 pointer-events-none shadow-[0px_0px_5px_0px_rgba(168,85,247,0.5)]" />
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[14px] tracking-[0.7px] uppercase w-[71.48px]">
        <p className="leading-[20px] whitespace-pre-wrap">Structure</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.7px] uppercase w-[49.11px]">
        <p className="leading-[20px] whitespace-pre-wrap">Espada</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Rajdhani:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.7px] uppercase w-[29.42px]">
        <p className="leading-[20px] whitespace-pre-wrap">Join</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p8e2cb70} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1.4px] uppercase w-[49.88px]">
        <p className="leading-[20px] whitespace-pre-wrap">Invade</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit]">
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.5)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center justify-end min-h-px min-w-px relative" data-name="Container">
      <Nav />
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[40px] py-[12px] relative w-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(5,4,10,0.95)] content-stretch flex flex-col items-start pb-px relative shrink-0 w-full z-[4]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-gradient-to-r bottom-px from-[rgba(168,85,247,0)] h-px left-0 opacity-60 to-[rgba(168,85,247,0)] via-1/2 via-[#a855f7] w-[1280px]" data-name="Horizontal Divider" />
      <Container />
    </div>
  );
}

function Shadow1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Shadow">
      <div className="absolute inset-[-40%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 45">
          <g filter="url(#filter0_d_1_1611)" id="Shadow">
            <path d={svgPaths.p14a8df00} fill="var(--fill-0, #A855F7)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="45" id="filter0_d_1_1611" width="40" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.658824 0 0 0 0 0.333333 0 0 0 0 0.968627 0 0 0 0.6 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1611" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1611" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[1.8px] uppercase w-[119.7px]">
        <p className="leading-[28px] whitespace-pre-wrap">Command</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(168,85,247,0.7)] tracking-[0.5px] uppercase w-[73.28px]">
        <p className="leading-[15px] whitespace-pre-wrap">Espada Orders</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Heading2 />
        <Container8 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Shadow1 />
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[22.75px]">Hollow HQ</span>
          <span className="font-['Rajdhani:Light',sans-serif] leading-[22.75px] not-italic text-[#cbd5e1]">: The void where power dictates</span>
        </p>
        <p className="font-['Rajdhani:Light',sans-serif] leading-[22.75px] text-[#cbd5e1]">hierarchy. Consume to evolve.</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid h-[19px] left-[166.58px] top-[2px] w-[52.59px]" data-name="HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Rajdhani:Medium',sans-serif] h-[23px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-[9px] w-[52.59px]">
        <p className="leading-[22.75px] whitespace-pre-wrap">Garganta</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid h-[19px] left-[112px] top-[24.75px] w-[56.52px]" data-name="HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Rajdhani:Medium',sans-serif] h-[23px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-[9px] w-[56.52px]">
        <p className="leading-[22.75px] whitespace-pre-wrap">Shinigami</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Rajdhani:Light',sans-serif] h-[23px] justify-center leading-[0] left-0 not-italic text-[#cbd5e1] text-[14px] top-[11px] w-[166.58px]">
        <p className="leading-[22.75px] whitespace-pre-wrap">{`Current Directive: Expand the `}</p>
      </div>
      <HorizontalBorder1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Rajdhani:Light',sans-serif] h-[23px] justify-center leading-[0] left-0 not-italic text-[#cbd5e1] text-[14px] top-[33.75px] w-[112px]">
        <p className="leading-[22.75px] whitespace-pre-wrap">{`network. Crush any `}</p>
      </div>
      <HorizontalBorder2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Rajdhani:Light',sans-serif] h-[23px] justify-center leading-[0] left-[168.52px] not-italic text-[#cbd5e1] text-[14px] top-[33.75px] w-[73.78px]">
        <p className="leading-[22.75px] whitespace-pre-wrap">{` interference.`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[97px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[9px] tracking-[0.45px] uppercase w-[49.78px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">Reiatsu Lvl</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[97px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[2px] w-[77.86px]">
          <p className="leading-[28px] whitespace-pre-wrap">99,999</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#05040a] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[9px] relative w-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[97px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#06b6d4] text-[9px] tracking-[0.45px] uppercase w-[52.39px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">Target Lock</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Container">
          <path d={svgPaths.pce69280} fill="var(--fill-0, #06B6D4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#06b6d4] text-[12px] tracking-[0.6px] uppercase w-[61px]">
        <p className="leading-[16px] whitespace-pre-wrap">Searching</p>
      </div>
    </div>
  );
}

function Shadow2() {
  return (
    <div className="relative shadow-[0px_0px_5px_0px_rgba(6,182,212,0.4)] shrink-0 w-[97px]" data-name="Shadow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative w-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#05040a] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[21px] pt-[9px] px-[9px] relative w-full">
        <Container14 />
        <Shadow2 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[17.6px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.2)] border-dashed border-t inset-0 pointer-events-none" />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(6,182,212,0.7)] tracking-[1px] w-[45.81px]">
        <p className="leading-[15px] whitespace-pre-wrap">CERO.NET</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center right-[12px] top-[12px]" data-name="Container">
      <div className="bg-[#06b6d4] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container18 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0b0810] relative shrink-0 w-[294px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.4px] items-start p-[24px] relative w-full">
        <HorizontalBorder />
        <Container9 />
        <HorizontalBorder3 />
        <Container17 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0f0b14] relative rounded-[2px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[5px] relative w-full">
          <div className="absolute bg-gradient-to-b from-[rgba(168,85,247,0.2)] inset-[0_0_0.4px_0] opacity-20 to-[rgba(168,85,247,0)]" data-name="Gradient" />
          <Background />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function BorderCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start justify-center pb-[2.346px] pt-[2.34px] relative shrink-0" data-name="Border:css-transform">
      <div className="flex items-center justify-center relative shrink-0 size-[11.314px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="relative size-[8px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#a855f7] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-[255.657px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.343px] items-center relative w-full">
        <BorderCssTransform />
        <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(168,85,247,0.7)] tracking-[2.4px] uppercase w-[141.73px]">
          <p className="leading-[16px] whitespace-pre-wrap">Espada Leadership</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[40px]" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
        <div className="absolute bg-[#1e293b] inset-0 rounded-[2px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBackground} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[2px] shadow-[0px_0px_0px_1px_rgba(168,85,247,0.5),0px_0px_10px_0px_rgba(168,85,247,0.2)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] w-[64.13px]">
        <p className="leading-[20px] whitespace-pre-wrap">Primera</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[69px]">
        <p className="leading-[15px] whitespace-pre-wrap">Server Owner</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <Background1 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[40px]" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
        <div className="absolute bg-[#1e293b] inset-0 rounded-[2px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBackground1} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[2px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] w-[59.11px]">
        <p className="leading-[20px] whitespace-pre-wrap">Cuatro</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[28.45px]">
        <p className="leading-[15px] whitespace-pre-wrap">Admin</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <Background2 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[254px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Container20 />
        <Container24 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(15,11,20,0.8)] relative rounded-[2px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-end p-[25px] relative w-full">
          <Heading3 />
          <Container19 />
          <div className="absolute bg-[rgba(168,85,247,0.3)] bottom-px left-px top-px w-[4px]" data-name="Overlay" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Svg() {
  return <div className="shrink-0 size-[60px]" data-name="SVG" />;
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col h-[222px] items-start overflow-clip pb-[162px] pr-[242px] relative shrink-0 w-[302px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute content-stretch flex flex-col inset-px items-start opacity-20" data-name="Image">
      <ImageFill />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[1px] w-full">
          <p className="leading-[28px] whitespace-pre-wrap">Las Noches</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-full">
          <p className="leading-[19.5px] whitespace-pre-wrap">Enter the palace beneath the artificial moon.</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[8.167px] relative shrink-0 w-[7.817px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.81667 8.16667">
        <g id="Container">
          <path d={svgPaths.pccd8200} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[8px] relative w-full">
        <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[10px] tracking-[2px] uppercase w-[61.91px]">
          <p className="leading-[15px] whitespace-pre-wrap">Open Gate</p>
        </div>
        <Container30 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.6)] bottom-px content-stretch flex flex-col gap-[4px] items-start left-px pb-[20px] pt-[21px] px-[20px] right-px" data-name="Overlay+HorizontalBorder+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Heading4 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Border() {
  return (
    <div className="h-[224px] relative rounded-[2px] shrink-0 w-full" data-name="Border">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-px opacity-50" data-name="Background+Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[136.04%] left-0 max-w-none top-[-18.02%] w-full" src={imgBackgroundImage} />
            </div>
            <div className="absolute bg-white inset-0 mix-blend-saturation" />
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-[#05040a] inset-px to-[rgba(5,4,10,0)] via-1/2 via-[rgba(5,4,10,0.7)]" data-name="Gradient" />
        <Image />
        <OverlayHorizontalBorderOverlayBlur />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Aside() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[304px]" data-name="Aside">
      <BackgroundBorder />
      <OverlayBorderOverlayBlur />
      <Border />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-start py-[10.5px] relative shrink-0 w-[365.14px]" data-name="Container">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Cinzel:Black',sans-serif] font-black from-[#a855f7] h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] to-[#f3e8ff] tracking-[-1.5px] w-[365.14px]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[60px] whitespace-pre-wrap">Hollow HQ</p>
      </div>
      <div className="absolute bg-[#a855f7] bottom-[-8px] h-[4px] left-0 right-[66.67%]" data-name="Background" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[60px] items-center pb-px relative shadow-[0px_0px_15px_0px_rgba(168,85,247,0.25)] shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Cinzel:Black',sans-serif] font-black h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-white tracking-[-1.5px] w-[203.22px]">
        <p className="leading-[60px] whitespace-pre-wrap">{`Inside `}</p>
      </div>
      <Container32 />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pl-[18px] relative shrink-0 w-[672px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.3)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#94a3b8] text-[18px] tracking-[0.45px] w-[613.78px] whitespace-pre-wrap">
        <p className="mb-0">Mapping the void. Explore the server infrastructure designed for the evolution of</p>
        <p>souls.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute right-0 size-[101.333px] top-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.333 101.333">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p3a6ddd80} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <VerticalBorder />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[22.469px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4688 17.5">
        <g id="Container">
          <path d={svgPaths.p30fd2b00} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] p-px rounded-[2px] size-[48px] top-[24px]" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 16, 37) 0%, rgb(15, 11, 20) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_15px_0px_rgba(168,85,247,0.1)]" />
      <Container35 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[88px]" data-name="Heading 3">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.5px] w-[219.64px]">
        <p className="leading-[28px] whitespace-pre-wrap">7 Major Categories</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[120px]" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[39px] justify-center leading-[19.5px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[214.69px] whitespace-pre-wrap">
        <p className="mb-0">The pillars of our world, organizing the chaos</p>
        <p>of Hueco Mundo.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-[56.17px]">
        <p className="leading-[16px] whitespace-pre-wrap">Information</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[10px] w-[44.94px]">
        <p className="leading-[16px] whitespace-pre-wrap">READ-ONLY</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-[65.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">Social District</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#06b6d4] text-[10px] w-[27.06px]">
        <p className="leading-[16px] whitespace-pre-wrap">ACTIVE</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-[72.11px]">
        <p className="leading-[16px] whitespace-pre-wrap">Battle Grounds</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f87171] text-[10px] w-[15.48px]">
        <p className="leading-[16px] whitespace-pre-wrap">PVP</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative w-full">
          <Container44 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[24px] pt-[13px] right-[24px] top-[175px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container37 />
      <Container40 />
      <Container43 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[106.667px] right-[-16px] top-[-16px] w-[101.333px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.333 106.667">
        <g id="Container" opacity="0.03">
          <path d={svgPaths.p3ef60a00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(15,11,20,0.7)] border border-[rgba(168,85,247,0.15)] border-solid h-[299.5px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[277.33px_299.5px] right-0 top-0" data-name="Overlay+Border+OverlayBlur" style={{ maskImage: `url('${imgOverlayBorderOverlayBlur}')` }}>
      <BackgroundBorderShadow />
      <Heading5 />
      <Container36 />
      <HorizontalBorder4 />
      <div className="absolute inset-0 opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(168, 85, 247, 0) 100%)" }} />
      <div className="absolute bottom-[calc(99.67%+0.99px)] opacity-60 right-[10px] top-[calc(-99%-2.98px)] w-px" data-name="Vertical Divider">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider} />
      </div>
      <Container46 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute h-[299.5px] left-0 right-[602.67px] top-0" data-name="Mask Group">
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bottom-[20.62%] opacity-3 right-[-23.8px] top-[23.29%]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pt-[8px] relative">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[160px] justify-center leading-[0] not-italic relative shrink-0 text-[160px] text-white w-[160.818px]">
          <p className="leading-[160px] whitespace-pre-wrap">chat_bubble</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p1c46a100} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-px rounded-[2px] size-[48px] top-0" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 16, 37) 0%, rgb(15, 11, 20) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_15px_0px_rgba(168,85,247,0.1)]" />
      <Container50 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[64px]" data-name="Heading 3">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.5px] w-[200.11px]">
        <p className="leading-[28px] whitespace-pre-wrap">40 Text Channels</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[99.38px]" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[46px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[319.59px] whitespace-pre-wrap">
        <p className="mb-0">A massive network of communication nodes. From anime</p>
        <p>discussions to the darkest memes of the void.</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p726a700} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] tracking-[0.6px] uppercase w-[33.23px]">
          <p className="leading-[16px] whitespace-pre-wrap">Anime</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-[#15101a] content-stretch flex gap-[7.99px] items-center left-0 p-[9px] right-[170.23px] rounded-[2px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[8.167px] relative shrink-0 w-[11.649px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6492 8.16667">
        <g id="Container">
          <path d={svgPaths.p2d33000} fill="var(--fill-0, #06B6D4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] tracking-[0.6px] uppercase w-[36.73px]">
          <p className="leading-[16px] whitespace-pre-wrap">Games</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-[#15101a] content-stretch flex gap-[7.99px] items-center left-[170.22px] p-[9px] right-0 rounded-[2px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[10.704px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 10.7042">
        <g id="Container">
          <path d={svgPaths.p22180e58} fill="var(--fill-0, #EC4899)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] tracking-[0.6px] uppercase w-[27.19px]">
          <p className="leading-[16px] whitespace-pre-wrap">Chat</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="absolute bg-[#15101a] content-stretch flex gap-[7.99px] items-center left-0 p-[9px] right-[170.23px] rounded-[2px] top-[50px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1df4ae00} fill="var(--fill-0, #EAB308)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] tracking-[0.6px] uppercase w-[38px]">
          <p className="leading-[16px] whitespace-pre-wrap">Memes</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="absolute bg-[#15101a] content-stretch flex gap-[7.99px] items-center left-[170.22px] p-[9px] right-0 rounded-[2px] top-[50px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bottom-[0.5px] h-[88px] left-0 right-0" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
      <BackgroundBorder6 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative self-stretch shrink-0 w-[328.45px]" data-name="Container">
      <BackgroundBorderShadow1 />
      <Heading6 />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[10px] w-full">
        <p className="leading-[15px] whitespace-pre-wrap">LIVE FEED // #general-chat</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-[142.22px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <Container61 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1a1025] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[30px] justify-center leading-[15px] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[85.36px] whitespace-pre-wrap">
          <p className="mb-0">Has anyone seen the</p>
          <p>new episode?</p>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-[142.22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <div className="bg-[#334155] rounded-[4px] shrink-0 size-[24px]" data-name="Background" />
        <Background3 />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#1a1025] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[30px] justify-center leading-[15px] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[80.2px] whitespace-pre-wrap">
          <p className="mb-0">Grimmjow is looking</p>
          <p>insane this arc.</p>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-[142.22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <div className="bg-[rgba(168,85,247,0.2)] rounded-[4px] shrink-0 size-[24px]" data-name="Overlay" />
        <Background4 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#1a1025] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[83.61px]">
          <p className="leading-[15px] whitespace-pre-wrap">Ranked match later?</p>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-[142.22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <div className="bg-[rgba(6,182,212,0.2)] rounded-[4px] shrink-0 size-[24px]" data-name="Overlay" />
        <Background5 />
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#05040a] relative rounded-[2px] self-stretch shrink-0 w-[176.22px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[17px] relative rounded-[inherit] size-full">
        <Margin />
        <Container62 />
        <Container63 />
        <Container64 />
        <div className="absolute bg-gradient-to-t bottom-[1.5px] from-[#05040a] h-[32px] left-px right-px to-[rgba(5,4,10,0)]" data-name="Gradient" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[528.67px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Container49 />
        <BackgroundBorder7 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(15,11,20,0.7)] content-stretch flex flex-col items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[578.67px_299.5px] p-[25px] right-0 top-0" data-name="Overlay+Border+OverlayBlur" style={{ maskImage: `url('${imgOverlayBorderOverlayBlur1}')` }}>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="absolute inset-[1px_1px_1.5px_1px] opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(139.79deg, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(168, 85, 247, 0) 100%)" }} />
      <div className="absolute bottom-[99.67%] opacity-60 right-[11px] top-[-99%] w-px" data-name="Vertical Divider">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider1} />
      </div>
      <div className="absolute inset-[1px_0.17%_1.5px_66.61%]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(-90deg, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0) 100%)" }} />
      <Container47 />
      <Container48 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute h-[299.5px] left-[301.33px] right-0 top-0" data-name="Mask Group">
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[23.75px] relative shrink-0 w-[17.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 23.75">
        <g id="Container">
          <path d={svgPaths.p794f100} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] p-px rounded-[2px] size-[48px] top-[24px]" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 16, 37) 0%, rgb(15, 11, 20) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_15px_0px_rgba(168,85,247,0.1)]" />
      <Container65 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[88px]" data-name="Heading 3">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.5px] w-[206.16px]">
        <p className="leading-[28px] whitespace-pre-wrap">12 Voice Channels</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[120px]" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[39px] justify-center leading-[19.5px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[220.17px] whitespace-pre-wrap">
        <p className="mb-0">High-quality audio streams for gaming, music,</p>
        <p>and chilling.</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[10.208px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.2083">
        <g id="Container">
          <path d={svgPaths.p3b1dd000} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-[49.47px]">
        <p className="leading-[16px] whitespace-pre-wrap">Lounge - 1</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] h-[6px] min-h-px min-w-[6px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[129.844px] relative size-full">
          <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[6px] relative w-full">
          <Container69 />
          <Container70 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[10.208px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.2083">
        <g id="Container">
          <path d={svgPaths.p3b1dd000} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-[65.09px]">
        <p className="leading-[16px] whitespace-pre-wrap">Gaming - FPS</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] w-[17.23px]">
        <p className="leading-[15px] whitespace-pre-wrap">3/10</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[17.229999542236328px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[102.984px] relative w-full">
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[6px] relative w-full">
          <Container72 />
          <Container73 />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10.5">
        <g id="Container">
          <path d={svgPaths.p2641fb00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-[51.36px]">
        <p className="leading-[16px] whitespace-pre-wrap">Music 24/7</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[2px] h-[8px] items-end relative shrink-0" data-name="Container">
      <div className="bg-[#a855f7] h-full shrink-0 w-[2px]" data-name="Vertical Divider" />
      <div className="bg-[#a855f7] h-[5.33px] shrink-0 w-[2px]" data-name="Vertical Divider" />
      <div className="bg-[#a855f7] h-[4px] shrink-0 w-[2px]" data-name="Background" />
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] h-[8px] min-h-px min-w-[10px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[123.953px] relative size-full">
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[6px] relative w-full">
          <Container76 />
          <Container77 />
          <Margin3 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] right-[24px] top-[175px]" data-name="Container">
      <Container68 />
      <Container71 />
      <Container75 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[106.667px] right-[-16px] top-[-16px] w-[96px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 106.667">
        <g id="Container" opacity="0.03">
          <path d={svgPaths.p398e0600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(15,11,20,0.7)] border border-[rgba(168,85,247,0.15)] border-solid h-[313px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[277.33px_313px] right-0 top-0" data-name="Overlay+Border+OverlayBlur" style={{ maskImage: `url('${imgOverlayBorderOverlayBlur2}')` }}>
      <BackgroundBorderShadow2 />
      <Heading7 />
      <Container66 />
      <Container67 />
      <div className="absolute inset-0 opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(168, 85, 247, 0) 100%)" }} />
      <div className="absolute bottom-[calc(99.68%+0.99px)] opacity-60 right-[10px] top-[calc(-99.04%-2.98px)] w-px" data-name="Vertical Divider">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider2} />
      </div>
      <Container79 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute h-[313px] left-0 right-[602.67px] top-[323.5px]" data-name="Mask Group">
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-[27.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 24.375">
        <g id="Container">
          <path d={svgPaths.p66e5100} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] p-px rounded-[2px] size-[48px] top-[24px]" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 16, 37) 0%, rgb(15, 11, 20) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_15px_0px_rgba(168,85,247,0.1)]" />
      <Container80 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[88px]" data-name="Heading 3">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.5px] w-[188.25px]">
        <p className="leading-[28px] whitespace-pre-wrap">Roleplay Sector</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[120px]" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[39px] justify-center leading-[19.5px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[225.53px] whitespace-pre-wrap">
        <p className="mb-0">Immersive text-based RP with custom Arrancar</p>
        <p>mechanics.</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(168,85,247,0.05)] content-stretch flex flex-col items-start px-[9px] py-[5px] relative self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[10px] tracking-[0.5px] uppercase w-[17.8px]">
        <p className="leading-[15px] whitespace-pre-wrap">OCs</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(31,45,51,0.5)] content-stretch flex flex-col items-start px-[9px] py-[5px] relative self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#1f2d33] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[30.38px]">
        <p className="leading-[15px] whitespace-pre-wrap">Canon</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute bottom-[111px] content-stretch flex gap-[8px] items-start left-[24px] right-[24px]" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
    </div>
  );
}

function OverlayBorderOverlayBlur4() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(15,11,20,0.7)] border border-[rgba(168,85,247,0.15)] border-solid h-[313px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[277.33px_313px] right-0 top-0" data-name="Overlay+Border+OverlayBlur" style={{ maskImage: `url('${imgOverlayBorderOverlayBlur2}')` }}>
      <BackgroundBorderShadow3 />
      <Heading8 />
      <Container81 />
      <Container82 />
      <div className="absolute inset-0 opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(168, 85, 247, 0) 100%)" }} />
      <div className="absolute bottom-[calc(99.68%+0.99px)] opacity-60 right-[10px] top-[calc(-99.04%-2.98px)] w-px" data-name="Vertical Divider">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider2} />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute h-[313px] left-[301.33px] right-[301.34px] top-[323.5px]" data-name="Mask Group">
      <OverlayBorderOverlayBlur4 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[23.75px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23.75">
        <g id="Container">
          <path d={svgPaths.p3d05bc98} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] p-px rounded-[2px] size-[48px] top-[24px]" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 16, 37) 0%, rgb(15, 11, 20) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_15px_0px_rgba(168,85,247,0.1)]" />
      <Container83 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[88px]" data-name="Heading 3">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.5px] w-[139.75px]">
        <p className="leading-[28px] whitespace-pre-wrap">Spirit Drops</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[120px]" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[39px] justify-center leading-[19.5px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[196.59px] whitespace-pre-wrap">
        <p className="mb-0">Monthly Nitro and merchandise drops for</p>
        <p>active Arrancars.</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(168,85,247,0.05)] content-stretch flex flex-col items-start px-[9px] py-[5px] relative self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[10px] tracking-[0.5px] uppercase w-[26.45px]">
        <p className="leading-[15px] whitespace-pre-wrap">Nitro</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(31,45,51,0.5)] content-stretch flex flex-col items-start px-[9px] py-[5px] relative self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#1f2d33] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[30.73px]">
        <p className="leading-[15px] whitespace-pre-wrap">Merch</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute bottom-[111px] content-stretch flex gap-[8px] items-start left-[24px] right-[24px]" data-name="Container">
      <OverlayBorder2 />
      <OverlayBorder3 />
    </div>
  );
}

function OverlayBorderOverlayBlur5() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(15,11,20,0.7)] border border-[rgba(168,85,247,0.15)] border-solid h-[313px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[277.34px_313px] right-0 top-0" data-name="Overlay+Border+OverlayBlur" style={{ maskImage: `url('${imgOverlayBorderOverlayBlur3}')` }}>
      <BackgroundBorderShadow4 />
      <Heading9 />
      <Container84 />
      <Container85 />
      <div className="absolute inset-0 opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(168, 85, 247, 0) 100%)" }} />
      <div className="absolute bottom-[calc(99.68%+0.99px)] opacity-60 right-[10px] top-[calc(-99.04%-2.98px)] w-px" data-name="Vertical Divider">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider2} />
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute h-[313px] left-[602.66px] right-0 top-[323.5px]" data-name="Mask Group">
      <OverlayBorderOverlayBlur5 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[25px] relative shrink-0 w-[12.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 25">
        <g id="Container">
          <path d={svgPaths.p17e92b00} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] p-px rounded-[2px] size-[48px] top-[24px]" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 16, 37) 0%, rgb(15, 11, 20) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_15px_0px_rgba(168,85,247,0.1)]" />
      <Container86 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[88px]" data-name="Heading 3">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.5px] w-[132.19px]">
        <p className="leading-[28px] whitespace-pre-wrap">Ranked PvP</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[120px]" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[39px] justify-center leading-[19.5px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[222.56px] whitespace-pre-wrap">
        <p className="mb-0">Level up your reiatsu to earn Espada numbers</p>
        <p>1-10.</p>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(168,85,247,0.05)] content-stretch flex flex-col items-start px-[9px] py-[5px] relative self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[10px] tracking-[0.5px] uppercase w-[41.75px]">
        <p className="leading-[15px] whitespace-pre-wrap">Leveling</p>
      </div>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(31,45,51,0.5)] content-stretch flex flex-col items-start px-[9px] py-[5px] relative self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#1f2d33] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[28.31px]">
        <p className="leading-[15px] whitespace-pre-wrap">Roles</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex gap-[8px] items-start left-[24px] right-[24px]" data-name="Container">
      <OverlayBorder4 />
      <OverlayBorder5 />
    </div>
  );
}

function OverlayBorderOverlayBlur6() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(15,11,20,0.7)] border border-[rgba(168,85,247,0.15)] border-solid h-[226px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[277.33px_226px] right-0 top-0" data-name="Overlay+Border+OverlayBlur" style={{ maskImage: `url('${imgOverlayBorderOverlayBlur4}')` }}>
      <BackgroundBorderShadow5 />
      <Heading10 />
      <Container87 />
      <Container88 />
      <div className="absolute inset-0 opacity-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(168, 85, 247, 0) 100%)" }} />
      <div className="absolute bottom-[calc(99.56%+0.99px)] opacity-60 right-[10px] top-[calc(-98.67%-2.97px)] w-px" data-name="Vertical Divider">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider3} />
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute h-[226px] left-0 right-[602.67px] top-[660.5px]" data-name="Mask Group">
      <OverlayBorderOverlayBlur6 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[886.5px] relative shrink-0 w-full" data-name="Container">
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <MaskGroup3 />
      <MaskGroup4 />
      <MaskGroup5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Cinzel:Bold',sans-serif] font-bold h-[72px] justify-center leading-[36px] relative shrink-0 text-[30px] text-white tracking-[0.75px] uppercase w-[263.48px] whitespace-pre-wrap">
        <p className="mb-0">Unleash your</p>
        <p className="text-[#a855f7]">Resurrección</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-[475.38px]">
        <p className="leading-[24px] whitespace-pre-wrap">Join the ranks of the Arrancar army. The throne of Las Noches sits empty.</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative">
        <Heading1 />
        <Container90 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#0a0f12] text-[14px] text-center tracking-[1.4px] uppercase w-[51.97px] whitespace-pre-wrap">
        <p className="mb-0">Join</p>
        <p>Server</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#a855f7] content-stretch flex flex-col h-[48px] items-center justify-center overflow-clip pl-[46.31px] pr-[46.33px] relative shadow-[0px_0px_20px_0px_rgba(168,85,247,0.4)] shrink-0" data-name="Button">
      <Container92 />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip pl-[30.98px] pr-[30.97px] py-px relative rounded-[inherit]">
        <div className="flex flex-col font-['Rajdhani:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1.4px] uppercase w-[43.05px]">
          <p className="leading-[20px] whitespace-pre-wrap">Rules</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-gradient-to-r from-[#1a1025] relative rounded-[2px] shrink-0 to-[#05040a] w-full" data-name="Background+Border">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pb-[41px] pt-[49px] px-[41px] relative w-full">
          <div className="absolute bg-gradient-to-l bottom-px from-[rgba(168,85,247,0.1)] right-px to-[rgba(168,85,247,0)] top-[9px] via-1/2 via-[rgba(168,85,247,0.05)] w-[384px]" data-name="Gradient" />
          <div className="absolute inset-[9px_1px_1px_1px] opacity-10" data-name="Gradient" style={{ backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 1.3317%, rgb(168, 85, 247) 1.3317%, rgb(168, 85, 247) 1.4648%)" }} />
          <Container89 />
          <Container91 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative self-stretch shrink-0 w-[880px]" data-name="Section">
      <Container31 />
      <Container34 />
      <BackgroundBorder8 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full z-[3]" data-name="Main">
      <div className="content-stretch flex gap-[32px] items-start max-w-[inherit] p-[32px] relative w-full">
        <Aside />
        <Section />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p13de0d80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Rajdhani:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[1.2px] uppercase w-[371.56px]">
        <p className="leading-[16px] whitespace-pre-wrap">2023 Hollow HQ. Not affiliated with Tite Kubo or Pierrot.</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container95 />
      <Container96 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p31649c00} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1167b760} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.pf778600} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container93() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[40px] relative w-full">
          <Container94 />
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#05040a] relative shrink-0 w-full z-[2]" data-name="Footer">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[32px] pt-[33px] relative rounded-[inherit] w-full">
        <Container93 />
        <div className="absolute bg-gradient-to-r from-[rgba(168,85,247,0)] h-px left-1/4 right-1/4 to-[rgba(168,85,247,0)] top-px via-1/2 via-[rgba(168,85,247,0.5)]" data-name="Horizontal Divider" />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.2)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute inset-0 z-[1]" data-name="Container">
      <div className="absolute blur-[20px] h-[1523px] left-0 top-0 w-[1280px]" data-name="Gradient+Blur" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1523\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(99.473 0 0 99.473 640 761.5)\\'><stop stop-color=\\'rgba(126,34,206,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(126,34,206,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>\')" }} />
      <div className="absolute flex items-center justify-center left-[20.12px] size-[135.765px] top-[60.12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] border-solid opacity-20 size-[96px]" data-name="Overlay+Border" />
        </div>
      </div>
      <div className="absolute bottom-[146.74px] flex items-center justify-center right-[66.75px] size-[90.51px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] border-solid opacity-10 size-[64px]" data-name="Overlay+Border" />
        </div>
      </div>
      <div className="absolute bg-[#06b6d4] left-[192px] opacity-0 rounded-[9999px] size-[6px] top-[1370.69px]" data-name="Background" />
      <div className="absolute bg-[#a855f7] left-[448px] opacity-0 rounded-[9999px] size-[4px] top-[1294.55px]" data-name="Background" />
      <div className="absolute bg-[#06b6d4] left-[832px] opacity-0 rounded-[9999px] size-[6px] top-[1446.84px]" data-name="Background" />
      <div className="absolute bg-white left-[704px] opacity-0 rounded-[9999px] size-[4px] top-[1218.39px]" data-name="Background" />
      <div className="absolute bg-[rgba(168,85,247,0.4)] left-[1024px] opacity-0 rounded-[9999px] size-[8px] top-[1340.23px]" data-name="Overlay" />
    </div>
  );
}

export default function ServerFeaturesLore() {
  return (
    <div className="bg-[#05040a] content-stretch flex flex-col isolate items-start relative size-full" data-name="Server Features & Lore">
      <Header />
      <Main />
      <Footer />
      <Container98 />
    </div>
  );
}