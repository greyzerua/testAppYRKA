import React from 'react';
import { SafeAreaView } from 'react-native';

export const Wrapper = ({ children }) => {
    return (
        <SafeAreaView className='flex-1 bg-bgPrimary'>
            {children}
        </SafeAreaView>
    );
};


