import { useEffect, useState } from "react"

function CatFacts() {
    const [input, setInput] = useState('') 
    const [data, setData] = useState({})
    const [cat, setCat] = useState({})

    


    useEffect(() => {fetchData1() 
        fetchData2()
        randomCatTag()}, [])

    async function fetchData1() {
        let url = "https://meowfacts.herokuapp.com/?count=3"

        const response = await fetch(url) 
        const data = await response.json()
        // console.log(data)
        setData(data)
    }

    async function fetchData2() {
        let url = "https://cataas.com/api/tags"

        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setCat(data)
    }

    function randomCatTag() {
        let randomCat = Math.floor(Math.random() * 595)
        return randomCat
    }
    
    function loop() {

        const arr = []

        for (let i = 0; i < Number(input); i++) {
            console.log(input)
            arr.push(
                <div>
                    <h2>{data.data ? data.data[i] : 'loading'}</h2>
                    <img src={`https://cataas.com/cat/${cat[randomCatTag()]}`} />
                </div>
            )
        }
        return arr
    }


    return (
    <div>
        <h1>Random Cats & Facts</h1>
        <label>How many Cat facts?</label>
        <input type='number' 
            min='1' 
            max='50' 
            placeholder="1-50" 
            onChange={(e) => setInput(e.target.value)}
            value={input}
        >
        </input>
        <br />
        {loop()}


        {/* <img src={`https://cataas.com/cat/${cat[randomCatTag()]}`} />
        <h2>{data.data ? data.data[0] : 'loading'}</h2>
        <img src={`https://cataas.com/cat/${cat[randomCatTag()]}`} />
        <h2>{data.data ? data.data[1] : 'loading'}</h2>
        <img src={`https://cataas.com/cat/${cat[randomCatTag()]}`} />
        <h2>{data.data ? data.data[2] : 'loading'}</h2> */}
    </div>
    )
}

export default CatFacts