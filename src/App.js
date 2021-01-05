import React, { useEffect, useState } from "react";
import { Table, Spin, Button } from "antd";
import { connect } from "react-redux";
import dataActions from "./redux/data/actions";
import "antd/dist/antd.css";

import { getData } from "./apis/dataApi";

const App = (props) => {
  // useEffect(() => {
  //   fetchData();
  // });
  const [dataset,setDataset] = useState([])

  const { datalist, isFetchingData, fetchData } = props;
  const columns = [
    { title: "Postcode", dataIndex: "postcode" },
    { title: "New Cases", dataIndex: "new" },
    { title: "Active Cases", dataIndex: "active" },
    { title: "Total Cases", dataIndex: "total" },
    { title: "Population", dataIndex: "population" },
  ];

  const generateDataset = async ()=>{
    const result = await getData();
    setDataset(result.data)
  }
  return (
    <>
      <Button onClick={() => generateDataset()}>Fetch</Button>
      <Spin spinning={isFetchingData}>
        <Table dataSource={dataset} columns={columns} />
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
