import svgPaths from "./svg-8rzah5ub0f";

function Container1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div className="absolute inset-[-37.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g id="Container">
            <g filter="url(#filter0_f_1_1469)" id="Overlay+Blur">
              <rect fill="var(--fill-0, #0DCCF2)" fillOpacity="0.2" height="32" rx="16" width="32" x="12" y="12" />
            </g>
            <path d={svgPaths.p113e6d20} fill="var(--fill-0, #0DCCF2)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_f_1_1469" width="56" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_1469" stdDeviation="6" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase w-[101.84px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[28px]">Hollow</span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[28px] text-[#0dccf2]">HQ</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container1 />
        <Heading1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] tracking-[1.4px] uppercase w-[93.95px]">
        <p className="leading-[20px] whitespace-pre-wrap">Dashboard</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shadow-[0px_2px_0px_0px_#0dccf2] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-[46.84px]">
        <p className="leading-[20px] whitespace-pre-wrap">Stats</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] tracking-[1.4px] uppercase w-[111.28px]">
        <p className="leading-[20px] whitespace-pre-wrap">Leaderboard</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] tracking-[1.4px] uppercase w-[82.91px]">
        <p className="leading-[20px] whitespace-pre-wrap">Artifacts</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0dccf2] text-[12px] w-[93.63px]">
          <p className="leading-[16px] whitespace-pre-wrap">SYSTEM ONLINE</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(13,204,242,0.05)] content-stretch flex gap-[8px] items-center px-[13px] py-[5px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0dccf2] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[24px] relative rounded-[2px] shadow-[0px_0px_15px_0px_rgba(13,204,242,0.4)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#050505] text-[14px] text-center tracking-[1.4px] uppercase w-[99.97px]">
        <p className="leading-[20px] whitespace-pre-wrap">Join Server</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <OverlayBorder />
        <Button />
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(5,5,5,0.8)] relative shrink-0 w-full z-[6]" data-name="Header - Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(13,204,242,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pl-[48px] pr-[48.02px] pt-[16px] relative w-full">
          <Container />
          <Nav />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Container">
          <path d={svgPaths.p1aebff60} fill="var(--fill-0, #0DCCF2)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(13,204,242,0.6)] tracking-[2.4px] uppercase w-[220.83px]">
        <p className="leading-[16px] whitespace-pre-wrap">Hueco Mundo // Sector 4</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-white tracking-[-3px] uppercase w-[551.41px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[60px]">{`Server `}</span>
          <span className="bg-clip-text bg-gradient-to-r font-['Space_Grotesk:Bold',sans-serif] font-bold from-[#0dccf2] leading-[60px] to-[#7c3aed]" style={{ WebkitTextFillColor: "transparent" }}>
            Diagnostics
          </span>
        </p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] pl-[18px] relative shrink-0 w-[512px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(13,204,242,0.5)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[48px] justify-center leading-[24px] relative shrink-0 text-[#9ca3af] text-[16px] w-[449px] whitespace-pre-wrap">
        <p className="mb-0">Real-time spiritual pressure monitoring and community</p>
        <p>statistics. Analyzed via Soul Reaper surveillance networks.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container5 />
      <Heading />
      <VerticalBorder />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-right tracking-[1.2px] uppercase w-[75.63px]">
        <p className="leading-[16px] whitespace-pre-wrap">Last Scan</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0dccf2] text-[18px] text-right w-[172.83px]">
        <p className="leading-[28px] whitespace-pre-wrap">T-MINUS 00:00:02</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p3e942640} fill="var(--fill-0, #0DCCF2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(13,204,242,0.05)] content-stretch flex items-center justify-center p-px relative shrink-0 size-[40px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.3)] border-solid inset-0 pointer-events-none" />
      <Container12 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-end relative shrink-0" data-name="Container">
      <Container9 />
      <OverlayBorder1 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container4 />
      <Container8 />
    </div>
  );
}

function HeaderSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Header Section:margin">
      <HeaderSection />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[1.2px] uppercase w-[142.72px]">
        <p className="leading-[16px] whitespace-pre-wrap">Population Density</p>
      </div>
      <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, #0DCCF2)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[48px] justify-center relative shrink-0 text-[48px] text-shadow-[0px_0px_10px_rgba(13,204,242,0.5)] text-white w-[76.33px]">
        <p className="leading-[48px] whitespace-pre-wrap">127</p>
      </div>
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium h-[20px] justify-center relative shrink-0 text-[#0dccf2] text-[14px] w-[43.47px]">
        <p className="leading-[20px] whitespace-pre-wrap">SOULS</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] w-[46.13px]">
        <p className="leading-[16px] whitespace-pre-wrap">Humans</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white w-[20.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">100</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1f2937] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#0dccf2] inset-[0_22%_0_0] shadow-[0px_0px_10px_0px_#0dccf2]" data-name="Background+Shadow" />
    </div>
  );
}

function ProgressBarForHumans() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Progress Bar for Humans">
      <Container14 />
      <Background />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] w-[95.94px]">
        <p className="leading-[16px] whitespace-pre-wrap">Automata (Bots)</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white w-[13.92px]">
        <p className="leading-[16px] whitespace-pre-wrap">27</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1f2937] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#7c3aed] inset-[0_78%_0_0] shadow-[0px_0px_10px_0px_#7c3aed]" data-name="Background+Shadow" />
    </div>
  );
}

function ProgressBarForBots() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Progress Bar for Bots">
      <Container17 />
      <Background1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <ProgressBarForHumans />
        <ProgressBarForBots />
      </div>
    </div>
  );
}

