/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, DatePicker, Select, Row, Col, Button, DatePickerProps } from "antd";
import { Apiresponse } from "../../model/client/response";
import { formConfig, userStatus } from "../../utils/helper";
import dateImg from "../../assets/icons/calendar.png";
import "./User.scss";
import React from "react";

interface FilterProps {
  setFilters: (value: any) => void;
  filters: any;
  clearFilters: () => void;
  confirm: () => void;
}

const FilterForm: React.FC<FilterProps> = ({
  setFilters,
  filters,
  clearFilters,
  confirm,
}) => {
  const handleFilterChange = (
    key: keyof Apiresponse.PersonalInformation,
    value: any
  ) => {
    
    setFilters({ ...filters, [key]: value });
  };

  const onChange: DatePickerProps['onChange'] = (date) => {
    setFilters({...filters, dateJoined: date})
  };

  const handleReset = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      phoneNumber: "",
      status: "",
      dateJoined: null,
    });
    clearFilters();
  };

  const handleConfirm = () => {
    confirm();
  };
  return (
    <Form
      {...formConfig}
      fields={[
        {
          name: "organization",
          value: filters?.organization,
        },
        {
          name: "username",
          value: filters?.username,
        },
        {
          name: "email",
          value: filters?.email,
        },
        {
          name: "phoneNumber",
          value: filters?.phoneNumber,
        },
        {
          name: "dateJoined",
          value: filters?.dateJoined,
        },
        {
          name: "phoneNumber",
          value: filters?.phoneNumber,
        },
        {
          name: "status",
          value: filters?.status,
        },
      ]}
      style={{ width: "18.5rem", padding: "1rem",  }}
    >
      <Form.Item
        name="organization"
        label={
          <p
            style={{
              color: "#545F7D",
              fontSize: 14,
            }}
          >
            Organization
          </p>
        }
      >
        <Input
          placeholder="Organization"
          onChange={(e) => handleFilterChange("organization", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="username"
        label={
          <p
            style={{
              color: "#545F7D",
              fontSize: 14,
            }}
          >
            Username
          </p>
        }
      >
        <Input
          placeholder="Username"
          onChange={(e) => handleFilterChange("username", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="email"
        label={
          <p
            style={{
              color: "#545F7D",
              fontSize: 14,
            }}
          >
            Email
          </p>
        }
      >
        <Input
          placeholder="Email"
          onChange={(e) => handleFilterChange("email", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="dateJoined"
        label={
          <p
            style={{
              color: "#545F7D",
              fontSize: 14,
            }}
          >
            Date
          </p>
        }
      >
        <DatePicker
          suffixIcon={<img src={dateImg} />}
          placeholder="Date"
          onChange={onChange}
          format="YYYY-MM-DD"
          style={{ width: "100%", padding: "1rem" }}
        />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label={
          <p
            style={{
              color: "#545F7D",
              fontSize: 14,
            }}
          >
            Phone Number
          </p>
        }
      >
        <Input
          placeholder="Phone Number"
          onChange={(e) => handleFilterChange("phoneNumber", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="status"
        label={
          <p
            style={{
              color: "#545F7D",
              fontSize: 14,
            }}
          >
            Status
          </p>
        }
      >
        <Select
          placeholder="Select"
          allowClear
          onChange={(e) => handleFilterChange("status", e)}
        >
          <Select.Option value={userStatus.ACTIVE}>
            {userStatus.ACTIVE}
          </Select.Option>
          <Select.Option value={userStatus.INACTIVE}>
            {userStatus.INACTIVE}
          </Select.Option>
          <Select.Option value={userStatus.BLACKLISTED}>
            {userStatus.BLACKLISTED}
          </Select.Option>
          <Select.Option value={userStatus.PENDING}>
            {userStatus.PENDING}
          </Select.Option>
        </Select>
      </Form.Item>
      <Row gutter={10}>
        <Col span={12}>
          <Button
            block
            type="default"
            onClick={handleReset}
            style={{
              padding: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#545F7D",
              color: "#545F7D",
            }}
          >
            Reset
          </Button>
        </Col>
        <Col span={12}>
          <Button
            block
            type="primary"
            onClick={() => handleConfirm()}
            style={{
              padding: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const Filter = React.memo(FilterForm)

export default Filter;
