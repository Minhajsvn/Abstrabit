import "../Portfolio/Portfolio.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'

const data = [
  { id: 0, value: 25, label: 'Bajaj Finsery', color: "#6C63FF" },
  { id: 1, value: 20, label: 'Shriram Finance', color: "#FA9D17" },
  { id: 2, value: 20, label: 'Mahindra Finance', color: "#B9C606" },
  { id: 3, value: 20, label: 'Utkarsh Small Finance Bank', color: "#59CBD3" }
];

const size = {
  width: 700,
  height: 200,
  margin: {top: 40, right: 40, bottom: 40, left: 40}
};

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolioCaption">
        <h3>Your FD Portfolio</h3>
        <div className="deposit">
          Deposit Amt<FontAwesomeIcon icon={faAngleDown} className='space-left'  />
        </div>
      </div>
      <div className="pieChartContainer">
          <div className="pieChart">
            <PieChart
              series={[
                {
                  arcLabelMinAngle: 45,
                  data,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: 'white',
                  fontWeight: 'bold',
                },
              }}
              {...size}
            />
        </div>
        
      </div>
    </div>
  )
}
