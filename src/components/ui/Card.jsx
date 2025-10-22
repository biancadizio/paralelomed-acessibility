export default function Card({ title, text, image, link }) {
    return (
        <article className="card">
            <div className="card-image"><img src={image} alt={title} /></div>
            <h4>{title}</h4>
            <p>{text}</p>
            {link && <a className="link-more">{link}</a>}
        </article>
    )
}