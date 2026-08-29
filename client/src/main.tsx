import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider> 
        </BrowserRouter>
    </StrictMode>
);

/*  After creating the AuthContext, we can integrate the authentication in our project. but before that we need to wrap our application using the context. 
    so that we can access the context data in application.

    after mounting <App /> inside <AuthProvider /> we can access any data in our application from our context.
*/