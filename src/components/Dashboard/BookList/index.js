import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../../../redux/actions/libraryActions";
import {isDefined} from "../../../utils";
import {Container, Divider, Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import AddBookModal from "./addBookModal";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import UpdateBookModal from "./updateBookModal";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    container: {
        height: "100vh"
    },
    media: {
        height: 140,
        backgroundSize: "contain"
    },
    bookList: {
        margin: "auto",
        padding: "24px"
    },
    bookCard: {
        flexGrow: 1,
        boxShadow: '2px 3px 6px 0 rgb(0 0 0 / 7%)'
    },
    description: {
        minHeight: 64,
        maxHeight: 64
    },
    addNewGrid: {
        textAlign: "right",
        alignSelf: "center"
    },
    list: {
        paddingRight: "120px"
    }
}));


const BookList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const booksReducer = useSelector(props => props.libraryReducers)

    useEffect( () => {

        dispatch(getBooks())

    },[])

    return (
        <Container maxWidth="xl">
            <Grid container className={classes.root} spacing={2}>
                {
                    booksReducer.fetching && isDefined(booksReducer.book_list) ?
                        <>Loading...</>
                        :
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid item xs={12} md={8} className={classes.bookList}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" className={classes.title}>
                                                Books List
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} className={classes.addNewGrid}>
                                            <AddBookModal booksReducer={booksReducer} />
                                        </Grid>
                                    </Grid>
                                    <div className={classes.demo}>
                                        <List>
                                            {
                                                booksReducer.book_list.map((book, key) => (
                                                    <div key={key}>
                                                        <ListItem className={classes.list}>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    {/*<img src="http://themeturn.com/tf-db/bookhunt/bookhunt/assets/images/banner/book.png" width={100} />*/}
                                                                    <MenuBookIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                primary={book.title}
                                                                secondary={book.description}
                                                            />
                                                            <ListItemSecondaryAction>
                                                                <UpdateBookModal booksReducer={booksReducer} book={book} />
                                                                <IconButton edge="end" aria-label="edit">
                                                                    <EditIcon />
                                                                </IconButton>
                                                                <IconButton edge="end" aria-label="delete">
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </ListItemSecondaryAction>
                                                        </ListItem>
                                                        {
                                                            key + 1 < booksReducer.book_list.length &&
                                                            <Divider variant="inset" component="li" />

                                                        }
                                                    </div>
                                                ))
                                            }
                                        </List>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                }
            </Grid>
        </Container>
    );
};
export default BookList;
