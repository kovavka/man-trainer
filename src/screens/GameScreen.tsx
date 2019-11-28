import * as React from 'react'
import {StateService} from '../services/StateService'
import {HandVisual} from '../components/HandVisual'
import {VariantsVisual} from '../components/VariantsVisual'
import {ResultType} from "../types/ResultType";
import {MetricService} from "../services/MetriсService";

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
        MetricService.newGame()
        this.stateService.newGame()
    }

    onLengthSelected(value: number) {
        MetricService.selectLength(value)
        this.stateService.selectLength(value)
    }

    render() {
     return (
         <div className="screen">
             <div className="page-header flex-container flex-container--center">
                 {this.state.resultType === ResultType.IDLE && (
                     <div className="page-header__title">
                         Select waitings
                     </div>
                 )}
                 {this.state.resultType === ResultType.FAIL && (
                     <div className="page-header__title page-header__title--fail">
                         Fail
                     </div>
                 )}
                 {this.state.resultType === ResultType.BAD && (
                     <div className="page-header__title page-header__title--fail">
                         Bad
                     </div>
                 )}
                 {this.state.resultType === ResultType.NOT_REALLY_GOOD && (
                     <div className="page-header__title">
                         Not really good
                     </div>
                 )}
                 {this.state.resultType === ResultType.GOOD && (
                     <div className="page-header__title page-header__title--success">
                         Good
                     </div>
                 )}
                 {this.state.resultType === ResultType.PERFECT && (
                     <div className="page-header__title page-header__title--success">
                         Perfect
                     </div>
                 )}
             </div>

             <div className="page-content flex-container flex-container--column">
                 <div className="page-content__inner">
                     <HandVisual/>

                     <div className="flex-container flex-container--between flex-container--align-end flex-container--margin-m">
                        <VariantsVisual/>
                         {this.state.resultType === ResultType.IDLE && (
                             <div className="flat-btn flat-btn--s flat-btn--white">
                                 <div className="flat-btn__caption" onClick={() => this.onConfirmClick()}>Confirm</div>
                             </div>
                         )}
                         {this.state.resultType !== ResultType.IDLE && (
                             <div className="flat-btn flat-btn--s flat-btn--white">
                                 <div className="flat-btn__caption" onClick={() => this.onNewGameClick()}>New game</div>
                             </div>
                         )}
                     </div>
                 </div>
             </div>

             <div className="page-footer flex-container flex-container--between">
                 <div className="flex-container">
                     <div className="page-footer__title pointer" onClick={() => this.onLengthSelected(7)}>7</div>
                     <div className="page-footer__separator" />
                     <div className="page-footer__title pointer" onClick={() => this.onLengthSelected(10)}>10</div>
                     <div className="page-footer__separator" />
                     <div className="page-footer__title pointer" onClick={() => this.onLengthSelected(13)}>13</div>
                 </div>
                 <div className="page-footer__title pointer" onClick={() => this.onAboutClick()}>About</div>
             </div>
         </div>
     )
    }
}