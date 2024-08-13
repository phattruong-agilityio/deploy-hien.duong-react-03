/**
 * Formats a date to 'DD MMM YYYY' format.
 *
 * @param date The date to format, either as a Date object or a string.
 * @returns The formatted date string or an empty string if the date is invalid.
 */
const formatDate = (date: Date | string): string => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const day = dateObj.toLocaleDateString('en-US', { day: '2-digit' });
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
  const year = dateObj.toLocaleDateString('en-US', { year: 'numeric' });

  return `${day} ${month} ${year}`; // Rearranging the format to 'DD MMM YYYY'.
};

/**
 * Formats a date to 'HH:MM AM/PM' format.
 *
 * @param date The date to format, either as a Date object or a string.
 * @returns The formatted time string or an empty string if the date is invalid.
 */
const formatTime = (date: Date | string): string => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return dateObj.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

/**
 * Formats a date to 'DD MMM YYYY, HH:MM AM/PM' format.
 *
 * @param date The date to format, either as a Date object or a string.
 * @returns The formatted date and time string or an empty string if the date is invalid.
 */
const formatDateTime = (date: Date | string): string => {
  if (!date) return '';

  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);

  return `${formattedDate}, ${formattedTime}`;
};

/**
 * Formats a date string to 'YYYY-MM-DD' format suitable for HTML date input fields.
 *
 * @param dateString The date string to be formatted.
 * @returns A date string in 'YYYY-MM-DD' format, adjusted for the local timezone.
 */
const formatDateForInput = (dateString: string): string => {
  if (!dateString) return '';

  const date = new Date(dateString);

  // Convert offset to milliseconds.
  const timeZoneOffset = date.getTimezoneOffset() * 60000;

  // Apply the offset to get local date.
  const adjustedDate = new Date(date.getTime() - timeZoneOffset);

  return adjustedDate.toISOString().split('T')[0];
};

export { formatDate, formatTime, formatDateTime, formatDateForInput };
