const url = import.meta.env.VITE_API_URL

export default {

    async getConversationHistory(userId) {

        try {

            const response = await fetch(`${url}/api/v1/ia/chat/history/${userId}`)

            const result = await response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    },

    /**
     * The `chat` function sends a POST request to a specified URL with JSON data and returns the
     * response as a JSON object.
     * @param data - The `data` parameter in the `chat` function is the information that you want to
     * send to the chat API endpoint. It should be an object containing the necessary data for the chat
     * operation. This data will be converted to a JSON string using `JSON.stringify(data)` before
     * sending it in the request
     * @returns The `chat` function is returning the result of the API call made to
     * `/api/v1/ia/chat`. This result is obtained by parsing the response as JSON using
     * `response.json()` and returning it.
     */
    async chat(data) {

        try {

            const response = await fetch(`${url}/api/v1/ia/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            })

            const result = await response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    }
}