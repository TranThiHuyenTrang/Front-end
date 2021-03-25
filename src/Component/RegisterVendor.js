import React from "react";
import "../Css/registerforVendor.css";
function RegisterVendor() {
  return (
    <div className="khungRegis">
      <h1 className="title"> Đăng kí </h1>
      <hr className="hr-DK" /><br />
      <div className="flex-form">
        <div>
            <div>
                <div>
                <strong className="strong-title-Vendor">
                    Tên nhà hàng <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Tên nhà hàng.."
                    required
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title-Vendor">
                    Số điện thoại <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Số điện thoại.."
                    required
                    type="number"
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title-Vendor">
                    Mật khẩu <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Nhập mật khẩu.."
                    required type="password"
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title-Vendor">
                    Xác nhận mật khẩu <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input className="form-input" type="password" required placeholder="Xác nhận mật khẩu.." />
                </div>
            </div><br />
        </div>
        {/*  */}
        <div>
            <div>
                <div>
                <strong className="strong-title-Vendor">
                    Email <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Email của bạn.."
                    required
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title-Vendor">
                    Địa chỉ <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Địa chỉ của bạn.."
                    required
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title-Vendor">
                    Thời gian mở cửa
                </strong>
                </div>
                <div>
                <input className="form-input" />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title-Vendor">
                    Ảnh
                </strong>
                </div>
                <div>
                <input
                    className="strong-title-Vendor"
                    placeholder="Ảnh.."
                    type="file"
                />
                </div>
            </div><br />
        </div>
      </div>
        <div className="mar">
            <div>
                <strong className="strong-title-Vendor">
                    Mô tả
                </strong>
            </div>
            <div>
                <textarea className="input-1" />
            </div>
        </div><br />
        <button className="btn-DK"><b>Đăng kí</b></button><br />
        <p className="title-description"><b>Bạn đã có tài khoản? Đăng nhập ngay</b> </p>
    </div>
  );
}
export default RegisterVendor;
