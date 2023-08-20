import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import Featured from "./daily/Featured";
import Populars from "./daily/Populars";
import NewAdded from "./daily/NewAdded";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
};

const BestSellerTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  return (
    <div className="w-full h-full">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Featured" />
        <Tab label="Popular" />
        <Tab label="New Added" />
      </Tabs>

      <div className="mt-6">
        <TabPanel value={value} index={0}>
          <Featured />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Populars />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <NewAdded />
        </TabPanel>
      </div>
    </div>
  );
};

export default BestSellerTabs;
