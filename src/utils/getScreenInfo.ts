export function getScreenInfo() {
  const desktopCutOffPoint = 768 // in pixels

  let isMobileView = false
  let isDesktopView = false

  if (window.innerWidth >= desktopCutOffPoint) {
    isDesktopView = true
  } else {
    isMobileView = true
  }

  return { isDesktopView, isMobileView }
}
