import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Flex } from 'theme-ui';
import sx from './styles'

function FilterCategory({ categories }) {
    const [active, setActive] = useState(categories[0].key)
    const [isShowDropDownMenu, setIsShowDropDownMenu] = useState(false)
    const location = useLocation()
    useEffect(() => {
        console.log(location.pathname)
        const currentItem = categories.find((category) => location.pathname.includes(category.path))
        if (currentItem) setActive(currentItem.key)
    }, [categories, location.pathname])

    const handleFilterChange = (key) => {
        setActive(key)
        setIsShowDropDownMenu(!isShowDropDownMenu)
    }

    return <Flex sx={sx.wrapper}>
        {categories.map((category) => (
            <Link
                to={category.path}
                style={sx.link}
                key={category.key}
            >
                <Button
                    className={active === category.key ? 'active' : ''}
                    variant="buttons.category"
                    onClick={() => handleFilterChange(category.key)}
                    sx={sx.button}
                >
                    {category.name}
                    <span></span>
                </Button>
            </Link>
        ))
        }
    </Flex >;
}

export default FilterCategory;