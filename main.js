const header = document.querySelector('header')
const scrollTopBtn = document.querySelector('.scroll')
const faqItems = document.querySelectorAll('.faq-item')
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')
const navListItems = document.querySelectorAll('.navlist_item')

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollTopBtn.classList.add('show')
	} else {
		scrollTopBtn.classList.remove('show')
	}
})

scrollTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

window.addEventListener('scroll', function () {
	header.classList.toggle('sticky', window.scrollY > 80)
})

faqItems.forEach(item => {
	const header = item.querySelector('.faq-header')

	header.addEventListener('click', () => {
		const currentlyActive = document.querySelector('.faq-item.active')

		if (currentlyActive && currentlyActive !== item) {
			currentlyActive.classList.remove('active')
		}

		item.classList.toggle('active')
	})
})

navListItems.forEach(item => {
	const navLink = item.querySelector('.navlist_link')
	navLink.addEventListener('click', () => {
		navListItems.forEach(item =>
			item.querySelector('.navlist_link').classList.remove('active')
		)
		navLink.classList.add('active')
	})
})

menu.onclick = () => {
	menu.classList.toggle('bx-x')
	navlist.classList.toggle('open')
}

window.onscroll = () => {
	menu.classList.remove('bx-x')
	navlist.classList.remove('open')
}

const sr = ScrollReveal({
	duration: 1000,
	reset: false,
	easing: 'ease-out',
	viewFactor: 0.3,
})

sr.reveal('.home-text', { delay: 100, origin: 'left', distance: '30px' })
sr.reveal('.home-img', { delay: 150, origin: 'right', distance: '30px' })

sr.reveal('.container-box, .box', {
	delay: 50,
	scale: 0.7,
	opacity: 0,
	viewFactor: 0.4,
})

sr.reveal('.about-img', {
	delay: 200,
	origin: 'left',
	distance: '30px',
	duration: 2000,
	viewFactor: 0.4,
})

sr.reveal('.about-text', {
	delay: 250,
	origin: 'right',
	distance: '30px',
	viewFactor: 0.4,
})

sr.reveal('.row', {
	delay: 100,
	origin: 'bottom',
	distance: '30px',
	rotate: { x: 0, y: 180, z: 0 },
	opacity: 0,
	viewFactor: 0.5,
})

sr.reveal('.special-box1', {
	delay: 100,
	origin: 'left',
	distance: '60px',
	opacity: 0,
	scale: 0.7,
	viewFactor: 0.5,
})
sr.reveal('.special-box2', {
	delay: 100,
	origin: 'right',
	distance: '60px',
	opacity: 0,
	scale: 0.7,
	viewFactor: 0.5,
})

sr.reveal('.review-content, .contact', {
	delay: 100,
	origin: 'bottom',
	distance: '30px',
	opacity: 0,
	viewFactor: 0.5,
})

sr.reveal('.c-one', {
	delay: 200,
	rotate: { x: 0, y: 180, z: 0 },
	duration: 1000,
	viewFactor: 0.9,
})

sr.reveal('.faq-item', {
	delay: 100,
	origin: 'bottom',
	distance: '60px',
	interval: 200,
	opacity: 0,
	scale: 0.9,
	viewFactor: 0.5,
})

sr.reveal('.benefit-card', {
	delay: 100,
	origin: 'bottom',
	distance: '60px',
	interval: 200,
	opacity: 0,
	scale: 0.9,
	viewFactor: 0.5,
})

// Contact Form Handling
const contactForm = document.getElementById('contactForm')
const formStatus = document.querySelector('.form-status')

contactForm.addEventListener('submit', e => {
	e.preventDefault()

	const formData = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		phone: document.getElementById('phone').value,
		message: document.getElementById('message').value,
	}

	// Simulate form submission
	formStatus.style.display = 'block'

	// Validate email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(formData.email)) {
		formStatus.className = 'form-status error'
		return
	}

	// Validate phone (simple validation)
	const phoneRegex = /^\+?[\d\s-]{10,}$/
	if (!phoneRegex.test(formData.phone)) {
		formStatus.className = 'form-status error'
		return
	}

	// Simulate successful submission
	formStatus.className = 'form-status success'
	contactForm.reset()

	// Hide status after 3 seconds
	setTimeout(() => {
		formStatus.style.display = 'none'
	}, 3000)
})

