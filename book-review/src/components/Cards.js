import { React } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Book1 from '../assets/book1.jpg';
import Book2 from '../assets/book2.jpg';

const Cards = ({book}) => {
    console.log(book);
    return (
        <>
            {
                book.map((item) => {
                    return (
                        <>
                            <div className="d-flex m-4 justify-content-around">

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Book2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        .
                                    </Card.Text>
                                    <p className="amount">&#8377; 999/-</p>
                                    <Button variant="primary">Add Review</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        </>
                    )
                })
            }

            {/* <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="card">1</div>
                    </div>
                    <div class="col-4">
                        <div class="card">1</div>
                    </div>
                    <div class="col-4">
                        <div class="card">1</div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Cards