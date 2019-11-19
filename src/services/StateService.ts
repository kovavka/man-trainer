import {ScreenType} from "../types/ScreenType";
import signals from 'signals';


export class StateService {
    private _currentScreen: ScreenType = ScreenType.PROCESSING

    onChange: signals.Signal = new signals.Signal()

    private static _instance: StateService
    static get instance(): StateService {
        if (!this._instance) {
            this._instance = new StateService()
        }
        return this._instance
    }

    get currentScreen(): ScreenType {
        return this._currentScreen
    }

    openAbout() {
        this.setScreen(ScreenType.ABOUT)
    }

    selectTile(tile: number) {
        //todo
    }

    private setScreen(screen: ScreenType) {
        this._currentScreen = screen
        this.clear()

        this.onChange.dispatch()
    }

    private clear() {

    }
}