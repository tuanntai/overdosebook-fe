import { Color } from "."

const sx = {
    app: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        fontFamily: 'Inter',
        paddingTop: 0,
        paddingBottom: 0
    },
    main: {
        width: 'calc(100% - 179px)',
        marginLeft: '179px',
        alignSelf: 'flex-end',
        position: 'relative',
        backgroundColor: Color.mainBackground
    },
    view: {
        position: 'absolute',
        top: '45px',
        left: 0,
        width: '100%',
        minHeight: 'calc(100% - 45px)',
        height:'calc(100% - 45px)',
        backgroundColor: Color.mainBackground
    }
}
export default sx