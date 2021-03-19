import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {CircularProgress, Container, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CarouselBlock from "./Carousel";
import {clearFilms, getFilms} from "../../store/actions/starWars";

const useStyle = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('xs')]: {   // 0px for phones
        },
        [theme.breakpoints.up('sm')]: {     // 600px for iPad
        },
        [theme.breakpoints.up('md')]: {     // 960px for iPad Pro
        },
        [theme.breakpoints.up('lg')]: {     // 1280px for notebooks
        },
        [theme.breakpoints.up('xl')]: {     // 1920px for 2k and 4k monitors
        },
    },
    title: {
        padding: '10px',
        textShadow: '0 0 3px white',
    },
}))

const FilmsPage = ({getFilms, films, loading, clearFilms}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.only('xs'))

    const s = useStyle()

    useEffect(() => {
        getFilms()
        return () => clearFilms()
    }, [])

    return (
        <Container maxWidth={'lg'} className={s.container}>
            <Typography variant={'h3'} className={s.title}>
                FILMS
            </Typography>
            {loading ? <CircularProgress/> : <CarouselBlock films={films} matches={matches} />}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        films: state.swapi.films,
        loading: state.swapi.loading
    }
}

export default connect(mapStateToProps, {getFilms, clearFilms})(FilmsPage)