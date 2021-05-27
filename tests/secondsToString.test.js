import secondsToString from "../src/utils/secondsToString";

test('Convert seconds to hh:mm:ss', () => {

    expect(secondsToString(180)).toEqual("03:00");

});