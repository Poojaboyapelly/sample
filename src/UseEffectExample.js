import React, { useState, useEffect } from 'react';

const ChainedEffectsExample = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch user data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
                const data = await response.json();
                setUser(data);
                console.log(user)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, []);

    // Fetch posts related to the user
    useEffect(() => {
        console.log(user, " in 2nd use effect")
        if (user) {
            const fetchPosts = async () => {
                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
                    const data = await response.json();
                    setPosts(data);
                } catch (error) {
                    console.error('Error fetching posts:', error);
                }
            };

            fetchPosts();
        }
    }, [user]);

    // Perform an action based on the posts
    useEffect(() => {
        if (posts.length > 0) {
            console.log('Fetched posts:', posts);
            setLoading(false); // Update loading state
        }
    }, [posts]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User: {user.name}</h1>
            <h2>Posts:</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChainedEffectsExample;
