import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "../navigation/types";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { TESTS } from "../data/tests"
import { useSafeAreaInsets } from "react-native-safe-area-context";



export default function HomeScreen() {
    const navigation = useNavigation<HomeNavigation>();
    const insets = useSafeAreaInsets();    

    return (
        <View style={styles.container}>
            {TESTS.map((test) => (
                <Pressable key={test.id} style={styles.test} onPress={() => navigation.navigate('Quiz', { testId: test.id})}>
                    <Text>{test.name}</Text>
                    <Text>{test.description}</Text>
                    <Text>{test.numberOfTasks} pytań</Text>
                </Pressable>
            ))}
            
            <View style={[styles.footer, {paddingBottom: 5 + insets.bottom}]}>
                <Pressable onPress={() => navigation.navigate('Results')} style={styles.resultsButton}>
                    <Text style={styles.footerText}>
                        Wyniki
                    </Text>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    test: {
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 8,
    },
    footer: {
        marginTop: 'auto',
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#1e1192',
    },
    resultsButton: {
        width: '100%',
        alignItems: 'center',
    },
    footerText: {
        fontWeight: 'bold',
        color: 'white',
    },
})



