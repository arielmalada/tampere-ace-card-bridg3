import {AFrameScene, DISABLE_IMAGE_TARGETS} from '../../lib/aframe-components'
import {FloatingBackButton} from '../../lib/material-ui-components'
import {gltfMorphComponent} from '../../lib/aframe/gltf-morph'
import {ignoreRaycast} from '../../lib/aframe/ignore-raycast'
import {proximityComponent} from '../../lib/aframe/proximity'
import {responsiveImmersiveComponent} from '../../lib/aframe/responsive-immersive'
import {annotationComponent} from '../../lib/aframe/annotation'
import {absPinchScaleComponent} from '../../lib/aframe/abs-pinch-scale'
import {tapAssembleComponent} from '../../lib/aframe/tap-assemble'
import {cameraLogger} from '../../lib/aframe/camera-logger'

declare let React: any
declare let ReactRouterDOM: any

const {withRouter} = ReactRouterDOM

const Car = withRouter(() => (
  <React.Fragment>
    <FloatingBackButton />
    <AFrameScene
      sceneHtml={require('./car.html')}
      components={[
        {name: 'absolute-pinch-scale', val: absPinchScaleComponent},
        {name: 'annotation', val: annotationComponent},
        {name: 'gltf-morph', val: gltfMorphComponent},
        {name: 'ignore-raycasth', val: ignoreRaycast},
        {name: 'proximity', val: proximityComponent},
        {name: 'responsive-immersive', val: responsiveImmersiveComponent},
        {name: 'tap-assemble', val: tapAssembleComponent},
        {name: 'camera-logger', val: cameraLogger},
      ]}
      imageTargets={DISABLE_IMAGE_TARGETS}
    />
  </React.Fragment>
))

export {Car}
