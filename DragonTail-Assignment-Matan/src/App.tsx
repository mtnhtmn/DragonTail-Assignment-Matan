import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OrderDetailsTree from "./components/OrderDetails/OrderDetailsTree.tsx";
import OrderList from "./components/OrderList/OrderList.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/order/:id" element={<OrderDetailsTree/>}/>
                    <Route path="/" element={<OrderList/>}/>
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
