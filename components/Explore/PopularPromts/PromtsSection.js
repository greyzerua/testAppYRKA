import React from "react";
import {SectionWrapper} from "../SectionWrapper";
import {PopularPromts} from "./PopularPromts";


export const PromtsSection = ({onPromtsSelect}) => {
    return (
        <SectionWrapper title={'Popular Promts'} styleSection={'mt-6'}>
            <PopularPromts onPromtsSelect={onPromtsSelect}/>
        </SectionWrapper>
    )
}