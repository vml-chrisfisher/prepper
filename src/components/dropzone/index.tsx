import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { onUploadRecipe } from '../../store/ducks/contact/action';
import FileUploadDisplay from './fileUploadDisplay';
import FileUploadContainer from './fileUploadDisplay/container';
import DropZoneProps from './interface';

const DropZone = () => {

  const Container = styled.div`
    width: calc(100% - 15px);
    & p {
      color: red;
      text-align: center;
    }
  `

  const DropContainer = styled.div`
    display: block;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 200px;
    border: 1px dashed #333333;
  `

  const UploadIcon = styled.div`
    width: 50px;
    height: 50px;
    background: url(../images/upload.png) no-repeat center center;
    background-size: 100%;
    text-align: center;
    margin: 0 auto;
    padding-top: 30px;
  `

  const DropMessage = styled.div`
    text-align: center;
    color: #999999;
    font-family: 'Playfair Display', serif;
    font-size: 14px;
  `

  const FileDisplayContainer = styled.div`
    width: 100%;
  `

  const dispatch = useDispatch()

  const dragOver = (e: any) => {
    e.preventDefault()
  }

  const dragEnter = (e: any) => {
    e.preventDefault()
  }

  const dragLeave = (e: any) => {
    e.preventDefault()
  }

  const validateFile = (file: any) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon']
    if (validTypes.indexOf(file.type) === -1) {
      return false
    }
    return true
  }

  const handleFiles = (file: any) => {
    const bucketFileName = `${new Date().toISOString()}_${file.name}`.replaceAll(' ', '-').replaceAll(':', "_")

    file.bucketFileName = bucketFileName
    dispatch(
      onUploadRecipe({
        file: file,
        fileName: bucketFileName,
      }),
    )
  }

  const fileDrop = (e: any) => {
    
    const files = e.dataTransfer.files
    if (files.length && validateFile(files[0])) {
      handleFiles(files[0])
    }
    e.preventDefault()
  }


  return (
    <>
      <Container>
        <DropContainer onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={fileDrop}>
          <DropMessage>
            <UploadIcon></UploadIcon>
            Drag & Drop files here or click to upload
          </DropMessage>
        </DropContainer>
        <FileUploadContainer />
      </Container>
    </>
  )
}

export default DropZone
