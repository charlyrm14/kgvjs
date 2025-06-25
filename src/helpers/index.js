/**
 * The function `randomColor` generates a random color class from an array of predefined color classes.
 * @returns a random color class from the `randomColor` array.
 */
export const randomColor = () => {

    const randomColor = [
        'bg-green-100', 
        'bg-red-100', 
        'bg-purple-100',
        'bg-amber-100',
        'bg-pink-100',
        'bg-blue-100'
    ];

    const randomNumber = Math.floor(Math.random() * randomColor.length) + 1;

    return randomColor[randomNumber];
}

/**
 * The function `getDayByDate` takes a date string, converts it to a Date object, and returns the day
 * of the month.
 * @param date - The `getDayByDate` function takes a date string as input and returns the day of the
 * month for that date. The date string should be in a format that can be parsed by the `Date`
 * constructor.
 * @returns The function `getDayByDate` is returning the day of the month for the given date.
 */
export const getDayByDate = (date = '2025-05-14 09:00:00') => {
    const str_date = date;
    const fecha = new Date(str_date.replace(" ", "T"));

    return fecha.getDate();
}

/**
 * The function `getMonthNameByDate` takes a date as input, converts it to a valid ISO format, and
 * returns the name of the month in Spanish.
 * @param date - The `getMonthNameByDate` function is designed to return the name of the month in
 * Spanish for a given date. However, the function is currently using a hardcoded date "2025-05-14
 * 09:00:00" instead of the input date parameter.
 * @returns The function `getMonthNameByDate` is returning the name of the month in Spanish for the
 * date "2025-05-14 09:00:00".
 */
export const getMonthNameByDate = (date = '2025-05-14 09:00:00') => {
    const str_date = date;

    const fecha = new Date(str_date.replace(" ", "T"));

    return fecha.toLocaleString('es-ES', 
        { month: 'long' }
    );
}

/**
 * The function `getHourByDate` takes a date string, converts it to a Date object, and returns the time
 * in 24-hour format with two-digit hours and minutes in Spanish locale.
 * @param date - The `getHourByDate` function takes a date string as input and returns the hour in
 * 24-hour format along with minutes. The function first converts the input date string into a `Date`
 * object by replacing the space with "T" to create a valid date-time string. Then it uses
 * @returns The function `getHourByDate` takes a date as input, converts it to a `Date` object, and
 * then returns the time in 24-hour format (HH:mm) in Spanish locale.
 */
