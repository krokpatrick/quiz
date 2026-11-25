
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { TESTS } from "../data/tests";
import { Text, StyleSheet } from "react-native";

export default function DrawerContent(props: DrawerContentComponentProps) {

    const activeDrawerRoute = props.state.routes[props.state.index];

    const mainRoute = props.state.routes.find(
        (route) => route.name === 'Main'
    );

    const nestedState = mainRoute?.state;

    const activeScreen = nestedState?.routes[
        nestedState.index ?? 0
    ];

    const activeTestId = (
        activeScreen?.params as { testId?: string} | undefined
    )?.testId;

    return (
        <DrawerContentScrollView {...props}>

                <DrawerItem
                    label="Main"
                    focused={
                        activeDrawerRoute.name === 'Main' &&
                        activeScreen?.name !== 'Quiz'
                    }
                    onPress={() => 
                        props.navigation.navigate('Main', {
                            screen: 'Home',
                        })
                    }
                    />

                <DrawerItem
                    label="Results"
                    focused={activeDrawerRoute.name === 'Results'}
                    onPress={() => 
                        props.navigation.navigate('Results')
                    }
                />

                <Text style={styles.navText}>Wyniki</Text>

                {TESTS.map((test) => (
                    <DrawerItem
                        key={test.id}
                        label={test.name}
                        focused={
                            activeDrawerRoute.name === 'Main' && activeScreen?.name === 'Quiz' && activeTestId === test.id
                        }
                        onPress={() => 
                            props.navigation.navigate('Main', {
                                screen: 'Quiz',
                                params: {
                                    testId: test.id,
                                },
                            })
                        }
                        />
                ))}
        </DrawerContentScrollView>
    );
}

const styles= StyleSheet.create({
    navText: {
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 20,
        marginBottom: 8,
    }
})