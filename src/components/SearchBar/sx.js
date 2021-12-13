import { Color } from "../../theme"

const sx = {
    container: {
        width: '100%',
        height: '30px'
    },
    box: {
        minWidth: '690px',
        px: '9px',
        py: '4px',
        backgroundColor: Color.mainBackground,
        display: 'flex',
        alignItems: 'center',
        border: `1px solid`,
        borderColor: Color.secondText,
        borderRadius: '5px',
        '&.error': {
            border: `1px solid red`,
            transition: 'all 0.5s ease'
        }
    },
    input: {
        border: 'none',
        height: '20px',
        fontSize: '11px ',
        fontWeight: '600',
        lineHeight: '1.09',
        '&:focus': {
            outline: 'none'
        },
        '::placeholder': {
            color: '#b1b1b7'
        }
    }
}
export default sx
