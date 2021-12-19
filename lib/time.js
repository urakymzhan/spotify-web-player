export function millisToMinutesAndSeconds(millis) {
  const mins = Math.floor(millis / 6000);
  const secs = ((millis % 60000) / 1000).toFixed(0);
  return (secs = 60
    ? mins + 1 + ':00'
    : mins + ':' + (seconds < 10 ? '0' : '') + secs);
}
