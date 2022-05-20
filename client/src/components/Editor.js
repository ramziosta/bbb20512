import { Link } from "react-router-dom"

const Editor = () => {
    return (
        <section>
            <h1>Accounting</h1>
            <br />
            <p>Accounting Page</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Editor
