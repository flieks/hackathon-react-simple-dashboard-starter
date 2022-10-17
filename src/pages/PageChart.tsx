import {
    Heading
} from 'styles/styled'

import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Date data',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const set1 = [ 10, 20, 10, 20,10, 20,10 ];
  const set2 = [ 10, 20, 10, 20,10, 20,10 ];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: set1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: set2,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const d = new Date()
  const dates = []
  for (let index = 1; index < 10; index++) {
    const dd = new Date(d)
    dd.setMinutes(d.getMinutes() + index)
    dates.push(dd)
  }

  debugger
  const data2 = {
    // dates, 
    datasets: [
      {
        label: 'Time data',
        data: [{ x: '2016-12-25', y: 20 }, { x: '2016-12-26', y: 10 }],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
    options: {
        scales: {
          xAxis: {
            // The axis for this scale is determined from the first letter of the id as `'x'`
            // It is recommended to specify `position` and / or `axis` explicitly.
            type: 'time',
          }
        }
      }
  };

export default function PageChart() {
    return <div style={{overflow: 'auto', height: '100vh', padding: '5em'}}>
        <Heading style={{ textAlign: 'center' }}>Chart Page</Heading>

        {/* <Doughnut data={...} /> */}
        <Line
            options={options}
            data={data}
            // {...props}
         />

        <h3>Date Example:</h3>
        <Line
            options={options}
            data={data2}
            // {...props}
         />
    </div>
}