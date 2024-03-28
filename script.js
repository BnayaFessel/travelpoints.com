
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 31.771959, lng: 35.217018 },
    zoom: 9,
  });
}

initMap();

const cityList = [{
    name: 'Jerusalem',
    imageUrl: 'https://static.leonardo-hotels.com/image/jerusalem_3e9f75228b4a9beac5d52384ac8ef67c_2048x1365_desktop_2.webp',
    description:'Capital of Israel. known as the holy city and place of the temple',
    coordinates: {lat: 31.771959, lng: 35.217018},
    intrestPoints: [{coordinates:{lat: 31.776878492622505, lng: 35.23448168021726}, name: 'Western Wall', description: 'The Western Wall, also known as the “Wailing Wall” or the “Kotel”, is the most religious site in the world'},
                    {coordinates:{lat: 31.776835649144076, lng: 35.2054799872163}, name: 'The Knesset', description: 'The unicameral legislature of Israel. The Knesset passes all laws, elects the president and prime minister.'},
                    {coordinates:{lat:31.77614843533961, lng: 35.216826693709294}, name: 'The Great Synagogue in Jerusalem', description: 'Serves as a spiritual and religious center, attracting many tourists and visitors from Israel and the world.'},
                    {coordinates:{lat: 31.785040677797866, lng: 35.21265159556077}, name: 'Mahaneh Yehudah Market', description: 'A bustling marketplace and a neighborhood, it intertwines food, drinks, shopping, bars and restaurants.'},
                    ]
},
{
 name: 'Hebron',
    imageUrl: 'https://storage.hidabroot.org/articles/51336_tumb_750Xauto.jpg',
    description:'An ancient biblical city, it is an important and holy place for the Jewish people',
    coordinates: {lat: 31.52514830000002, lng: 35.105663546678606},
    intrestPoints: [{coordinates:{lat: 31.524627848821726, lng: 35.11088445782663}, name: 'Me’arat Hamachpelah', description: 'Four prestigious couples are buried there: Adam and Eve, Abraham and Sarah, Isaac and Rebecca, and Jacob and Leah. '},
                    {coordinates:{lat: 31.52534118932099, lng: 35.105638056993534}, name: 'Yeshiva Shavei Hevron', description: 'Beit Midrash with 300 students and avreichim who study Torah and enlist in the army'},
                    {coordinates:{lat: 31.52636242615287, lng: 35.10441860733666}, name: 'Beit Hadassah', description: 'A Vistors Center and Museum'},
                    {coordinates:{lat: 31.525505742320153, lng: 35.09907274876561}, name: 'Ancient Jewish Cemetery', description: 'Many great rabbis are buried here, as well as those who were murdered in the 1759 riots'},
                    ]
},
{
    name: 'Zefat',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSsezpmUxGlaLtQaXdv8GUw5g4Oe_jtQDJikrNJZrSkbNWj8Ytvnb63uPhdoV1ajvUuScfHilcLg9_9vmk6INsW0HHZpW9tQCInTRmMRg',
    description:'considered the capital of the Upper Galilee, and is known as the city of the Kabbalists',
    coordinates: {lat: 32.96752898572672, lng: 35.498527121734256},
    intrestPoints: [{coordinates:{lat: 32.968473639755096, lng: 35.488618586954885}, name: 'The Old Jewish Cemetery', description: 'one of the oldest cemeteries in Israel. important people and important Jewish religious leaders.'},
                    {coordinates:{lat: 32.96966107770168, lng: 35.49168784582664}, name: 'Ari Ashkenazi Synagogue', description: 'built in memory of Rabbi Isaac Luria (1534 - 1572), who was known by the Hebrew acronym "the ARI"'},
                    {coordinates:{lat: 32.968931180323615, lng: 35.49490296156797}, name: 'Safed Citadel', description: 'The highest point of the highest city, Safed, some near 1,000 meters (3,000+ feet) above sea level, and a historically important site.'},
                    {coordinates:{lat: 32.97779246632935, lng: 35.497703958497965}, name: 'Ein Lior', description: 'Ein Lior is a beautiful spring located in the area of the settlement of Birya in the Upper Galilee, named after the late Lior Dahan.'},
                    ]
},
{
    name: 'Tverya',
    imageUrl: 'https://www.israel-city.co.il/wp-content/uploads/2023/07/tiberias.jpg',
    description:'Tiberias is an Israeli city on the western shore of the Sea of Galilee',
    coordinates: {lat: 32.787534, lng: 35.524369},
    intrestPoints:  [{coordinates:{lat:32.789158971174714, lng: 35.52905732272425}, name: 'Tomb of Rabbi Akiva', description: ' considered to be one of the greatest rabbinic sages, yet the biographical details of his life remain somewhat of a mystery.'},
                     {coordinates:{lat:32.78639617891762, lng: 35.54133020954956}, name: 'Tiberias Promenade', description: ' a fun place with stores, stalls, restaurants, cafes, and docks for boats.'},
                     {coordinates:{lat: 32.79088341075416, lng: 35.53699884069213}, name: 'The Tomb of the Rambam', description: 'Rabbi Moshe ben Maimon was a Talmudist, Halachist, known in the Jewish world by the acronym "Rambam".'},
                     {coordinates:{lat: 32.780585483599744, lng: 35.545203499218054}, name: 'Kinneret beach', description: 'The Sea of Galilee also called Lake Tiberias or Kinneret, is a freshwater lake in Israel.'},
                     ]

},
{
    name: 'Tel-Aviv',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/PikiWiki_Israel_74311_tel_aviv_and_ayalon_lanes.jpg/800px-PikiWiki_Israel_74311_tel_aviv_and_ayalon_lanes.jpg',
    description:'A big center of culture, media, art, trade and business',
    coordinates: {lat: 32.083198735897874, lng: 34.78119284721827},
    intrestPoints:  [{coordinates:{lat:32.080984534826385,lng: 34.78065359950144}, name: 'Rabin Square', description: 'Popular public square with a memorial, often used for large events, rallies, celebrations & parades.'},
                     {coordinates:{lat:32.07540963538336, lng: 34.791832695207155}, name: 'Azrieli Mall', description: 'Straightforward modern shopping center offering brand-name boutiques & casual restaurants.'},
                     {coordinates:{lat:32.07336822870877, lng: 34.77893041613818}, name: 'Habima Theatre', description: 'Musicals & plays addressing challenging issues in a theater with translating & subtitling equipment.'},
                     {coordinates:{lat:32.08630775532399, lng: 34.77174541768745}, name: 'Ben-Gurion House', description: 'Landmark home of David Ben Gurion, an important historical figure in the founding of Israel.'},
                     ]

}
]

