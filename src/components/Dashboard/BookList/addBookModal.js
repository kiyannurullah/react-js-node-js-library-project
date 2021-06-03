import React, {useEffect, useState} from 'react';
import {AddBook, getBooks} from "../../../redux/actions/libraryActions";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {useDispatch} from "react-redux";
import {isDefined, userLogin} from "../../../utils";
import {userClearState} from "../../../redux/actions/userActions";
import {history} from "../../../utils/history";
import {BOOK_LIST} from "../../../constants/appUrls.constants";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Alert from '@material-ui/lab/Alert';

export default function AddBookModal(props) {
    const dispatch = useDispatch();

    const {booksReducer} = props;

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(null);
    const [formData, setFormData] = useState({ title: "", description: "", author: "" });

    const handleClickOpen = () => {
        setOpen(true);
        setMessage(null)
        setFormData({title: "", description: "", author: "" })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = () => {
        const params = {
            title: formData.title,
            description: formData.description,
            author: formData.author,
        }
        dispatch(AddBook(params))
    }

    useEffect( () => {

        if (booksReducer && booksReducer.add_book && isDefined(booksReducer.add_book.message) && isDefined(booksReducer.add_book.message.message)){
            const newState = booksReducer.add_book.message.message;
            setMessage(newState);
        }

        if (booksReducer && booksReducer.add_book && isDefined(booksReducer.add_book.bookId)){

            handleClose()
            dispatch(getBooks())
        }

    },[booksReducer])

    console.log("booksReducer", booksReducer)

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add New Book
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="add-new-book-title" disableBackdropClick>
                <DialogTitle id="add-new-book-title">Add New Book</DialogTitle>
                <ValidatorForm onSubmit={onSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            After typing the book information, you can save it by pressing the save button.
                        </DialogContentText>
                        {
                            message &&
                            <Alert severity="error">{message}</Alert>
                        }
                        <TextValidator
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            name="title"
                            label="Book Name"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            value={formData.title}
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['Book Name is required']}
                        />
                        <TextValidator
                            variant="outlined"
                            rows={5}
                            multiline
                            margin="dense"
                            name="description"
                            label="Description"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            value={formData.description}
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['Description is required']}
                        />
                        <TextValidator
                            variant="outlined"
                            margin="dense"
                            name="author"
                            label="Author"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            value={formData.author}
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['Author is required']}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary" >
                            Save
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}
