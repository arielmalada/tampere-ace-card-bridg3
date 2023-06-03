const tapAssembleComponent = {
  init() {
    const model = document.getElementById('car')
    const handleClickEvent = (e) => {
      const target = this.el.getAttribute('target')
      model.setAttribute(`gltf-morph__${target}`, `morphtarget: ${target}; value: 1`)
      model.setAttribute(`animation__${target}`, `
          property: gltf-morph__${target}.value;
          from: 0;
          to: 1;
          easing: easeInOutQuad`)
      this.el.setAttribute('visible', false)
      AFRAME.scenes[0].emit('increaseScore', {points: 100})
    }
    this.el.addEventListener('click', handleClickEvent, true)
  },
}

export {tapAssembleComponent}
