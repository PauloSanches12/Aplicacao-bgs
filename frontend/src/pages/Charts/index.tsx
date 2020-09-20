import React, { useEffect, useState } from 'react';
import Filters from '../../components/Filters';
import './styles.css';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from './chart-options';
import api from '../../services/api';
import { buildBarSeries, getGenderChartData, getPlatformChartData } from './helpers';

interface PieChartData {
  labels: string[];
  series: number[];
}

interface BarChartData {
  x: string;
  y: number;
}

const initialPieData = {
  labels: [],
  series: []
}

const Charts: React.FC = () => {
  const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
  const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
  const [gendermData, setGenderData] = useState<PieChartData>(initialPieData);

  useEffect(() => {
    async function getData() {
      const recordsResponse = await api.get('records');
      const gamesResponse = await api.get('games');

      const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
      setBarChartData(barData);

      const platformChatData = getPlatformChartData(recordsResponse.data.content);
      setPlatformData(platformChatData);

      const genderChartData = getGenderChartData(recordsResponse.data.content);
      setGenderData(genderChartData);
    }
    getData()
  }, [])

  return (
    <div className="page-container">
      <Filters link="/records" linkText="VER TABELA" />

      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">
            Jogos mais votados
          </h1>
          <div className="games-container">
            <Chart
              options={barOptions} 
              type="bar" 
              width="700"
              height="650"
              series={[{ data: barChartData }]}
            />
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            <Chart 
              options={{ ...pieOptions, labels: platformData?.labels }}  
              type="donut"
              series={platformData?.series}
              width="350"
            />
          </div>

          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
            <Chart 
              options={{ ...pieOptions, labels: gendermData?.labels }}  
              type="donut"
              series={gendermData?.series}
              width="350"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
