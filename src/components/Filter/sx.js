import { Color } from "../../theme"

const sx = {
  wrapper: {
    borderBottom: '1px solid transparent',
    borderBottomColor: Color.border,
    pl: '22px',
    height: '35px',
    backgroundColor: Color.mainBackground
  },
  link: { textDecoration: 'none' },
  button: {
    fontFamily: 'Inter',
    alignItems: 'center',
    backgroundColor: Color.mainBackground,
    color: Color.secondText,
    '&.active': {
      color: Color.text
    },
    '&.active > svg': {
      fill: Color.text
    },
    '&.active > span': {
      background: Color.text
    }
  },
  icon: (category) => ({
    width: category.icon.width ? category.icon.width : 8.5,
    height: category.icon.width ? category.icon.height : 8.5,
    marginRight: '5.5px',
    ...category.icon.styles,
    fill: Color.text
  })
}

export default sx
