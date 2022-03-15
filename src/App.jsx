import { Typography, makeStyles, Box } from "@material-ui/core";
import "./App.css";
import Balance from "./Components/Balance";
import ExpenseCard from "./Components/ExpenseCard";
import NewTransactions from "./Components/NewTransactions";
import Transactions from "./Components/Transactions";
import { useState } from "react";

const useStyle = makeStyles({
  header: {
    margin: "60px 0",
    color: "#4D77FF",
    fontSize: 34,
    textTransform: "uppercase",
  },
  component: {
    background: "#FFF",
    padding: 10,
    borderRadius: 20,
    display: "flex",
    width: 800,
    "& > *": {
      padding: 13,
      width: "50%",
      height: "58vh",
    },
  },
});

const App = () => {
  const classes = useStyle();

  const [transactions, setTransactions] = useState([
    { id: 1, text: " Momos", amount: 20 },
    { id: 2, text: " Samosa", amount: 20 },
    { id: 3, text: " Kachori", amount: 20 },
    { id: 4, text: " Sandwiz", amount: 20 },
    { id: 5, text: " Pepsi", amount: -20 },
  ]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addTransaction = (transaction) => {
    console.log(transaction);
    setTransactions((transactions) => [transaction, ...transactions]);
  };
  return (
    <>
      <div className="App">
        <Typography className={classes.header}>Expense Tracker</Typography>
        <Box container className={classes.component}>
          <Box>
            <Balance transactions={transactions} />
            <ExpenseCard transactions={transactions} />
            <NewTransactions addTransaction={addTransaction} />
          </Box>
          <Box>
            <Transactions
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default App;
