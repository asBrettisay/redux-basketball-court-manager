const players = require("./players")
// @ponicode
describe("players.benchPlayer", () => {
    test("0", () => {
        let callFunction = () => {
            players.benchPlayer("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            players.benchPlayer(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            players.benchPlayer("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            players.benchPlayer("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            players.benchPlayer(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            players.benchPlayer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("players.sendPlayerToCourt", () => {
    test("0", () => {
        let callFunction = () => {
            players.sendPlayerToCourt(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            players.sendPlayerToCourt("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            players.sendPlayerToCourt("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            players.sendPlayerToCourt(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            players.sendPlayerToCourt("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            players.sendPlayerToCourt(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
