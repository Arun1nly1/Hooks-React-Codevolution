import React,{useState, useEffect} from 'react'
import axios from 'axios'
// as per video 66

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})


    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then(response =>{
                setLoading(false)
                setError('')
                setPost(response.data)
                console.log("data aayo")
            }
                )
            .catch(error =>{
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    }, [])
    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
