import { useParams } from "react-router-dom"

export default function Books() {
    const { Id } = useParams()
    console.log({ Id })
    return (
        <>
            <h1>my book is {Id}</h1>
        </>
    )
}
