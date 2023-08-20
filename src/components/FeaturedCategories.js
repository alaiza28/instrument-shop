import React, { useState } from 'react'
import {Tabs, Tab} from "@material-ui/core";
import Guitars from './featured/Guitars';
import Piano from './featured/Piano';
import Violin from './featured/Violin';
import Drums from './featured/Drums';

const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <h1>{children}</h1>}</div>;
  };

const FeaturedCategories = () => {
    const [value, setValue] = useState(0)
    const handleTabs = (e, val) =>{
        console.warn(val)
        setValue(val)
    }
  return (
    <div className='w-full h-[700px] py-10'>
        <div className='px-40'>
            <div className='flex items-center'>
            <h3 className='mr-20 font-primary text-3xl font-bold'>Featured Categories</h3>
            <Tabs value={value} onChange={handleTabs}>
                <Tab label="Guitars"/>
                <Tab label="Piano"/>
                <Tab label="Violin"/>
                <Tab label="Drums"/>
            </Tabs>
            </div>
            

            <TabPanel value={value} index={0}>
                <div>
                    <Guitars />
                </div>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Piano />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Violin />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <Drums />
            </TabPanel>

            
        </div>
    </div>
  )
}

export default FeaturedCategories