import React from 'react'

import Navbar from './components/Navbar'
import Block from './components/Block'
import Footer from './components/Footer'

import './App.scss'

function App() {

	const [isSubmited, setIsSubmited] = React.useState(false)

	function handleForm(e) {
		e.preventDefault()
		setIsSubmited(!isSubmited)
	}

	const [apartamentsData, setApartamentsData] = React.useState([])

	React.useEffect(() => {
		fetch('https://62d6d77451e6e8f06f145d02.mockapi.io/apartaments').then(response => {
			return response.json()
		}).then(json => {
			setApartamentsData(json)
		})
	}, [])

 	return (
		<div className="App">
			<header className='header' id="header">
				<div className='darken'>
					<div className='wrapper'>
						<Navbar />
						<div className='header__title'>
							<h1>Find your <span className='text-orange'>dream home</span> in san diego</h1>
						</div>
					</div>
				</div>
			</header>
			<section className='apartaments wrapper' id="apartments">
				<div className='apartaments__filters'>
					<div className='filters__layout'>
						<button className='layout__btn layout__btn--active'>All</button>
						<button className='layout__btn'>Studio</button>
						<button className='layout__btn'>1 Bed Room</button>
						<button className='layout__btn'>2 Bed Room</button>
					</div>
					<div className='filters__filters-btn'>
						<button className='button'>Filters</button>
					</div>
				</div>
				<div className='apartaments__blocks'>
					{apartamentsData.map(apartment => {
						return (
							<Block 
							image={apartment.image} 
							price={apartment.price}
							bedrooms={apartment.bedrooms}
							bath={apartment.bath}
							area={apartment.area}
							/>
						)
					})}
				</div>
			</section>
			<section className='about-us' id="about-us">
				<div className='gradient-overlay'>
					<div className='wrapper'>
						<div className='about-us__main'>
							<h1 className='title'>About us</h1>
							<p>
								Dream Home is a gated community with a great location. Located downtown, you're 
								within walking distance of Parks, and the best shopping, dining and entertainment 
								Getting around is a breeze, with easy access to freeways, buses and trolleys. 
								Laundry is available on premises.
							</p>
							<button className='button'>Read more</button>
						</div>
						<div className='about-us__additional'>
							<h1 className='title'>500+</h1>
							<h5>Projects</h5>
							<p>Over 500 lexury villas for "Home Away From Home" experience</p>
						</div>
						<div className='about-us__additional'>
							<h1 className='title'>40+</h1>
							<h5>Locations</h5>
							<p>Luxury villas and private holiday homes, from all across</p>
						</div>
						<div className='about-us__additional'>
							<h1 className='title'>24/7</h1>
							<h5>Help</h5>
							<p>24/7 Help service for all customers to guide and support</p>
						</div>
					</div>
				</div>
			</section>
			<section className='contact' id="contact">
				<div className='wrapper'>
					{isSubmited === false && (
						<>
							<div className='contact__text'>
								<h1>Did You Find Your <span className='text-orange'>Dream Home?</span></h1>
								<p>Thank you for getting in touch! if you find your dream home connect with us</p>
							</div>
							<div className='contact__form'>
								<form onSubmit={handleForm}>
									<input type='text' name='name' placeholder="Your name" required/>
									<input type='email' name='email'  placeholder="Your email" required/>
									<input type='number' name='number' placeholder="Phone number" required/>
									<select>
										<option className='grey' disabled selected hidden>Intrested in</option>
										<option>Purchase</option>
										<option>Rent</option>
									</select>
									<input className='form__message' type='text' name='message' placeholder="Message" />
									<button className='form__button button' type='submit'>Submit</button>
								</form>
							</div>
						</>
					)}
					{isSubmited && <h2>We will contact you next 24 hours!</h2>}
				</div>
			</section>
			<Footer />
		</div>
  	)
}

export default App
