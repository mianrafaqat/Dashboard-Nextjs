import { Header } from "@/Components";
import { ordersData, ordersGrid, } from "../../data/dummy";
import Box from "@mui/material/Box";
import { DataGrid,  } from "@mui/x-data-grid";
import * as React from "react";

export default function Orders() {
  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

      <Box sx={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={ordersData}
        columns={ordersGrid}
        pageSize={5}
        rowHeight= {120}
        rowsPerPageOptions={[5]}  
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}

      />
    </Box>
    </div>
  );
}
