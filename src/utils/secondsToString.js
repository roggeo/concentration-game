export default function (secondsValue) {
    const secNumber = parseInt(secondsValue, 10);
    const hours   = Math.floor(secNumber / 3600);
    const minutes = Math.floor(secNumber / 60) % 60;
    const seconds = secNumber % 60;

    return [hours, minutes, seconds]
        .map(sec => `${sec}`.padStart(2, "0"))
        .filter((sec, index) => sec !== "00" || index > 0)
        .join(":");
}