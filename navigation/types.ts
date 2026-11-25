import type {
    CompositeNavigationProp,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

export type HomeStackParamList = {
    Home: undefined;
    Quiz: { testId: string };
};

export type RootDrawerParamList = {
    Main: NavigatorScreenParams<HomeStackParamList>;
    Results: undefined;
}

export type HomeNavigation = CompositeNavigationProp<NativeStackNavigationProp<HomeStackParamList, 'Home'>, DrawerNavigationProp<RootDrawerParamList>>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootDrawerParamList{}
    }
}