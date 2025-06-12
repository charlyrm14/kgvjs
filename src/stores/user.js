import AuthAPI from "@/api/AuthAPI"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import { onMounted, reactive, ref } from "vue"
import { useChatIAStore } from "./chat"
import UserAPI from "@/api/UserAPI"
import { typeAlertTextColor, typeAlertIcon } from "@/helpers"
import UserClassesAPI from "@/api/UserClassesAPI"
import SwimmingCategoriesAPI from "@/api/SwimmingCategoriesAPI"

export const useUserStore = defineStore('user', () => {

    const router = useRouter()
    
    const chat = useChatIAStore()

    const user = ref({})
    const users = ref([])
    const userToDelete = ref(null)
    const statusAddUserModal = ref(false) 
    const statusDeleteUserModal = ref(false)
    
    const alert = reactive({
        status: false,
        title: '',
        subtitle: '',
        textColor: '',
        icon: ''
    })

    const errorMessage = reactive({
        text: '',
        status: false
    })

    onMounted( async () => {

        try {

            const response = await UserAPI.getUsers()
            users.value = response.data

        } catch (error) {
            
        }
    })

    /**
     * The function `loadUser` asynchronously loads user data from an authentication API and assigns it
     * to a variable `user.value`, handling errors if they occur.
     */
    const loadUser = async () => {

        try {
            const data = await AuthAPI.auth()
            user.value = data.data

        } catch (error) {
            console.error('Error cargando usuario:', error)
        }
    }

    /**
     * The `logOut` function clears the authentication token, resets the user value and chat
     * conversation, and navigates to the login page.
     */
    const logOut = () => {
        localStorage.removeItem('auth_token')
        user.value = {}
        chat.conversation = [];
        router.push({ name: 'login' })
    }


    /**
     * Add user
     */
    const showAddUserModal = () => {
        statusAddUserModal.value = true
    }

    
    /**
     * The function `createUser` is an asynchronous function that adds a new user using data from a
     * form, displays success or error messages, and handles errors gracefully.
     * @param data - The `data` parameter in the `createUser` function likely contains information
     * about the user being created. This data could include details such as the user's name, email,
     * role ID, and any other relevant information needed to create a new user. This data is passed to
     * the `UserAPI.add
     */
    const createUser = async (data) => {
        
        try {

            const response = await UserAPI.addUser(data)
            
            if (response.status === 201) {
                handleAddUserSuccess(response.data.data)
                setTimeout(resetAlert, 4000)
            } 

            if(response.status === 422) {
                handleValidationErrors(response.data.errors)
            }

        } catch (error) {

            console.log(error)
        } 
    }

    const hideAddUserModal = () => {
        statusAddUserModal.value = false
        errorMessage.text = ''
        errorMessage.status = false
    }

    const handleAddUserSuccess = (data) => {
        showAlert(
            'Usuario agregado con éxito', 
            `El usuario ${data.name} ha sido agregado con éxito.`,
            'success'
        )
        statusAddUserModal.value = false
        users.value.unshift(data)
    }

    const handleValidationErrors = (errors) => {
        if (errors.email) {
            errorMessage.text = errors.email[0]
            errorMessage.status = true
        }

        if (errors.role_id) {
            errorMessage.text = errors.role_id[0]
            errorMessage.status = true
        }
    } 
    
    /**
     * Delete user
     */
    const showDeletetUserModal = (dataUser) => {
        statusDeleteUserModal.value = true
        userToDelete.value = dataUser
    }

    const deleteUser = async (userId, userName) => {

        try {

            const response = await UserAPI.deleteUser(userId)

            if(response.status === 200) {
                handleDeleteUserSuccess(userId, userName)
                setTimeout(resetAlert, 4000)
            }
            
        } catch (error) {
            handleDeleteUserError(error, userName)
            setTimeout(resetAlert, 4000)
        }
    }

    const hideDeleteUserModal = () => {
        statusDeleteUserModal.value = false
    }

    const handleDeleteUserSuccess = (userId, userName) => {
        showAlert(
            'Usuario eliminado con éxito', 
            `El usuario ${userName} ha sido eliminado con éxito.`,
            'success'
        )
        removeUserFromList(userId)
        statusDeleteUserModal.value = false
        router.push({ name: 'admin-home'})
    }

    const handleDeleteUserError = (error, userName) => {
        console.error(error)
        showAlert(
            'Operación fallida', 
            `Hubo un error al eliminar a ${userName}`,
            'error'
        )
        statusDeleteUserModal.value = false
        router.push({ name: 'admin-home'})
    }

    const removeUserFromList = (userId) => {
        users.value = users.value.filter(user => user.id !== userId)
    }

    /**
     * Assign classes to user
    */
    const assignClassesToUser = async(data) => {
        try {

                const response = await UserClassesAPI.assignClassesToUser(data)

                if(response.status === 201) {
                    handleAssignClassesSuccess(response.data.message)
                    setTimeout(resetAlert, 4000)
                }

                if(response.status === 400) {
                    handleAssignClassesError(response.data.message)
                    setTimeout(resetAlert, 4000)
                }
                
        } catch (error) {
            
        }
    }

    const handleAssignClassesSuccess = (message) => {
        showAlert(
            'Clases asignadas con éxito',
            message,
            'success'
        )
    }

    const handleAssignClassesError = (message) => {
        showAlert(
            'Operación fallida',
            message,
            'error'
        )
    }

    /**
     * Asignar categorías natación
     */
    const assignSwimminCategoryToUser = async(data) => {
        try {
            
            const response = await SwimmingCategoriesAPI.assignCategoryToUser(data)

            if(response.status === 201) {
                handleAssignsSwimminCategoryToUserSuccess(data.user_name)
                setTimeout(resetAlert, 4000)
            }

            if(response.status === 400) {
                handleAssignsSwimminCategoryToUserError(response.data.message)
                setTimeout(resetAlert, 4000)
            }
        } catch (error) {
            
        }
    }

    const handleAssignsSwimminCategoryToUserSuccess = (userName) => {
        showAlert(
            'Categoría asignada con éxito',
            `Se ha asignado con éxito la categoría a ${userName}`,
            'success'
        )
    }

    const handleAssignsSwimminCategoryToUserError = (message) => {
        showAlert(
            'Operación fallida',
            message,
            'error'
        )
    }

    /**
     * Alert
     */
    const showAlert = (title, subtitle, type = 'success') => {
        alert.status = true,
        alert.title = title,
        alert.subtitle = subtitle,
        alert.textColor = typeAlertTextColor(type),
        alert.icon = typeAlertIcon(type)
    }

    const resetAlert = () => {
        alert.status = false,
        alert.title = '',
        alert.subtitle = '',
        alert.textColor = '',
        alert.icon = ''
    }

return {
        users,
        user,
        loadUser,
        logOut,
        statusAddUserModal,
        showAddUserModal,
        hideAddUserModal,
        createUser,
        statusDeleteUserModal,
        showDeletetUserModal,
        hideDeleteUserModal,
        userToDelete,
        deleteUser,
        alert,
        errorMessage,
        assignClassesToUser,
        assignSwimminCategoryToUser
    }
})