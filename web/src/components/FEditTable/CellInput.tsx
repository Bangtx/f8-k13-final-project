import { Box, TextField } from "@mui/material";
import {useContext, useEffect, useState} from "react";
import { TableContext } from "./index.tsx";

export default function () {
  const { cursor, onKeyDown } = useContext(TableContext) as any;

  // if (!cursor || cursor.width === 0 || cursor.height === 0) return null;

  const { top, left, width } = cursor;

  const cursorBorderWidth = 2
  const style = {
    top: `${top + cursorBorderWidth}px`,
    left: `${left + cursorBorderWidth}px`,
    width: `${width - cursorBorderWidth * 2}px`,
  }

  return (
    <span style={style} className={'cell-input'}>
      <TextField
        sx={{
          padding: 0,
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: 'none', // remove default border
          },
            '&:hover fieldset': {
            border: 'none', // remove on hover
          },
            '&.Mui-focused fieldset': {
            border: 'none', // remove on focus
          },
          },
            '& .MuiOutlinedInput-input': {
            padding: '4px', // your custom padding
          },
        }}
        size={"small"}
        value={"test"}
      />
    </span>
  )
}
