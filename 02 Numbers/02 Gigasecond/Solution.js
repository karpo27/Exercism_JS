export const gigasecond = (instant) => {
  // Get the timestamp (in milliseconds) of the input date:
  const timestamp = instant.getTime();

  // Calculate the new timestamp by adding the gigasecond:
  const newTimestamp = timestamp + 10 ** 9 * 1000;

  // Create a new Date object from the new timestamp and return it:
  return new Date(newTimestamp);
};
