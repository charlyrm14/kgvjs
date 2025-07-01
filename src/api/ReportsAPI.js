import { uniqueId } from "@/helpers"

const url = import.meta.env.VITE_API_URL

export default {

    async reportAttendanceByUser(data) {
        try {
            
            const response = await fetch(`${url}/api/v1/reports/user-attendance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                const result = await response.json();

                return {
                    data: result,
                    status: response.status
                }
                
            } else {

                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)

                const link = document.createElement('a')
                link.href = url
                link.download = 'reporte-' + uniqueId() + '.xlsx'
                document.body.appendChild(link)
                link.click()
                link.remove()
                window.URL.revokeObjectURL(url)
            }

        } catch (error) {
            console.error(error)
        }
    }
}