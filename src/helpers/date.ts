/**
 * @param fromDate
 * @returns years since date, rounded to nearest integer
 */
export const yearsSinceDate = (fromDate: Date) => {
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;

  return Math.round((Date.now() - fromDate.getTime()) / millisecondsInYear);
};
