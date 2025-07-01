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

/**
 * Returns the background color class based on the user type.
 *
 * @param {string} type - The user type (e.g., 'administrador', 'profesor', 'alumnos').
 * @returns {string} Tailwind CSS background color class.
 */
export const backGroundColorForUserType = (type = 'administrador') => {

    const colors = {
        administrador: 'bg-emerald-100/60',
        profesor: 'bg-indigo-100/60',
        alumnos: 'bg-amber-100/60'
    }

    return colors[type] || colors.administrador
}

/**
 * Returns the user type name based on the numeric role type.
 *
 * @param {number} type - The role ID (1 = Administrador, 2 = Profesor, 3 = Alumno).
 * @returns {string} The user type as a string.
 */
export const userTypeByRole = (type = 1) => {

    const userType = {
        1: 'Administrador',
        2: 'Profesor',
        3: 'Alumno'
    }

    return userType[type] || userType[1]
}

/**
 * Returns the text color class for different content types.
 *
 * @param {number} type - The content type ID (1 or 2).
 * @returns {string} Tailwind CSS text color class.
 */
export const typeContentColor = (type = 1) => {
    const colors = {
        1: 'text-pink-500',
        2: 'text-cyan-500'
    }

    return colors[type] || colors[1]
}

/**
 * Returns the SVG path for the icon based on the content type.
 *
 * @param {number} type - The content type ID (1 or 2).
 * @returns {string} The SVG path string for the icon.
 */
export const typeContentIcon = (type = 1) => {
    const icons = {
        1: 'M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46',
        2: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
    }

    return icons[type] || icons[1]
}

/**
 * The function `currentYear` returns the current year using JavaScript.
 * @returns The function `currentYear` returns the current year as a number.
 */
export const currentYear = () => {
    const today = new Date();
    const year = today.getFullYear();

    return year;
}

/**
 * The function `monthsOfTheYear` returns an array of objects representing months up to the current
 * month.
 * @returns The function `monthsOfTheYear` returns an array of objects representing the months of the
 * year up to the current month. Each object in the array contains properties for the month's id, value
 * (in numerical format), and name. The filtering is based on the current month obtained from the
 * system date.
 */
export const monthsOfTheYear = () => {

    const months = [
        { id: 1, value: '01', name: 'Enero' }, 
        { id: 2, value: '02', name: 'Febrero' }, 
        { id: 3, value: '03', name: 'Marzo' }, 
        { id: 4, value: '04', name: 'Abril' }, 
        { id: 5, value: '05', name: 'Mayo' }, 
        { id: 6, value: '06', name: 'Junio' },
        { id: 7, value: '07', name: 'Julio' }, 
        { id: 8, value: '08', name: 'Agosto' }, 
        { id: 9, value: '09', name: 'Septiembre' }, 
        { id: 10, value: '10', name: 'Octubre' }, 
        { id: 11, value: '11', name: 'Noviembre' }, 
        { id: 12, value: '12', name: 'Diciembre' }
    ]

    const currentMonth = new Date().getMonth() + 1

    return months.filter(m => m.id <= currentMonth)
}