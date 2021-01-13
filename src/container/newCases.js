import React, { useState, useEffect } from "react";
import { Chart, Interval, Coordinate, Axis, getTheme } from "bizcharts";
import { Typography, Table, Card } from "antd";
const { Title } = Typography;

const BarNew = (props) => {
  const { data } = props;
  const [dataArray, setDataArray] = useState([]);

  const getArray = () => {
    let newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].new !== 0) {
        newArray.push({
          post: JSON.stringify(data[i].postcode),
          cases: parseInt(data[i].new),
        });
      }
    }
    setDataArray(newArray);
  };

  useEffect(() => {
    getArray();
  }, [dataArray]);

  const columns = [
    {
      title: "Postcode",
      dataIndex: "post",
      key: "postcode",
    },
    {
      title: "New Cases",
      dataIndex: "cases",
      key: "new",
      // sorter: { compare: (a, b) => a.new - b.new },
    },
  ];

  return (
    <Card bordered={false} style={{ padding: "0 80px" }}>
      <Title level={4}>New cases</Title>
      <Table
        dataSource={dataArray}
        columns={columns}
        rowKey={(record) => record.postcode}
        style={{padding:"20px 0 80px" }}
      ></Table>
      <Chart height={320} width={600} autoFit data={dataArray}>
        <Interval position="post*cases" color="post" />
      </Chart>
      {/* <Chart height={320} width={600} autoFit data={dataArray}>
        <Coordinate type="theta" radius={0.75} />
        <Axis visible={false} />
        <Interval
          position="cases"
          color="post"
          adjust="stack"
          style={{
            lineWidth: 1,
            stroke: "#fff",
          }}
          label={[
            "*",
            {
              content: (data) => {
                return `${data.post}: ${data.cases}`;
              },
            },
          ]}
          state={{
            selected: {
              style: (t) => {
                const res = getTheme().geometries.interval.rect.selected.style(
                  t
                );
                return { ...res, fill: "red" };
              },
            },
          }}
        />
      </Chart> */}
    </Card>
  );
};

export default BarNew;
