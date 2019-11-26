import {ScreenType} from "../types/ScreenType";
import signals from 'signals';
import {TempaiGenerator} from "./HandGenerator";
import {TempaiService} from "./TempaiService";
import {WaitStructure} from "../types/HandStructures";

const DEFAULT_HAND_LENGTH = 7
const HAND_LENGTH_SETTING_NAME = 'HAND_LENGTH'

    declare var window: any

export class StateService {
    private tempaiGenerator = new TempaiGenerator()
    private tempaiService = new TempaiService()
    private _currentScreen: ScreenType = ScreenType.PROCESSING
    private handLength: number
    private _hand: number[]
    private _waitStructures: WaitStructure[]
    private _selectedTiles: number[] = []

    onChange: signals.Signal = new signals.Signal()
    onHandChanged: signals.Signal = new signals.Signal()
    onSelectedChanged: signals.Signal = new signals.Signal()

    private static _instance: StateService
    static get instance(): StateService {
        if (!this._instance) {
            this._instance = new StateService()
        }
        return this._instance
    }

    private constructor() {
        this.handLength = Number(localStorage.getItem(HAND_LENGTH_SETTING_NAME) || DEFAULT_HAND_LENGTH)
        window.tempaiService = this.tempaiService
        this.generateHand()
    }

    get currentScreen(): ScreenType {
        return this._currentScreen
    }

    get hand(): number[] {
        return this._hand
    }

    get selectedTiles(): number[] {
        return this._selectedTiles
    }

    openAbout() {
        this.setScreen(ScreenType.ABOUT)
    }

    backToGame() {
        this.setProcessing()
    }

    selectTile(tile: number) {
        console.log(this._selectedTiles)
        let index = this._selectedTiles.indexOf(tile)
        if (index === -1) {
            this._selectedTiles.push(tile)
        } else {
            this._selectedTiles.splice(index, 1)
        }

        this.onSelectedChanged.dispatch()
    }

    private setScreen(screen: ScreenType) {
        this._currentScreen = screen
        this.clear()

        this.onChange.dispatch()
    }

    private setProcessing() {
        this.setScreen(ScreenType.PROCESSING)
        this.generateHand()
        this.onHandChanged.dispatch()
    }

    private clear() {

    }

    private generateHand() {
        let {hand, possibleTilesToWait} = this.tempaiGenerator.generate(this.handLength)
        console.log(hand)
        console.log(possibleTilesToWait)

        let waitStructures = this.tempaiService.getWaitStructures(hand, possibleTilesToWait)
        console.log(waitStructures)

        if (waitStructures.length) {
            this._hand = hand
            this._waitStructures = waitStructures
        } else {
            this.generateHand()
        }
    }
}