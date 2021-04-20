import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const tab3Screen = () => {

    useEffect(() => {
        console.log('tabs3Screen effect');
    }, [])

    return (
        <View>
            <Text>Tab3 Screen</Text>
        </View>
    )
}
