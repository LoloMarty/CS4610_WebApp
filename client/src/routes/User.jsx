    import React, { useState, useEffect } from 'react'
    import { useParams } from 'react-router-dom';
    import api from '../api/api'
    import Header from "../components/Header";

export default function User() {
    const { username } = useParams();
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get(`/user/${username}`);
            setData(response.data)
        };
        fetchData();
    }, []);

    function format() {
        var arr = [];
        for (const [key, value] of Object.entries(data)) {
            arr.push(value)
        }
        return arr
    }

    return <div>
        <Header />
        {format().map((value) =>
            <div>
                <h3>{value.username}</h3>
                <p>{value.message}</p>
                <sub>At {value.timestamp}</sub>
            </div>)}
    </div>
}