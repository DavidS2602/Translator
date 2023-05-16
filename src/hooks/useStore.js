import { useReducer } from "react";
import { SUPPORTED_LANGUAGES } from "../Constants";
//1. initialState
const initialState = {
    fromLanguage: "auto",
    toLanguage: "es",
    fromText: "",
    loading: false,
    result: "",
};
//2. Create a reducer
function reducer(state, action) {
    const { type, payload } = action;

    if (type === "INTERCHANGE_LANGUAGE") {
        if(state.fromLanguage === "auto") return state;
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage,
        };
    }

    if (type === "SET_FROM_LANGUAGE") {
        if(state.fromLanguage === payload) return state;

        const loading = state.fromText.length !== '';
        return {
            ...state,
            fromLanguage: payload,
            result: "",
            loading,
        };
    }

    if (type === "SET_TO_LANGUAGE") {
        if(state.toLanguage === payload) return state;
        const loading = state.fromText.length !== '';
        return {
            ...state,
            toLanguage: payload,
            result: "",
            loading,
        };
    }

    if (type === "SET_FROM_TEXT") {
        return {
            ...state,
            loading: true,
            fromText: payload,
            result: "",
        };
    }

    if (type === "SET_RESULT") {
        return {
            ...state,
            loading: false,
            result: payload,
        };
    }

    return state;
}

export function useStore() {
    const [{ fromLanguage, toLanguage, fromText, loading, result }, dispatch] =
        useReducer(reducer, initialState);

    const interChangeLanguages = () => {
        dispatch({ type: "INTERCHANGE_LANGUAGE" });
    };

    const setFromLanguage = (payload) => {
        if(Object.keys(SUPPORTED_LANGUAGES).includes(payload)) {
            dispatch({ type: "SET_FROM_LANGUAGE", payload });
        }else {
            console.error(`Language code ${payload} is not supported`);
        }
    };

    const setToLanguage = (payload) => {
        dispatch({ type: "SET_TO_LANGUAGE", payload });
    };
    const setFromText = (payload) => {
        dispatch({ type: "SET_FROM_TEXT", payload });
    };
    const setResult = (payload) => {
        dispatch({ type: "SET_RESULT", payload });
    };

    return {
        fromLanguage,
        toLanguage,
        fromText,
        loading,
        result,
        interChangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult,
    };
}
