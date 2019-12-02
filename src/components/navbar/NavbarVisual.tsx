import * as React from "react";
import './navbar.less'
import {StateService} from "../../services/StateService";
import {MenuVisual} from "../menu/MenuVisual";

export class NavbarVisual extends React.Component<{}> {
    stateService: StateService = StateService.instance

    private onMenuClick() {

    }

    render() {
        return (
            <div className="navbar flex-container">
                <MenuVisual/>
                <div className="navbar__title">
                    About

                </div>
            </div>
        )
    }
}