export const getHourByDate = (date = '2025-05-14 09:00:00') => {
    const str_date = date;

    const fecha = new Date(str_date.replace(" ", "T"));

    return fecha.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

/**
 * The function currentDate returns the current date in the format "YYYY-MM-DD".
 * @returns The function `currentDate` is returning a formatted date string in the format "YYYY-MM-DD".
 */
export const currentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes inicia en 0
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

/**
 * The function currentMonthYear returns the current date in the format "June 2025".
 * @returns The function `currentMonthYear` is returning a formatted date string in the format "June 2025".
 */
export const currentMonthYear = () => {
    const date = new Date();
    const options = { month: 'long', year: 'numeric' };

    return new Intl.DateTimeFormat('es-ES', options).format(date).toUpperCase();
}

/**
 * The function formattedDate returns the  date in the format "YYYY-MM-DD".
 * @returns The function `formattedDate` is returning a formatted date string in the format "YYYY-MM-DD".
 */
export const formattedDate = (isoDate = '2025-05-14 09:00:00') => {
    const date = new Date(isoDate);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

/**
 * Formats a datetime string by replacing the "T" character with a space.
 *
 * This is useful when converting ISO-formatted date strings (e.g., "2025-05-14T00:00")
 * into a more readable format (e.g., "2025-05-14 00:00").
 *
 * @param {string} date - The date string to format. Default is '2025-05-14 00:00'.
 * @returns {string} The formatted date string with "T" replaced by a space.
 */
export const formattedTimeAndDate = (date = '2025-05-14 00:00') => {
    const originalDate = date;
    return originalDate.replace("T", " ");
}

/**
 * Returns the CSS text color classes for a given alert type.
 *
 * This is typically used to dynamically assign Tailwind CSS classes
 * to alert icons or messages based on the alert type (e.g., "success" or "error").
 *
 * @param {string} type - The type of alert. Supported values are 'success' and 'error'.
 *                        Defaults to 'success'.
 * @returns {string} A string containing Tailwind CSS classes for text color.
 */
export const typeAlertTextColor = (type = 'success') => {

    const colors = {
        success: 'text-green-600 dark:text-green-400',
        error: 'text-red-600 dark:text-red-400'
    }

    return colors[type] || colors.success
}

/**
 * Returns the SVG path string corresponding to an alert icon type.
 *
 * This is typically used to dynamically set the `d` attribute of a <path> element in an SVG icon,
 * depending on the alert type (e.g., "success" or "error").
 *
 * @param {string} type - The type of alert. Supported values are 'success' and 'error'.
 *                        Defaults to 'success'.
 * @returns {string} An SVG path string representing the corresponding icon.
 */
export const typeAlertIcon = (type = 'success') => {

    const icons = {
        success: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
        error: 'm9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
    }

    return icons[type] || icons.success
}

/**
 * Returns an array of objects representing the days of the week in Spanish.
 *
 * Each object contains:
 * - `id`: A numeric identifier for the day (1 for Monday, 7 for Sunday).
 * - `day`: The name of the day in uppercase Spanish.
 *
 * @returns {Array<{ id: number, day: string }>} An array of week day objects.
 */
export const weeklyDays = () => {

    return [
        { id: 1, day: 'LUNES'},
        { id: 2, day: 'MARTES'},
        { id: 3, day: 'MIÉRCOLES'},
        { id: 4, day: 'JUEVES'},
        { id: 5, day: 'VIERNES'},
        { id: 6, day: 'SÁBADO'},
        { id: 7, day: 'DOMINGO'},
    ]
}

/**
 * Generates a unique ID based on the current timestamp in milliseconds.
 *
 * @function uniqueId
 * @returns {number} A numeric unique identifier based on `Date.now()`.
 *
 * @example
 * const id = uniqueId();
 * console.log(id); // e.g., 1729438293657
 */
export const uniqueId = () => {
    return Date.now();
}

/**
 * Returns an SVG path string corresponding to the attendance type icon.
 *
 * @param {number} [type=0] - The type of attendance (0 = Absent, 1 = Present, 2 = Unassigned).
 * @returns {string} The SVG path string for the given type.
 */
export const typeAttendanceIcon = (type = 0) => {
    const icons = {
        0: 'm9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
        1: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
        2: 'M5 12h14'
    }

    return icons[type] || icons[0]
}

/**
 * Returns a Tailwind CSS text color class based on the attendance type.
 *
 * @param {number} [type=0] - The type of attendance (0 = Absent, 1 = Present, 2 = Unassigned).
 * @returns {string} The CSS class for the text color.
 */
export const typeAttendanceColor = (type = 0) => {
    const icons = {
        0: 'text-red-500',
        1: 'text-green-500',
        2: 'text-slate-400'
    }

    return icons[type] || icons[2]
}

/**
 * Returns an array of attendance status objects with value, label, and background color.
 *
 * @returns {Array<{ value: number, text: string, bgColor: string }>} List of attendance status options.
 */
export const attendanceStatus = () => {
    return  [
        { value: 0, text: 'No Asistio', bgColor: 'bg-red-500'},
        { value: 1, text: 'Asistio', bgColor: 'bg-green-500'},
        { value: 2, text: 'Día no asignado', bgColor: 'bg-gray-500'},
    ]
}

/**
 * Returns a Tailwind CSS text color class based on the user type.
 *
 * @param {string} [type='administrador'] - The user type (e.g., 'administrador', 'profesor', 'alumnos').
 * @returns {string} The CSS class for the text color.
 */
export const colorForUserType = (type = 'administrador') => {

    const colors = {
        administrador: 'text-emerald-500',
        profesor: 'text-indigo-500',
        alumnos: 'text-amber-500'
    }

    return colors[type] || colors.administrador
}

export const backGroundColorForUserType = (type = 'administrador') => {

    const colors = {
        administrador: 'bg-emerald-100/60',
        profesor: 'bg-indigo-100/60',
        alumnos: 'bg-amber-100/60'
    }

    return colors[type] || colors.administrador
}

export const userTypeByRole = (type = 1) => {

    const userType = {
        1: 'Administrador',
        2: 'Profesor',
        3: 'Alumno'
    }

    return userType[type] || userType[1]
}
