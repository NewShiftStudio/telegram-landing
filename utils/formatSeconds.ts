export function formatSeconds(seconds: number) {
  const roundedSeconds = Math.round(seconds);
  const minutes = Math.floor(roundedSeconds / 60);
  const minutesString = minutes > 9 ? minutes : `0${minutes}`;
  const restSeconds = Math.floor(roundedSeconds % 60);
  const restSecondsString = restSeconds > 9 ? restSeconds : `0${restSeconds}`;

  return `${minutesString}:${restSecondsString}`;
}
