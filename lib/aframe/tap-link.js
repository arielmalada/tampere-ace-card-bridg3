const tapLinkComponent = {
  init() {
    const handleClickEvent = (e) => {
      window.location = this.el.getAttribute('href')
    }
    this.el.addEventListener('click', handleClickEvent, true)
  },
}

export {tapLinkComponent}
