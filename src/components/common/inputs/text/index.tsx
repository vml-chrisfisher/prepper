import styled from '@emotion/styled';
import { Form, Formik, useField } from 'formik';
import React from 'react';

const Text = (props: {id: string, name: string, type: string, placeholder: string}) => {
    // const FormInput = ({ ...inputProps }) => {
    //     return <input className="form--input" {...inputProps} />
    //   }
    return <input className="form--input" {...props} />
}

export default Text;