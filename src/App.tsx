import * as React from "react";
import SongXungDang from "./addons/songxungdang/SongXungDang";
import Loading from "./shared/loading";
import Footer from "./shared/Footer";
import { addTraffic } from './shared/traffic';
interface IState {
    isLoading: boolean
}
class App extends React.Component<{}, IState> {
    constructor(props){
        super(props)
        this.state = {
            isLoading: false
        }
    }
    componentDidMount(){
        addTraffic({
            url: 'http://songxungdang.com',
            type: 0
        })
        setTimeout(()=> {
            this.setState({
                isLoading: !this.state.isLoading
            })
        }, 2000)
    }
    render(){
        return (
            <>
            <div className="margin-top">
            <SongXungDang/>
            <Footer/>
            </div>
            {
                !this.state.isLoading ? <Loading/> : ''
            }
            </>
        )
    }
}

export default App