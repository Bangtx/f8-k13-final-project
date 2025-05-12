import './style.sass'
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Row from './Row.tsx'
import {useState, createContext, useRef} from "react";
import CellCursor from "./CellCursor.tsx";
import CellInput from "./CellInput.tsx";

export const TableContext = createContext({})

const defaultCur = {
  rowIndex: 1,
  columnIndex: 0,
  editing: false,
  top: 0,
  left: 0,
  width: 0,
  height: 0
}

export default function ({columns, rows}: any) {

  const [cursor, setCursor] = useState({...defaultCur})
  const table = useRef(null)
  const cellInputComponent = useRef(null)
  const onKeyDown = (event: KeyboardEvent) => {
    // Only trigger editing if a cell is selected (has dimensions) and not already editing
    if (cursor.width > 0 && cursor.height > 0 && !cursor.editing) {
      // Ignore special keys like Ctrl, Alt, Shift, etc.
      if (!event.ctrlKey && !event.altKey && !event.metaKey && event.key.length === 1) { // Only single character keys
        setCursor({
          ...cursor,
          editing: true,
        })

        onFocus()
        if (cellInputComponent.current) {
          // @ts-ignore
          cellInputComponent.current.onInput(event.key)
        }
        event.preventDefault()
      } else if (event.key === "Enter") {
        // Enter key also triggers editing
        setCursor({
          ...cursor,
          editing: true,
        })

        onFocus()
        event.preventDefault()
      }
    }
  }

  const onFocus = () => {
    const inputRef = document.querySelector('.cell-input input')
    // @ts-ignore
    inputRef.focus()
  }

  const provider = {
    cursor, setCursor, onKeyDown, columns, rows, table
  }

  return (
    // @ts-ignore
    <div ref={table} className={'f-editable-table-wrap'} tabIndex={0} onKeyDown={onKeyDown} style={{border: 'none'}}>
      <TableContext.Provider value={provider}>
        <Table className={'f-editable-table'}>
          <TableHead>
            <TableRow>
              <TableCell width={32} padding={'none'}></TableCell>
              {
                columns.map((column: any) => {
                  return (
                    <TableCell
                      padding={'none'}
                      align={"left"}
                      size={"small"}
                      key={column.name}
                    >
                      {column.name}
                    </TableCell>
                  )
                })
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {
              rows?.map((row: any, index: number) => {
                // @ts-ignore
                return <Row key={`row-${index}`} columns={columns} row={row} rowIndex={index}/>
              })
            }

          </TableBody>
        </Table>
        <CellCursor/>
        <CellInput ref={cellInputComponent}/>
      </TableContext.Provider>
    </div>
  )
}