import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axiosRequest from "../services/axios-request";
import INewOrder from "../types/newOrder.type";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
import Collapse from '@mui/material/Collapse';

const OrderForm: React.FC = () => {
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFromValidated, setFromValidated] = useState(false);

    const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newOrder: INewOrder = {
            orderLines: [
                {
                    code: code,
                    description: description,
                    quantity: quantity,
                    price: price
                }
            ]
        };

        await axiosRequest.create(newOrder)
            .then((response: any) => {
                setIsSubmitted(true);
                console.log(response.data);
            }).catch((e: Error) => {
                console.log(e);
            });
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmitForm} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
                padding: '2rem',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <TextField
                                id="code"
                                label="Code"
                                value={code}
                                style={{width: '98%'}}
                                helperText="eg: 'ABCDFED1213'"
                            />
                            <IconButton color="inherit" onClick={() => console.log('sdfsdf')}>
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
                                value={description}
                                style={{width: '98%'}}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <TextField
                                id="quantity"
                                label="Quantity"
                                type="number"
                                value={quantity}
                                style={{width: '98%'}}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <TextField
                                id="price"
                                label="Price"
                                type="number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                style={{width: '98%'}}
                                value={price}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Collapse in={isFromValidated}>
                            <Item>
                                <Button variant="outlined" type="submit">Create</Button>
                            </Item>
                        </Collapse>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default OrderForm;
