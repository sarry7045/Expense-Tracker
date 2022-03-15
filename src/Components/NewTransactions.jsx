import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  makeStyles,
  Button,
  InputAdornment,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FaRupeeSign } from "react-icons/fa";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginTop: 30,
    },
  },
});

const NewTransactions = ({ addTransaction }) => {
  const classes = useStyle();

  const [text, setText] = useState("");
  const [amount, setaAmount] = useState("");

  const NewTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: +amount,
    };
    addTransaction(transaction);
  };
  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h6">New Transaction</Typography>
        <TextField
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaRupeeSign fontSize="small" />
              </InputAdornment>
            ),
          }}
          color="primary"
          label="Enter Things"
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaRupeeSign fontSize="small" />
              </InputAdornment>
            ),
          }}
          color="primary"
          label="Enter Amount"
          onChange={(e) => setaAmount(e.target.value)}
        />
        <Button
          endIcon={<Add />}
          onClick={NewTransaction}
          variant="contained"
          color="primary"
        >
          Add Transaction
        </Button>
      </Box>
    </>
  );
};

export default NewTransactions;
