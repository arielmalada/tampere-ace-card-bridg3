import {AFrameScene, DISABLE_IMAGE_TARGETS} from '../../lib/aframe-components'
import {FloatingBackButton} from '../../lib/material-ui-components'
import {tapCloseComponent} from '../../lib/aframe/tap-close'
import {tapHotspotComponent} from '../../lib/aframe/tap-hotspot'
import {tapLinkComponent} from '../../lib/aframe/tap-link'
import {cameraLogger} from '../../lib/aframe/camera-logger'
import {gltfMorph} from '../../lib/aframe/gltf-morph'

declare let React: any
declare let ReactRouterDOM: any

const {withRouter} = ReactRouterDOM

const Home = withRouter(() => (
  <React.Fragment>
    <AFrameScene
      sceneHtml={require('./home.html')}
      imageTargets={DISABLE_IMAGE_TARGETS}
      components={[
        {name: 'tap-close', val: tapCloseComponent},
        {name: 'tap-hotspot', val: tapHotspotComponent},
        {name: 'tap-link', val: tapLinkComponent},
        {name: 'camera-logger', val: cameraLogger},
      ]}
    />
  </React.Fragment>
))

export {Home}
