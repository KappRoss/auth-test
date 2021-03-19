import React, {useEffect, useState} from 'react'
import {
    Box,
    CircularProgress,
    Container,
    makeStyles,
    Paper,
    Table, TableBody, TableCell,
    TableContainer, TablePagination, TableRow, Typography
} from "@material-ui/core";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {cleanFilmInfo, clearCharacters, getCharacters, getFilmInfo} from "../../store/actions/starWars";

const useStyles = makeStyles(theme => ({
    title: {
        paddingTop: 20,
        paddingBottom: 20
    },
    container: {
        maxWidth: 500,
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto',
    },
    charactersTitle: {
        padding: '20px 0 5px 20px'
    },
}))

const InfoFilm = props => {
    const classes = useStyles();

    let filmId = props.match.params.filmId

    useEffect(() => {
        props.getFilmInfo(filmId)
        return () => props.cleanFilmInfo()
    }, [filmId])

    useEffect(() => {
        props.getCharacters(filmId)
        return () => props.clearCharacters()
    }, [])

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (

        <div>
            <Container>
                {props.loading
                    ? <CircularProgress/>
                    : props.filmInfo.map((item, i) => (
                        <Box key={i}>
                            <Typography variant={'h3'} className={classes.title}>
                                {item.title}
                            </Typography>
                            <div className={classes.container}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th"
                                                           scope="row"><strong>Director</strong></TableCell>
                                                <TableCell align="right">{item.director}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th"
                                                           scope="row"><strong>Producer</strong></TableCell>
                                                <TableCell align="right">{item.producer}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row"><strong>Release
                                                    date</strong></TableCell>
                                                <TableCell align="right">{item.release_date}</TableCell>
                                            </TableRow>
                                        </TableBody>

                                    </Table>

                                </TableContainer>
                                <Typography className={classes.charactersTitle}>
                                    Characters:
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableBody>
                                            {props.characters.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((characters) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={characters.name}>
                                                        <TableCell>{characters.name}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    labelRowsPerPage={'Rows:'}
                                    rowsPerPageOptions={[5, 10]}
                                    component="div"
                                    count={props.characters.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </div>
                        </Box>
                    ))
                }
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        filmInfo: state.swapi.filmInfo,
        loading: state.swapi.loading,
        characters: state.swapi.characters
    }
}

export default withRouter(connect(mapStateToProps,
    {
        getFilmInfo, cleanFilmInfo, getCharacters, clearCharacters
    }
)(InfoFilm))