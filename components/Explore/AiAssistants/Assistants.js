import React from "react";
import { CardAssistants } from "./CardAssistants";
import {Pressable, ScrollView} from "react-native";

const assistantsItems = [
    {id: "1", image: require("../../../assets/Lawyer.png"), text: "Lawyer"},
    {id: "2", image: require("../../../assets/english-teacher.png"), text: "English teacher"},
    {id: "3", image: require("../../../assets/Psychologist.png"), text: "Psychologist"},
    {id: "4", image: require("../../../assets/Lawyer.png"), text: "Doctor"},
];

export const Assistants = ({onAssistantSelect}) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 15,
                gap: 8,
            }}
        >
            {assistantsItems.map((item) => (
                <Pressable
                    key={item.id}
                    onPress={() => onAssistantSelect(item.text)}
                >
                    <CardAssistants
                        image={item.image}
                        text={item.text}
                    />
                </Pressable>
            ))}
        </ScrollView>
    );
};
