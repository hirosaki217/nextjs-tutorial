import { Button, Card } from 'react-bootstrap';
import Layout from '../../../components/Layout';
import { getRandomJoke } from '../../../lib/joke';
import Link from 'next/link';
import { getBooks } from '../../../lib/book';

const Random = ({ books }) => {
    return (
        <Layout>
            {books.map((book) => (
                <Card className="my-3 shadow" key={Math.random()}>
                    <Card.Body>
                        <Card.Title>Here&aposs your random joke for today</Card.Title>
                        <Card.Text>{book.bookContent}</Card.Text>
                        <Link href="/">
                            <Button variant="dark">Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Layout>
    );
};

export const getStaticProps = async () => {
    const books = await getBooks();
    return {
        props: {
            books,
        },
    };
};

export default Random;
