import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import {connect} from "react-redux";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {Box, Link} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignContent: 'space-between'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        justifyContent: 'space-between'
    }
}));

const MenuAppBar = ({isAuth}) => {
    const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    //
    // const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                {isAuth && <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <Link component={NavLink} to={'/'} color={'secondary'}>
                            <HomeRoundedIcon fontSize={'large'}/>
                        </Link>
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <Link component={NavLink} to={'/films-page'} color={'secondary'}>
                            <GradeRoundedIcon fontSize={'large'}/>
                        </Link>
                    </IconButton>
                    {isAuth && (
                        <Box>
                            <Link component={NavLink} to={'/'} color={'secondary'}>
                                {/*<IconButton*/}
                                {/*    aria-label="account of current user"*/}
                                {/*    aria-controls="menu-appbar"*/}
                                {/*    aria-haspopup="true"*/}
                                {/*    // onClick={handleMenu}*/}
                                {/*    color="secondary"*/}
                                {/*>*/}
                                {/*<AccountCircle fontSize={'large'}/>*/}
                                <AccountCircleRoundedIcon fontSize={'large'}/>
                                {/*</IconButton>*/}
                            </Link>

                            {/*<Menu*/}
                            {/*    id="menu-appbar"*/}
                            {/*    anchorEl={anchorEl}*/}
                            {/*    anchorOrigin={{*/}
                            {/*        vertical: 'top',*/}
                            {/*        horizontal: 'right',*/}
                            {/*    }}*/}
                            {/*    keepMounted*/}
                            {/*    transformOrigin={{*/}
                            {/*        vertical: 'top',*/}
                            {/*        horizontal: 'right',*/}
                            {/*    }}*/}
                            {/*    open={open}*/}
                            {/*    onClose={handleClose}*/}
                            {/*>*/}
                            {/*    <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                            {/*    <MenuItem onClick={handleClose}>My account</MenuItem>*/}
                            {/*</Menu>*/}
                        </Box>
                    )}
                </Toolbar>}
            </AppBar>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(MenuAppBar)