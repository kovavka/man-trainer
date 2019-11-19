import {ScreenType} from "../types/ScreenType";
import signals from 'signals';
import {TempaiGenerator} from "./HandGenerator";
import {TempaiService} from "./TempaiService";

const HAND_LENGTH = 7

declare var window: any

export class StateService {
    private tempaiGenerator = new TempaiGenerator()
    private tempaiService = new TempaiService()
    private _currentScreen: ScreenType = ScreenType.PROCESSING

    onChange: signals.Signal = new signals.Signal()

    private static _instance: StateService
    static get instance(): StateService {
        if (!this._instance) {
            this._instance = new StateService()
        }
        return this._instance
    }

    private constructor() {
        let hand = this.tempaiGenerator.generate(HAND_LENGTH)
        console.log(this.tempaiService.hasTempai(hand))

        window.tempaiService = this.tempaiService
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