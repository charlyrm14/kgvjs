const url = import.meta.env.VITE_API_URL

export default {

    async getContents() {
        try {
            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/contents`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }, 
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }
            
        } catch (error) {
            console.error(error);
        }
    },

    async getContentBySlug(contentSlug) {

        try {

            const response = await fetch(`${url}/api/v1/contents/${contentSlug}/detail`)

            const result = response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    },

    async newNotice(data) {
        try {

            const response = await fetch(`${url}/api/v1/contents/notice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }
            
        } catch (error) {
            console.error(error);
        }
    },

    async newEvent(data) {
        try {

            const response = await fetch(`${url}/api/v1/contents/events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }
            
        } catch (error) {
            console.error(error);
        }
    },

    async deleteContent(slug) {
        try {

            const response = await fetch(`${url}/api/v1/contents/${slug}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}