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
  Layout
} from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import dataActions from "./redux/data/actions";
import "antd/dist/antd.css";
import BarNew from "./container/newCases";
import BarActive from "./container/activeCases";
import Map from "./container/map";
import { mapKey } from "./config/index";
import { getlocation } from "./apis/dataApi";

const { Text, Title } = Typography;
const {Footer} = Layout

const App = (props) => {
  const { datalist, isFetchingData, fetchData } = props;
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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getActiveDataset();
    calculate();
  }, [datalist]);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [totalNew, setTotalNew] = useState(0);
  const [totalActive, setTotalActive] = useState(0);
  const [totalCases, setTotalCases] = useState(0);
  const [dataDate, setDataDate] = useState("");
  const [activeDataset, setActiveDataset] = useState([]);
  let searchInput = "";

  const getActiveDataset = async () => {
    let newArray = [];
    for (let i = 0; i < datalist.length; i++) {
      if (datalist[i].active !== 0) {
        newArray.push({
          post: JSON.stringify(datalist[i].postcode),
          suburbs: (await getlocation(datalist[i].postcode)).data,
          cases: parseInt(datalist[i].active),
        });
      }
    }
    setActiveDataset(newArray);
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
      key: "postcode",
      ...getColumnSearchProps("postcode"),
    },
    {
      title: "New Cases",
      dataIndex: "new",
      key: "new",
      sorter: { compare: (a, b) => a.new - b.new },
      render: (data) => (
        <Text type={parseInt(data) !== 0 ? "danger" : "success"}>{data}</Text>
      ),
    },
    {
      title: "Active Cases",
      dataIndex: "active",
      key: "active",
      sorter: { compare: (a, b) => a.active - b.active },
      render: (data) => (
        <Text type={parseInt(data) !== 0 ? "danger" : "success"}>{data}</Text>
      ),
    },
    {
      title: "Total Cases",
      dataIndex: "cases",
      key: "cases",
      sorter: { compare: (a, b) => a.cases - b.cases },
      render: (data) => (
        <Text type={parseInt(data) !== 0 ? "danger" : "success"}>{data}</Text>
      ),
    },
    { title: "Population", dataIndex: "population" },
  ];

  return (
    <>
      <Spin spinning={isFetchingData}>
        <Result
          icon={<></>}
          title="Covid-19 in Victoria"
          subTitle={`Covid-19 information of the past 24 hours statewide.  Data date: ${dataDate}`}
        />
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
          <Text type="secondary" style={{ padding: "30px 10px" }}>
            Note: 9998 represent cases acquired overseas . 9999 represent cases
            acquired interstate.
          </Text>
        </Row>

        <Row style={{ padding: "0 200px 40px" }}>
          <Col span={12}>
            <BarNew data={datalist} />
          </Col>
          <Col span={12}>
            <BarActive data={datalist} />
          </Col>
        </Row>
        <Table
          dataSource={datalist}
          columns={columns}
          style={{ padding: "0  200px" }}
          title={() => "Search by postcode; Sort by cases"}
          bordered={true}
          rowKey={(record) => record.postcode}
        />
        <Card bordered={false} style={{ padding: "20px 100px 0" }}>
          <Title level={4}>Active Cases Distribution</Title>
          <Map
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `80vh` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `96vh` }} />}
            dataset={activeDataset}
          />
        </Card>
        <Footer style={{ textAlign: 'center' }}> 2021 Created by Steven</Footer>
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
