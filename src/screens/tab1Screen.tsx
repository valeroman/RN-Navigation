import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


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
                <Icon name="airplane-outline" size={80} color={ colores.primary } />
                <Icon name="basketball-outline" size={80} color={ colores.primary } />
                <Icon name="bicycle-outline" size={80} color={ colores.primary } />
                <Icon name="earth-outline" size={80} color={ colores.primary } />
                <Icon name="happy-outline" size={80} color={ colores.primary } />
                <Icon name="rocket-outline" size={80} color={ colores.primary } />
                {/* <Icon name="telescope-outline" size={80} color={ colores.primary } /> */}
                <Icon name="logo-snapchat" size={80} color={ colores.primary } />
            </Text>
            
        </View>
    )
}
