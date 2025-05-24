import AuthAPI from "@/api/AuthAPI"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import { ref } from "vue"
import { useChatIAStore } from "./chat"

export const useUserStore = defineStore('user', () => {

    const router = useRouter()

    const chat = useChatIAStore()

    const user = ref({})
    const statusAddUserModal = ref(false) 
    const statusEditUserModal = ref(false)
    const statusDeleteUserModal = ref(false)

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

    const hideAddUserModal = () => {
        statusAddUserModal.value = false
    }
    
    /**
     * Edit user
     */
    const showEditUserModal = () => {
        statusEditUserModal.value = true
    }

    const hideEditUserModal = () => {
        statusEditUserModal.value = false
    }

    /**
     * Delete user
     */
    const showDeletetUserModal = () => {
        statusDeleteUserModal.value = true
    }

    const hideDeleteUserModal = () => {
        statusDeleteUserModal.value = false
    }

return {
        user,
        loadUser,
        logOut,
        statusAddUserModal,
        showAddUserModal,
        hideAddUserModal,
        statusEditUserModal,
        showEditUserModal,
        hideEditUserModal,
        statusDeleteUserModal,
        showDeletetUserModal,
        hideDeleteUserModal
    }
})