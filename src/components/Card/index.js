import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Card.css'
import { UilTimes } from '@iconscout/react-unicons'
import Chart from "react-apexcharts";

const Card = (props) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
      {expanded ? <ExpandedCard param={props} setExpanded={() =>setExpanded(false) }/> : <CompactCard param={props} setExpanded={ () => setExpanded(true)}/>}
    </AnimateSharedLayout>
  );
}

function CompactCard({ param, setExpanded }) {
  const Png = param.png
  return (
    <motion.div
      className="compact_card"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radial_bar">
        <CircularProgressbarWithChildren
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span> {param.title} </span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value} </span>
        <span> Last 24 hours </span>
      </div>
    </motion.div>
  );
}
function ExpandedCard({ param, setExpanded }) {
  const data = {
  
    options: {
      chart: {
        type: 'area',
        height: 'auto,'
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        colors: ['#fff'],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        }
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-04-19T00:00:00.000Z',
          '2022-04-19T01:30:00.000Z',
          '2022-04-19T02:00:00.000Z',
          '2022-04-19T03:30:00.000Z',
          '2022-04-19T04:15:00.000Z',
          '2022-04-19T04:40:00.000Z',
          '2022-04-19T05:25:00.000Z',
        ],
      }
    }
  };
  return (
    <motion.div
      className="expanded_card"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
        // cursor: "pointer",
      }}
      // onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="expanded_icon">
        <UilTimes onClick={setExpanded}  />
      </div>
      <span> {param.title} </span>
      <div className="chart_container">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card