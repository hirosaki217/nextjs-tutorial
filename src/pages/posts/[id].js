import React from 'react';
import { getPostById, getPostIds } from '../../../lib/post';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

const Post = ({ post }) => {
    return (
        <div>
            <Card key={post.id} className="my-3 shadow">
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Link href="/posts">
                        <Button variant="dark">Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export const getStaticPaths = async () => {
    const paths = await getPostIds();

    return {
        paths,
        fallback: false, // if path is not in paths then 404 page is returned
    };
};

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id);
    return {
        props: {
            post,
        },
    };
};

export default Post;
