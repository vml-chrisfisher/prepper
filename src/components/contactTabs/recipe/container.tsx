import RecipeForm from '.';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUploadedFilesBucketNames } from '../../../store/ducks/contact/selectors';
import { RecipeContainerProps } from './interface';

const RecipeFormContainer = (props: RecipeContainerProps) => {
    return (
        <RecipeForm
            recipeCopy={props.recipeCopy}
            recipeTab={props.recipeTab}
        />
    )
}

export default RecipeFormContainer