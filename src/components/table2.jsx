import React from 'react';
import { Table } from '@mantine/core';
import './table_style.css';

const CropTable2 = ({ data }) => {
  const rows = data.map((crop) => (
    <tr key={crop.Crop}>
      <td><span className='col'>{crop.Crop}</span></td>
      <td><span className='col'>{crop["Average Yield (Kg/Ha)"] !== undefined ? crop["Average Yield (Kg/Ha)"].toFixed(2) : ""}</span></td>
      <td><span className='col'>{crop["Average Cultivation Area (Ha)"] !== undefined ? crop["Average Cultivation Area (Ha)"].toFixed(2) : ""}</span></td>
    </tr>
  ));

  return (
    <Table className="table-bordered" striped highlightOnHover>
      <thead>
        <tr>
          <th>Crop</th>
          <th>Average Yield (Kg/Ha)</th>
          <th>Average Cultivation Area (Ha)</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default CropTable2;