// Add scroll reveal for contact form
sr.reveal('.contact-form', {
	delay: 100,
	origin: 'bottom',
	distance: '60px',
	opacity: 0,
	scale: 0.9,
	// viewFactor: 0.2,
})

// Create popups dynamically
document.addEventListener('DOMContentLoaded', () => {
	// Create overlay
	const overlay = document.createElement('div')
	overlay.className = 'overlay'
	document.body.appendChild(overlay)

	// Create cookies popup
	const cookiesPopup = document.createElement('div')
	cookiesPopup.className = 'cookies-popup'
	cookiesPopup.id = 'cookiesPopup'
	cookiesPopup.innerHTML = `
		<div class="cookies-content">
			<i class="bx bx-cookie"></i>
			<div class="cookies-text">
				<h3>Cookies Consent</h3>
				<p>We use cookies to enhance your experience on our website. They help us analyze website usage and improve its functionality.</p>
			</div>
			<div class="cookies-buttons">
				<button class="accept-btn">Accept All</button>
				<button class="decline-btn">Decline All</button>
				<button class="settings-btn">Settings</button>
			</div>
		</div>
	`
	document.body.appendChild(cookiesPopup)

	// Create welcome popup
	const welcomePopup = document.createElement('div')
	welcomePopup.className = 'welcome-popup'
	welcomePopup.id = 'welcomePopup'
	welcomePopup.innerHTML = `
		<div class="welcome-content">
			<i class="bx bx-party"></i>
			<h2>Welcome to our Food Website!</h2>
			<p>Discover amazing recipes and delicious food. Get special offers on your first order!</p>
			<div class="welcome-features">
				<div class="feature">
					<i class="bx bx-dish"></i>
					<span>Fresh Food</span>
				</div>
				<div class="feature">
					<i class="bx bx-time-five"></i>
					<span>Fast Delivery</span>
				</div>
				<div class="feature">
					<i class="bx bx-gift"></i>
					<span>Special Offers</span>
				</div>
			</div>
			<button class="welcome-btn">Get Started</button>
		</div>
	`
	document.body.appendChild(welcomePopup)

	// Function to show overlay
	const showOverlay = () => {
		overlay.classList.add('active')
		document.body.style.overflow = 'hidden' // Prevent scrolling
	}

	// Function to hide overlay
	const hideOverlay = () => {
		overlay.classList.remove('active')
		document.body.style.overflow = '' // Enable scrolling
	}

	// Show welcome popup if it's the first visit
	if (!localStorage.getItem('welcomeShown')) {
		setTimeout(() => {
			welcomePopup.classList.add('active')
			showOverlay()
		}, 1500)
	}

	// Show cookies popup if consent not given
	if (!localStorage.getItem('cookiesAccepted')) {
		setTimeout(() => {
			if (!welcomePopup.classList.contains('active')) {
				cookiesPopup.classList.add('active')
				showOverlay()
			}
		}, 3000)
	}

	// Welcome popup button
	welcomePopup.querySelector('.welcome-btn').addEventListener('click', () => {
		welcomePopup.classList.remove('active')
		hideOverlay()
		localStorage.setItem('welcomeShown', 'true')

		// Show cookies popup after welcome popup is closed
		if (!localStorage.getItem('cookiesAccepted')) {
			setTimeout(() => {
				cookiesPopup.classList.add('active')
				showOverlay()
			}, 1000)
		}
	})

	// Cookies popup buttons
	cookiesPopup.querySelector('.accept-btn').addEventListener('click', () => {
		cookiesPopup.classList.remove('active')
		hideOverlay()
		localStorage.setItem('cookiesAccepted', 'true')
	})

	cookiesPopup.querySelector('.decline-btn').addEventListener('click', () => {
		cookiesPopup.classList.remove('active')
		hideOverlay()
		localStorage.setItem('cookiesAccepted', 'false')
	})

	cookiesPopup.querySelector('.settings-btn').addEventListener('click', () => {
		// Here you can add functionality to show detailed cookie settings
		// For now, we'll just show an alert
		alert('Cookie settings will be available soon!')
	})
})
