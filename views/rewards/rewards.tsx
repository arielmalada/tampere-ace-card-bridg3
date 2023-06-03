import {Page, NavCard} from '../../lib/material-ui-components'

declare let React: any
declare let ReactRouterDOM: any

const {withRouter} = ReactRouterDOM

const Rewards = withRouter(() => (
  <Page title='Rewards'>
    <img src={require('../../assets/images/Wavy_Tech-29_Single-05.jpg')} />
    <h2>Rewards</h2>
    Tredussa voit aloittaa opiskelusi koska tahansa, syksystä kevääseen. Rakennamme opintosi toiveittesi ja elämäntilanteesi mukaan. Meillä voit kouluttautua ensimmäiseen ammattiin, opiskella uudelle alalle tai ponnistaa tulevaisuuden yrittäjäksi. Työelämäyhteistyö monipuolisine koulutuksineen täydentää paletin: sadoista kursseista ja useista eri toimipisteistämme löydät itsellesi varmasti sopivan alan, ajan ja paikan kasvattaa ammatillista osaamistasi koko työelämäsi varrella.
    Koulutustarjontamme kattaa:
    <NavCard
        title='Valmet Tour'
        text={'Tour Around Valmet, 1000 Points'}
        img={require('../../assets/images/valmet-forward.svg')}
      />
    <NavCard
        title='Särkänniemi Ticket'
        text={'Enjoy Holiday to Särkänniemi, 2000 Points'}
        img={require('../../assets/images/tsnalsxb.png')}
      />
  </Page>
))

export {Rewards}
