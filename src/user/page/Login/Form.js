import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          className="w-full"
          layout="vertical"
          name="login"
          initialValues={{
            remember: true,
          }}
          //   onFinish={onFinish}
          autoComplete="off"
          //   onValuesChange={handleValuesChange}
        >
          <h1 className="text-lg mb-4">Login</h1>
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            hasFeedback
          >
            <Input prefix={<UserOutlined />} placeholder="Username..." />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<UnlockOutlined />}
              placeholder="Password..."
            />
          </Form.Item>
          <p className="pb-3">
            Don't have an account?
            <Link className="underline" to="/register">
              Sign up
            </Link>
          </p>

          <Form.Item>
            <Button
              className="bg-orange-400 hover:bg-orange-500 !border-white !text-white ml-auto disabled:!text-gray-800"
              htmlType="submit"
              //   disabled={!isFormDirty || loading}
              //   loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default React.memo(FormLogin);
