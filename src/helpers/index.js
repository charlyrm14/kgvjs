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
