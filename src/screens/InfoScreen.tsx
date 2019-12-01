import * as React from 'react'
import {StateService} from '../services/StateService'
import {InfoVisual} from '../components/InfoVisual'

type State = {
}

export class InfoScreen extends React.Component<{}, State> {
    stateService: StateService = StateService.instance

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(): void {
        this.stateService.onChange.add(this.updateState, this)
    }

    componentWillUnmount(): void {
        this.stateService.onChange.remove(this.updateState, this)
    }

    updateState() {
        this.setState({
        })
    }

    onBackClick() {
        this.stateService.backToGame()
    }

    render() {
     return (
         <div className="screen">
             <div className="page-header">
                 <div className="page-header__title">
                     Hand info
                 </div>
             </div>

             <div className="page-content flex-container flex-container--column">
                <InfoVisual />
             </div>

             <div className="flex-container flex-container--margin-s">
                 <div className="flat-btn flat-btn--white">
                     <div className="flat-btn__caption" onClick={() => this.onBackClick()}>Back</div>
                 </div>
             </div>
         </div>
     )
    }
}