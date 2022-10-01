const letterCount = require("./letterCount");

describe('Counts Letters', () => {
    test("Count Letters In A Word Correctly", () => {
        expect(letterCount("awesome", "e")).toEqual(2)
    })

    test("Negatively Test Letter Count", ()=>{
        const count = letterCount("Hello", "o")
        expect(count).not.toEqual(2)
    })
});
