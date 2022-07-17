import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import _ from 'lodash'

const useStyles = makeStyles({
    root: {

    },
    container: {
        maxHeight: 440,
        zIndex: 1000
    },
});

const TableTemplate = (props) => {
    const classes = useStyles();
    const { data, labels, fields, handleClick } = props

 
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <colgroup>
                        {labels.map(label => {
                            return (
                                <col style={{ width: label?.style?.width }} key={label.id + 'colgroup'} />
                            )
                        })}
                    </colgroup>
                    <TableHead>
                        <TableRow key={'headerRow'}>
                            {labels.map((label, ndx) => (
                                <TableCell
                                    key={label.id}
                                    align={label.align}
                                    style={{ ...label.style }}
                                >
                                    {label.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.length ? data.map((row, index) => (
                            <TableRow hover key={row?.id + index}  onClick={(e)=> handleClick(row.id? row.id : '')}>
                                {
                                    fields && fields.length ? fields.map(field => {
                                        const value = _.get(row, field, null)
                                        return <TableCell key={value}>{value}</TableCell>
                                    }) : null
                                }
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
export default TableTemplate;