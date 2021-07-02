import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getShowHeaderRegisterLoginNotification } from '../../../store/ducks/header/selectors';
import RecipesboxLoginRegisterNotification from './recipeBoxLoginRegisterNotification';

const HeaderNoticationContainer = () => {
    const Container = styled.div`
        position: fixed;
        top: 73px;
        left: 0;
        z-index: 999;
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
    `
    const showRecipesBoxLoginRegisterNotificaion = useSelector(getShowHeaderRegisterLoginNotification)

    return (
        <Container>
            { showRecipesBoxLoginRegisterNotificaion && (
                <RecipesboxLoginRegisterNotification></RecipesboxLoginRegisterNotification>
            )
            }
        </Container>
    )
}

export default HeaderNoticationContainer