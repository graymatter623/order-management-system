import React from 'react';
const TableHead = ({head})=>(
    <th>{head}</th>
);
const TableHeads = ({heads})=>(
    <thead>
        <tr>
            {heads.map( (head,index)=> 
                <TableHead 
                    key = {toString(index)+'-'+head} 
                    head = {head}
                />)}
        </tr>
    </thead>
);
const TableValues = ({value})=>(
    <td>{value}</td>
)
const TableBody = ({values})=>(
    <tbody>
        {values.map( (value,index)=>(
            <tr key = {index}> 
                {
                value.map((val,index) => 
                    <TableValues key = {val+'-'+toString(index)} value = {val}/>)
                }
            </tr> 
                ) 
        ) }
       
    </tbody>
);
const ShowOrdersInTables = ({orders})=>{
    const newOrders  = orders.map( order=> {delete order._id; delete order.__v; return order} );

    const heads = ["ORDER TITLE","ORDER DATE", "START TIME","ORDER STATUS","CREATED AT","ORDER QUANTITY"];
    const values = newOrders.map( order=> Object.values(order));
    return(
        <React.Fragment>
            <table className = "table">
                <TableHeads heads = {heads}/>
                <TableBody values = {values}/>
            </table>
        </React.Fragment>
    );
}

export default ShowOrdersInTables;