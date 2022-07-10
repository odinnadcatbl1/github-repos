import { TableRow, TableCell } from "@mui/material";
import { useEffect } from "react";

import './ReposItem.css';

const ReposItem = ({repo}) => {

    return (
        <TableRow>
            <TableCell align="center"><a className="nameLink" href={repo.html_url}>{repo.name}</a></TableCell>
            <TableCell align="center">{repo.language}</TableCell>
            <TableCell align="center">{repo.created_at}</TableCell>
        </TableRow>
    )
};

export default ReposItem;