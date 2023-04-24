import React from "react";
import DataTable from 'react-data-table-component'
import { NombreTabla } from "./TableComponents";

const TableBasic = ({ columns, data, pagPerPage = 5, tableTitle }) => {

  const customStyles = {
    rows: {
      style: {
        paddingTop: "1rem",
        paddingBottom: "1rem",
      },
    },
  };

  return (
    <div>
      <DataTable
        title={<NombreTabla children={tableTitle}/>}
        columns={columns}
        data={data}
        pagination
        paginationPerPage={pagPerPage}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        paginationComponentOptions={{
          rowsPerPageText: "Filas por página:",
          rangeSeparatorText: "de",
          noRowsPerPage: false,
          selectAllRowsItem: true,
          selectAllRowsItemText: "Todos",
        }}
        customStyles={customStyles}
        noDataComponent={<p className="text-base text-gray-400">No hay información para mostrar</p>}
      />
    </div>
  );
};

export default TableBasic;
