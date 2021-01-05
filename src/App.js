import React, { useEffect, useState } from "react";
import {
  Table,
  Spin,
  Button,
  Result,
  Input,
  Space,
  Statistic,
  Card,
  Row,
  Col,
  Typography,
} from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import dataActions from "./redux/data/actions";
import "antd/dist/antd.css";
// import echarts from "echarts/lib/echarts";
// import "echarts/lib/chart/pie";
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/title";
// import "echarts/lib/component/legend";
// import "echarts/lib/component/markPoint";
// import ReactEcharts from "echarts-for-react";

const { Text } = Typography;

// const pieNew = (props) => {
//   const { data } = props;

// };

const App = (props) => {
  const { datalist, isFetchingData, fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    calculate();
  });

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [totalNew, setTotalNew] = useState(0);
  const [totalActive, setTotalActive] = useState(0);
  const [totalCases, setTotalCases] = useState(0);
  const [dataDate, setDataDate] = useState("");
  // const [test, setTest] = useState(0);
  let searchInput = "";
  const calculate = () => {
    let newCases = 0;
    let activeCases = 0;
    let total = 0;
    for (let i = 0; i < datalist.length; i++) {
      newCases += parseInt(datalist[i].new);
      activeCases += parseInt(datalist[i].active);
      total += parseInt(datalist[i].cases);
      if (i === 0) {
        setDataDate(datalist[i].data_date);
      }
    }
    setTotalNew(newCases);
    setTotalActive(activeCases);
    setTotalCases(total);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Postcode",
      dataIndex: "postcode",
      ...getColumnSearchProps("postcode"),
    },
    {
      title: "New Cases",
      dataIndex: "new",
      sorter: { compare: (a, b) => a.new - b.new },
      render: (data) => (
        <Text type={parseInt(data) !== 0 ? "danger" : "success"}>{data}</Text>
      ),
    },
    {
      title: "Active Cases",
      dataIndex: "active",
      sorter: { compare: (a, b) => a.active - b.active },
      render: (data) => (
        <Text type={parseInt(data) !== 0 ? "danger" : "success"}>{data}</Text>
      ),
    },
    {
      title: "Total Cases",
      dataIndex: "cases",
      sorter: { compare: (a, b) => a.cases - b.cases },
      render: (data) => (
        <Text type={parseInt(data) !== 0 ? "danger" : "success"}>{data}</Text>
      ),
    },
    { title: "Population", dataIndex: "population" },
  ];

  return (
    <>
      <Result
        icon={<></>}
        title="Covid-19 in Victoria"
        subTitle={`Data date: ${dataDate}`}
        // extra={<Button onClick={calculate}>Fetch Data</Button>}
      />
      ,
      <Spin spinning={isFetchingData}>
        <Row gutter={16} style={{ padding: "0 300px 40px" }}>
          <Col span={8}>
            <Card>
              <Statistic
                title="New Cases"
                value={totalNew}
                valueStyle={
                  totalNew === 0 ? { color: "#3f8600" } : { color: "#cf1322" }
                }
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Active Cases"
                value={totalActive}
                valueStyle={
                  totalActive === 0
                    ? { color: "#3f8600" }
                    : { color: "#cf1322" }
                }
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Total Cases"
                value={totalCases}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
        </Row>
        <Table
          dataSource={datalist}
          columns={columns}
          style={{ padding: "0  200px" }}
          title={() => "Search by postcode, sort by cases"}
          bordered={true}
        />
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
