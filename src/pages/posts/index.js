import { Card } from 'react-bootstrap';
import Layout from '../../../components/Layout';
import { getPosts } from '../../../lib/post';
import Link from 'next/link';

const Posts = ({ posts }) => {
    return (
        <Layout>
            {posts.map((p) => (
                <Card key={p.id} className="my-3 shadow">
                    <Card.Body>
                        <Card.Title>{p.id + '---' + p.title}</Card.Title>
                        <Card.Text>{p.body}</Card.Text>
                        <Card.Link as={Link} href={`/posts/${p.id}`}>
                            See more
                        </Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </Layout>
    );
};

export const getStaticProps = async () => {
    const posts = await getPosts(10);
    return {
        props: {
            posts,
        },
        revalidate: 1,
    };
};

export default Posts;
