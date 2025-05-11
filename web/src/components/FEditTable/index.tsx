import './style.sass'
import {Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@mui/material";
import Row from './Row.tsx'
import {useState, createContext, useEffect} from "react";
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
  console.log('render')
  const onKeyDown = (event: KeyboardEvent) => {
    console.log('vao day', cursor)
    // Only trigger editing if a cell is selected (has dimensions) and not already editing
    if (cursor.width > 0 && cursor.height > 0 && !cursor.editing) {
      // Ignore special keys like Ctrl, Alt, Shift, etc.
      console.log('bao day', !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey)
      if (
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        event.key.length === 1 // Only single character keys
      ) {
        setCursor({
          ...cursor,
          editing: true,
          // initialValue: event.key, // Store the initial key pressed
        })
        event.preventDefault()
      } else if (event.key === "Enter") {
        // Enter key also triggers editing
        setCursor({
          ...cursor,
          editing: true,
          // initialValue: "", // Empty string for Enter key
        })
        event.preventDefault()
      }
    }
  }

  const provider = {
    cursor, setCursor, onKeyDown
  }

  // Add global keydown event listener
  useEffect(() => {
    console.log('init')
    window.addEventListener("keydown", (event) => onKeyDown(event))
    return () => {
      window.removeEventListener("keydown", (event) => onKeyDown(event))
    }
  }, [cursor])

  useEffect(() => {
    console.log('cursor', cursor)
  }, [cursor])

  return (
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
              return <Row columns={columns} row={row} rowIndex={index}/>
            })
          }

        </TableBody>
      </Table>
      <CellCursor/>
      <CellInput/>
    </TableContext.Provider>
  )
}