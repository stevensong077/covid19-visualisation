import React, { useState, useEffect } from "react";
import { Chart, Interval, Coordinate, Axis, getTheme } from "bizcharts";
import { Typography } from "antd";
const { Title } = Typography;

const Bar = (props) => {
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
  });

  return (
    <>
      <Title level={4}>New cases distribution</Title>
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
    </>
  );
};

export default Bar;
