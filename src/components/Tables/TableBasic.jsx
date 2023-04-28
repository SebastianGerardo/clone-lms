import React from "react";
import DataTable from 'react-data-table-component'
import { NombreTabla } from "./TableComponents";

const TableBasic = (props) => {

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
        // title={<NombreTabla children={props.tableTitle}/>}
        pagination
        paginationPerPage={5}
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
        {...props}
      />
    </div>
  );
};

export default TableBasic;
