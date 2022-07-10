import { TableRow, TableCell } from "@mui/material";
import dateConvert from "../../utils/dateConvert";

import './ReposItem.css';

const ReposItem = ({repo}) => {

    return (
        <TableRow>
            <TableCell align="center"><a className="nameLink" href={repo.html_url}>{repo.name}</a></TableCell>
            <TableCell align="center">{repo.language}</TableCell>
            <TableCell align="center">{dateConvert(repo.created_at)}</TableCell>
        </TableRow>
    )
};

export default ReposItem;