function Card1TotalMembers() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(16,16,20,0.6)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Card 1: Total Members">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(13,204,242,0.05)]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin />
        <Margin1 />
        <Container13 />
        <div className="absolute left-px size-[10px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#0dccf2] border-l-2 border-solid border-t-2 inset-0 pointer-events-none" />
        </div>
        <div className="absolute bottom-px right-px size-[10px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#0dccf2] border-b-2 border-r-2 border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[1.2px] uppercase w-[115.38px]">
        <p className="leading-[16px] whitespace-pre-wrap">Comm Channels</p>
      </div>
      <div className="h-[23px] relative shrink-0 w-[24px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
          <path d={svgPaths.p80d2080} fill="var(--fill-0, #0DCCF2)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[48px] justify-center relative shrink-0 text-[48px] text-shadow-[0px_0px_10px_rgba(13,204,242,0.5)] text-white w-[51.17px]">
        <p className="leading-[48px] whitespace-pre-wrap">61</p>
      </div>
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium h-[20px] justify-center relative shrink-0 text-[#0dccf2] text-[14px] w-[44.11px]">
        <p className="leading-[20px] whitespace-pre-wrap">NODES</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative w-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[54px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[25.69px]">
          <p className="leading-[28px] whitespace-pre-wrap">40</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(13,204,242,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[9px] relative size-full">
          <Container21 />
          <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center uppercase w-[23.78px]">
            <p className="leading-[15px] whitespace-pre-wrap">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[54px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[20.92px]">
          <p className="leading-[28px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(13,204,242,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[9px] relative size-full">
          <Container22 />
          <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center uppercase w-[27.22px]">
            <p className="leading-[15px] whitespace-pre-wrap">Voice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[54px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[24.84px]">
          <p className="leading-[28px] whitespace-pre-wrap">02</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(124,58,237,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(124,58,237,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[9px] relative size-full">
          <Container23 />
          <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center uppercase w-[51.63px]">
            <p className="leading-[15px] whitespace-pre-wrap">Announce</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative w-full">
        <OverlayBorder2 />
        <OverlayBorder3 />
        <OverlayBorder4 />
      </div>
    </div>
  );
}

function Card2Channels() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(16,16,20,0.6)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Card 2: Channels">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(13,204,242,0.05)]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin2 />
        <Margin3 />
        <Container20 />
        <div className="absolute left-px size-[10px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#0dccf2] border-l-2 border-solid border-t-2 inset-0 pointer-events-none" />
        </div>
        <div className="absolute bottom-px right-px size-[10px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#0dccf2] border-b-2 border-r-2 border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[1.2px] uppercase w-[71.23px]">
        <p className="leading-[16px] whitespace-pre-wrap">Artifacts</p>
      </div>
      <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <path d={svgPaths.p15d4d600} fill="var(--fill-0, #0DCCF2)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p270fea00} fill="var(--fill-0, #0DCCF2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(13,204,242,0.1)] content-stretch flex items-center justify-center p-px relative rounded-[2px] shrink-0 size-[48px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[29px]">
        <p className="leading-[32px] whitespace-pre-wrap">29</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container28 />
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-[109.69px]">
        <p className="leading-[16px] whitespace-pre-wrap">{`Stickers & Emojis`}</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder5 />
      <Container27 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p15aec574} fill="var(--fill-0, #7C3AED)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(124,58,237,0.1)] content-stretch flex items-center justify-center p-px relative rounded-[2px] shrink-0 size-[48px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(124,58,237,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[30.39px]">
        <p className="leading-[32px] whitespace-pre-wrap">60</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container32 />
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-[94.97px]">
        <p className="leading-[16px] whitespace-pre-wrap">Roles Assigned</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder6 />
      <Container31 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <div className="bg-gradient-to-r from-[rgba(55,65,81,0)] h-px shrink-0 to-[rgba(55,65,81,0)] via-1/2 via-[#374151] w-full" data-name="Horizontal Divider" />
      <Container29 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative w-full">
        <Container24 />
      </div>
    </div>
  );
}

function Card3Artifacts() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(16,16,20,0.6)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Card 3: Artifacts">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(13,204,242,0.05)]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin4 />
        <Margin5 />
        <div className="absolute left-px size-[10px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#0dccf2] border-l-2 border-solid border-t-2 inset-0 pointer-events-none" />
        </div>
        <div className="absolute bottom-px right-px size-[10px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#0dccf2] border-b-2 border-r-2 border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[1.2px] uppercase w-[108.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">Energy Output</p>
      </div>
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, #7C3AED)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-[232px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[30px] text-center text-white w-[73.5px]">
          <p className="leading-[36px] whitespace-pre-wrap">LVL 2</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="bg-[rgba(124,58,237,0.05)] content-stretch flex items-center justify-center px-[4px] py-[30px] relative rounded-[9999px] shrink-0 w-[96px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border-4 border-[rgba(124,58,237,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container34 />
      <div className="absolute inset-[4px] rounded-[9999px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-4 border-[#7c3aed] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#0dccf2] text-[14px] text-center tracking-[0.35px] uppercase w-[153.92px]">
        <p className="leading-[20px] whitespace-pre-wrap">Server Boost Active</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder7 />
      <Container35 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="flex-[1_0_0] min-h-[132px] min-w-px relative w-[232px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center min-h-[inherit] py-[2.5px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Card4BoostLevel() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(16,16,20,0.6)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Card 4: Boost Level">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
          <div className="absolute left-px size-[10px] top-px" data-name="Border">
            <div aria-hidden="true" className="absolute border-[#0dccf2] border-l-2 border-solid border-t-2 inset-0 pointer-events-none" />
          </div>
          <div className="absolute bg-[rgba(124,58,237,0.2)] blur-[20px] right-[-23px] rounded-[9999px] size-[128px] top-[-23px]" data-name="Decorative background glow" />
          <div className="absolute bottom-px right-px size-[10px]" data-name="Border">
            <div aria-hidden="true" className="absolute border-[#0dccf2] border-b-2 border-r-2 border-solid inset-0 pointer-events-none" />
          </div>
          <Margin6 />
          <Margin7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(13,204,242,0.05)]" />
    </div>
  );
}

function DashboardGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Dashboard Grid">
      <Card1TotalMembers />
      <Card2Channels />
      <Card3Artifacts />
      <Card4BoostLevel />
    </div>
  );
}

function DashboardGridMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Dashboard Grid:margin">
      <DashboardGrid />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p22876fc0} fill="var(--fill-0, #0DCCF2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container38 />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[1.8px] uppercase w-[167.02px]">
        <p className="leading-[28px] whitespace-pre-wrap">Community Age</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] w-[250.14px]">
        <p className="leading-[20px] whitespace-pre-wrap">Operational duration since inception.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#0dccf2] text-[24px] text-right w-[100.83px]">
        <p className="leading-[32px] whitespace-pre-wrap">1YR 6MO</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container40 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0 w-[742px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative w-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] uppercase w-[36.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">Start</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-center left-[-18.01px] top-0" data-name="Container">
      <div className="bg-[#1f2937] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white uppercase w-[57.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">6 Months</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-center left-[230.53px] top-0" data-name="Container">
      <div className="bg-[#0dccf2] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Border+Shadow">
        <div aria-hidden="true" className="absolute border border-[#0dccf2] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_10px_0px_#0dccf2]" />
      </div>
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white uppercase w-[43.22px]">
        <p className="leading-[16px] whitespace-pre-wrap">1 Year</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-center left-[482.66px] top-0" data-name="Container">
      <div className="bg-[#0dccf2] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Border+Shadow">
        <div aria-hidden="true" className="absolute border border-[#0dccf2] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_10px_0px_#0dccf2]" />
      </div>
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0dccf2] text-[12px] uppercase w-[21.6px]">
        <p className="leading-[16px] whitespace-pre-wrap">Now</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-center left-[731.2px] top-0" data-name="Container">
      <div className="bg-[#050505] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-[#7c3aed] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <Container48 />
    </div>
  );
}

function Nodes() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Nodes">
      <Container41 />
      <Container43 />
      <Container45 />
      <Container47 />
    </div>
  );
}

function CustomTimelineVisual() {
  return (
    <div className="h-[64px] relative shrink-0 w-[742px]" data-name="Custom Timeline Visual">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="-translate-y-1/2 absolute bg-[#1f2937] h-[2px] left-0 right-0 top-1/2" data-name="Line" />
        <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[rgba(13,204,242,0.2)] h-[2px] left-0 right-1/4 shadow-[0px_0px_10px_0px_#0dccf2] to-[#7c3aed] top-1/2 via-1/2 via-[#0dccf2]" data-name="Active Line" />
        <Nodes />
      </div>
    </div>
  );
}

function TimelineCard() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(16,16,20,0.6)] content-stretch flex flex-col items-start justify-center p-[25px] relative self-stretch shrink-0 w-[792px]" data-name="Timeline Card">
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(13,204,242,0.05)]" />
      <Margin8 />
      <div className="absolute left-px size-[10px] top-px" data-name="Border">
        <div aria-hidden="true" className="absolute border-[#0dccf2] border-l-2 border-solid border-t-2 inset-0 pointer-events-none" />
      </div>
      <CustomTimelineVisual />
      <div className="absolute bottom-px right-px size-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[#0dccf2] border-b-2 border-r-2 border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Recent Transmissions</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative w-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[13.667px] relative shrink-0 w-[11.667px]" data-name="Margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.6667">
        <g id="Margin">
          <path d={svgPaths.p3b56fec0} fill="var(--fill-0, #0DCCF2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[57.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">10:42 AM</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[221.56px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[20px]">{`User `}</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#0dccf2]">@Grimmjow</span>
          <span className="leading-[20px]">{` joined #general`}</span>
        </p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(13,204,242,0.2)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[12px] items-start pb-[8px] pl-[14px] relative w-full">
        <Margin9 />
        <Container50 />
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="h-[13.708px] relative shrink-0 w-[11.694px]" data-name="Margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6939 13.7078">
        <g id="Margin">
          <path d={svgPaths.p3d036200} fill="var(--fill-0, #7C3AED)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[57.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">09:15 AM</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[172.26px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[20px]">{`Server boosted to `}</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#7c3aed]">Level 2</span>
        </p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(124,58,237,0.2)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[12px] items-start pb-[8px] pl-[14px] relative w-full">
        <Margin10 />
        <Container53 />
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="h-[11.333px] relative shrink-0 w-[12.833px]" data-name="Margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.3333">
        <g id="Margin">
          <path d={svgPaths.p32b84000} fill="var(--fill-0, #0DCCF2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[57.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">08:30 AM</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[171.11px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[20px]">{`New Soul `}</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#0dccf2]">@Ichigo</span>
          <span className="leading-[20px]">{` arrived`}</span>
        </p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(13,204,242,0.2)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[12px] items-start pl-[14px] relative w-full">
        <Margin11 />
        <Container56 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <VerticalBorder1 />
        <VerticalBorder2 />
        <VerticalBorder3 />
      </div>
    </div>
  );
}

function MiniStatusCard() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(16,16,20,0.6)] relative self-stretch shrink-0 w-[384px]" data-name="Mini Status Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[25px] relative rounded-[inherit] size-full">
        <Heading3Margin />
        <div className="absolute left-px size-[10px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#0dccf2] border-l-2 border-solid border-t-2 inset-0 pointer-events-none" />
        </div>
        <div className="absolute bottom-px right-px size-[10px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-[#0dccf2] border-b-2 border-r-2 border-solid inset-0 pointer-events-none" />
        </div>
        <Container49 />
        <div className="absolute bg-gradient-to-t bottom-px from-[#050505] h-[48px] left-px right-px to-[rgba(5,5,5,0)]" data-name="Decorative gradient at bottom" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,204,242,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(13,204,242,0.05)]" />
    </div>
  );
}

