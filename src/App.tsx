import * as React from "react";
import ClientHeader from './shared/Header';
import Footer from "./shared/Footer";
import SongXungDang from "./addons/songxungdang/SongXungDang";

class App extends React.Component {
    render(){
        return (
            <>
            <ClientHeader/>
            <SongXungDang/>
            <Footer/>
            </>
        )
    }
}

export default App