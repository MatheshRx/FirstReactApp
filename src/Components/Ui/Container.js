import '../bootstrap/morph/bootstrap.min.css'

const Container = (props) => {
    return <div className="container mt-5">{props.children}</div>
}

export default Container;