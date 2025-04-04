"use client";

import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "./app/services/api";
import { Provider } from "react-redux";
import AuthWrapper from "./app/(auth)/components/AuthWrapper"; 

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <AuthWrapper>
                <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
            </AuthWrapper>
        </Provider>
    );
}

export default Providers;