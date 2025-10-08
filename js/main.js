// =====================================
// GLOBAL UI BEHAVIORS (main.js)
// =====================================

document.addEventListener('DOMContentLoaded', () => {
	// 1) Bootstrap: tooltips y popovers
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	[...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));

	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
	[...popoverTriggerList].forEach(el => new bootstrap.Popover(el));

	// 2) Smooth scrolling para enlaces internos (compatibilidad con navegadores sin CSS smooth)
	document.querySelectorAll('a[href^="#"]').forEach(a => {
		a.addEventListener('click', (e) => {
			const href = a.getAttribute('href');
			if (href && href.length > 1) {
				const target = document.querySelector(href);
				if (target) {
					e.preventDefault();
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		});
	});

	// 3) Cerrar navbar colapsable al hacer clic en un enlace (en móvil)
	const navbarCollapse = document.getElementById('navbarNav');
	if (navbarCollapse) {
		navbarCollapse.querySelectorAll('a.nav-link, .dropdown-item').forEach(link => {
			link.addEventListener('click', () => {
				const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
				if (bsCollapse && navbarCollapse.classList.contains('show')) {
					bsCollapse.hide();
				}
			});
		});
	}

	// 4) Pausar carrusel de proyectos al hover (si existe)
	const projCarouselEl = document.getElementById('projectsCarousel');
	if (projCarouselEl) {
		const projCarousel = bootstrap.Carousel.getOrCreateInstance(projCarouselEl, {
			interval: 5000,
			ride: false,
			pause: false
		});
		projCarouselEl.addEventListener('mouseenter', () => projCarousel.pause());
		projCarouselEl.addEventListener('mouseleave', () => projCarousel.cycle());
	}

	// 5) Reveal on scroll: añade .reveal-visible a elementos .reveal-on-scroll cuando entran en viewport
	// Si no agregas manualmente la clase, activamos por defecto para secciones (excepto el HERO)
	document.querySelectorAll('section[id]:not(#home)').forEach(sec => sec.classList.add('reveal-on-scroll'));
	const toReveal = document.querySelectorAll('.reveal-on-scroll');
	if (toReveal.length) {
		const io = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
			});
		}, { threshold: 0.15 });
		toReveal.forEach(el => io.observe(el));
	}

	// 6) Lazy-load fallback para imágenes con data-src
	const lazyImgs = document.querySelectorAll('img[data-src]');
	if (lazyImgs.length) {
		const imgObserver = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
				const img = entry.target;
				img.src = img.getAttribute('data-src');
				img.removeAttribute('data-src');
				obs.unobserve(img);
			});
		}, { rootMargin: '200px' });
		lazyImgs.forEach(img => imgObserver.observe(img));
	}

	// 7) Asegurar rel seguro para enlaces externos
	document.querySelectorAll('a[target="_blank"]').forEach(a => {
		const rel = (a.getAttribute('rel') || '').split(' ').filter(Boolean);
		if (!rel.includes('noopener')) rel.push('noopener');
		if (!rel.includes('noreferrer')) rel.push('noreferrer');
		a.setAttribute('rel', rel.join(' '));
	});

	// 8) Botón “volver arriba”
	const backBtn = document.getElementById('backToTop');
	if (backBtn) {
		const toggleBtn = () => {
			if (window.scrollY > 300) backBtn.classList.add('show');
			else backBtn.classList.remove('show');
		};
		window.addEventListener('scroll', toggleBtn);
		backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
		toggleBtn();
	}
});

