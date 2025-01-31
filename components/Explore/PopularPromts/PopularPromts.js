import React from "react";
import {Pressable, ScrollView} from 'react-native-gesture-handler';
import {CardPromts} from "./CardPromts";
import AskIcon from "../../icons/ask-icon";
import QuestionIcon from "../../icons/question-icon";

const promtsItems = [
    {
        id: "1",
        image: <AskIcon/>,
        title: "Ask me anything!",
        subtitle: "Versatile, intelligent AI Assistant",
        colorBorder: ["#FA8661", "#F7D96D"],
        colorBlock: ["rgba(250, 134, 97, 0.07)", "rgba(247, 217, 109, 0.07)"],
    },
    {
        id: "2",
        image: <QuestionIcon/>,
        title: "Homework Helper",
        subtitle: "Help with ANY HW",
        colorBorder: ["#806CF6", "#70D8F9"],
        colorBlock: ["rgba(128, 108, 246, 0.07)", "rgba(112, 216, 249, 0.07)"],
    },
    {
        id: "3",
        image: <QuestionIcon/>,
        title: "Personal diet Planner",
        subtitle: "Personal diet plan based on calories",
        colorBorder: ["#85F5B1", "#8CE7FB12"],
        colorBlock: ["rgba(133, 245, 177, 0.07)", "rgba(133, 245, 177, 0.07)"],
    }
];
export const PopularPromts = ({onPromtsSelect}) => {
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
            {promtsItems.map((item) => (
                <Pressable
                    key={item.id}
                    onPress={() => onPromtsSelect(item.subtitle)}
                >
                    <CardPromts
                        colorBlock={item.colorBlock}
                        colorBorder={item.colorBorder}
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                </Pressable>
            ))}
        </ScrollView>
    );
};
