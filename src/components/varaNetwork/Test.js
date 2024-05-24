import React from "react";

export const Provider = ({ trigger, children }) => {
    const doSomething = () => console.log("hey");

    // Invoke the children function and pass the additional values
    return <>{trigger({ doSomething })}{children}</>;
}

// Usage in your widget
