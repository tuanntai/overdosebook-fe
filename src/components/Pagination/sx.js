const sx = {
  dotWrapper: { mr: '10px' },
  dot: (theme) => ({
    marginRight: '3px',
    width: '4px',
    height: '4px',
    fill: theme.colors?.text
  }),
  paginationWrapper: (styles) => ({ display: 'flex', alignItems: 'center', ...styles }),
  arrowBox: (theme) => ({
    background: theme.colors?.headerBorder,
    border: theme.colors?.headerBorder
  }),
  leftArrow: (theme) => ({
    width: '7px',
    height: '7px',
    fill: theme.colors?.thirdText,
    transform: 'rotate(180deg)',
    cursor: 'pointer'
  }),
  rightArrow: (theme) => ({
    width: '7px',
    height: '7px',
    fill: theme.colors?.thirdText,
    cursor: 'pointer'
  }),
  number: (theme) => ({
    fontFamily: 'Inter',
    color: theme.colors?.thirdText,
    borderColor: theme.colors?.sidebarActiveBackground,
    background: theme.colors?.paginationBackground,
    cursor: 'pointer',
    '&.active': {
      background: theme.colors?.paginationActive
    }
  })
}

export default sx
