const url = import.meta.env.VITE_API_URL

export default {

    async getEvents() {

        try {

            const response = await fetch(`${url}/api/v1/events`)

            const result = await response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    },

    async getEventBySlug(eventSlug) {

        try {

            const response = await fetch(`${url}/api/v1/events/${eventSlug}/detail`)

            const result = response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    }
}