import styled from '@emotion/styled'
import * as AWS from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { isNonNullExpression } from 'typescript'
import { onRecipeUploaded } from '../../store/ducks/contact/action'
import DropZoneItem from './dropzoneItem'

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

  const FileStatusBar = styled.div`
    width: 100%;
    vertical-align: top;
    margin-top: 10px;
    margin-bottom: 20px;
    position: relative;
    line-height: 50px;
    height: 50px;
    & div {
      overflow: hidden;
    }
  `

  const FileType = styled.div`
    display: inline-block !important;
    position: absolute;
    font-size: 9px;
    line-height: 13px;
    margin-top: 17px;
    padding: 4px 4px;
    border-radius: 2px;
    box-shadow: 1px 1px 2px #abc;
    color: #fff;
    background: #0080c8;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  `

  const FileName = styled.span`
    display: inline-block;
    vertical-align: top;
    margin-left: 50px;
    color: #4aa1f3;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
  `

  const FileError = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-left: 50px;
    color: #9aa9bb;
  `

  const FileErrorMessage = styled.span`
    color: redl;
  `

  const FileTypeLogo = styled.div`
    width: 50px;
    height: 50px;
    background: url(../images/generic.png) no-repeat center center;
    background-size: 100%;
    position: absolute;
  `

  const FileSize = styled.span`
    display: inline-block;
    vertical-align: top;
    color: #30693d;
    margin-left: 10px;
    margin-right: 5px;
    margin-left: 10px;
    color: #444242;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
  `

  const FileRemove = styled.div`
    position: absolute;
    top: 20px;
    right: 10px;
    line-height: 15px;
    cursor: pointer;
    color: #999999;
    margin-right: -10px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
  `

  const Modal = styled.div`
    z-index: 999;
    display: none;
    overlay: hidden;
  `

  const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.66);
    position: absolute;
    top: 0;
    left: 0;
  `

  const ModalImage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50 %, -50 %);
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `
  const Close = styled.span`
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    font-family: 'Roboto', sans-serif;
  `

  const modalImageRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const [selectedFiles, setSelectedFiles] = useState(new Array<any>())
  const [validFiles, setValidFiles] = useState(new Array<any>())
  const [uploadedFiles, setUploadFiles] = useState(new Array<string>())

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('SELECTED USED EFFECT: ', selectedFiles)
    const filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find((item: any) => item.name === current.name)
      if (!x) {
        return file.concat([current])
      } else {
        return file
      }
    }, [])
    setValidFiles([...filteredArray])
  }, [selectedFiles])

  useEffect(() => {
    console.log('UPDALOAD FILES DROP ZONE: ', uploadedFiles)
    // dispatch(onRecipeUploaded(uploadedFiles))
  }, [uploadedFiles])

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

  const handleFiles = (files: any) => {
    console.log('HANDLE FILES: ', selectedFiles)
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles(selectedFiles => [...selectedFiles, files[i]])
      } else {
        files[i]['invalid'] = true
        setSelectedFiles(prevArray => [...prevArray, files[i]])
      }
    }
  }

  const fileDrop = (e: any) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length) {
      handleFiles(files)
    }
  }

  const removeFile = (name: any) => {
    // find the index of the item
    // remove the item from array

    const validFileIndex = validFiles.findIndex(e => e.name === name)
    validFiles.splice(validFileIndex, 1)
    setValidFiles([...validFiles])

    uploadedFiles.splice(validFileIndex, 1)
    setUploadFiles(uploadedFiles)

    const selectedFileIndex = selectedFiles.findIndex(e => e.name === name)
    selectedFiles.splice(selectedFileIndex, 1)
    setSelectedFiles([...selectedFiles])
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
        <FileDisplayContainer>
          {validFiles.map((data: any, i) => {
            return <DropZoneItem key={i} file={data} removeFile={removeFile} />
          })}
        </FileDisplayContainer>
      </Container>
      <Modal ref={modalRef}>
        <Overlay></Overlay>
        <Close>X</Close>
        <ModalImage ref={modalImageRef}></ModalImage>
      </Modal>
    </>
  )
}

export default DropZone
