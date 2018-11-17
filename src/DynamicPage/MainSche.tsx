import * as React from "react";
import { connect } from "react-redux";
import { reListSche } from "../reducers/init";
import { BASEURL2 } from "../config/const";

interface IProps {
  resListSche: any;
  reListSche: (id: any)=> void;
}
class MainSche extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.reListSche(1)
  }
  calMoney = (price, sale)=> {
    const cal = Number(price - sale)
    if(cal=== 0){
      return "MIỄN PHÍ"
    }else {
      return (cal.toLocaleString('vi-VN'))+'đ'
    }
  }
  renderListSche = ()=> {
    if(this.props.resListSche.list){
      return this.props.resListSche.list.map(element => {
        const price = Number(element.source_sche_price)
        const discount = Number(element.source_sche_sale)
        return (
          <ul data-id="row_74">
              <li data-label="Tên chương trình">
                <ul className="child" style={{padding: 0}}>
                  <li className="orange">
                    <b id="name_74"><i className="icon-layers"/> {element.source_title} - {element.source_sche_khoa}</b>
                  </li>
                  <li>
                  <i className="icon-microphone"/> Trainer: 
                    <a href={BASEURL2+'page/gioi-thieu'} style={{marginLeft: 8}}>
                      {element.source_sche_teacher}
                    </a>
                  </li>
                  <li>
                  <i className="icon-location-pin"/>  Địa chỉ: <span style={{marginLeft: 8}}>{element.source_sche_address}</span>
                  </li>
                </ul>
              </li>
              <li data-label="Thời gian">
                <p dangerouslySetInnerHTML={{__html: element.source_date_sche}}/>
              </li>
              <li data-label="Ưu đãi">
                <p
                  style={{ marginRight: 10, lineHeight: "1.8", textDecoration: 'line-through' }}
                >
                  <b style={{fontWeight: 'bold'}}>{price.toLocaleString('vi-VN')}đ</b>
                </p>
                <p style={{ lineHeight: "1.8", color: 'red' }}>
                  - {discount.toLocaleString('vi-VN')}đ
                </p>
                <p style={{ lineHeight: "1.8", color: 'green' }}>
                  <b style={{fontWeight: 'bold'}}>= {this.calMoney(element.source_sche_price, element.source_sche_sale)}</b>
                </p>
              </li>
              <li className="text-center" data-label="Đăng ký">
                <p className="red" style={{ lineHeight: "1.8" }} dangerouslySetInnerHTML={{__html: element.source_sche_number}}/>
                <p
                  className="bold-text uppercase btn btn-sm" style={{
                    color: '#fff',
                    background: '#F44336',
                    textTransform: 'uppercase',
                    display: "inline-block",
                    padding: '12px 16px'
                  }}
                >
                  <i className="spin fa fa-spinner" style={{marginRight: 8}}/>
                  <a
                    style={{color: '#fff', fontSize: '16px', fontWeight: 600}}
                    href={BASEURL2+'page/khoa-hoc/dang-ky/'+element.source_sche_id}
                    target="_blank"
                  >
                    Đăng Ký Ngay
                  </a>
                </p>
              </li>
            </ul>
        )
      })
    }
    return <h1>NULL</h1>
  }
  render() {
    return (
      <div className="calendar">
        <div className="responsive-table" id="dkmh">
          <div className="thead">
            <ul>
              <li>
                <i className="fa fa-list-alt checkout" /> Tên chương trình
              </li>
              <li>
                <i className="fa fa-clock-o checkout" /> Thời gian
              </li>
              <li>
                <i className="fa fa-thumbs-o-up checkout" /> Ưu đãi
              </li>
              <li>
                <i className="fa fa-key checkout" /> Đăng ký
              </li>
            </ul>
          </div>
          <div className="tbody">
            {this.renderListSche()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resListSche: storeState.reInit.resListSche
});
const mapDispatchToProps = {
  reListSche
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSche);
