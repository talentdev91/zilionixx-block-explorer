import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { MenuItem, Typography, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'

import { useStyles } from '../TopmenuStyle'

interface DropDownProps {
    data: any
    // setMenuName: () => void
    menuName: any
    setParentName: (value: any) => void
    parentName: any
    username: any
}

const DropDownMenu: React.FC<DropDownProps> = ({ setParentName, data, menuName, parentName, username }) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null)
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return
        }
        setOpen(false)
    }
    const handleClosePopper = () => {
        setOpen(false);
    }
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus()
        }
        prevOpen.current = open
    }, [open])

    const handleMenuClick = (menuName: any, parentName: any) => {
        setParentName(parentName)
        localStorage.setItem('menuName', parentName)
    }
    return (
        <>
            <Typography
                className={
                    data.name === 'Change'
                        ? classes.changeButton
                        : clsx(classes.menuButton, {
                            [classes.activeLink]: parentName === `${data.name}`,
                        })
                }
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
            >
                {data.name === 'Change' ? (
                    <img src="/images/logo3.png" alt="menu icon" />
                ) : data.name === 'Sign Out' ?
                    (
                        <span
                            className={classes.userName}
                            onMouseEnter={handleToggle}
                            onMouseLeave={handleClosePopper}
                        >
                            <i className={'fa fa-user-circle'} />&nbsp;{username}
                            <ExpandMoreIcon style={{ marginLeft: '6px', fontSize: 12, verticalAlign: 'middle' }} />
                        </span>
                    ) :
                    (
                        <span
                            onMouseEnter={handleToggle}
                            onMouseLeave={handleClosePopper}
                        >
                            {data.name}
                            <ExpandMoreIcon style={{ marginLeft: '6px', fontSize: 12, verticalAlign: 'middle' }} />
                        </span>
                    )}
            </Typography>
            <Popper
                style={{ zIndex: 10 }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                onMouseEnter={handleToggle}
                onMouseLeave={handleClose}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper className={classes.downMenuBox}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {data.children.map((child: ListProps, key: number) => {
                                        if (child.name === 'ZNX Mainnet' || child.name === 'ZNX Testnet') {
                                            return (
                                                <a
                                                    key={key}
                                                    href={`${child.path}`}
                                                    className={classes.menuListLink}
                                                >
                                                    <MenuItem
                                                        className={clsx(classes.menuList, {
                                                            [classes.activeLink]: menuName === `${child.name}`,
                                                        })}
                                                        onClick={handleClose}
                                                    >
                                                        {child.name}
                                                    </MenuItem>
                                                </a>
                                            )
                                        } else if (child.name === "Sign Out") {
                                            return (
                                                <MenuItem
                                                    className={classes.menuList}
                                                    key={key}
                                                >
                                                    <Button key={key} href="/login?cmd=logout" className={classes.signoutBtn} disableRipple>Sign Out</Button>
                                                </MenuItem>
                                            )
                                        } else {
                                            return (
                                                <Link
                                                    key={key}
                                                    to={child.path}
                                                    className={classes.menuListLink}
                                                    onClick={() => handleMenuClick(child.name, data.name)}
                                                >
                                                    <MenuItem
                                                        className={clsx(classes.menuList, {
                                                            [classes.activeLink]: menuName === `${child.name}`,
                                                        })}
                                                        onClick={handleClose}
                                                    >
                                                        {child.name}
                                                    </MenuItem>
                                                </Link>
                                            )
                                        }
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
}

export default DropDownMenu