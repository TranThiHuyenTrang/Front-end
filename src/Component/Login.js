import React from "react";
import "../Css/login.css";
function Login() {
  return (
    <div className="khungLogin">
      <h1 className="title-Login"> Đăng nhập </h1>
      <hr className="hr-Login" />
      <img className="img-logo " src="logo2.png"/>
      <h5 className="queen"><i>Queen Party</i> </h5>
      <div className="contentLogin">
        <div>
          <div>
            <strong className="strong-title-Login">
              Email <span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-inputLogin"
              placeholder="Nhập email.."
              required
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-title-Login">
              Mật khẩu<span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-inputLogin"
              placeholder="Nhập mật khẩu.."
              required type="password"
            />
          </div>
        </div>
      </div>
      <br />
      <button className="btn-Login"><b>Đăng nhập</b></button>
      <br />
      <p className="description-Login">
        <b>Bạn chưa có tài khoản? Đăng kí ngay</b>{" "}
      </p>
    </div>
  );
}
export default Login;
