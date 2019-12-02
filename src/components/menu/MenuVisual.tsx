import * as React from "react";
import './menu.less'
import {StateService} from "../../services/StateService";

export class MenuVisual extends React.Component<{}> {
    stateService: StateService = StateService.instance


    private onSettingsClick() {
        this.closePanel()
        this.stateService.openSettings()
    }

    private onAboutClick() {
        this.closePanel()
        this.stateService.openAbout()
    }

    private onCurrentGameClick() {
        this.closePanel()
        this.stateService.backToGame()
    }

    private closePanel() {
        // @ts-ignore
        document.querySelector("#menu__toggle").checked = false
    }


    render() {
        return (
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="menu__box">
                    <li><a className="menu__item" onClick={() => this.onCurrentGameClick()}>Current game</a></li>
                    <li><a className="menu__item" onClick={() => this.onSettingsClick()}>Settings</a></li>
                    <li><a className="menu__item" onClick={() => this.onAboutClick()}>About</a></li>
                </ul>
            </div>
        )
    }
}