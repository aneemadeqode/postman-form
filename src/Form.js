import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function Form({ data, handleChange }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="left">
                {" "}
                <TextField
                  onChange={(event) => handleChange(event, item.id)}
                  value={item.key}
                  name="key"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                />
              </TableCell>
              <TableCell align="left">
                {" "}
                <TextField
                  onChange={(event) => handleChange(event, item.id)}
                  value={item.val}
                  name="val"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
