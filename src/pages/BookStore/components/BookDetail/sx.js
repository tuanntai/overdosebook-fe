import { Color } from "../../../../theme";

const sx = {
    wrapper: {
        p: '20px',
        width: '100%',
        gap: '20px',
        display: 'flex'
    },
    left: {
        width: '70%',
    },
    imageBox: {
        width: '100%',
        height: '500px',
        border: `1px solid ${Color.border}`,
        borderRadius: '5px',
        background: Color.mainBackground,
        py: '10px'
    }
    ,
    right: {
        width: '30%',
        border: `1px solid ${Color.border}`,
        borderRadius: '5px',
        p: '10px', background: Color.mainBackground,
    },
    image: {
        height: '100%',
        width: 'auto',
        display: 'block',
        mx: 'auto',
        transition: 'transform 0.5s',
        ':hover': {
            transform: 'scale(1.1)'
        }
    },
    nameBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    newBook: {
        width: '50px',

    },
    title: {
        fontSize: '28px',
        fontWeight: 500,
        color: Color.text
    },
    author: {
        fontSize: '18px',
        fontWeight: 1.2,
        color: Color.secondText
    },
    secondWrapper: {
        px: '20px',
        width: '100%',
        gap: '20px',
        display: 'flex'
    },
    secondLeft: {
        width: '30%',
        border: `1px solid ${Color.border}`,
        borderRadius: '5px',
        p: '10px', background: Color.mainBackground,
    },
    secondRight: {
        width: '70%',
        border: `1px solid ${Color.border}`,
        borderRadius: '5px',
        p: '10px', background: Color.mainBackground,
    },
    description: {
        fontSize: '18px',
        fontWeight: 1.5,
        color: Color.secondText,
        pt: '10px'
    }
}

export default sx;