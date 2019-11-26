import * as React from 'react'
import {StateService} from '../services/StateService'
import { HandVisual } from '../components/HandVisual'
import { VariantsVisual } from '../components/VariantsVisual'

export class GameScreen extends React.Component {
    stateService: StateService = StateService.instance

    onAboutClick() {
        this.stateService.openAbout()
    }

    onConfirmClick() {

    }

    render() {
     return (
         <div className="screen">
             <div className="page-header flex-container flex-container--between">
                 <div className="flex-container">
                     <div className="page-header__title pointer">7</div>
                     <div className="page-header__separator" />
                     <div className="page-header__title pointer">11</div>
                     <div className="page-header__separator" />
                     <div className="page-header__title pointer">13</div>
                 </div>
                <div className="page-header__title pointer" onClick={() => this.onAboutClick()}>About</div>
                <div className="page-header__title pointer" onClick={() => this.onConfirmClick()}>Confirm</div>
             </div>
             <div className="page-content flex-container flex-container--column">

                 <HandVisual/>

                 <VariantsVisual/>

             </div>
         </div>
     )
    }
}