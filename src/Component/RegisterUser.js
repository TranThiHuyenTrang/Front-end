import React from "react";
import "../Css/register2.css";
function RegisterUser() {
  return (
    <div className="khungRegisUser">
      <h1 className="title"> Đăng kí </h1>
      <hr className="hr-Register" />
      <br />

      <div>
        <div>
          <div>
            <strong className="strong-titleUser">
              Tên của bạn <span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input-registerUser"
              placeholder="Tên của bạn.."
              required
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-titleUser">
              Email <span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input-registerUser"
              placeholder="Số điện thoại.."
              required
              type="number"
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-titleUser">
              Số điện thoại<span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input-registerUser"
              placeholder="Nhập mật khẩu.."
              required
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-titleUser">
              Mật khẩu<span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input-registerUser"
              placeholder="Nhập mật khẩu.."
              required type="password"
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-titleUser">
              Xác nhận mật khẩu <span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input-registerUser"
              required
              placeholder="Xác nhận mật khẩu.." type="password"
            />
          </div>
        </div>
        <br />
      </div>
      <button className="btn-RegisterUser"><b>Đăng kí</b></button>
      <br />
      <p className="description">
        <b>Bạn đã có tài khoản? Đăng nhập ngay</b>{" "}
      </p>
    </div>
  );
}
export default RegisterUser;
