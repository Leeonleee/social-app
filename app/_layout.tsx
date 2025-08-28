import { AuthProvider, useAuth } from '@/context/AuthContext'
import { supabase } from '@/lib/supabase'
import { getUserData } from '@/services/userService'
import { User } from '@supabase/supabase-js'
import { Stack, useRouter } from 'expo-router'
import React, { useEffect } from 'react'

export default function _layout() {
    return (
        <AuthProvider>
            <MainLayout />
        </AuthProvider>
    )
}

function MainLayout() {
    const { setAuth, setUserData } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            console.log('session user: ', session?.user?.id);
            if (session) {
                setAuth(session?.user);
                updateUserData(session?.user)
                router.replace('/home')
            } else {
                setAuth(null);
                router.replace('/welcome')
            }
        });

        // Cleanup subscription on unmount
        return () => subscription.unsubscribe();
    }, [router, setAuth]); // Include dependencies

    const updateUserData = async(user: User) => {
        let res = await getUserData(user?.id);
        if (res.success) {
            setUserData(res.data);
        }
    }
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        />
    )
};