import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('tabs1Screen effect');
    }, []);


    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 10
        }}>
            <Text style={ styles.title }> Iconos </Text>
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="basketball-outline" />
                <TouchableIcon iconName="bicycle-outline" />
                <TouchableIcon iconName="earth-outline" />
                <TouchableIcon iconName="happy-outline" />
                <TouchableIcon iconName="rocket-outline" />
                {/* <Icon name="telescope-outline" size={80} color={ colores.primary } /> */}
                <TouchableIcon iconName="logo-snapchat" />
            </Text>
            
        </View>
    )
}
