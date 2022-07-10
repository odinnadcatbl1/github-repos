import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import ReposItem from "../ReposItem/ReposItem";

import './ReposList.css';

const ReposList = ({repos, error}) => {

    if (error) {
        return (
            <div className="reposTitle">Something goes wrong... <br/> Such user doesn`t exist or problems with network</div>
        );
    }

    if (repos.length) {
        return (
            <TableContainer className="tableContainer">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><div className="rowTitle">Name</div></TableCell>
                            <TableCell align="center"><div className="rowTitle">Language</div></TableCell>
                            <TableCell align="center"><div className="rowTitle">Created date</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            repos.slice(0, 10).map(repo => {
                                return <ReposItem key={repo.id} repo={repo} />
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

};

export default ReposList;