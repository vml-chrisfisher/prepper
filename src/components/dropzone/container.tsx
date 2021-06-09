import RecipeForm from '.';
import DropZone from '.';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUploadedRecipeBucketNames } from '../../store/ducks/contact/selectors';

const DropZoneContainer = () => {
    return (
        <DropZone />
    )
}

export default DropZoneContainer