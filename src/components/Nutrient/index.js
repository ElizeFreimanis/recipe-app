import './styles.css';

function Nutirent({ label, quantity, unit }) {
    return (
        <div className='nutrient'>
            <p>{label}</p>
            <p>
                {Math.round(quantity)} {unit}
            </p>
        </div>
    );
}

export default Nutirent;
