import './style.sass'
import {TableCell, TableRow} from "@mui/material";
import Cell from "./Cell.tsx";

export default function ({columns, row, rowIndex}: any) {

  return (
    <TableRow className={'f-editable-table__row'} key={row.id}>
      <TableCell padding={'none'} size={"small"}>{rowIndex}</TableCell>
      {
        columns.map((column: any, index: number) => {
          return <Cell column={column} row={row} columnIndex={index} rowIndex={rowIndex}/>
        })
      }
    </TableRow>
  )
}