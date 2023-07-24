import { useEffect, useState } from "react"

function CatFacts() {

    const [data, setData] = useState({})
    const [cat, setCat] = useState('')
    
    useEffect(() => {fetchData1() 
        fetchData2()}, [])

    async function fetchData1() {
        let url = "https://meowfacts.herokuapp.com/?count=3"

        const response = await fetch(url) 
        const data = await response.json()
        // console.log(data)
        setData(data)
    }

    async function fetchData2() {
        let url = "https://cataas.com/cat"

        const response = await fetch(url)
        // const data = await response.json()
        console.log(response)
        setCat(data)
    }

    

    return (
    <div>
        <img src={"https://cataas.com/cat"} />
        <h2>{data.data ? data.data[0] : 'loading'}</h2>
        <img src={"https://cataas.com/cat"} />
        <h2>{data.data ? data.data[1] : 'loading'}</h2>
        <img src={"https://cataas.com/cat"} />
        <h2>{data.data ? data.data[2] : 'loading'}</h2>
    </div>
    )
}

export default CatFacts