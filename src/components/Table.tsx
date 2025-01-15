import React from "react";

interface TableProps {
    headers: string[];
    data: never[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
    return (
        <table>
            <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {Object.values(row).map((value, i) => (
                        <td key={i}>{value}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
