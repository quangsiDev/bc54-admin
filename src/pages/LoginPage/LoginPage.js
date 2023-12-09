import React from "react";
import { Button, Form, Input, message } from "antd";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { setInfoUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        message.success("Success");
        // đưa data lên redux
        console.log(res);
        dispatch(setInfoUser(res.data.content));
        navigate("/");
      })
      .catch((err) => {
        message.error("Fail");
        console.log(err);
      });
  };
  let onFinishFailed = (err) => {};
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-1/2"
      >
        <Form.Item
          label="Username"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Tài khoản không được bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Mật khẩu không được bỏ trống",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            className="bg-orange-600 hover:text-white hover:border-transparent"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
