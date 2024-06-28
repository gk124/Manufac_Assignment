import React from 'react';
import { Table } from '@mantine/core';
import './table_style.css';

const CropTable1 = ({ data }) => {
  const rows = data.map((crop) => (
    <tr key={crop.Year}>
      <td><span className='col'>{crop.Year}</span></td>
      <td><span className='col'>{crop["Crop with Maximum Production"]}</span></td>
      <td><span className='col'>{crop["Crop with Minimum Production"]}</span></td>
    </tr>
  ));

  return (
    <Table className="table-bordered" striped highlightOnHover>
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Maximum Production</th>
          <th>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default CropTable1;
