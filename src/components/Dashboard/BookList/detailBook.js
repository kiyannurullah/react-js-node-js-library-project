import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Divider, Typography} from "@material-ui/core";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import IconButton from "@material-ui/core/IconButton";

export default function DetailBookModal(props) {

    const {book} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton edge="end" aria-label="detail" onClick={handleClickOpen}>
                <ChromeReaderModeIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="detail-book-title" disableBackdropClick>
                <DialogTitle id="detail-book-title">Book Information</DialogTitle>
                    <DialogContent>
                        <Typography variant="h6" component="h1">
                            {book.title}
                        </Typography>
                        <Divider style={{marginBottom: 20}} />
                        <Typography component="p" style={{marginBottom: 20}}>
                            {book.description}
                        </Typography>
                        <Typography component="p" style={{textAlign:"right", fontWeight: "bold"}}>
                            {book.author}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
            </Dialog>
        </>
    );
}
