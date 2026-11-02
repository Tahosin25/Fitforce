/* ========================================
   FITFORCE - CLASS SCHEDULE
   ======================================== */

const classesData = [
    {
        id: 1,
        name: 'Morning HIIT',
        type: 'hiit',
        time: '6:00 AM - 7:00 AM',
        trainer: 'Sarah Johnson',
        duration: '60 min',
        intensity: 'High',
        spots: 8,
        image: 'https://images.unsplash.com/photo-1526525066867-06e65495816e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        name: 'Strength Foundation',
        type: 'strength',
        time: '8:00 AM - 9:00 AM',
        trainer: 'Mike Roberts',
        duration: '60 min',
        intensity: 'Medium',
        spots: 12,
        image: 'https://images.unsplash.com/photo-1531264239761-9400603ef1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        name: 'Vinyasa Yoga',
        type: 'yoga',
        time: '10:00 AM - 11:00 AM',
        trainer: 'Emma Chen',
        duration: '60 min',
        intensity: 'Low',
        spots: 15,
        image: 'https://images.unsplash.com/photo-1544367567-0f21b003408e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 4,
        name: 'Cardio Blast',
        type: 'cardio',
        time: '12:00 PM - 1:00 PM',
        trainer: 'James Wilson',
        duration: '60 min',
        intensity: 'High',
        spots: 10,
        image: 'https://images.unsplash.com/photo-1517839203713-07b2e8d31a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 5,
        name: 'Power Lifting',
        type: 'strength',
        time: '3:00 PM - 4:30 PM',
        trainer: 'Mike Roberts',
        duration: '90 min',
        intensity: 'High',
        spots: 6,
        image: 'https://images.unsplash.com/photo-1598844995053-0a150f9e686a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        name: 'Evening Yoga Flow',
        type: 'yoga',
        time: '6:00 PM - 7:00 PM',
        trainer: 'Emma Chen',
        duration: '60 min',
        intensity: 'Low',
        spots: 15,
        image: 'https://images.unsplash.com/photo-1544367567-0f21b003408e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 7,
        name: 'HIIT Express',
        type: 'hiit',
        time: '7:30 PM - 8:15 PM',
        trainer: 'Sarah Johnson',
        duration: '45 min',
        intensity: 'High',
        spots: 10,
        image: 'https://images.unsplash.com/photo-1526525066867-06e65495816e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 8,
        name: 'Spin & Ride',
        type: 'cardio',
        time: '5:30 PM - 6:30 PM',
        trainer: 'David Miller',
        duration: '60 min',
        intensity: 'High',
        spots: 12,
        image: 'https://images.unsplash.com/photo-1568433779059-a12a5b03e68c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
];

const intensityColors = {
    'Low': '#2ecc71',
    'Medium': '#f39c12',
    'High': '#e74c3c'
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('classes-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderClasses(filter = 'all') {
        container.innerHTML = '';
        const filtered = filter === 'all'
            ? classesData
            : classesData.filter(cls => cls.type === filter);

        filtered.forEach(cls => {
            const card = document.createElement('div');
            card.className = 'class-card reveal';
            card.style.animationDelay = '0.2s';
            card.innerHTML = `
                <div class="class-image">
                    <img src="${cls.image}" alt="${cls.name}" class="class-img">
                    <span class="class-type">${cls.type}</span>
                </div>
                <div class="class-info">
                    <div class="class-header">
                        <span class="class-time">${cls.time}</span>
                        <span class="class-intensity" style="color: ${intensityColors[cls.intensity]}">${cls.intensity}</span>
                    </div>
                    <h3 class="class-title">${cls.name}</h3>
                    <p class="class-trainer">With ${cls.trainer}</p>
                    <div class="class-details">
                        <span><i class="far fa-clock"></i> ${cls.duration}</span>
                        <span><i class="fas fa-users"></i> ${cls.spots} spots left</span>
                    </div>
                    <button class="btn btn-primary class-btn">Book Class</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderClasses(btn.getAttribute('data-filter'));
        });
    });

    renderClasses();
});