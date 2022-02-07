import { BREAKPOINTS } from '../../constants/sx'

const sx = {
    wrapper: {
        borderBottom: '1px solid transparent',
        borderBottomColor: '#eaeaec',
        pl: '21px',
        height: '35px',
        backgroundColor: '#FCFCFC',
        [BREAKPOINTS.SM_MAX]: {
            overflowX: 'auto',
            scrollbarWidth: 'none',

            '&::-webkit-scrollbar': {
                display: 'none'
            },

            '& > *:not(:last-child)': {
                mr: '10px'
            }
        }
    },
    link: { textDecoration: 'none' },
    button: {
        fontFamily: 'Inter',
        alignItems: 'center',
        backgroundColor: '#FCFCFC',
        borderBottom: '3px solid transparent',
        borderRadius: 0,
        color: '#4b4b4b',
        '&.active': {
            color: '#323437',
            borderBottom: '3px solid #323437'
        },
        '&.active > span': {
            background: '#323437'
        },
        [BREAKPOINTS.SM_MAX]: {
            mr: '10px',
            whiteSpace: 'nowrap'
        }
    },

}

export default sx
