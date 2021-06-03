import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default function AddBookModal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = () => {

    }

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
                        <TextValidator
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Book Name"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            validators={['required']}
                            errorMessages={['Book Name is required']}
                        />
                        <TextValidator
                            variant="outlined"
                            rows={5}
                            multiline
                            margin="dense"
                            id="name"
                            label="Description"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            validators={['required']}
                            errorMessages={['Description is required']}
                        />
                        <TextValidator
                            variant="outlined"
                            margin="dense"
                            id="name"
                            label="Author"
                            type="text"
                            autoComplete="off"
                            fullWidth
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
