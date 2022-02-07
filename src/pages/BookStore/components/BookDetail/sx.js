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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    image: {
        height: '100%',
        width: 'auto',
        display: 'block',
        mx: 'auto',
        transition: 'transform 0.5s',
        p: 0,
        ':hover': {
            transform: 'scale(1.2)'
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
        fontSize: '20px',
        fontWeight: 500,
        color: Color.text,
        display: "-webkit-box",
        WebkitLineClamp: 3,
        overflow: "hidden",
        "-webkit-box-orient": "vertical",
    },
    author: {
        fontSize: '14px',
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
    },
    leftName: {
        width: '80%'
    }
    ,
    optionBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '20px',
        height: '50px',
        'img': {
            height: '100%',
            width: 'auto',
            cursor: 'pointer'
        },
        'div': {
            border: `2px solid ${Color.blueButton}`,
            p: '7.5px 20px',
            borderRadius: 9999,
            color: '#ffffff',
            background: Color.blueButton
        },
    },
    option: {
        px: '20px'
    },
    buyButton: {
        display: 'flex',
        justifyContent: 'center',
        height: '40px',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 9999,
        color: '#ffffff',
        background: Color.blueButton
    }
}

export default sx;