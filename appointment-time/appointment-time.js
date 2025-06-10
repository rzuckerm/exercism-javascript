// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export const createAppointment = (days, now = Date.now()) => new Date(now + 86_400_000 * days);

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export const getAppointmentTimestamp = (appointmentDate) => appointmentDate.toISOString();

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export const getAppointmentDetails = (timestamp) => {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear(), month: date.getMonth(), date: date.getDate(),
    hour: date.getHours(), minute: date.getMinutes()
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export const updateAppointment = (timestamp, options) => {
  const appointment = getAppointmentDetails(timestamp);
  Object.entries(options).forEach(([key, value]) => appointment[key] = value);
  return appointment;
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export const timeBetween = (timestampA, timestampB) =>
  Math.round((new Date(timestampB).getTime() - new Date(timestampA).getTime()) / 1000);

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export const isValid = (appointmentTimestamp, currentTimestamp) => new Date(appointmentTimestamp) > new Date(currentTimestamp);
