import { Link } from 'react-router-dom';

export default function BooksList() {
    return (
        <>
            <div>Books List</div>
            <Link to="/Book/1"><h1>Book1</h1></Link>
            <Link to="/Book/2"><h1>Book2</h1></Link>
        </>
    )
}
