var config = {
    style: 'mapbox://styles/mggorman88/ckhwt7eyp06kq1ampythzsf3t',
    accessToken: 'pk.eyJ1IjoibWdnb3JtYW44OCIsImEiOiJja2hjNWlkb2EwMXl1MzFtZjUxYWdkanFvIn0.1xoDJQj2TY5adGOatFOEYw',
    showMarkers: false,
    showCaptions: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Early Century Shipwrecks Along the French Coast',
    subtitle: 'Whether the voyage be personal or for business, all ships set out with the goal of reaching some kind of destination. But these 8 ancient ships, with destinations across Southern France, never made it to port.',
    byline: 'By Marc Gorman',
    footer: 'Source: Strauss, J. (2013). Shipwrecks Database. Version 1.0. Accessed (11/24/2020): oxrep.classics.ox.ac.uk/databases/shipwrecks_database/',
    chapters: [
        {
            id: 'intro',
            title: 'INTRODUCTION',
            image: 'images/shipwreck.jpg',
            description: 'With data sourced from the Oxford Roman Economy Project, this map represents 8 different shipwrecks located throughout the Mediterranean Sea. While the Oxford dataset is large, this map filters out individual wrecks whose destination was listed as France, whether that be a specific city or the country as a whole. The shipwrecks generally date back to early AC centuries, though some go back as far as 600 BC, with origins ranging from the Roman Republic to the Byzantine Empire. While the cause for these wrecks is unknown, salavaged goods from individual ships can sometimes reveal things like the origin of the boat and reason for travel. Below, you will find descriptions of each shipwreck, their cargo, their origin and much more!',
            location: {
              center: [4.92864, 42.08],
              zoom: 6.51,
              pitch: 7.00,
              bearing: -4.37
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slide 1',
            title: 'SHIPWRECK: SAINTES MARIES-DE-LA-MER 21',
            image: 'images/marble.png',
            description: 'This wreck is actually just one of three wrecks at this location, with each wreck having markedly similar cargo. These wrecks occured in the Gulf of Lyon between Montpellier and Marseille holding cargo mainly consisting of marble blocks. Each ship carried seven blocks, with ship 21 having the heaviest load of the three. This marble likely orinitated in modern day Carrara, Italy which used to be referred to as "Luna" - a Roman settlement renowned for its marble quarry and patterning (pictured above). All three of these ships voyaged under Roman Imperial rule and the wrecks were found approximately 18 meters below the sea.',
            location: {
                center: [4.302, 43.411],
                zoom: 10.30,
                pitch: 7.00,
                bearing: -4.37
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide 2',
            title: 'SHIPWRECK: OUEST EMBIEZ 1',
            image: 'images/s-l300.jpg',
            caption: 'hebron glass',
            description: 'This wreck occured off the coast of modern day Toulon, East of Marseille. This ship mostly contained glassware and pottery, with many sheets of large, clear glass and over 2000 cylindrical glass goblets of varying bases making up the ship\'s carrying weight. The ship also contained more than 15 glass fragments, one piece of which being a rare circular glass, likely originating between the cities of Acre and Haifa on the Syrian-Palestinian coast, an area renowned for glass working. The image above represents what the glass, known as Hebron glass, might look like, though the glassware from the wreck was mostly clear. The believed origin for this ship is Palestine under Roman rule, and the ship was found approximately 56 meters below sea level.',
            location: {
                center: [5.733, 43.065],
                zoom: 10.75,
                pitch: 7.00,
                bearing: -4.37
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide 3',
            title: 'SHIPWRECKS: POINTE LEQUIN 1A AND LA PALUD 1',
            image: 'images/amphorae.jpg',
            description: 'While the wrecks occured nearly one-thousand years apart, these two ships coincidentally make the perfect pair, with the ~550 AC La Palud cargo of wine amphorae (pottery - pictured above) following up the ~515 BC Pointe Lequin cargo of wine and tableware from the region around the Aegean Sea. Both wrecks also hold interesting artifacts: A small bronze statue of a soldier occupied the Pointe Lequin ship while a unique coin-holding box that belonged to a merchant still bears the marks of the Byzantine emperor whose face was ingraved on the coins that bore down on the wooden bottom of the box. The Pointe Lequin wreck sits 6 meters deep and originated from Greece while the La Palud site rests 7 meters below the surface and originated in the Byzantine Empire.',
            location: {
                center: [6.208, 43.049],
                zoom: 10.70,
                pitch: 7.00,
                bearing: -4.37
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slide 4',
            title: 'SHIPWRECKS: CAP CAMARAT 2 AND DRAMONT 1',
            image: 'images/Pumice.jpg',
            imageCredit: 'https://www.carraratiles.com/carrara-marble-italian-white-bianco-carrera-3-4-marble-slab-honed/',
            description: 'These two Roman shipwrecks represent two sides of the same coin, with the 50 BC Cap Camarat ship sailing under the Roman Republic while the 50 AD Dramont ship flew the Roman Imperium\'s flag. The remnants at these two sites differ in many ways, with the Cap Camorat cargo mostly consisting of metal tools and tableware whereas the Dramont voyage seemed to have been focused on raw material shipping, with three large African marble blocks and and five hundred litres of polished pumice (pictured above) making up the ships cargo. The Cap Camarat wreck is 41 meters below sea level and the Dramont site is 32 meters down.',
            location: {
                center: [6.600, 43.287],
                zoom: 9.99,
                pitch: 7.00,
                bearing: -4.37
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'slide 5',
            title: 'SHIPWRECKS: SANGUINAIRES AND PORTO NOVO',
            image: 'images/ptolemy.jpg',
            description: 'These two sites off the coast of Corsica are similar to each other in that few remnants of the physical ships still exist - only nails and sheathing indicate that the found cargo came from an ancient sea vessel. Similar to the Dramont ship of the previous site, the Eastern Porto Novo cargo is mainly stone, marble, and stone working equipment from a variety of locations, though it also contains vanity items like three mirrors, some bronze and clay vases, fishing weights, and a decorated sword to suggest the presence of military personnel on board. The Sanguinaires site conversely holds a bounty of ornate goods like red and black glazed pottery, copper ingots, attic lamps, glass, and an interesting bronze coin depicting one of the Ptolemaic rulers of Macedonian Egypt (A statuette of Ptolemy III is pictured above). The two sites both sit at around 15 meters deep below sea level, give or take a few meters.',
            location: {
                center: [8.673, 41.665],
                zoom: 8.88,
                pitch: 7.00,
                bearing: -4.37
            },
            onChapterEnter: [],
            onChapterExit: []
          },
        {
            id: 'slide 6',
            title: 'CONCLUSION',
            image: 'images/oxford.png',
            description: 'As the never-ending life source for hundreds of ancient civilizations, the Mediterranean sea is a treasure chest full of valuable artifacts, both in monetary and historical senses. In mapping these shipwrecks, I hope to have provided you a glimpse into the variety of artifact types and piqued your interest to explore more into the Oxford Roman Economy Project, which hosts information on nearly 1800 shipwrecks throughout the Mediterranean Sea, Indian Ocean, Atlantic Ocean, and many other bodies of water. Perhaps the next time you find yourself in the region, you will stumble upon a shipwreck to add to the database!',
            location: {
              center: [4.92864, 42.08],
              zoom: 6.51,
              pitch: 7.00,
              bearing: -4.37
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
