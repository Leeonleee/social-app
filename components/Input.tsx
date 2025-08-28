import { theme } from '@/constants/theme';
import { hp } from '@/helpers/common';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
    icon?: React.ReactNode;
    containerStyles?: ViewStyle;
    inputRef?: React.RefObject<TextInput>;
}

const Input = ( {
    icon,
    containerStyles,
    inputRef,
    ...props
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyles]}>
        {
            icon && icon
        }
        <TextInput
            style={{flex: 1}}
            placeholderTextColor={theme.colors.textLight}
            ref={inputRef}
            {...props}
        />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hp(7.2),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap: 12
    }
})