import './Block.scss'

export default function Block({image, price, bedrooms, bath, area}) {
    return (
        <div className='blocks__block'>
            <img src={`/assets/blocks/${image}.png`} alt="Apartament preview" />
            <div className='block__price-bar'>
                <h2>{price} $</h2>
                <button className='button'>View Details</button>
            </div>
            <div className='block__rooms'>
                <table>
                    <tbody>
                        <tr>
                            <td>{bedrooms} {bedrooms > 1 ? 'bedrooms' : 'bedroom'}</td>
                            <td>{bath} {bath > 1 ? 'baths' : 'bath'}</td>
                            <td>{area} sq ft</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}