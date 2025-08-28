import { AuthProvider, useAuth } from '@/context/AuthContext'
import { supabase } from '@/lib/supabase'
import { Stack } from 'expo-router'
import React, { useEffect } from 'react'

export default function _layout() {
    return (
        <AuthProvider>
            <MainLayout />
        </AuthProvider>
    )
}

function MainLayout() {
    const { setAuth } = useAuth();

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            console.log('session user: ', session?.user);

            if (session) {
                // set auth
                // move to home screen
                
            } else {
                // set auth null
                // move to welcome screen
            }
        })
    })
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        />
    )
};