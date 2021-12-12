// BREAKPOINTS
const XS_MAX = '@media screen and (max-width: 320px)'
const SM_MIN = '@media screen and (min-width: 321px)'
const SM_MAX = '@media screen and (max-width: 767px)'
const MD_MIN = '@media screen and (min-width: 768px)'
const MD_MAX = '@media screen and (max-width: 1023px)'
const LG_MIN = '@media screen and (min-width: 1024px)'
const LG_MAX = '@media screen and (max-width: 1920px)'
const XL_MIN = '@media screen and (max-width: 1921px)'

const customMax = (width) => {
    return `@media screen and (max-width: ${width}px)`
}

const customMin = (width) => {
    return `@media screen and (min-width: ${width}px)`
}

export const BREAKPOINTS = {
    XS_MAX,
    SM_MIN,
    SM_MAX,
    MD_MIN,
    MD_MAX,
    LG_MIN,
    LG_MAX,
    XL_MIN,

    customMax,
    customMin
}

// SELECTORS

const NOT_LAST_CHILD = ':not(:last-child)'
const NOT_FIRST_OF_TYPE = ':not(:first-of-type)'
const FIRST_OF_TYPE = ':first-of-type'
const LAST_CHILD = ':last-child'

export const SELECTORS = {
    NOT_LAST_CHILD,
    NOT_FIRST_OF_TYPE,
    FIRST_OF_TYPE,
    LAST_CHILD
}
