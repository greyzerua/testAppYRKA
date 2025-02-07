import React from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from "../components/Input";
import SearchIcon from "../components/icons/search-icon";
import {Banner} from "../components/Explore/Banner";
import {AssistantsSection} from "../components/Explore/AiAssistants/AssistantsSection";
import {PromtsSection} from "../components/Explore/PopularPromts/PromtsSection";
import {AdvicesSection} from "../components/Explore/Advices/AdvicesSection";
import {ExploreInputGroup} from "../components/Explore/ExploreInputGroup";
import {Header} from "../components/Header";
import {Connects} from "../components/Explore/Сonnects";
import {useGetChats} from "../hooks/useGetChats";
import {getWelcomeMessage} from "../constants";

export const Explore = () => {
    const {
        createChat,
    } = useGetChats();
    return (
        <SafeAreaView className="flex-1 bg-bgPrimary">
            <View className='pl-4 pr-4 pb-6 pt-4 bg-bgPrimary'>
                <Header title={"Explore"}><Connects/></Header>
                <View className='mt-6'>
                    <Input
                        placeholder={'Search'}
                        icon={<SearchIcon/>}
                        inputStyle={'pl-[51]'}
                    />
                </View>
                <Banner/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AssistantsSection
                    onAssistantSelect={(name) => createChat('assistant', name, getWelcomeMessage(name))}/>
                <PromtsSection onPromtsSelect={(subtitle) => createChat('promts', subtitle, subtitle)}/>
                <AdvicesSection onAdviceSelect={(title) => createChat('advices', title, title)}/>
            </ScrollView>
            <ExploreInputGroup/>
        </SafeAreaView>
    );
};
