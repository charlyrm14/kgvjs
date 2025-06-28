import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import UserAPI from "@/api/UserAPI"
import { computed, reactive, ref } from "vue"
import { typeAlertIcon } from "@/helpers"

export const useUserStore = defineStore('user', () => {

    const router = useRouter()
    
    const userProfile = ref(null)
    const users = ref([])
    const selectedRole = ref(0)

    const alert = reactive({
        title: '',   
        subtitle: '',
        color: '',
        icon: '',
        status: false,
    })

    const messageError = reactive({
        text: '',
        status: false
    })

    const fetchGetUsers = async() => {
        try {
            const response = await UserAPI.getUsers()
            
            if (response.status === 200) {
                users.value = response.data.data
            }

            if (response.status !== 200) {
                users.value = []
            }

        } catch (error) {
            console.error(error)
        }
    }

    const fetchUserById = async(userId) => {
        try {

            const response = await UserAPI.getUserById(userId)

            if (response.status === 200) {
                userProfile.value = response.data.data
            }

            if (response.status !== 200) {
                router.push({ name: 'admin-home' })
            }

        } catch (error) {
            console.error(error)
        }
    }

    const createUser = async(data) => {
        try {

            const response = await UserAPI.addUser(data)

            if (response.status === 201) {
                handleAlert(
                    'Usuario creado correctamente',
                    response.data.message,
                    'success'
                )
                users.value.unshift(response.data.data)
                resetAlert()
                return true
            }

            if (response.status === 422) {
                if (response.data?.errors?.email[0]) {
                    messageError.text = 'El correo ingresado ya está asociado a otra cuenta'
                    messageError.status = true
                }
                resetMessage()
            }

        } catch (error) {
            console.error(error)
            handleAlert(
                'Operacion fallida',
                'Hubo un error al crear el usuario',
                'error'
            )
            resetAlert()
            return true
        }
    }

    const deleteUser = async(user) => {
        try {
            
            const response = await UserAPI.deleteUser(user?.id)

            if (response.status === 200) {
                handleAlert(
                    'Usuario eliminado',
                    `Se ha eliminado con éxito a ${user?.first_name}`,
                    'error'
                )
                router.push({ name: 'admin-home' })
                resetAlert()
            }

            if (response.status === 401 || response.status === 403) {
                handleAlert(
                    'Operación fallida',
                    response.data.message,
                    'error'
                )
                router.push({ name: 'admin-home' })
                resetAlert()
            }
            
            if(response.status === 404) {
                messageError.text = response.data.message
                messageError.status = true
                resetMessage()
            }

        } catch (error) {
            console.error
            handleAlert(
                'Operacion fallida',
                'Hubo un error al crear el usuario',
                'error'
            )
            resetAlert()
            return true
        }
    }

    const handleAlert = (title, subtitle, type = 'success') => {
        alert.title = title,   
        alert.subtitle = subtitle,
        alert.color = type === 'success' ? 'green' : 'red',
        alert.icon = typeAlertIcon(type),
        alert.status = true
    }

    const resetAlert = () => {
        setTimeout(() => {
            alert.title = '',   
            alert.subtitle = '',
            alert.color = '',
            alert.icon = '',
            alert.status = false 
        }, 4000);
    }

    const resetMessage = () => {
        setTimeout(() => {
            messageError.text = ''
            messageError.status = false
        }, 6000);
    }

    const filterUsers = computed(() => {
        if(selectedRole.value === 0) return users.value
        if(selectedRole.value === 1) return users.value.filter(u => u.role_id === 1)
        if(selectedRole.value === 2) return users.value.filter(u => u.role_id === 2)
        if(selectedRole.value === 3) return users.value.filter(u => u.role_id === 3)
        return []
    })

    return {
        userProfile,
        users,
        selectedRole,
        fetchGetUsers,
        fetchUserById,
        createUser,
        alert,
        messageError,
        deleteUser,
        filterUsers
    }
})