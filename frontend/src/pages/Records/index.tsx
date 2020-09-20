import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { RecordsResponse } from './types';
import { formatDate } from './helpers';
import Pagination from './Pagination';
import Filters from '../../components/Filters';

const Records: React.FC = () => {
  const [ recordsResponse, setRecordsResponse ] = useState<RecordsResponse>();
  const [ activePage, setActivePage ] = useState(0);
  
  useEffect(() =>{
    api.get(`records?linesPerPage=12&page=${activePage}`).then(response => setRecordsResponse(response.data))
  }, [activePage]);

  const handlePageChange = (index: number) => {
    setActivePage(index)
  }

  return (
    <div className="page-container">
      <Filters link="/charts" linkText="VER GRÁFICO" />
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        
        <tbody>
          {recordsResponse?.content.map(records => {
            return (
              <tr key={records.id}>
              <td>{formatDate(records.moment)}</td>
              <td>{records.name}</td>
              <td>{records.age}</td>
              <td className="text-secondary">{records.gamePlatform}</td>
              <td>{records.genreName}</td>
              <td className="text-primary">{records.gameTitle}</td>
            </tr>
            )
          })}
          
        </tbody>
      </table>
      <Pagination 
        activePage={activePage} 
        totalPages={recordsResponse?.totalPages} 
        goToPage={handlePageChange} 
      />
    </div>
  );
}

export default Records;
