export const isMobileDevice = () => {
    // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    const isMobileDevice = window.navigator.userAgent.toLowerCase().includes("mobi");

    return isMobileDevice;

    return true;
};
