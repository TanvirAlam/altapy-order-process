import React, { useState } from 'react';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axiosRequest from "../services/axios-request";
import INewOrder from "../types/newOrder.type";

const OrderForm: React.FC = () => {
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                <div>
                    <TextField
                        id="code"
                        label="Code"
                        multiline
                        maxRows={4}
                        value={code}
                        onChange={(
                            ev: React.ChangeEvent<HTMLInputElement>,
                        ): void => {
                            setCode(ev.target.value);
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        maxRows={4}
                        value={description}
                        onChange={(
                            ev: React.ChangeEvent<HTMLInputElement>,
                        ): void => {
                            setDescription(ev.target.value);
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="quantity"
                        label="Quantity"
                        type="number"
                        multiline
                        maxRows={4}
                        value={quantity}
                        onChange={(
                            ev: React.ChangeEvent<HTMLInputElement>,
                        ): void => {
                            setQuantity(
                                parseInt(ev.target.value, 10),
                            );
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="price"
                        label="Price"
                        type="number"
                        multiline
                        maxRows={4}
                        value={price}
                        onChange={(
                            ev: React.ChangeEvent<HTMLInputElement>,
                        ): void => {
                            setPrice(
                                parseInt(ev.target.value, 10),
                            );
                        }}
                    />
                </div>
                <div>
                    <Button variant="outlined" type="submit">Create</Button>
                </div>
            </Box>
        </div>
    );
}

export default OrderForm;
