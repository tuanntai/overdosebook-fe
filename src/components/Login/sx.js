import { Color } from "../../theme";

const sx = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        background: '#ffffff',
        borderRadius: '5px',
        padding: '21px',
    },
    heading: {
        textAlign: 'center',
        color: Color.text,
        fontSize: '21px',
        fontWeight: 700,
        paddingBottom: '20px'
    },
    buttonBox: {
        pt: '8px',
        display: 'flex',
        gap: '20px',
        width: '100%',
        justifyContent: 'space-between',
    },
    input: {
        marginBottom: '20px',
        border: 'none',
        borderBottom: `1px solid ${Color.navButton}`,
        borderRadius: 0,
        ':focus': {
            outline: 'none',
            '& ~ hr': {
                width: '100%',
                height: 2
            }
        }
    },
    imageLogo: {
        display: 'block',
        mx: 'auto',
        pb: '20px'
    },
    logIn: {
        background: Color.blueButton,
        width: '100%',
        cursor: 'pointer',

    },
    signUp: {
        border: `1px solid ${Color.blueButton}`,
        color: Color.blueButton,
        background: Color.whiteBackground,
        width: '100%',
        cursor: 'pointer'
    },
    inputContainer: {
        position: 'relative'
    },
    divider: {
        position: 'absolute',
        top: '26px',
        color: ` ${Color.blueButton}`,
        width: '0',
        transition: '0.3s'
    },
    notice: {
        color: Color.redText,
        position: 'absolute',
        fontSize: '12px',
        top: '38px',
        left: '8px',
    }
}

export default sx;