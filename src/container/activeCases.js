import React, { useState, useEffect } from "react";
import { Chart, Interval, Coordinate, Axis, getTheme, Legend } from "bizcharts";
import { Typography, Card } from "antd";
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

      // let percentArray = [];
      // if (data[i].postcode === 9998) {
      //   percentArray.push({
      //     area: "cases acquired overseas",
      //     percents: parseInt(data[i].active) / total,
      //   })
      //   percentArray.push({
      //     area: "cases acquired locally",
      //     percents: 1 - parseInt(data[i].active) / total,
      //   })
      // } else if(data[i].postcode === 9999){}
      // setPercentageArray(percentArray);
    }

    let newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].active !== 0) {
        newArray.push({
          post: JSON.stringify(data[i].postcode),
          cases: parseInt(data[i].active),
          percentage: parseFloat(data[i].active / total),
        });
      }
    }
    return newArray;
  };

  useEffect(() => {
    let result = getArray();
    setDataArray(result);
  }, [data]);

  const cols = {
    percentage: {
      formatter: (val) => {
        val = val * 100 + "%";
        return val;
      },
    },
  };

  return (
    <Card bordered={false} style={{ padding: "0, 50px" }}>
      <Title level={4}>Active cases</Title>
      <Card bordered={false} style={{ padding: "20px 0 40px" }}>
        <Chart height={320} width={600} autoFit data={dataArray}>
          <Legend visible={false} />
          <Interval position="post*cases" color="post" />
        </Chart>
      </Card>
      <Chart height={320} width={600} scale={cols} autoFit data={dataArray}>
        <Coordinate type="theta" radius={0.75} />
        <Axis visible={false} />
        <Interval
          position="percentage"
          color="post"
          X
          adjust="stack"
          style={{
            lineWidth: 1,
            stroke: "#fff",
          }}
          label={[
            "*",
            {
              content: (data) => {
                return `${data.post}: ${data.percentage.toFixed(4) * 100}%`;
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
    </Card>
  );
};

export default BarActive;
