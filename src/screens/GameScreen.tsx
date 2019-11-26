import * as React from 'react'
import {StateService} from '../services/StateService'
import { HandVisual } from '../components/HandVisual'
import { VariantsVisual } from '../components/VariantsVisual'

export class GameScreen extends React.Component {
    stateService: StateService = StateService.instance

    onAboutClick() {
        this.stateService.openAbout()
    }

    render() {
     return (
         <div className="screen">
             <div className="page-header">
                <div className="page-header__title">Chinitsu trainer</div>
             </div>
             <div className="page-content">

                 <VariantsVisual/>

                 <HandVisual/>
             </div>
             <div className="page-footer">
                 <div className="flex-container flex-container--center flex-container--margin-s">
                     <div className="page-footer__link" onClick={() => this.onAboutClick()}>
                         About
                     </div>
                 </div>
             </div>
         </div>
     )
    }
}