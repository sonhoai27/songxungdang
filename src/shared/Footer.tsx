import * as React from "react";

class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="col-xs-12 sxd-footer">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1 style={{color: 'yellow'}}>HỌC VIỆN THẾ HỆ SỐNG XỨNG ĐÁNG</h1>
                <h1 style={{fontSize: 22}}> - Phụng sự tuổi trẻ Việt - </h1>
              </div>
              <div className="col-sm-6">
                <div>
                  <a
                    href="https://www.facebook.com/info.songxungdang/"
                    target="_blank"
                  >
                    <span className="fa fa-facebook" />
                    &nbsp;Facebook
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/groups/MatMaThoiSinhVien/"
                    target="_blank"
                  >
                    <span className="fa fa-comment" />
                    &nbsp;Facebook Group
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1"
                    target="_blank"
                  >
                    <span className="fa fa-youtube" />
                    &nbsp;Youtube
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div>
                  <span className="fa fa-mobile-phone" />
                  &nbsp;0977545374
                </div>
                <div>
                  <span className="fa fa-inbox" />
                  &nbsp;info.songxungdang@gmail.com
                </div>
                <div>
                  <span className="fa fa-location-arrow" />
                  &nbsp;26/3 Phan Chu Trinh, Hiệp Phú, Quận 9, Tp.HCM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer