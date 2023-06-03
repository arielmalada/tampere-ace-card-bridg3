const clickMoveComponent = {
  schema: {
    idlePose: {default: ''},
    motionPose: {default: ''},
    speed: {default: 5},
  },
  init() {
    const {el} = this
    const ground = document.getElementById('ground')
    const anchor = document.getElementById('anchor')
    this.ground = ground
    let timeout = null
    let canMove = true
    let {idlePose} = this.data
    let {motionPose} = this.data
    this.el.addEventListener('tapstart', () => {
      canMove = false
    })
    this.el.addEventListener('tapend', () => {
      canMove = true
    })
    const updatePoseNames = () => {
      if (this.el.object3D.children[0] &&
      this.el.object3D.children[0].animations &&
      this.el.object3D.children[0].animations.length >= 2) {
        idlePose = this.el.object3D.children[0].animations[0].name
        motionPose = this.el.object3D.children[0].animations[1].name || idlePose
      }
      if (idlePose) {
        el.setAttribute('animation-mixer', `clip:${idlePose};loop:repeat`)
      }
    }
    this.el.addEventListener('model-loaded', updatePoseNames)
    updatePoseNames()
    this.tapRing = document.getElementById('tapRing')
    if (!this.tapRing) {
      const tapRingInner = document.createElement('a-ring')
      tapRingInner.setAttribute('color', '#000')
      tapRingInner.setAttribute('emissive', '#D64443')
      tapRingInner.setAttribute('ring-inner', '0.5')
      tapRingInner.setAttribute('ring-outer', '0.75')
      tapRingInner.setAttribute('rotation', '-90 0 0')
      tapRingInner.setAttribute('position', '0 0.005 0')
      this.tapRing = document.createElement('a-entity')
      this.tapRing.id = 'tapRing'
      this.tapRing.setAttribute('visible', 'false')
      this.tapRing.appendChild(tapRingInner)
      this.el.sceneEl.appendChild(this.tapRing)
    }
    const {tapRing} = this
    let ringTimeout = null
    let previousClip = null
    this._recenterHandler = (event) => {
      setTimeout(() => {
        el.emit('lookreset', '', '')
        if (timeout) {
          clearTimeout(timeout)
        }
        if (this.el.getAttribute('animation-mixer').clip === motionPose) {
          this.el.setAttribute('animation-mixer', {
            clip: previousClip || idlePose,
            loop: 'repeat',
            crossFadeDuration: 0,
          })
        }
        tapRing.setAttribute('visible', 'false')
        el.object3D.position.x = anchor.object3D.position.x
        el.object3D.position.z = anchor.object3D.position.z
        el.emit('stopmove', '')
      })
    }
    el.sceneEl.addEventListener('recenterWithOrigin', this._recenterHandler)
    this._groundClickHandler = (event) => {
      if (!canMove) {
        return
      }
      const touchPosition = new THREE.Vector3(
        event.detail.intersection.point.x, 0, event.detail.intersection.point.z
      )
      const moveVector = touchPosition.clone().sub(el.object3D.position)
      const distance = moveVector.length()
      const duration = distance * 1000 / Math.max(0.01, this.data.speed)
      el.emit('move', {
        type: 'lerp',
        endPosition: touchPosition,
        duration,
      })
      el.emit('look', {target: touchPosition, tilt: false, axis: '0 0 -1'})
      const currentClip = this.el.getAttribute('animation-mixer').clip
      previousClip = currentClip !== motionPose ? currentClip : previousClip
      const crossFadeDuration = previousClip === idlePose ? '0.3' : '0'
      this.el.setAttribute('animation-mixer', {
        clip: motionPose,
        loop: 'repeat',
        crossFadeDuration,
      })
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        moveVector.y = 0
        el.emit('look', {target: moveVector.add(touchPosition), tilt: false, axis: '0 0 -1'})
        this.el.setAttribute('animation-mixer', {
          clip: previousClip || idlePose,
          loop: 'repeat',
          crossFadeDuration,
        })
      }, duration)
      tapRing.object3D.scale.copy({x: 0.001, y: 0.001, z: 0.001})
      tapRing.object3D.position.copy(touchPosition)
      const ringScaleDuration = Math.min(300, duration / 3)
      tapRing.setAttribute('visible', 'true')
      tapRing.removeAttribute('animation__scale')
      tapRing.setAttribute('animation__scale', {
        property: 'scale',
        dur: ringScaleDuration,
        from: '0.001 0.001 0.001',
        to: '0.5 0.5 0.5',
        easing: 'easeOutQuad',
      })
      if (ringTimeout) {
        clearTimeout(ringTimeout)
      }
      ringTimeout = setTimeout(() => {
        tapRing.removeAttribute('animation__scale')
        tapRing.setAttribute('animation__scale', {
          property: 'scale',
          dur: ringScaleDuration,
          to: '0.001 0.001 0.001',
          easing: 'easeInQuad',
        })
        ringTimeout = setTimeout(() => tapRing.setAttribute('visible', 'false'), ringScaleDuration)
      }, duration - ringScaleDuration)
    }
    ground.addEventListener('mousedown', this._groundClickHandler)
  },
  remove() {
    if (this.tapRing) {
      this.tapRing.setAttribute('visible', 'false')
    }
    if (this.ground) {
      this.ground.removeEventListener('mousedown', this._groundClickHandler)
    }
    if (this.el) {
      this.el.emit('stopmove', '')
      this.el.emit('lookreset', '', false)
      this.el.setAttribute('animation-mixer', {
        clip: this.data.idlePose,
        loop: 'repeat',
        crossFadeDuration: 0,
      })
      if (this.el.sceneEl) {
        this.el.sceneEl.removeEventListener('recenterWithOrigin', this._recenterHandler)
      }
    }
  },
}
