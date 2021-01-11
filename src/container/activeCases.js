import React, { useState, useEffect } from "react";
import { Chart, Interval, Coordinate, Axis, getTheme } from "bizcharts";
import { Typography } from "antd";
const { Title } = Typography;

const BarActive = (props) => {
  const { data } = props;
  const [dataArray, setDataArray] = useState([]);
  const [percentageArray, setPercentageArray] = useState([]);
  const getArray = () => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].active !== 0) {
        total += parseInt(data[i].active);
      }
      // let percent = [];
      // if (data[i].postcode === 9998) {
      //   percent.push({
      //     area: "cases acquired overseas",
      //     percents: parseInt(data[i].active) / total,
      //   });
      //   percent.push({
      //     area: "cases acquired locally",
      //     percents: 1 - parseInt(data[i].active) / total,
      //   });
      // }
      // setPercentageArray(percent);
    }
    let newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].active !== 0) {
        newArray.push({
          post: JSON.stringify(data[i].postcode),
          cases: parseInt(data[i].active),
          percentage: parseInt(data[i].active) / total,
        });
      }
    }
    setDataArray(newArray);
  };

  useEffect(() => {
    getArray();
  });

  const cols = {
    percentage: {
      formatter: (val) => {
        val = val * 100 + "%";
        return val;
      },
    },
  };

  return (
    <>
      {" "}
      <Title level={4}>Active cases distribution</Title>
      <Chart height={320} width={600} autoFit data={dataArray}>
        <Interval position="post*cases" />
      </Chart>
      <Chart height={320} width={600} scale={cols} autoFit data={dataArray}>
        <Coordinate type="theta" radius={0.75} />
        <Axis visible={false} />
        <Interval
          position="percentage"
          color="post"
          adjust="stack"
          style={{
            lineWidth: 1,
            stroke: "#fff",
          }}
          label={[
            "count",
            {
              content: (data) => {
                return `${data.post}: ${data.percentage * 100}%`;
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
      </Chart>
    </>
  );
};

export default BarActive;
