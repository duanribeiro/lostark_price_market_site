import React from 'react'
import DataTable from 'react-data-table-component';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const columns = [
  {
      name: 'NAME',
      selector: row => row.name,
      sortable: true,
  },
  {
      name: 'ITEM LVL',
      selector: row => row.restricted_level,
      sortable: true,
  },
  {
    name: 'TIME LEFT',
    selector: row => row.time_left,
    sortable: true,
  },
  {
  name: 'MINIMUM BID',
    selector: row => row.minimum_bid,
    sortable: true,
  },
  {
    name: 'BUY NOW PRICE',
    selector: row => row.buy_now_price,
    sortable: true,
  },
  {
    name: 'TRADED TIMES LEFT',
    selector: row => row.traded_times,
    sortable: true,
  },
  {
    name: 'QUALITY',
    selector: row => row.quality,
    sortable: true,
  },
  {
    name: 'LAST UPDATE (UTC)',
    selector: row => row.timestamp,
    sortable: true,
  }
];

const ExpandedComponent = ({ data }) => <>
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><b>Basic Effect</b></TableCell>
          <TableCell><b>Bonus Effect</b></TableCell>
          <TableCell><b>Engraving Effect</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
          <TableCell>Strength: {data.basic_effect.Strength}</TableCell>
          <TableCell>{Object.keys(data.bonus_effect)[0]} +{Object.values(data.bonus_effect)[0]}</TableCell>
          <TableCell>{Object.keys(data.engraving_effect)[0]} +{Object.values(data.engraving_effect)[0]}</TableCell>
      </TableRow>
      <TableRow>
          <TableCell>Dexterity: {data.basic_effect.Dexterity}</TableCell>
          <TableCell>{Object.keys(data.bonus_effect)[1]} +{Object.values(data.bonus_effect)[1]}</TableCell>
          <TableCell>{Object.keys(data.engraving_effect)[1]} +{Object.values(data.engraving_effect)[1]}</TableCell>
      </TableRow>
      <TableRow>
          <TableCell>Intelligence: {data.basic_effect.Intelligence}</TableCell>
          <TableCell></TableCell>
          <TableCell>{Object.keys(data.engraving_effect)[2]} +{Object.values(data.engraving_effect)[2]}</TableCell>
      </TableRow>
      <TableRow>
          <TableCell>Vitality: {data.basic_effect.Vitality}</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
      </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</>;

export default function ItemPricesTable({
  allItemData, totalRows, handlePerRowsChange, handlePageChange, isLoading
}) {

  const paginationComponentOptions = {
    selectAllRowsItem: true,
  };

    return (
      <>
        <DataTable
          columns={columns}
          data={allItemData ? allItemData : []}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          paginationComponentOptions={paginationComponentOptions}
          progressPending={isLoading}
        />
      </>
    );
};