const showCityList = (citiesArray) => {
    const displayList = document.getElementById('cityList');
    citiesArray.forEach((city) => {
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('cityDiv');
       
        const cityImg = document.createElement('img');
        cityImg.setAttribute('src', city.imageUrl);

        const textDiv = document.createElement('div');
        const cityName = document.createElement('h3');
        cityName.textContent = city.name;

        const cityDescription = document.createElement('p');
        cityDescription.textContent = city.description;

        textDiv.append(cityName, cityDescription);
        cityDiv.append(textDiv, cityImg);
        displayList.appendChild(cityDiv);

        cityDiv.addEventListener('click', ()=>{
            showPointsOnMap(city)
            zoomInCity(city.coordinates)
        })
    });
};


showCityList(cityList)


const showPointsOnMap =(city) =>{
city.intrestPoints.forEach((point) =>{
   const marker = new google.maps.Marker({
    position: point.coordinates,
    map: map,
    icon: 'location-red-pin-marker-sign-15636.png',
    animation: google.maps.Animation.DROP
   })
   addInfoWindow(marker,city, point);
})
}

  function zoomInCity(coordinates) {
        map.setCenter(coordinates);
        map.setZoom(14);
}

const addInfoWindow = (marker, city, point) =>{
    const detailWindow = new google.maps.InfoWindow({
        content: `<h2>${point.name}</h2><br><p>${point.description}</p>`
    });

    marker.addListener('mouseover', () =>{
        detailWindow.open(map, marker);
    })
    marker.addListener('mouseout', () => {
        detailWindow.close();
    });
}