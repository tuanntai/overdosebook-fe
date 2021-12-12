import { Color } from "../../theme"

const sx = {
  linkCategory: {
    textDecoration: 'none'
  },

  category: {
    width: '160px',
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${Color.border}`,
    borderRadius: '5px',
    backgroundColor: Color.mainBackground
  },

  titleCategory: {
    fontSize: '13px',
    fontWeight: 'bold',
    lineHeight: '18px',
    color:  Color.text,
    marginTop: '24px'
  },

  image: {
    width: 61,
    height: 61
  }
}

export default sx
