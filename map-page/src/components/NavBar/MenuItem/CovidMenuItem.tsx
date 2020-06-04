import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, createStyles, Popover, Switch, Theme, Typography, WithStyles, withStyles,} from '@material-ui/core';
import {CovidSwitch, covidSwitchSelector, toggleCovidSwitch,} from '../../../context/mapStateSlice';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVirus as menuIcon} from "@fortawesome/free-solid-svg-icons";

const covidSwitches: Array<CovidSwitch> = ['deaths', 'recovered', 'active'];//TODO use the enum from mapStateSlice, this is a quick hack

function MenuItem({classes, title}: MenuItemProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const dispatch = useDispatch();
    const isCovidSwitchActive: { [k in CovidSwitch]: boolean } = {
        deaths: useSelector(covidSwitchSelector('deaths')),
        recovered: useSelector(covidSwitchSelector('recovered')),
        active: useSelector(covidSwitchSelector('active')),
    };


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    const id = open ? 'menu-item-popover' : undefined;

    return (
        <>
            <Button
                className={classes.title}
                onClick={handleClick}
                aria-describedby={id}
            >
                <FontAwesomeIcon icon={menuIcon} className={classes.icon}/>
                <Typography variant="body2">{title}</Typography>
            </Button>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                className={classes.popover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    className: classes.paper,
                }}
            >
                {covidSwitches.map(switchType =>
                    <div key={switchType} className={classes.layersContainer}>
                        <Switch
                            size="small"
                            color="default"
                            checked={isCovidSwitchActive[switchType]}
                            onChange={() => dispatch(toggleCovidSwitch(switchType))}
                            inputProps={{'aria-label': switchType}}
                        />{' '}
                        <Typography variant="body1">{switchType.toUpperCase()}</Typography>
                    </div>
                )}

            </Popover>
        </>
    );
}

const styles = (theme: Theme) =>
    createStyles({
        button: {
            textTransform: 'none',
        },

        title: {
            margin: '0px 14px',
            textTransform: 'uppercase',
            color: 'inherit',

            '&::after': {
                content: '""',
                display: 'inline-block',
                width: 0,
                height: 0,
                marginLeft: 3.5,
                verticalAlign: 3.5,
                borderTop: '3.5px solid',
                borderRight: '3.5px solid transparent',
                borderBottom: 0,
                borderLeft: '3.5px solid transparent',
            },
        },

        icon: {
            width: 18,
            marginRight: 6,
        },

        popover: {
            marginTop: 8,
        },

        paper: {
            padding: '8px 16px',
            backgroundColor: `${theme.palette.primary.main}f9`,
            borderRadius: theme.shape.borderRadius,
        },

        categoryContainer: {
            marginBottom: 16,
        },

        categoryTitle: {
            fontWeight: 'bold',
            textAlign: 'left',
        },

        layersContainer: {
            display: 'flex',
            marginBottom: 8,
        },
    });

export interface MenuItemProps extends WithStyles<typeof styles> {
    title: string

}

export default withStyles(styles)(MenuItem);
