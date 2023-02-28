import { Header } from "@/Components";
import { employeesData, employeesGrid } from "../../data/dummy";
import Box from "@mui/material/Box";
import { DataGrid,  GridLinkOperator, GridToolbarQuickFilter, } from "@mui/x-data-grid";
import * as React from "react";


function QuickSearchToolbar() {
    return (
      <Box
      
        sx={{
          p: 2,
          pb: 2,
        }}
      >
        <GridToolbarQuickFilter
        style={{ width: 300,  }}
          quickFilterParser={(searchInput= string) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
        />
      </Box>
    );
  }

export default function Employees() {
    const editing = { allowDeleting: true, allowEditing: true };


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      <Box sx={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={employeesData}
          columns={employeesGrid}
          pageSize={7}
          rowHeight={80}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}

          initialState={{
            filter: {
              filterModel: {
                items: [],
                quickFilterLogicOperator: GridLinkOperator.Or,
              },
            },
          }}
          components={{ Toolbar: QuickSearchToolbar }}
        />
      </Box>
    </div>
  );
}
