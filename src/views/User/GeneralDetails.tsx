/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Divider, Row } from "antd";
import { Apiresponse } from "../../model/client/response";
import "./User.scss"
import React from "react";


const Details: React.FC<any> = ({
  data,
}: {
  data: Apiresponse.Users;
}) => {
  const dataSource = Object.entries(data);
  const convertToPascalCase = (str: string) => {
    if (!str) return "";
    return str
      .replace(/([A-Z])/g, (match) => ` ${match}`) // Add space before uppercase letter
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="tab">
      {dataSource
        .filter((x) => {
          return x[0] !== "_id" && x[0] !== "bankInformation";
        })
        .map((x, i) => (
          <div key={i}>
            <p className="tab__group-name">
              {convertToPascalCase(x[0] as string).toUpperCase()}
            </p>
            <Row key={i} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {typeof x[1] === "object"
                ? Object.entries(x[1])
                    .filter((p) => {
                      return (
                        p[0] !== "organization" &&
                        p[0] !== "status" &&
                        p[0] !== "dateJoined"
                      );
                    })
                    .map((y, i) => (
                      <Col
                        key={i}
                        xs={24}
                        sm={12}
                        md={x[0] === "guarantor" ? 24 : 8}
                        lg={x[0] === "guarantor" ? 24 : 8}
                        xl={x[0] === "guarantor" ? 20 : 6}
                        xxl={x[0] === "guarantor" ? 18 : 6}
                      >
                        <p className="tab__group-item-name">
                          {convertToPascalCase(
                            y[0] === "0" || y[0] === "1"
                              ? ""
                              : y[0] === "username"
                              ? "fullName"
                              : (y[0] as string)
                          ).toUpperCase()}
                        </p>
                        <div className="tab__group-item-value tab__group-extra">
                          {typeof y[1] === "object"
                            ? (Object.entries(y[1] as any).map((p, i) => (
                                <div key={i}>
                                  <p className="tab__group-item-name">
                                    {convertToPascalCase(
                                      p[0] as string
                                    ).toUpperCase()}
                                  </p>
                                  <p className="tab__group-item-value">
                                    {p[1] as any}
                                  </p>
                                </div>
                              )) as any)
                            : y[0] === "monthlyIncome" ||
                              y[0] === "loanRepayment"
                            ? Intl.NumberFormat().format(y[1] as any)
                            : y[1]}
                        </div>
                      </Col>
                    ))
                : x[1]}
            </Row>
            <Divider style={{ borderColor: "#213F7D10" }} />
          </div>
        ))}
      <div style={{ marginBottom: 10 }} />
    </div>
  );
};

const GeneralDetails = React.memo(Details)
export default GeneralDetails;