function BottomSectionTimelineRecentActivity() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Bottom Section: Timeline & Recent Activity">
      <TimelineCard />
      <MiniStatusCard />
    </div>
  );
}

function MainContent() {
  return (
    <div className="max-w-[1600px] relative shrink-0 w-full z-[5]" data-name="Main Content">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[208px] pt-[40px] px-[40px] relative w-full">
        <HeaderSectionMargin />
        <DashboardGridMargin />
        <BottomSectionTimelineRecentActivity />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex flex-col items-start right-[24px] z-[3]" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] w-[168.03px]">
        <p className="leading-[15px] whitespace-pre-wrap">SYS.VER.4.0.2 // HUECO_MUNDO</p>
      </div>
    </div>
  );
}

export default function HollowHqStatsDashboard() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="Hollow HQ Stats Dashboard" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1024\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(141.36 0 0 141.36 128 204.8)\\'><stop stop-color=\\'rgba(124,58,237,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(124,58,237,0)\\' offset=\\'0.4\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1024\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(141.36 0 0 141.36 1152 819.2)\\'><stop stop-color=\\'rgba(13,204,242,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(13,204,242,0)\\' offset=\\'0.4\\'/></radialGradient></defs></svg>\'), linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%)" }}>
      <HeaderNavigation />
      <MainContent />
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(5,5,5,0.9)] via-1/2 via-[rgba(0,0,0,0)] z-[4]" data-name="Gradient" />
      <Container59 />
      <div className="absolute bg-gradient-to-r bottom-0 from-[rgba(13,204,242,0)] h-[4px] left-0 right-0 to-[rgba(13,204,242,0)] via-1/2 via-[rgba(13,204,242,0.5)] z-[2]" data-name="Footer decorative element" />
      <div className="absolute inset-0 z-[1]" data-name="Background Elements" style={{ backgroundImage: "linear-gradient(90deg, rgba(13, 204, 242, 0.05) 2.5%, rgba(13, 204, 242, 0) 2.5%), linear-gradient(rgba(13, 204, 242, 0.05) 2.5%, rgba(13, 204, 242, 0) 2.5%)" }} />
    </div>
  );
}