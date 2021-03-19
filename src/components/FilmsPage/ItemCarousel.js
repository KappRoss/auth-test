import React from 'react'
import {Paper, Button, Typography, Box, Link} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import {NavLink} from "react-router-dom";

const useStyle = makeStyles(theme => ({
    root: {
        paddingTop: '25px',
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingBottom: '20px',
        boxShadow: '1',
        background: 'black',
        color: 'white',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        minHeight: '11vh',
        textAlign: 'center',
        textDecoration: "underline"
    },
    checkButton: {
        margin: '20px auto',
        width: '200px'
    },
    descriptionBlock: {
        display: "flex",
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        minHeight: '40vh',
        maxHeight: '40vh',
        overflowX: 'hidden'
    },
    description: {
        minHeight: '200px',
        padding: '5px',
        maxHeight: '47vh',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '11%'
        },

    }
}))

const Item = props => {

    const s = useStyle()

    return (
        <Paper className={s.root}>
            <Box className={s.title}>
                <Typography variant={props.matches ? 'h4' : 'h2'}>
                    {props.item.title}
                </Typography>
            </Box>
            <Box className={s.descriptionBlock}>
                <Typography className={s.description}>
                    {props.item.opening_crawl}
                </Typography>
            </Box>
            <Link component={NavLink} to={`/about-film/${props.index + 1}`}>
                <Button
                    className={s.checkButton}
                    variant={'outlined'}
                    color={'secondary'}
                >
                    Go to film
                </Button>
            </Link>
        </Paper>
    )
}

export default Item