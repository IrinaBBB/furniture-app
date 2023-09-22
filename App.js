import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './navigation/BottomTabNavigation'

const Stack = createNativeStackNavigator()
export default function App() {
    const [fontsLoaded] = useFonts({
        regular: require('./assets/fonts/Poppins-Regular.ttf'),
        light: require('./assets/fonts/Poppins-Light.ttf'),
        bold: require('./assets/fonts/Poppins-Bold.ttf'),
        medium: require('./assets/fonts/Poppins-Medium.ttf'),
        extra_bold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
        semi_bold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Bottom Navigation"
                    component={BottomTabNavigation}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: 'bold',
        fontSize: 30,
    },
})
