import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axiosRequest from "../services/axios-request";
import INewOrder from "../types/newOrder.type";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
import Collapse from '@mui/material/Collapse';
import { Formik } from 'formik';
import * as Yup from 'yup';

const OrderForm: React.FC<{}> = () => {
    const [order, setOrder] = useState<INewOrder>({orderLines: { code: '', description: '', quantity: 0, price: 0 }});
    const [isFromValidated, setFromValidated] = useState(true);

    useEffect(() => {
        console.log(order.orderLines.code)
    }, [order.orderLines.code]);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const initialValues: INewOrder = { orderLines: { code: '', description: '', quantity: 0, price: 0 }};

    const generateCode = (values: any) => {
        values.orderLines.code = 'AB' + Math.floor(10000000 + Math.random() * 90000000).toString();
        setOrder(values);
    }

    const handleFromSubmit = async (values: any) => {
        const newOrder = Object.keys(values).reduce((array: any, key) => {
            return [...array, {
                orderLines: [values[key]]
            }]
        }, []);

        await axiosRequest.create(newOrder[0])
            .then((response: any) => {
                console.log(response.data);
            }).catch((e: Error) => {
                console.log(e);
            });
    }

    return (
        <div>
            <Formik initialValues={initialValues}
                    validationSchema={Yup.object().shape({
                        orderLines: Yup.object().shape({
                            code: Yup.string().required('Code is required'),
                            description: Yup.string().required('Description is required'),
                            quantity: Yup.number().integer().min(100).required('Quantity is required'),
                            price: Yup.number().integer().min(100).required('Price is required')
                        })
                    })}
                    onSubmit={handleFromSubmit}>
                {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      isValid,
                      dirty,
                      touched,
                      values
                  }) => (
                        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6}>
                                    <Item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <TextField
                                            id="code"
                                            label="Code"
                                            type="text"
                                            name="orderLines.code"
                                            size="small"
                                            style={{width: '98%'}}
                                            helperText={touched.orderLines?.code && errors.orderLines?.code || "eg: 'ABCD123123'"}
                                            value={values.orderLines.code}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.orderLines?.code && touched.orderLines?.code)}
                                        />
                                        <IconButton color="inherit" onClick={() => generateCode(values)}>
                                            Generate
                                        </IconButton>
                                    </Item>

                                </Grid>
                                <Grid item xs={6}>
                                    <Item>
                                        <TextField
                                            id="description"
                                            label="Description"
                                            multiline
                                            maxRows={4}
                                            name="orderLines.description"
                                            helperText={touched.orderLines?.description && errors.orderLines?.description}
                                            size="small"
                                            style={{width: '98%'}}
                                            value={values.orderLines.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.orderLines?.description && touched.orderLines?.description)}
                                        />
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item>
                                        <TextField
                                            id="quantity"
                                            label="Quantity"
                                            type="number"
                                            name="orderLines.quantity"
                                            helperText={touched.orderLines?.quantity && errors.orderLines?.quantity}
                                            size="small"
                                            style={{width: '98%'}}
                                            value={values.orderLines.quantity}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={Boolean(errors.orderLines?.quantity && touched.orderLines?.quantity)}
                                        />
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item>
                                        <TextField
                                            id="price"
                                            label="Price"
                                            type="number"
                                            name="orderLines.price"
                                            size="small"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                            style={{width: '98%'}}
                                            helperText={touched.orderLines?.price && errors.orderLines?.price}
                                            value={values.orderLines.price}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={Boolean(errors.orderLines?.price && touched.orderLines?.price)}
                                        />
                                    </Item>
                                </Grid>
                                <Grid item xs={12}>
                                    <Collapse in={isFromValidated}>
                                        <Item>
                                            <Button variant="outlined" type="submit" disabled={Boolean(!isValid)}>Create</Button>
                                            <Button variant="outlined" type="button">Reset</Button>
                                        </Item>
                                    </Collapse>
                                </Grid>
                            </Grid>
                        </form>
                )}
            </Formik>
        </div>
    );
}

export default OrderForm;
