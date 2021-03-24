import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
    formContainer: {
        padding: 20,
        backgroundColor: '#fff'
    },
    formSubmit: {
        padding: 16,
        backgroundColor: '#0066d3',
        borderRadius: 4
    }
});

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .min(6, 'password at leat 6 char')
        .required('Password is required')
});

const FormikForm = ({ onSubmit }) => {
    return (
        <View style={styles.formContainer}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
            <Pressable onPress={onSubmit} style={styles.formSubmit}>
                <Text style={{ fontSize: 16, color: '#fff', textAlign: 'center' }}>Sign in</Text>
            </Pressable>
        </View>
    );
};

const SignIn = () => {
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <FormikForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;