/** @jsxImportSource theme-ui */

import sx from './sx'
import React, { useRef } from 'react'
import { Flex, Box, Button } from 'theme-ui'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { SVGIcon } from '../SVGIcon/SVGIcon'
const DropdownOption = ({
    icon,
    styles,
    options,
    title,
    activeValue,
    position,
    setActiveValue
}) => {
    const [isShowDropDownMenu, setIsShowDropDownMenu] = React.useState(false)

    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef, () => setIsShowDropDownMenu(false))
    return (
        <Flex
            sx={{ ...sx.wrapper, ...styles }}
            onClick={() => {
                setIsShowDropDownMenu(!isShowDropDownMenu)
            }}
            ref={wrapperRef}
        >
            <Box className="activeItem" sx={sx.activeItem}>
                <Button sx={sx.activeButton}>
                    {icon}
                    {activeValue || activeValue === 0
                        ? options.find((option) => option.value === activeValue)?.text
                        : title}
                </Button>
                <SVGIcon name="downarrow" sx={sx.downArrow} />
            </Box>
            <Box
                sx={() => sx.dropdown( isShowDropDownMenu, position)}
                className="dropdown_menu"
            >
                {options.map((option) => (
                    <Button
                        key={option.value}
                        variant="buttons.category"
                        onClick={() => {
                            setActiveValue(option.value)
                            setIsShowDropDownMenu(!isShowDropDownMenu)
                        }}
                        sx={sx.option}
                    >
                        {icon}
                        {option.text}
                    </Button>
                ))}
            </Box>
        </Flex>
    )
}

export { DropdownOption }
