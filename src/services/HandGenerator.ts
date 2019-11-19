export class TempaiGenerator {
    generate(handLength: number): {hand: number[], possibleTilesToWait: number[]} {
        let tileCounts: number[] = []
        for(let i = 1; i <= 9; i++) {
            tileCounts[i] = 4
        }

        let forms = this.getForms()

        let hand: number[] = []
        while(hand.length < handLength) {
            if (handLength - hand.length >= 3) {
                let rand = Math.floor(Math.random() * forms.length)
                let formTiles = forms[rand]
                formTiles.forEach(tile => {
                    tileCounts[tile]--
                    hand.push(tile)
                })

                forms = this.updateForms(forms, tileCounts)
            } else {
                let tile = this.getRandomTile(tileCounts)
                hand.push(tile)
            }
        }

        return {
            hand: hand.sort(),
            possibleTilesToWait: this.getPossibleTilesToWait(tileCounts),
        }
    }

    private getForms(): number[][] {
        let formsStr = [
            '123',
            '234',
            '345',
            '456',
            '567',
            '678',
            '789',
            '111',
            '222',
            '333',
            '444',
            '555',
            '666',
            '777',
            '888',
            '999',
        ]

        let forms: number[][] = []
        formsStr.forEach(formStr => {
            let form = formStr.split('').map(x => Number(x))
            forms.push(form)
        })

        return forms
    }

    private updateForms(forms: number[][], tileCounts: number[]): number[][] {
        let updatedForms: number[][] = []

        forms.forEach(form => {
            if (form[0] === form[1]) {  //pon
                let tile = form[0]
                if (tileCounts[tile] >= 3) {
                    updatedForms.push(form)
                }
            } else { //chii
                let tile1 = form[0]
                let tile2 = form[1]
                let tile3 = form[2]

                if (tileCounts[tile1] !== 0 && tileCounts[tile2] !== 0 && tileCounts[tile3] !== 0) {
                    updatedForms.push(form)
                }
            }
        })

        return updatedForms
    }

    private getRandomTile(tileCounts: number[]): number {
        let count = tileCounts.reduce((a, b) => a + b)
        let rand = Math.random() * count

        for(let tile in tileCounts) {
            let tileCount = tileCounts[tile]
            if (rand > tileCount) {
                rand -= tileCount
            } else {
                return Number(tile)
            }
        }

        throw new Error('something went wrong')
    }

    private getPossibleTilesToWait(tileCounts: number[]): number[] {
        let tiles: number[] = []

        tileCounts.forEach((tileCount, tile) => {
            if (tileCount !== 0) {
                tiles.push(tile)
            }
        })

        return tiles
    }
}