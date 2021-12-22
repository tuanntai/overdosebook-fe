import { Color } from "../../theme";

const sx = {
    wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '179px',
        px: '12px',
        py: '11px',
        borderRight: `1px solid ${Color.border}`,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Color.whiteBackground
    },
    logoBox: {
        paddingBottom: '15px'
    },
    logo: {
        height: '100%',
        width: '100%',
    },
    navLink: (accessToken, navItem) => ({
        color: Color.greyText,
        padding: '10px 14px',
        display: (!accessToken && navItem === 'My Account') ? 'none' : 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        transition: '.3s all',
        borderRadius: '5px',
        fontSize: '11px',
        fontWeight: 600,
        '&.active': {
            background: Color.navButton,
            color: Color.thirdText
        }
    }),

    drawerNavLinkIcon: {
        width: '13px',
        height: '13px',
        marginRight: '14px',
        fill: Color.greyText
    },
    drawerDivider: {
        my: '12px',
        color: '#e3e3e3',
        backgroundColor: '#e3e3e3'
    },
    drawerSocial: {
        justifyContent: 'space-between',
        px: '12px',
        mt: 'auto'
    },
    drawerSocialIcon: {
        width: '14px',
        height: '14px',
        fill: Color.greyText
    },
    drawerSocialIconIgm: { height: '14px' }
};

export default sx;
