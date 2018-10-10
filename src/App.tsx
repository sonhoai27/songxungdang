import * as React from "react";
import GBG from "./addons/GBG";
import Loading from "./shared/loading";
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
            <GBG/>
            </div>
            {
                !this.state.isLoading ? <Loading/> : ''
            }
            </>
        )
    }
}

export default App