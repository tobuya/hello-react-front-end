import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    greetings: [], loading: false
};

const greetingsSlice = createSlice ({
    name: "greetings",
    initialState,
    reducers: {
        setGreetings: (state, action) => {
            state.greetings = action.payload;
        }
    }
});

export const { setGreetings } = greetingsSlice.actions;

const fetchGreetings = () => async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3000/");
            const data = await response.json();
            dispatch(setGreetings(data))
        }catch (error) {
            console.error(error);
        }
    };

export default greetingsSlice.reducer;
export { fetchGreetings };
