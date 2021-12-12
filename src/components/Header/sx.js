import { Color } from "../../theme";

const sx = {
    wrapper: {
        display: 'flex',
        width: '100%',
        borderBottom: `1px solid ${Color.navButton}`,
        height: '45px',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.whiteBackground,
        px: '22px'
    },
    login: {
        px: '20px',
        height: '27px',
        fontSize: '11px',
        color: Color.whiteBackground,
        lineHeight: 0.91,
        fontWeight: 600,
        borderRadius: '5px',
        ml: '11.5px',
        background: Color.secondText
    }
}
export default sx