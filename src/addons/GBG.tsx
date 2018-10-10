import * as React from "react";
import { connect } from "react-redux";
import { reListPageUI } from "../reducers/init";
import ItemPage from '../DynamicPage/item'
import MainSche from "../DynamicPage/MainSche";
const IDPAGE = 10;
const listCom = {
    TKB: <MainSche/>
}
interface IProps {
    resListPageUI: any;
    reListPageUI: (id: number) => void;
  }
class GBG extends React.Component<IProps, {}> {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.reListPageUI(IDPAGE);
    }
    render(){
        return(
            <>
             <ItemPage coms={listCom} items={this.props.resListPageUI.list} />
            </>
        )
    }
}

const mapStateToProps = storeState => ({
    resListPageUI: storeState.reInit.resListPageUI
  });
  const mapDispatchToProps = {
    reListPageUI
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GBG);