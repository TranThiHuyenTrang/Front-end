import React from "react";
import "../Css/register.css";
function Register1() {
  return (
      <div className="khung-re ">
          <h1 className="title"> Đăng kí </h1>
          <hr className ="hr-tag"/>
          <img className="img-logo " src="logo2.png"/>
          <h5 className="queen"><i>Queen Party</i> </h5>
          <div className="content">
            <p><b>Bạn là ai? </b></p>
            <p><input type="radio" name="gender" value="vendor" checked /> <b>Người cung cấp dịch vụ</b></p>
            <p><input type="radio" name="gender" value="user" /> <b>Người sử dụng dịch vụ </b></p>
          </div>
          <button className="btn1"><b>Tiếp tục </b></button>
          <p className="descript-Register">
            <b>Bạn đã có tài khoản? Đăng nhập ngay</b>{" "}
          </p>
      </div>
  );
  }
  export default Register1;
