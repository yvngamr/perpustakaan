document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    };

    navSlide();

    // Scroll Reveal Animation
    ScrollReveal().reveal('.hero, .about, .team, .collection, .services, .facilities, .events, .register, .testimonials, .cta', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true
    });

    // Book Category Filter and Show More functionality
    const categories = document.querySelectorAll('.category');
    const bookLists = document.querySelectorAll('.book-list');
    const showMoreButton = document.getElementById('showMoreBooks');
    let isShowingAll = false;

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const targetCategory = category.dataset.category;
            
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');

            bookLists.forEach(list => {
                if (list.id === targetCategory || targetCategory === 'semua') {
                    list.classList.add('active');
                } else {
                    list.classList.remove('active');
                }
            });

            isShowingAll = targetCategory === 'semua';
            updateShowMoreButtonText();
        });
    });

    showMoreButton.addEventListener('click', () => {
        isShowingAll = !isShowingAll;
        if (isShowingAll) {
            bookLists.forEach(list => list.classList.add('active'));
        } else {
            bookLists.forEach((list, index) => {
                if (index === 0) {
                    list.classList.add('active');
                } else {
                    list.classList.remove('active');
                }
            });
        }
        updateShowMoreButtonText();
    });

    function updateShowMoreButtonText() {
        showMoreButton.textContent = isShowingAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak';
    }
});
