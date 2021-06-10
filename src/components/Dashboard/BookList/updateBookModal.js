import React, {useEffect, useState} from 'react';
import {getBooks, UpdateBook} from "../../../redux/actions/libraryActions";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {useDispatch} from "react-redux";
import {isDefined} from "../../../utils";
import Alert from '@material-ui/lab/Alert';
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from "@material-ui/icons/Edit";

export default function UpdateBookModal(props) {
    const dispatch = useDispatch();

    const {booksReducer, book} = props;

    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [formData, setFormData] = useState({ title: book.title, description: "", author: "" });

    const handleClickOpen = () => {
        setOpen(true);
        setFormData({title: book.title, description: book.description, author: book.author })
    };

    const handleClose = () => {
        setOpen(false);
        setMessage("")
    };

    const handleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = () => {
        const params = {
            id: book.bookId,
            title: formData.title,
            description: formData.description,
            author: formData.author
        }
        dispatch(UpdateBook(params))
    }

    useEffect( () => {

        if (booksReducer && booksReducer.update_book && isDefined(booksReducer.error_update_book) && isDefined(booksReducer.error_update_book.response)) {
            const newState = booksReducer.error_update_book.response.data.message;
            setOpenError(true)
            setMessage(newState);
        }

        if (booksReducer && booksReducer.update_book && booksReducer.update_book.status === 200 && booksReducer.update_book.data.bookId === book.bookId  ){
            setOpenError(false)
            handleClose()
            dispatch(getBooks())
        }

    },[booksReducer, book])

    console.log("booksReducer", book.bookId)
    console.log("booksReducer", booksReducer)

    return (
        <>
            <IconButton edge="end" aria-label="detail" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="add-new-book-title" disableBackdropClick>
                <DialogTitle id="add-new-book-title">Update Book</DialogTitle>
                <ValidatorForm onSubmit={onSubmit}>
                    <DialogContent>
                        {
                            isDefined(message) &&
                            <Collapse in={openError}>
                                <Alert severity="error" action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpenError(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                >
                                    {message}
                                </Alert>
                            </Collapse>
                        }
                        <DialogContentText>
                            After typing the book information, you can save it by pressing the save button.
                        </DialogContentText>
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
        </>
    );
}
