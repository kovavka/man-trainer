import * as React from 'react'
import {StateService} from '../services/StateService'
import {HandVisual} from '../components/HandVisual'
import {VariantsVisual} from '../components/VariantsVisual'
import {ResultType} from "../types/ResultType";

type State = {
    resultType: ResultType
}

export class GameScreen extends React.Component<{}, State> {
    stateService: StateService = StateService.instance

    constructor(props) {
        super(props)

        this.state = {
            resultType: this.stateService.resultType,
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
            resultType: this.stateService.resultType,
        })
    }

    onAboutClick() {
        this.stateService.openAbout()

    }

    onConfirmClick() {
        this.stateService.checkWaitings()
    }

    onNewGameClick() {
        this.stateService.newGame()
    }

    onLengthSelected(value: number) {
        this.stateService.selectLength(value)
    }

    render() {
     return (
         <div className="screen">
             <div className="page-header flex-container flex-container--between">
                 <div className="flex-container">
                     <div className="page-header__title pointer" onClick={() => this.onLengthSelected(7)}>7</div>
                     <div className="page-header__separator" />
                     <div className="page-header__title pointer" onClick={() => this.onLengthSelected(11)}>11</div>
                     <div className="page-header__separator" />
                     <div className="page-header__title pointer" onClick={() => this.onLengthSelected(13)}>13</div>
                 </div>
                 <div className="flex-container flex-container--center">
                    <div className="page-header__title pointer" onClick={() => this.onAboutClick()}>About</div>
                 </div>
                 <div className="flex-container flex-container--end">
                     {this.state.resultType === ResultType.IDLE && (
                         <div className="page-header__title pointer" onClick={() => this.onConfirmClick()}>Confirm</div>
                     )}
                     {this.state.resultType !== ResultType.IDLE && (
                         <div className="page-header__title pointer" onClick={() => this.onNewGameClick()}>New game</div>
                     )}
                 </div>
             </div>
             <div className="page-content flex-container flex-container--column">

                 <HandVisual/>

                 <VariantsVisual/>

             </div>
         </div>
     )
    }
}