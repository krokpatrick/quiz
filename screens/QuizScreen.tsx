import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigation/types";
import {View, Text} from 'react-native';

import { TESTS } from '../data/tests';

type Props = NativeStackScreenProps<HomeStackParamList, 'Quiz'>;

export default function QuizScreen ({ route }: Props) {
    const test = TESTS.find(
        (item) => item.id === route.params.testId
    );

    if (!test) {
        return (
            <View>
                <Text> Test not found </Text>
            </View>
        );
    }

    return (
        <View>
            <Text>{test.name}</Text>
            <Text>{test.description}</Text>
            <Text>Number of tasks: {test.numberOfTasks}</Text>
        </View>
    );

}