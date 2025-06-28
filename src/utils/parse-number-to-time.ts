export const parseNumberToTime = (number: number) => {
  if (number < 0) return "Invalid value";

  const hours = Math.floor(number / 60);
  const minutes = number % 60;

  return `${hours}h ${minutes}m`;
};
