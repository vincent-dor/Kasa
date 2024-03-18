const Tag = (props) =>
{
    return (
        <div className="tags__container">
			<span className="tags__button">{props.tag}</span>
		</div>
    )
}

export default Tag;