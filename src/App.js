import React, { useEffect } from "react";
import { Table, Spin, Button } from "antd";
import { connect } from "react-redux";
import dataActions from "./redux/data/actions";
import "antd/dist/antd.css";

const App = (props) => {
  // useEffect(() => {
  //   fetchData();
  // },[]);
  const { datalist, isFetchingData, fetchData } = props;
  const columns = [
    { title: "Postcode", dataIndex: "postcode" },
    { title: "New Cases", dataIndex: "new" },
    { title: "Active Cases", dataIndex: "active" },
    { title: "Total Cases", dataIndex: "total" },
    { title: "Population", dataIndex: "population" },
  ];
  return (
    <>
      <Button onClick={fetchData()}>SHOW</Button>
      <Spin spinning={isFetchingData}>
        <Table dataSource={datalist} columns={columns} />
      </Spin>
    </>
  );
};
const { fetchData } = dataActions;
export default connect(
  (state) => {
    const { datalist, isFetchingData } = state.dataReducer;
    return { datalist, isFetchingData };
  },
  { fetchData }
)(App);
