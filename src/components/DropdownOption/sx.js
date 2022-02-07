import { Color } from "../../theme"

const sx = {
    wrapper: {
        minWidth: '90px',
        position: 'relative',
        flexDirection: 'column'
    },
    downArrow: {
        width: '7.5px',
        height: '7.5px',
        fill: 'optionIcon'
    },
    activeItem: {
        px: '9px',
        height: '25px',
        display: 'flex',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Color.mainBackground,
        border: `1px solid ${Color.buttonBackground}`
    },
    activeButton: {
        p: 0,
        mr: '8px',
        width: '100%',
        height: '100%',
        fontWeight: 600,
        display: 'flex',
        fontSize: '10px',
        lineHeight: '12px',
        alignItems: 'center',
        borderBottom: 'none',
        color: Color.text,
        backgroundColor: Color.mainBackground,
        '&.active': {
            borderBottom: 'none'
        }
    },
    dropdown: (isShowDropDownMenu, position) => {
        const style = {
            backgroundColor: '#ffffff',
            display: 'flex',
            zIndex: 10,
            width: '100%',
            borderRadius: '5px',
            position: 'absolute',
            flexDirection: 'column',
            border: `1px solid ${Color.border}`,
            opacity: `${isShowDropDownMenu ? 1 : 0}`,
            visibility: `${isShowDropDownMenu ? 'visible' : 'hidden'}`,
            '& > button:first-of-type': {
                pt: '12px',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px'
            },
            '& > button:last-child': {
                pb: '12px',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px'
            },
            top: '',
            bottom: '',
            left: '',
            right: ''
        }
        switch (position) {
            case 'TOP': {
                style.bottom = '100%'
                break
            }
            case 'LEFT': {
                style.right = 'calc(100% - 3px)'
                break
            }
            case 'RIGHT': {
                style.left = 'calc(100% - 3px)'
                break
            }
            default: {
                style.top = 'calc(100% - 3px)'
                break
            }
        }

        return style
    },
    option: {
        px: '9px',
        py: '7px',
        width: '100%',
        fontWeight: 600,
        display: 'flex',
        fontSize: '10px',
        color: '#4b4b4b',
        lineHeight: '12px',
        fontFamily: 'Inter',
        alignItems: 'center',
        '& svg': {
            fill: '#4b4b4b'
        }
    }
}



export default sx
