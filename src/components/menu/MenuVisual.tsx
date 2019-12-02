import * as React from "react";
import './menu.less'
import {StateService} from "../../services/StateService";

export class MenuVisual extends React.Component<{}> {
    stateService: StateService = StateService.instance

    private onMenuClick() {

    }

    render() {
        return (
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="menu__box">
                    <li><a className="menu__item" onClick={() => this.onMenuClick()}>Settings</a></li>
                    <li><a className="menu__item" onClick={() => this.onMenuClick()}>About</a></li>
                    <li><a className="menu__item" onClick={() => this.onMenuClick()}></a></li>
                </ul>
            </div>
        )
    }
}