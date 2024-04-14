import "./Login.scss";
import { Button, Col, Form, Input, Row } from "antd";
import { formConfig } from "../../utils/helper";
import useInputChange from "../../hooks/useInputChange";
import { useAppSelector } from "../../store/hooks";
import useSubmittable from "../../hooks/useSubmittable";
import useLogin from "../../hooks/useLogin";
import React from "react";

 const LoginView: React.FC = () => {
  document.title = "Lendsqr | Empowering the smartest lenders";
  const state = useAppSelector((state) => {
    return state.app;
  });
  const [form] = Form.useForm();
  const onFieldChange = useInputChange();
  const { submittable } = useSubmittable({ form });
  const { onLogin } = useLogin();

  return (
    <Form
      {...formConfig}
      className="antd-form"
      form={form}
      onFinish={onLogin}
      fields={[
        {
          name: "email",
          value: state.request?.email,
        },
        {
          name: "password",
          value: state.request?.password,
        },
      ]}
    >
      <div className="antd-form__header">
        <h1 className="antd-form__header__title">Welcome!</h1>
        <p className="antd-form__header__subtitle">Enter details to login.</p>
      </div>
      <Row className="antd-form__row">
        <Col xs={24} sm={24} md={20} lg={20}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Emaill is invalid" },
            ]}
          >
            <Input
              placeholder="Email"
              className="antd-form__row__input"
              onChange={(e) => onFieldChange("email", e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={20} lg={20}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password
              placeholder="Password"
              className="antd-form__row__input"
              onChange={(e) => onFieldChange("password", e.target.value)}
              iconRender={(visible) =>
                visible ? (
                  <button
                    type="button"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      letterSpacing: 2,
                      color: "#39CDCC",
                      cursor: "pointer",
                    }}
                  >
                    HIDE
                  </button>
                ) : (
                  <button
                    type="button"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      letterSpacing: 2,
                      color: "#39CDCC",
                      cursor: "pointer",
                    }}
                  >
                    SHOW
                  </button>
                )
              }
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={20} lg={20}>
          <button type="button" className="antd-form__row__btn">
            FORGOT PASSWORD?
          </button>
        </Col>
        <Col xs={24} sm={24} md={20} lg={20}>
          <Button
            type="primary"
            disabled={!submittable}
            htmlType="submit"
            className="antd-form__row__submit"
            block
          >
            LOG IN
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const Login = React.memo(LoginView)
export default Login