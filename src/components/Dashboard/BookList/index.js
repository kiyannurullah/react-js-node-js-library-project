import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../../../redux/actions/libraryActions";
import {isDefined} from "../../../utils";
import {Container, Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddBookModal from "./addBookModal";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        height: "100vh"
    },
    media: {
        height: 140,
        backgroundSize: "contain"
    },
    book: {
        padding: 24,
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
        textAlign: "right"
    }
}));


const BookList = () => {
    const classes = useStyles();

    const booksReducer = useSelector(props => props.libraryReducers)

    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(getBooks())

    },[])

    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12} className={classes.addNewGrid}>
                   <AddBookModal booksReducer={booksReducer} />
                </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>

                {
                    booksReducer.fetching && isDefined(booksReducer.book_list) ?
                        <>Loading...</>
                        :
                        <>
                            <Grid container>
                                {
                                    booksReducer.book_list.map((book, key) => (
                                        <Grid item xs={12} md={2} className={classes.book} key={key}>
                                            <Card className={classes.bookCard}>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="http://themeturn.com/tf-db/bookhunt/bookhunt/assets/images/banner/book.png"
                                                    title={book.title}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h2">
                                                        {book.title.length > 20 ?
                                                            `${book.title.substring(0, 20)}...` : book.title
                                                        }
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                                        {book.description.length > 90 ?
                                                            `${book.description.substring(0, 90)}...` : book.description
                                                        }
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                        Details
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                        Edit
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                        Delete
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </>
                }
            </Grid>
        </Container>
    );
};
export default BookList;
