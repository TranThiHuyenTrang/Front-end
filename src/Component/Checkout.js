import React from "react";
import "../Css/checkout.css";
function Checkout() {
  return (
    <div className="wrapper">
      <div classNameName="container">
        <form method="post" action="">
          <div className="flexKhung">
            <div className="khungInfo">
              <div class="panel-info">
                <div className="panel-heading1">
                  <h3 className = "title-Checkout">
                    Đơn hàng
                  </h3>
                </div>
                <h4 className="strong-titleCheck"> Danh sách dịch vụ </h4>
                <hr className="hr-payment"/>
                  <div class="product-flex">
                    <div>
                      <img className="imageCheck" src="logo192.png" />
                    </div>
                    <div>Cá kho</div>
                    <div>
                      25.000 <span>VNĐ</span>
                    </div>
                  </div>
                  <hr className="hr-payment"/>
                  <div class="product-flex">
                    <div>
                      <img className="imageCheck" src="logo192.png" />
                    </div>
                    <div>Cá kho</div>
                    <div>
                      25.000 <span>VNĐ</span>
                    </div>
                  </div>
                  <hr className="hr-payment"/>
                  <div class="product-flex">
                    <div>
                      <img className="imageCheck" src="logo192.png" />
                    </div>
                    <div>Cá kho</div>
                    <div>
                      25.000 <span>VNĐ</span>
                    </div>
                  </div>
                  <hr className="hr-payment"/>
                  <div class="product-flex">
                    <div>
                      <strong>Tạm tính</strong>
                    </div>
                    <div>
                      <strong>
                        <b>
                          25.000 <span>VNĐ</span>
                        </b>
                      </strong>
                    </div>
                  </div> <br />
                  <div class="product-flex">
                    <div>
                      <strong>Tổng đơn hàng</strong>
                    </div>
                    <div>
                      <strong>
                        <b>
                          25.000 <span>VNĐ</span>
                        </b>
                      </strong>
                    </div>
                  </div>
                </div>
              
            </div>
            {/* Địa chỉ giao hàng */}
            <div className="khungInfo">
              <div className="panel-info">
                <div className="panel-heading1">
                  <h3 className="title-Checkout">
                    <b>Địa chỉ</b>
                  </h3>
                </div>
                <h4 className="strong-titleCheck"> Địa chỉ giao hàng </h4>
                <div className="panel-body">
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Tên của bạn <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Tên của bạn.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Số điện thoại <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Số điện thoại của bạn.." required type="number"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Địa chỉ  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Địa chỉ của bạn.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Thời gian giao hàng  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input className="form-input-checkout" type="date" required />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Số mâm  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        type="number"
                        placeholder="Số mâm.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Ghi chú</strong>
                    </div>
                    <div>
                      <textarea
                        className="form-input-checkout"
                        placeholder="Ghi chú.."
                      />
                    </div>
                  </div>
                  <div>
                    <button className="btn-Checkout"><b>Tiếp tục </b></button>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
