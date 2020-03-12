import React from "react";
const TableHead = ({ head }) => <th>{head}</th>;
const TableHeads = ({ heads }) => (
  <thead>
    <tr>
      {heads.map((head, index) => (
        <TableHead key={toString(index) + "-" + head} head={head} />
      ))}
    </tr>
  </thead>
);
const TableValues = ({ value,index}) => <td id={`data-${index}`}>{value}</td>;

const TableBody = ({ values }) => (
  <tbody>
    {values.map((value, index) => (
      <tr key={index}>
        {value.map((val, index) => (
          <TableValues key={val + "-" + toString(index)} value={val} index={index} />
        ))}
      </tr>
    ))}
  </tbody>
);

const ShowDataInTables = ({ data, heads }) => {
  const values = data !== undefined ? data.map(obj => {
        return Object.values(obj) 
    } ) : [];
  return (
    <React.Fragment>
      <table className="table">
        <TableHeads heads={heads} />
        <TableBody values={values} />
      </table>
    </React.Fragment>
  );
};

export default ShowDataInTables;
