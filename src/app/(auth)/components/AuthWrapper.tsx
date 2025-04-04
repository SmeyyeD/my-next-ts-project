import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { Children, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const publicRoutes = ["/login", "/register"]

function AuthWrapper({ children }: { children: React.ReactNode }) {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const router = useRouter()
    const pathname = usePathname()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToken())

        if (isAuthenticated && publicRoutes.includes(pathname)) {
            router.push("/")
        }
        if (!isAuthenticated && !publicRoutes.includes(pathname)) {
            router.push("/login")
        }
    }, [isAuthenticated, pathname, router, dispatch])

    if (!isAuthenticated && !publicRoutes.includes(pathname) && !isAuthenticated) {
        return null
    }

return (
    <>{children}</>
    )
}

export default AuthWrapper