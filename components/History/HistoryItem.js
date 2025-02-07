import React from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import Reanimated, {
    useAnimatedStyle,
    interpolate,
    withSpring,
    runOnJS,
    useDerivedValue,
    LinearTransition,
    SlideOutLeft
} from 'react-native-reanimated';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

const { width } = Dimensions.get('window');
const swipeLimit  = width / 1.4;

export const HistoryItem = ({ item, onDelete }) => {
    const renderRightActions = (prog, drag) => {
        const newWidth = useDerivedValue(() => {
            return drag.value <= -140 ? interpolate(prog.value, [0, 1], [80, 138]) : 80;
        });
        const styleAnimation = useAnimatedStyle(() => {
            if (drag.value <= -swipeLimit) {
                runOnJS(onDelete)(item.id);
            }
            return {
                width: withSpring(newWidth.value, { damping: 300, stiffness: 200 }),

            };
        });

        return (
            <Reanimated.View
                style={styleAnimation}
                className="bg-red-600 rounded-xl justify-center h-full"
            >
                <Pressable className="px-4 py-2" onPress={() => runOnJS(onDelete)(item.id)}>
                    <Text className="text-white font-semibold">Delete</Text>
                </Pressable>
            </Reanimated.View>
        );
    };

    return (
        <Reanimated.View
            className="mt-5 flex-1 shadow-lg"
            exiting={SlideOutLeft}
            layout={LinearTransition}
        >
            <ReanimatedSwipeable renderRightActions={renderRightActions}>
                <Reanimated.View
                    className="text-left justify-between bg-bgSecondary p-4 rounded-xl"
                >
                    <Text className="text-lg font-bold text-white mb-2">
                        {item.selectedEntity}
                    </Text>
                    <View className="flex-row items-center justify-between">
                        <Text
                            className="text-lg text-white max-w-[75%] truncate"
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            {item.messages[item.messages.length - 1]?.text}
                        </Text>
                        <Text className="text-sm text-gray-400">
                            {item.type}
                        </Text>
                    </View>
                </Reanimated.View>
            </ReanimatedSwipeable>
        </Reanimated.View>
    );
};
