import React from "react";
import {Pressable, ScrollView, View} from 'react-native';
import {CardAdvices} from "./CardAdvices";
import HeartIcon from "../../icons/heart-icon";

const advicesItems = [
    [
        {
            id: "1",
            image: <HeartIcon/>,
            title: "Create engaging post, captions in Instagram Create engaging post",
        },
        {
            id: "2",
            image: <HeartIcon/>,
            title: "Create engaging post, captions in Instagram Create engaging post",
        },
        {
            id: "3",
            image: <HeartIcon/>,
            title: "Create engaging post, captions in Instagram Create engaging post",
        }
    ],
    [
        {
            id: "4",
            image: <HeartIcon/>,
            title: "Create engaging post, captions in Instagram Create engaging post",
        },
        {
            id: "5",
            image: <HeartIcon/>,
            title: "Create engaging post, captions in Instagram Create engaging post",
        },
        {
            id: "6",
            image: <HeartIcon/>,
            title: "Create engaging post, captions in Instagram Create engaging post",
        }
    ]
];
export const Advices = ({onAdviceSelect}) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingLeft: 16,
                paddingRight: 16,
                gap: 8,
            }}
        >
            {advicesItems.map((group, i) => (
                <View key={i}>
                    {group.map(groupEl => (
                        <Pressable
                            key={groupEl.id}
                            onPress={() => onAdviceSelect(groupEl.title)}
                        >
                            <CardAdvices
                                image={groupEl.image}
                                title={groupEl.title}
                            />
                        </Pressable>

                    ))}
                </View>
            ))}
        </ScrollView>
    );
};
