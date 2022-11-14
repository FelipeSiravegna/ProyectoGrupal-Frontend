import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function preventDefault(event) {
    event.preventDefault();
  }
  const items = [{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"},{property1:"algo",property2:"algo2",property3:"algo3",property4:"algo4",property6:"algo6",property7:"algo7"}]
  const properties = ["property1","property3","property7","property4"]
  const action = ["name",(j)=>{console.log(j)}]
  const title = "Un Titulo"
  
  const handleAction = (j,action)=>{
    action[1](j)
  }
  
  export default function ModernTable ({title,items,properties,action}){
    return (
      
      <React.Fragment>
        {title.length!=0&&items.length!=0&&properties.length!=0&&action?
        <>
        <Title>{title}</Title>
        <Table size="small">
          <TableHead>
          <TableRow>
              {properties.map((i)=>{return (<TableCell>{i}</TableCell>)})}
              {!!action[0]?<TableCell>{action[0]}</TableCell>:null}
            </TableRow>
          </TableHead>
          <TableBody>
              {items.map((j)=>
                (<TableRow key={j.id}>
                  {properties.map((i)=> (<TableCell>{j[i]}</TableCell>))}
                  {!!action[1]?<TableCell><button onClick={(e)=>{handleAction(j=j,action)}}>X</button></TableCell>:null}
                </TableRow>))}
            </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
        </>
      :<>Faltan Datos</>}
      </React.Fragment>
    );
  }