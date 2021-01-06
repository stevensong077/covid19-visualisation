import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { IgrPieChartModule } from 'igniteui-react-charts';
IgrPieChartModule.register();

const Pie = (props) => {
  const { data } = props;
  const [postcodes, setPostcodes] = useState([]);
  const [cases, setCases] = useState([]);

  const calculte = () => {
    let postcodesArray = [];
    let casesArrary = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].new !== 0) {
        postcodesArray.append(data[i].postcode);
        casesArrary.append(parseInt(data[i].new));
      }
    }
    setPostcodes(postcodesArray);
    setCases(casesArrary);
  };

  const mapFunc = () => {
    let newArray = [];
    for (let i = 0; i < postcodes.length; i++) {
      newArray.append({ value: cases[i].new, name: postcodes[i].postcode });
    }
    return newArray;
  };

  useEffect(() => {
    calculte();
  });

  const getOption = () => {
    let option = {
      title: {
        text: "New Cases",
        x: "center",
      },
      // tooltip:{

      // },
      legend: {
        orient: "vertical",
        top: 20,
        right: 5,
        data: { postcodes },
      },
      series: [
        {
          name: "Cases",
          type: "pie",
          radius: ["30%", "80%"],
          data: { mapFunc },
        },
      ],
    };
    return option;
  };
  return (
    <Card.Grid>
      {/* <ReactEcharts option={getOption} /> */}
    </Card.Grid>
  );
};

export default Pie
