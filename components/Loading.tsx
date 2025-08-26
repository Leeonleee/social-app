import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';
import { theme } from '../constants/theme';

type LoadingProp = {
    size?: ActivityIndicatorProps['size'];
    color?: string;
}

export default function Loading({
    size = "large",
    color = theme.colors.primary
}: LoadingProp) {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={size} color={color}/>
        </View>
    )
}
