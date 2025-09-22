"use client"

import { RootState } from '@/core/app/store/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
    test: {
        testKey: 'testValue',
    },
};

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTest: (state, action: PayloadAction<{ testKey: string }>) => {
            console.log(')')

            if (JSON.stringify(state.test) === JSON.stringify(action.payload)) {
                return state;
            }

            return {
                ...state,
                test: {
                    ...state.test,
                    ...action.payload,
                },
            }
        },
    },
});

export const { reducer: testReducer } = testSlice;
export const { setTest } = testSlice.actions;
export const testSelector = (state: RootState) => state.test;

export const TestComponent = () => {
    const dispatch = useDispatch();
    const testData = useSelector(testSelector);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setTest({
                testKey: `testValue`
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    console.log(testData)

    return (
        <></>
    );
};