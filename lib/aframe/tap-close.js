const hideAll = () => {
  document.getElementById('container').classList.add('collapsed')
  const hotspotChildren = document.querySelectorAll('a-text')
  hotspotChildren.forEach(element => element.setAttribute('visible', false))
}

const tapCloseComponent = {
  init() {
    const handleClickEvent = (e) => {
      hideAll()
    }

    this.el.addEventListener('click', handleClickEvent, true)
  },
}

export {tapCloseComponent}
