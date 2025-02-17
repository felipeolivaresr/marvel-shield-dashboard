import { ref } from 'vue'
import { auth } from './firebaseConfig.js'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const user = ref(null)
const error = ref(null)

const useAuth = () => {
  const signup = async (email, password) => {
    error.value = null
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      user.value = res.user
      return res
    } catch (err) {
      error.value = err.message
    }
  }

  const login = async (email, password) => {
    error.value = null
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      user.value = res.user
      return res
    } catch (err) {
      error.value = err.message
    }
  }

  const logout = async () => {
    error.value = null
    try {
      await signOut(auth)
      user.value = null
    } catch (err) {
      error.value = err.message
    }
  }

  return { user, error, signup, login, logout }
}

export default useAuth
