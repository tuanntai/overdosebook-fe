import React, { useEffect } from 'react';
import { Box } from 'theme-ui';
import { getBookByUserId } from '../../../../redux/actions/user/user';
import { useAppDispatch, useAppSelector } from '../../../../redux/hook';
import { authSelectors } from '../../../../redux/reducers/authReducer';

function OwnerBook() {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(authSelectors.userIdSelector)
    useEffect(() => {
        dispatch(getBookByUserId(userId))
    }, [userId, dispatch])
    return <Box></Box>
}

export default OwnerBook;