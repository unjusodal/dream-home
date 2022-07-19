import './Footer.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='wrapper'>
                <div className='footer__about'>
                    <a href='#header'>
                        <img width={70} height={70} src="/assets/logo.svg" alt="logo" />
                    </a>
                    <p>Find your place with us.</p>
                </div>
                <div className='footer__contact'>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Deam home villas San Diego, CA, USA</li>
                        <li>025-777-3067</li>
                        <li>info@dreamhome.com</li>
                    </ul>
                </div>
                <div className='footer__social'>
                    <h2>Follow Us</h2>
                    <ul>
                        <li>
                            <a href="https://twitter.com" target='_blank' rel='noreferrer'>Twitter</a>
                        </li>
                        <li>
                            <a href="https://instaram.com" target='_blank' rel='noreferrer'>Instagram</a>
                        </li>
                        <li>
                            <a href="https://youtube.com" target='_blank' rel='noreferrer'>YouTube</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__rights'>
                <a href='#header'>© 2022 Dream Home | All Rights Reserved</a>
            </div>
        </footer>
    )
}
