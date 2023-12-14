const styles = {
    innerWidth: '2xl:max-w-[1280px] w-full',
    xNavPaddings: 'sm:px-72 px-16',

    navContainer: 'z-10',
    navText: 'font-normal text-[20px] leading-[32px] z-1 after:content-[\'\'] after:bg-gradient-to-r from-dark-pink to-transparent after:h-[2px] after:w-[0%] after:left-0 after:absolute after:-bottom-[5px] after:rounded-xl after:duration-300 hover:after:w-[100%] before:content-[\'\'] before:bg-gradient-to-l from-dark-pink to-transparent before:h-[2px] before:w-[0%] before:right-0 before:absolute before:-top-[3px] before:rounded-xl before:duration-300 hover:before:w-[100%]',
    navLogo: 'font-normal text-[20px] leading-[32px] z-10',
    navIcon: 'w-[24px] h-[24px] z-1',
    navButton: 'px-4 py-[2px] font-normal text-[20px] leading-[32px] z-1 rounded-tl-[14px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[14px] bg-[#FF007A] text-white cursor-pointer',

    heroSection: 'flex flex-row px-12 py-12 z-50',
    heroContent: 'flex flex-col gap-12 z-50',
    heroTextContainer: 'flex flex-col gap-4 z-50',
    heroTitle: 'w-[600px] font-bold font-inter text-[64px] z-50',
    heroDescription: 'w-[400px] text-[#545454] text-[18px] leading-[32px] z-50',
    heroButton: 'px-3 py-1 font-bold text-[24px] bg-[#FDDAE7] border-dark-pink border-[2px] rounded-tl-[16px] rounded-br-[16px] shadow-title-shadow z-50 cursor-pointer',
    heroPicture: 'px-12 z-50',

    titleSection: 'flex flex-row justify-center py-20 z-50',
    titleContainer: 'flex flex-row justify-center px-8 py-[6px] font-inter font-bold text-[42px] bg-[#FFDDEA] border-[#FF007A] border-x-[4px] rounded-[10px] shadow-title-shadow z-50',

    serviceContainer: 'flex flex-row gap-4 z-50',
    serviceIcon: 'px-[8px] py-2 bg-[#FF007A] text-white text-[24px] w-[48px] h-[48px] rounded-full z-50',
    serviceContent: 'flex flex-col gap-4 z-50',
    serviceTitle: 'text-[24px] font-bold leading-[32px] z-50',
    serviceDescription: 'w-[320px] text-[#545454] text-[16px] leading-[32px] text-justify z-50',

    servicesContainer: 'flex flex-col gap-8 z-50',
    servicesFirstRow: 'flex flex-row justify-center gap-8 z-50',
    servicesSecondRow: 'flex flex-row justify-center gap-8 z-50',

    gradeContainer: 'flex flex-col justify-center items-center gap-4 shadow-grade-shadow gradeBG w-[300px] h-[400px] border-[#FF007A] border-[1px] rounded-[12px] z-50',
    gradeContent: 'hover:scale-105 drop-shadow-image-shadow z-50 cursor-pointer',
    gradePicture: 'rounded-t-[12px] z-50',
    gradeInfos: 'py-2 flex flex-row justify-center items-center gap-4 bg-[#E0B0FF] rounded-b-[12px] z-50',
    gradeTitle: 'text-[20px] leading-[32px] z-50',
    gradeIcon: 'w-[24px] h-[24px] -rotate-45 z-50',

    gradesContainer: 'py-12 flex flex-row justify-center gap-8 z-50',

    labelContainer: 'flex flex-col justify-center items-center py-8 gap-3 z-50',
    labelTitle: 'text-[36px] font-bold font-inter leading-[32px] z-50',
    labelSubtitle: 'text-[#545454] text-[20px] leading-[32px] z-50',

    collectionSection: 'flex justify-center py-8 z-50',
    collectionContainer: 'flex w-[1080px] h-[640px] bg-gradient-to-r from-light-pink to-transparent border-[2px] border-[#FF81A5] rounded-[16px] z-50',
    collectionContent: 'flex flex-col justify-center px-8 z-50',

    sidebarContainer: 'w-[260px] flex flex-col bg-[#FF81A5] rounded-[14px] border-r-[3px] border-dark-pink gap-4 z-50',
    sidebarTitle: 'text-[24px] font-bold leading-[32px] border-black px-4 py-4 z-50',
    sidebarContent: 'flex flex-col pr-[10px] py-6 tracking-wider gap-4 z-50',
    sidebarIcon: 'text-[24px] pr-4 z-50',
    sidebarSubTitle: 'flex flex-col gap-4 font-raleway font-semibold text-[18px] leading-[32px] z-50',

    gridContainer: 'flex px-6 py-8 z-50',

    documentContainer: 'flex flex-col items-center px-6 py-4 z-50',
    documentTitle: 'flex flex-row justify-between items-center px-1 w-[220px] bg-[#FF81A5] text-[16px] leading-[32px] rounded-b-[12px] px-1 shadow-document-shadow z-50',
    documentContent: 'w-[220px] h-[250px] rounded-t-[12px] shadow-document-shadow z-50',

    videoContainer: 'flex flex-col items-center px-6 py-4 z-50',
    videoTitle: 'w-[480px] bg-[#FF81A5] text-[16px] leading-[32px] rounded-b-[12px] px-2 shadow-document-shadow z-50',
    videoContent: 'w-[480px] h-[320px] rounded-t-[12px] shadow-document-shadow z-50',

    paginationButton: 'bg-black cursor-pointer z-50',

    portalSection: 'flex justify-center z-50',
    portalContainer: 'flex flex-row gap-16 z-50',
    portalContent: 'hover:scale-105 z-50',
    portalLink: 'flex flex-col items-center z-50',
    portalImage: 'hover:drop-shadow-tip-shadow z-50',
    portalTitle: 'px-8 py-1 text-[28px] font-raleway font-semibold bg-[#FFDDEA] border-[#FF007A] border-x-[1px] rounded-[14px] shadow-title-shadow z-50',

    tipsContainer: 'flex flex-col items-center gap-8 z-50',

    tipContainer: 'flex flex-row items-center gap-12 py-12 z-50',
    tipContent: 'w-[720px] px-8 py-4 rounded-[12px] border-dark-pink border-[1px] shadow-title-shadow z-50',
    tipTitle: 'text-[24px] font-bold leading-[32px] z-50',
    tipDescription: 'px-2 py-2',
    tipPicture: 'drop-shadow-tip-shadow',

    storiesContainer: 'flex flex-col items-center py-12 gap-16 z-50',

    storyContainer: 'flex flex-row rounded-[16px] border-dark-pink border-[1px] drop-shadow-story-shadow z-50',
    storyContent: 'w-[640px] px-8 py-4 bg-[#D9D9D9] rounded-r-[16px] z-50',
    storyImage: 'rounded-l-[14px] z-50',
    storyTitle: 'text-[24px] font-bold leading-[32px] z-50',
    storyDescription: 'pt-2 pb-6 text-justify z-50',
    storyLine: 'w-[80%] h-[2px] bg-gradient-to-r from-[#545454] to-transparent z-50',
    storyTypes: 'flex flex-row gap-4 pt-4 z-50',
    storyButton: 'px-4 py-1 font-semibold bg-gradient-to-t from-dark-pink to-light-pink rounded-tl-[14px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[14px] border-[1px] border-dark-pink z-50',

    nexusContainer: 'flex flex-row justify-center py-12 gap-16 z-50',
    nexusContent: 'relative w-[320px] z-50',
    nexusStatic: 'absolute -top-10 w-[300px] h-[300px] rounded-[16px] bg-[#FF81A5] -z-50',
    nexusOne: 'left-12',
    nexusTwo: 'left-[10px]',
    nexusThree: '-left-7',
    nexusImage: 'rounded-[16px] drop-shadow-image-shadow cursor-pointer z-50',
    nexusTitle: 'text-[28px] text-white font-bold leading-[32px] z-50',
    nexusHover: 'absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 rounded-[16px] group-hover:opacity-100 flex items-center justify-center z-50',

    alphabeticContainer: 'flex flex-col justify-center gap-8 py-12 z-50',
    alphabeticRow: 'flex flex-row justify-center gap-8 z-50',
    alphabeticLetter: 'w-[48px] h-[48px] text-[24px] font-bold leading-[32px] rounded-[12px] border-[1px] border-dark-pink bg-light-pink cursor-pointer z-50',
};

export default styles;