import ScheduleAPI from "@/api/ScheduleAPI"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useScheduleStore = defineStore('schedule', () => {

    const scheduleUser = ref(null)
    const attendanceHistory = ref(null)

    const fetchScheduleUSer = async() => {
        try {
            
            const response = await ScheduleAPI.getScheduleByUser()
            
            if (response.status === 200) {
                scheduleUser.value = response.data.data
            }

            if(response.status === 400 || response.status === 404) {
                scheduleUser.value = null
            }

        } catch (error) {
            console.error(error)
        }
    }

    const fetchAttendanceHistory = async() => {
        try {
            
            const response = await ScheduleAPI.attendanceHistory()
            
            if (response.status === 200) {
                attendanceHistory.value = response.data.data
            }

            if(response.status === 400 || response.status === 404) {
                attendanceHistory.value = null
            }

        } catch (error) {
            console.error(error)
        }
    }

    return {
        scheduleUser,
        fetchScheduleUSer,
        attendanceHistory,
        fetchAttendanceHistory
    }
})
