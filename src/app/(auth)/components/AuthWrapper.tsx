"use client"
import { loadToken } from '@/store/authSlice'
import { RootState } from '@/store/store'  
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const publicRoutes = ["/login", "/register"]

function AuthWrapper({ children }: { children: React.ReactNode }) {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const router = useRouter()
    const pathname = usePathname()
    const dispatch = useDispatch()

    /* useEffect(() => {
        dispatch(loadToken())

        if (isAuthenticated && publicRoutes.includes(pathname)) {
            router.push("/")
        }
        if (!isAuthenticated && !publicRoutes.includes(pathname)) {
            router.push("/login")
        }
    }, [isAuthenticated, pathname, router, dispatch])

    if (!isAuthenticated && !publicRoutes.includes(pathname)) {
        return null
    } */

    return <>{children}</>
}

export default AuthWrapper;