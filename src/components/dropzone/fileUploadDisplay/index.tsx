import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { onTryRecipeRemove } from '../../../store/ducks/contact/action';
import DropZoneItem from '../dropzoneItem';
import FileUploadProps from './interface';

const FileUploadDisplay = (props: FileUploadProps) => {

    const { uploadedFiles } = props

    const FileDisplayContainer = styled.div`
    width: 100%;
  `

    const dispatch = useDispatch()

    const removeFile = (name: any) => {
        dispatch(onTryRecipeRemove({ fileName: name }))
    }

    return (
        <>
            <FileDisplayContainer>
                {uploadedFiles.map((data: any, i: number) => {
                    return <DropZoneItem key={i} file={data.file} removeFile={removeFile} bucketFileName={data.filesName} />
                })}
            </FileDisplayContainer>
        </>
    )
}

export default FileUploadDisplay
