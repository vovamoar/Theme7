const header = document.querySelector('header')
const scrollTopBtn = document.querySelector('.scroll')
const faqItems = document.querySelectorAll('.faq-item')
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')
const navListItems = document.querySelectorAll('.navlist_item')

window.addEventListener('scroll', () => {
	header.classList.toggle('sticky', window.scrollY > 80)

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
	delay: 300,
	origin: 'left',
	distance: '30px',
	duration: 2000,
	viewFactor: 0.4,
})

sr.reveal('.about-text', {
	delay: 350,
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

// Activate menu items on scroll
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.navlist_link')

const observerSections = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute('id')

				navLinks.forEach(link => {
					link.classList.remove('active')
				})

				document
					.querySelector(`.navlist_link[href="#${id}"]`)
					.classList.add('active')
			}
		})
	},
	{
		threshold: 0.5,
	}
)

// Наблюдаем за всеми секциями
sections.forEach(section => {
	observerSections.observe(section)
})

// Counter animation
const counterItems = document.querySelectorAll('.counter-item')
const counterValues = document.querySelectorAll('.counter-value')

const startCounting = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible')

			const counter = entry.target.querySelector('.counter-value')
			const target = +counter.dataset.target
			const duration = 2500
			const increment = target / (duration / 16)
			let current = 0

			const updateCounter = () => {
				current += increment
				if (current < target) {
					counter.textContent = Math.floor(current)
					requestAnimationFrame(updateCounter)
				} else {
					counter.textContent = target
				}
			}

			updateCounter()
			counterObserver.unobserve(entry.target)
		}
	})
}

const counterObserver = new IntersectionObserver(startCounting, {
	threshold: 0.3,
	rootMargin: '0px',
})

counterItems.forEach(item => {
	counterObserver.observe(item)
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

// Typing Animation
const typingText = document.querySelector('.typing-text')
const phrases = [
	'Premium Honey\nCollection',
	'Natural Golden\nTreasure',
	'Pure Organic\nSweetness',
	'Finest Quality\nSelection',
]

let phraseIndex = 0
let charIndex = 0
let isDeleting = false
let isWaiting = false

function type() {
	const currentPhrase = phrases[phraseIndex]
	const speed = isDeleting ? 40 : 80

	if (!isDeleting && charIndex < currentPhrase.length) {
		// Print symbol
		typingText.textContent = currentPhrase.substring(0, charIndex + 1)
		charIndex++
	} else if (isDeleting && charIndex > 0) {
		// Delete symbol
		typingText.textContent = currentPhrase.substring(0, charIndex - 1)
		charIndex--
	} else if (charIndex === 0 && isDeleting) {
		// Go to the next phrase
		isDeleting = false
		phraseIndex = (phraseIndex + 1) % phrases.length
	} else if (charIndex === currentPhrase.length && !isDeleting && !isWaiting) {
		// Wait before deleting
		isWaiting = true
		setTimeout(() => {
			isDeleting = true
			isWaiting = false
			type()
		}, 2500)
		return
	}

	// Continue animation with dynamic speed
	const nextSpeed = isDeleting
		? speed
		: charIndex === currentPhrase.length
		? speed * 4
		: speed

	setTimeout(type, nextSpeed)
}

// Start animation when document is loaded
document.addEventListener('DOMContentLoaded', () => {
	typingText.textContent = ''
	setTimeout(type, 1000)
})
