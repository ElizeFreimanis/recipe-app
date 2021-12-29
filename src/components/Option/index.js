import './styles.css';

export default function Option({ backgroundImg, text, selected, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`option${selected ? ' selected' : ''}`}
        >
            <img alt='' style={{ backgroundImage: `url(${backgroundImg})` }} />
            <h3>{text}</h3>
        </div>
    );
}
