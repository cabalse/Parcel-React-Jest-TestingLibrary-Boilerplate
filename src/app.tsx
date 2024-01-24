import React from "react";

import sum from "./utils/sum";
import List from "./list/list";

const App = () => {
    return (
        <div>
            <h1>My App</h1>
            <p>{sum(3,5)}</p>
            <div><List /></div>
        </div>
    );
}

export default App;
