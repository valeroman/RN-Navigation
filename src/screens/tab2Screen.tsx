import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const tab2Screen = () => {

    useEffect(() => {
        console.log('tabs2Screen effect');
    }, []);

    return (
        <View>
            <Text>Tab2 Screen</Text>
        </View>
    )
}
