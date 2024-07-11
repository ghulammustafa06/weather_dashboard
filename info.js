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