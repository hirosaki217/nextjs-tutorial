import React from 'react';
import { getPostById, getPostIds } from '../../../lib/post';
import { Button, Card, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

const Post = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <Spinner variant="dark" animation="border" role="status">
                {/* <span className="">LOADING...</span> */}
            </Spinner>
        );
    }

    return (
        <Layout>
            <Card key={post.id} className="my-3 shadow">
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Link href="/posts">
                        <Button variant="dark">Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const paths = await getPostIds(5);

    return {
        paths,
        // fallback: false, // if path is not in paths then 404 page is returned
        fallback: true,
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
