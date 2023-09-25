import { getAuth, onAuthStateChanged } from "firebase/auth"

export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = getAuth()
    console.log("auth check")
    onAuthStateChanged(auth, () => {
        const currentUser = auth.currentUser
        const allowedPaths = ["/", "/register", "/login"]

        console.log("auth check", currentUser, to.path)

        if (!currentUser && !allowedPaths.includes(to.path) &&
            to.path !== "/login") {
            return navigateTo('/login')
        }
    })
})