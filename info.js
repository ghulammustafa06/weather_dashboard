const information = [
    { 
        type: 'image', 
        src: 'https://images.unsplash.com/photo-1653562969548-98d093407cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExpZ2h0bmluZyUyMFN0cmlrZXxlbnwwfHwwfHx8MA%3D%3D', 
        alt: 'Image 1', 
        title: 'Lightning Strike', 
        description: 'Lightning strikes the Earth about 8 million times per day! These powerful electrical discharges can heat the air around them to temperatures five times hotter than the surface of the sun, causing rapid expansion of air and the sound wave we hear as thunder.' 
    },
    { 
        type: 'image', 
        src: 'https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJhaW5ib3d8ZW58MHx8MHx8fDA%3D', 
        alt: 'Image 2', 
        title: 'Rainbow', 
        description: 'Rainbows are actually full circles, but the ground usually obstructs the bottom half. These colorful arcs form when sunlight is refracted, or bent, and then reflected inside water droplets suspended in the atmosphere, creating a spectrum of light.' 
    },
    { 
        type: 'image', 
        src: 'https://miro.medium.com/v2/resize:fit:1358/1*wdySDZ_m_73eEIOLf1_OVw.png', 
        alt: 'Image 3', 
        title: 'Snowflake', 
        description: 'No two snowflakes are exactly alike due to their unique formation process. Snowflakes form when water vapor in the air freezes into ice crystals, and their intricate, six-sided structures are influenced by the specific atmospheric conditions they encounter during their descent.' 
    },
    { 
        type: 'image', 
        src: 'https://images.unsplash.com/photo-1655059835527-181b0e732db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFpbHN0b3JtfGVufDB8fDB8fHww', 
        alt: 'Image 4', 
        title: 'Hailstorm', 
        description: 'Hailstones can reach sizes as large as grapefruits and can fall at speeds of up to 100 mph. They form in strong thunderstorm clouds where updrafts carry raindrops upward into extremely cold areas of the atmosphere, freezing them into balls of ice.' 
    },
    { 
        type: 'image', 
        src: 'https://images.unsplash.com/photo-1485724417692-19b9fb72d5ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1cm9yYSUyMEJvcmVhbGlzfGVufDB8fDB8fHww', 
        alt: 'Image 5', 
        title: 'Aurora Borealis', 
        description: 'The Aurora Borealis, or Northern Lights, is a natural light display caused by the solar wind interacting with the Earth’s magnetic field. These vibrant light shows occur in polar regions and are best seen during periods of high solar activity.' 
    },
    { 
        type: 'image', 
        src: 'https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9ybmFkb3xlbnwwfHwwfHx8MA%3D%3D', 
        alt: 'Image 6', 
        title: 'Tornado', 
        description: 'The strongest tornadoes can produce winds exceeding 300 mph and are capable of lifting houses off their foundations. These powerful and destructive funnels of wind form from severe thunderstorms, often in regions known as "Tornado Alley" in the central United States.' 
    },
    { 
        type: 'image', 
        src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9nfGVufDB8fDB8fHww', 
        alt: 'Image 7', 
        title: 'Fog', 
        description: 'Fog forms when the air temperature drops to the dew point and the air becomes saturated with moisture, creating tiny water droplets that reduce visibility. This phenomenon is essentially a cloud that forms at ground level, often seen in valleys or over bodies of water.' 
    },
    { 
        type: 'image', 
        src: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGVzZXJ0JTIwSGVhdHxlbnwwfHwwfHx8MA%3D%3D', 
        alt: 'Image 8', 
        title: 'Desert Heat', 
        description: 'The hottest temperature ever recorded on Earth was 134°F (56.7°C) in Death Valley, California, in 1913. Desert regions experience extreme heat due to their lack of moisture and vegetation, which allows for rapid heating and cooling of the ground.' 
    },

];


const infoContainer = document.getElementById('info-container');

// Function to create info cards
function createInfoCards() {
    information.forEach(item => {
        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        infoCard.appendChild(img);
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = item.title;
        cardContent.appendChild(title);

        const descriptionPreview = document.createElement('div');
        descriptionPreview.classList.add('description-preview');
        const previewText = item.description.substring(0, 100);
        descriptionPreview.textContent = previewText + '...';
        cardContent.appendChild(descriptionPreview);

        const moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('more-info-btn');
        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.addEventListener('click', () => {
            descriptionPreview.style.display = 'none';
            fullDescription.style.display = 'block';
            moreInfoBtn.style.display = 'none'; 
            lessInfoBtn.style.display = 'inline-block'; 
        });
        cardContent.appendChild(moreInfoBtn);
