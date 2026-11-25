import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList, RootDrawerParamList } from "./types";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import ResultsScreen from "../screens/ResultsScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Quiz' }} />
            <Stack.Screen name="Quiz" component={QuizScreen} options={{title: 'Test'}} />
        </Stack.Navigator>
    )
}

export function RootNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={HomeStack} options={{ title: 'Main' }} />
            <Drawer.Screen name="Results" component={ResultsScreen} options={{ title: 'Results' }} />
        </Drawer.Navigator>
    );
}