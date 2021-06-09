import styled from '@emotion/styled';
import { Form, Formik, useField } from 'formik';
import React from 'react';

const TextArea = (props: {id: string, name: string, rows: string, placeholder: string}) => {
    // const FormTextArea = ({ ...areaProps }) => {
    //     const [field, meta] = useField(props)
    //     return <textarea className="text-area" {...field} {...areaProps} />
    //   }
    return <textarea className="text-area" {...props} />
}

export default TextArea;