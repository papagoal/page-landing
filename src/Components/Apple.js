import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Apple(props) {
    // Setting initial state
    const initialUserState = {
        user: {},
        loading: true,
    }
    // Getter and setter for user state
    const [user, setUser] = useState(initialUserState)

    // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
    useEffect(() => {
        // Pass our param (:id) to the API to call
        const getUser = async () => {
            const { data } = await axios(
                `https://api.github.com/users/${props.match.params.id}`
            )
            // Update state
            setUser(data)
        }
        // Invoke the async function
        getUser()
    }, []) // [] will prevent useEffect from running in an infinite loop

    // Return a table with some data from the API
    return user.loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <h2> I am apple </h2>
            <h1>{props.match.params.id}</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Website</th>
                        <th>Followers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.id}</td>
                        <td>
                            <a href={user.blog}>{user.blog}</a>
                        </td>
                        <td>{user.followers}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
