import { Header } from "@/Components";
import { customersData, customersGrid } from "../../data/dummy";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";

export default function Customer() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      <Box sx={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={customersData}
          columns={customersGrid}
          pageSize={7}
          rowHeight={80}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          checkboxSelection
        />
      </Box>
    </div>
  );
}
