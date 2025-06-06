import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import COLORS from '@/constants/Colors'
import React from 'react'

type SafeScreenProps = React.PropsWithChildren<object>;

const SafeScreen: React.FC<SafeScreenProps> = ({children}) => {

    const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
    {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : COLORS.background,
    }
})

export default SafeScreen

