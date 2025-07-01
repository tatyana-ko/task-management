export const parseNumberToTime = (number: number) => {
  if (number < 0) return 'Invalid value';

  if (number < 1440) {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;

    return `${hours}h ${minutes}m`;
  }

  const days = Math.floor(number / 60 / 24);

  return `${days} days`;
};
