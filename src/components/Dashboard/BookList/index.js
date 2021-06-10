import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../../../redux/actions/libraryActions";
import {isDefined} from "../../../utils";
import {Container, Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import AddBookModal from "./addBookModal";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import UpdateBookModal from "./updateBookModal";
import DetailBookModal from "./detailBook";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    listDiv: {
        backgroundColor: "#ffffff",
        marginBottom: 8,
        borderRadius: 8
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
        paddingRight: 82
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
                            <div>
                                {
                                    booksReducer.fetching && isDefined(booksReducer.book_list) ?
                                        <>Loading...</>
                                        :
                                <List>
                                    {
                                        booksReducer.book_list.map((book, key) => (
                                            <div key={key} className={classes.listDiv}>
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
                                                        <DetailBookModal book={book} />
                                                        <UpdateBookModal
                                                            booksReducer={booksReducer}
                                                            book={book}
                                                        />
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                            </div>
                                        ))
                                    }
                                </List>
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default BookList;
