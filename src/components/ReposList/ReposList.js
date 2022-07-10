import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import ReposItem from "../ReposItem/ReposItem";

import './ReposList.css';

const ReposList = ({repos}) => {

    if (repos.length) {
        return (
            <TableContainer className="tableContainer">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><div className="rowTitle">ID</div></TableCell>
                            <TableCell align="center"><div className="rowTitle">Name</div></TableCell>
                            <TableCell align="center"><div className="rowTitle">Price</div></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                       
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    return (
        <div>It`s empty here</div>
    );
};

export default ReposList;