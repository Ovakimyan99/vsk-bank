export function disableScroll() {
  const body = window.document.body
  body.dbscrollY = window.scrollY
  body.style.cssText = `
    position: fixed;
    top: ${~window.scrollY}px;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
   `
}

export function enablesScroll() {
  const body = window.document.body
  body.style.cssText = ''
  window.scroll({ top: document.body.dbscrollY })
}
