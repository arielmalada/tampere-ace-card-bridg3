const hideAll = () => {
  document.getElementById('container').classList.add('collapsed')
  const hotspotChildren = document.querySelectorAll('a-text')
  hotspotChildren.forEach(element => element.setAttribute('visible', false))
}

const tapHotspotComponent = {
  init() {
    const id = this.el.getAttribute('id')
    const contents = document.getElementById('contents')
    const container = document.getElementById('container')
    container.onclick = hideAll
    const childElement = document.getElementById(`${id}-child`)
    const childElement1 = document.getElementById(`${id}-child1`)
    const childElement2 = document.getElementById(`${id}-child2`)
    const childElement3 = document.getElementById(`${id}-child3`)
    const handleClickEvent = (e) => {
      hideAll()
      container.classList.remove('collapsed')
      childElement.setAttribute('visible', true)
      childElement1.setAttribute('visible', true)
      childElement2.setAttribute('visible', true)
      childElement3.setAttribute('visible', true)
      // childElement.setAttribute('class', 'cantap')
      // childElement1.setAttribute('class', 'cantap')
      // childElement2.setAttribute('class', 'cantap')

      const title = childElement.getAttribute('value')
      contents.innerHTML = `<h1>${title}</h1>More info about ${title} goes here.`
    }

    this.el.addEventListener('click', handleClickEvent, true)
  },
}

export {tapHotspotComponent}
