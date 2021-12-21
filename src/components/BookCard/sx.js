import { Color } from "../../theme"

const sx = {
    wrapper: {
        width: '100%',
        height: '430px',
        border: `1px solid ${Color.border}`,
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    imageBox: {
        height: '270px',
        py: '20px',
        background: Color.mainBackground,
        borderRadius: '5px',
    },
    image: {
        maxWidth: 'auto',
        height: '100%',
        display: 'block',
        mx: 'auto',
        transition: 'transform .5s',
        ':hover': {
            transform: 'scale(1.1)'
        }
    },
    name: {
        fontSize: '16px',
        lineHeight: 1.25,
        color: Color.text,
        display: '-webkit-box',
        fontWeight: 700,
        WebkitLineClamp: 3,
        overflow: 'hidden',
        '-webkit-box-orient': 'vertical'
    },
    author: {
        fontSize: '14px',
        color: Color.secondText
    },
    buttonBox: {
        position: 'absolute',
        bottom: '10px',
        width: '100%'

    },
    button: {
        width: '100%',
        background: Color.redText,
        color: Color.whiteBackground,
        borderRadius: '9999px',
        fontFamily: 'Inter'
    },
    price: {
        textDecorationLine: 'line-through',
        color: Color.secondText,
        fontSize: '14px',
    },
    extraPrice: {
        color: Color.redText,
        fontSize: '14px', fontWeight: 600,
    },
    cart: {
        width: '20px', marginRight: '5px'
    }
}

export default sx