import styled from '@emotion/styled'
import * as AWS from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { onRecipeUploaded } from '../../../store/ducks/contact/action'
import DropZoneItemInterface from './interface'

const DropZoneItem = (props: DropZoneItemInterface) => {
  const { file, removeFile } = props
  const [uploadPercentage, setUploadPercentage] = useState(0)

  const dispatch = useDispatch()

  interface UploadPercentageProps {
    percentage: number
  }

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

  const UploadContainer = styled.div<UploadPercentageProps>`
    position: relative;
    width: 100%;
    height: ${props => {
      return props.percentage === 100 ? '0px' : '3px'
    }}'
    transition: all 0.5s ease-out;
    `

  const UploadTotal = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #999999;
    z-index: 999;
  `

  const UploadPercentage = styled.div<UploadPercentageProps>`
    position: absolute;
    height: 100%;
    z-index: 9999;
    width: ${props => {
      return props.percentage + '%'
    }};
    background-color: #f24e11;
    transition: all 0.5s ease-out;
  `

  const upload = () => {
    const bucketName = 'knife-and-fish-user-recipes'
    const bucketRegion = 'us-east-1'
    const identityPoolId = 'arn:aws:iam::078936372766:role/Cognito_RecipeUploadPoolUnauth_Role'

    AWS.config.region = 'us-east-1' // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:f74b6d29-5575-4ded-a0e7-374af44c6d7c',
    })

    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: bucketName },
    })

    const fileName = file.name
    const fileURL = `https://${bucketName}.amazon.aws.com/${fileName}`
    const putRequest: PutObjectRequest = {
      Bucket: bucketName,
      Key: fileName,
      Body: file,
      ACL: 'public-read',
    }
    s3.upload(putRequest, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
      console.log('ERROR: ', err)
      console.log('DATA:', data)
      if (data && data.Location) {
        console.log('COMPLEE')
        dispatch(onRecipeUploaded(data.Location))
        // props.uploadCompleted(data.Location)
      }
    }).on('httpUploadProgress', (progress: AWS.S3.ManagedUpload.Progress) => {
      console.log('PROGRESS: ', progress)
      console.log((progress.loaded * 100) / progress.total)
      setUploadPercentage((progress.loaded * 100) / progress.total)
    })
  }

  useEffect(() => {
    upload()
  })

  const fileSize = (size: any) => {
    if (size === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(size) / Math.log(k))
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const fileType = (fileName: any) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName
  }

  return (
    <FileStatusBar>
      <div>
        <FileTypeLogo></FileTypeLogo>
        <FileType>{fileType(file.name)}</FileType>
        <FileName>{file.name}</FileName>
        <FileSize>{fileSize(file.size)}</FileSize>
        <UploadContainer percentage={uploadPercentage}>
          <UploadTotal></UploadTotal>
          <UploadPercentage percentage={uploadPercentage} />
        </UploadContainer>
      </div>
      <FileRemove onClick={() => removeFile(file.name)}>X</FileRemove>
    </FileStatusBar>
  )
}

export default DropZoneItem
