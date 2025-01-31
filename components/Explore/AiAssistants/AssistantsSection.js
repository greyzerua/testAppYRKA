import React from "react";
import {SectionWrapper} from "../SectionWrapper";
import {Assistants} from "./Assistants";

export const AssistantsSection = ({onAssistantSelect}) => {
    return (
        <SectionWrapper title={'AI assistants'} >
            <Assistants onAssistantSelect={onAssistantSelect}/>
        </SectionWrapper>
    )
}