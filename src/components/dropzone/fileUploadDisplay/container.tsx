import RecipeForm from '.';
import DropZone from '.';
import FileUploadDisplay from '.';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUploadedRecipeBucketNames, getUploadedRecipes } from '../../../store/ducks/contact/selectors';

const FileUploadContainer = () => {
    return (
        <FileUploadDisplay
        uploadedFiles={useSelector(getUploadedRecipes)}
        />
    )
}

export default FileUploadContainer