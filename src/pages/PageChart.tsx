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
        text: 'Chart.js Line Chart',
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

export default function PageChart() {
    return <div>
        <Heading style={{ textAlign: 'center' }}>Chart Page</Heading>

        {/* <Doughnut data={...} /> */}
        <Line
            options={options}
            data={data}
            // {...props}
         />
    </div>
}