import BackButton from '@/components/BackButton'
import ScreenWrapper from '@/components/ScreenWrapper'
import { theme } from '@/constants/theme'
import { hp, wp } from '@/helpers/common'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function login() {
    const router = useRouter();
    return (
        <ScreenWrapper>
            <StatusBar style="dark" />
            <View style={styles.container}>
                <BackButton router={router}/>
            </View>
        </ScreenWrapper>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5)
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text
    },
    form: {
        
    }
}) 