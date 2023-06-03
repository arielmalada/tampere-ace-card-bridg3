import {Page} from '../../lib/material-ui-components'

declare let React: any
declare let ReactRouterDOM: any

const {withRouter} = ReactRouterDOM

const About = withRouter(() => (
  <Page title='About'>
    <img src={require('../../assets/images/Tredu_logo.png')} />
    <img src={require('../../assets/images/1.png')} />
    <h2>Laajasta koulutustarjonnasta löytyy polku jokaiselle</h2>
    Tredussa voit aloittaa opiskelusi koska tahansa, syksystä kevääseen. Rakennamme opintosi toiveittesi ja elämäntilanteesi mukaan. Meillä voit kouluttautua ensimmäiseen ammattiin, opiskella uudelle alalle tai ponnistaa tulevaisuuden yrittäjäksi. Työelämäyhteistyö monipuolisine koulutuksineen täydentää paletin: sadoista kursseista ja useista eri toimipisteistämme löydät itsellesi varmasti sopivan alan, ajan ja paikan kasvattaa ammatillista osaamistasi koko työelämäsi varrella.
    Koulutustarjontamme kattaa:
    <ul>
      <li>29 perustutkintoa</li>
      <li>    21 ammattitutkintoa</li>
      <li>    11 erikoisammattitutkintoa</li>
      <li>    Oppisopimuskoulutusta kaikkiin ammatillisiin tutkintoihin</li>
      <li>    Tutkinnon osista työnsyrjään</li>
      <li>    Yrityksille ja työelämälle suunnattuja koulutuksia</li>
      <li>    Esimies- ja johtamiskoulutuksia</li>
      <li>    Tutkintokoulutukseen valmentavaa koulutusta TUVA</li>
      <li>    Kansainvälisiä opintopolkuja ja englanninkielisiä koulutuksia</li>
      <li>    Maahanmuuttajakoulutusta</li>
      <li>    Videolla kerrotaan Tampereen seudun ammattiopisto Tredusta.Ohita video</li>
    </ul>
    <iframe width='560' height='315' src='https://www.youtube.com/embed/ufTFLy50ZX0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </Page>
))

export {About}
