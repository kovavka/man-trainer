import * as React from "react";
import './navbar.less'
import {StateService} from "../../services/StateService";
import {MenuVisual} from "../menu/MenuVisual";
import {ResultType} from "../../types/ResultType";
import {ScreenType} from "../../types/ScreenType";

type State = {
    currentScreen: ScreenType
    resultType: ResultType
    timeSpent: string
}

export class NavbarVisual extends React.Component<{}, State> {
    stateService: StateService = StateService.instance

    private onMenuClick() {

    }

    constructor(props) {
        super(props)

        this.state = {
            currentScreen: this.stateService.currentScreen,
            resultType: this.stateService.resultType,
            timeSpent: this.stateService.timeSpent,
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
            currentScreen: this.stateService.currentScreen,
            resultType: this.stateService.resultType,
            timeSpent: this.stateService.timeSpent,
        })
    }

    private onInfoClick() {
        this.stateService.openInfo()
    }

    private onBackClick() {
        this.stateService.backToGame()
    }

    render() {
        let {currentScreen, resultType} = this.state

        return (
            <div className="navbar flex-container flex-container--between">
                <MenuVisual/>
                {currentScreen === ScreenType.ABOUT &&(
                    <div className="navbar__title">
                        About
                    </div>
                )}

                {currentScreen === ScreenType.INFO &&(
                    <div className="navbar__title">
                        Hand info
                    </div>
                )}

                {currentScreen === ScreenType.PROCESSING && resultType === ResultType.IDLE &&(
                    <div className="navbar__title">
                        Select waits
                    </div>
                )}

                {currentScreen === ScreenType.PROCESSING && resultType === ResultType.FAIL &&(
                    <div className="navbar__title navbar__title--fail" onClick={() => this.onInfoClick()}>
                        Fail
                        <svg viewBox={'0 0 28 28'} className="info-icon">
                            <use xlinkHref='#info'></use>
                        </svg>
                    </div>
                )}
                {currentScreen === ScreenType.PROCESSING && resultType === ResultType.BAD &&(
                    <div className="navbar__title navbar__title--fail" onClick={() => this.onInfoClick()}>
                        Bad
                        <svg viewBox={'0 0 28 28'} className="info-icon">
                            <use xlinkHref='#info'></use>
                        </svg>
                    </div>
                )}
                {currentScreen === ScreenType.PROCESSING && resultType === ResultType.NOT_REALLY_GOOD &&(
                    <div className="navbar__title" onClick={() => this.onInfoClick()}>
                        Not really good
                        <svg viewBox={'0 0 28 28'} className="info-icon">
                            <use xlinkHref='#info'></use>
                        </svg>
                    </div>
                )}
                {currentScreen === ScreenType.PROCESSING && resultType === ResultType.GOOD &&(
                    <div className="navbar__title navbar__title--success" onClick={() => this.onInfoClick()}>
                        Good
                        <svg viewBox={'0 0 28 28'} className="info-icon">
                            <use xlinkHref='#info'></use>
                        </svg>
                    </div>
                )}
                {currentScreen === ScreenType.PROCESSING && resultType === ResultType.PERFECT &&(
                    <div className="navbar__title navbar__title--success" onClick={() => this.onInfoClick()}>
                        Perfect
                        <svg viewBox={'0 0 28 28'} className="info-icon">
                            <use xlinkHref='#info'></use>
                        </svg>
                    </div>
                )}

                {currentScreen === ScreenType.INFO &&(
                    <div className="pointer pointer--small" onClick={() => this.onBackClick()}>Back</div>
                )}
                {currentScreen !== ScreenType.INFO &&(
                    <div className="pointer pointer--small"></div>
                )}

            </div>
        )
    }
}