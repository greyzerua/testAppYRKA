import React from "react";
import {SectionWrapper} from "../SectionWrapper";
import {Advices} from "./Advices";



export const AdvicesSection = ({onAdviceSelect}) => {
    return (
        <SectionWrapper title={'Advices'} styleSection={'mt-3'} >
            <Advices onAdviceSelect={onAdviceSelect}/>
        </SectionWrapper>
    )
}