import { Color } from "../../theme";

const sx = {
    wrapper: {
        display: 'flex',
        width: '100%',
        borderBottom: `1px solid ${Color.navButton}`,
        height: '45px',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.mainBackground,
        px: '22px'
    },
    create: {
        px: '20px',
        height: '30px',
        fontSize: '11px',
        color: Color.whiteBackground,
        lineHeight: 0.91,
        fontWeight: 600,
        borderRadius: '5px',
        background: Color.secondText,
        cursor: 'pointer'
    }, login: {
        px: '20px',
        height: '30px',
        fontSize: '11px',
        color: Color.whiteBackground,
        lineHeight: 0.91,
        fontWeight: 600,
        borderRadius: '5px',
        ml: '11.5px',
        background: Color.blueButton,
        cursor: 'pointer'
    },
    buttonBox: {
        display: 'flex',
        gap: '10px'
    },
    addFund: {
        background: Color.blueButton,
        color: '#fff',
        cursor: 'pointer',
        fontSize: '11px',
    }
}
export default sx