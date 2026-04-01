const Card = ({ title = "No title", description = "No description", children }) => {
    
    const handleClick = () => {
        alert('Clicked');
    }

    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <div>{children}</div>

            <button onClick={handleClick}>Click me</button>
        </div>
    )
};

export default Card;