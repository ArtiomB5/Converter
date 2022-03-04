import { ratesType, currencyCodes } from "../../api";
import { useSelector } from "react-redux";
import { rootReducerType } from "../../store";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type propsType = {
  rates: ratesType;
  selectedCode: currencyCodes;
  sum: number;
};

export const UIRates = (props: propsType) => {
  let codesAndNames = useSelector(
    (state: rootReducerType) => state.codesReducer.currencyCodes
  );
  console.log(Object.keys(props.rates));

  let ratesRender = () => {
    let keys = Object.keys(props.rates)
      .filter((k) => {
        if (codesAndNames.find((i) => i.currencyCode === k)) {
          return k;
        }
      })
      .filter((k) => k !== props.selectedCode);
    return keys.map((k) => {
      return (
        <TableRow
          key={k}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <img
              src={`https://flagcdn.com/h40/${codesAndNames
                .find((i) => i.currencyCode === k)
                ?.currencyCode.slice(0, 2)
                .toLocaleLowerCase()}.png`}
              alt={
                codesAndNames.find((i) => i.currencyCode === k)?.currencyName
              }
            />
          </TableCell>
          <TableCell align="right">
            {codesAndNames.find((i) => i.currencyCode === k)?.currencyName}
          </TableCell>
          <TableCell align="right">
            {"" +
              (
                Math.trunc(props.sum * props.rates[k as currencyCodes] * 100) /
                100
              ).toFixed(2) +
              ` ${k}`}
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 360, maxWidth: 650, margin: "0 auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Сurrency name</TableCell>
              <TableCell align="right">Currency rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{ratesRender()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
