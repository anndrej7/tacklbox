'use client';

import { createContext, useReducer } from 'react';
import {
    UPDATE_SORT,
    UPDATE_VIEW_MODE,
    TOGGLE_CART_MODAL,
    GET_WISHLIST_ITEMS,
    UPDATE_PREVIOUS_ROUTE,
    UPDATE_CURRENT_ROUTE,
    UPDATE_MOBILE_FILTER,
    UPDATE_PRODUCT_LIST_LOADING,
    UPDATE_PRODUCT_FILTERS,
} from './constants';

const initialState = {
    viewMode: '4x4',
    orderBy: 'Popularity',
    showCartModal: false,
    wishlistItemIds: [],
    previousRoute: {},
    currentRoute: {},
    mobilFilterOpened: false,
    productListLoading: false,
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_VIEW_MODE:
            return { ...state, viewMode: action.payload };
        case UPDATE_SORT:
            return { ...state, orderBy: action.payload };
        case TOGGLE_CART_MODAL:
            return { ...state, showCartModal: action.payload };
        case UPDATE_PREVIOUS_ROUTE:
            return { ...state, previousRoute: action.payload };
        case UPDATE_CURRENT_ROUTE:
            return { ...state, currentRoute: action.payload };
        case UPDATE_MOBILE_FILTER:
            return { ...state, mobileFilterOpened: action.payload };
        case UPDATE_PRODUCT_LIST_LOADING:
            return { ...state, productListLoading: action.payload };
        case UPDATE_PRODUCT_FILTERS:
            return { ...state, productFilters: action.payload };
        default:
            return state;
    }
};

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}
