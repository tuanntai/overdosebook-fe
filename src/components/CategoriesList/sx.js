import { SELECTORS } from "../../constants/sx"

const sx = {
  list: {
    mb: '21px',
    display: 'flex',
    justifyContent: 'space-between'
  },

  listItem: {
    [SELECTORS.NOT_LAST_CHILD]: {
      mb: '20px'
    }
  }
}

export default sx
