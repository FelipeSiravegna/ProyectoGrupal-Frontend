import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}
const item = [{ property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }, { property1: "algo", property2: "algo2", property3: "algo3", property4: "algo4", property6: "algo6", property7: "algo7" }]
const properties = ["property1", "property3", "property7", "property4"]
const action = ["name", (j) => { console.log(j) }]

const handleAction = (j, action) => {
  action[1](j)
}

export default function Users() {
  return (
    <React.Fragment>
      <Title>Default Table</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {properties.map((i) => { return (<TableCell>{i}</TableCell>) })}
            {!!action[0] ? <TableCell>{action[0]}</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {item.map((j) =>
          (<TableRow key={j.id}>
            {properties.map((i) => (<TableCell>{j[i]}</TableCell>))}
            {!!action[1] ? <TableCell><button onClick={(e) => { handleAction(j = j, action) }}>X</button></TableCell> : null}
          </TableRow>))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}