const data= [
    {
        id:1,
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    },
    {
        id:2,
        title: "Sydney Opera House",
        location: "Australia",
        googleMapsUrl: "https://www.google.com/maps/place/Sidnejska+%22Opera%22/@-33.8567799,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967",
        startDate: "27 May, 2021",
        endDate: "8 Jun, 2021",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour.",
        imageUrl: "https://images.unsplash.com/photo-1549923015-22d03fbac451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
     {
        id:3,
        title: "Geirangerfjord",
        location: "Norway",
        googleMapsUrl: "https://www.google.com/maps/place/Geirangerfjord/@62.1049385,6.9351292,11z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817",
        startDate: "01 Oct, 2021 ",
        endDate: "18 Nov, 2021",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        imageUrl: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
     {
        id:4,
        title: "Petra",
        location: "Jordan",
        googleMapsUrl: "https://www.google.com/maps/place/Petra/@30.328459,35.4421735,17z/data=!3m1!4b1!4m5!3m4!1s0x15016ef1703b6071:0x199bf908679a2291!8m2!3d30.3284544!4d35.4443622",
        startDate: "06 Feb, 2022 ",
        endDate: "15 Feb, 2022",
        description: "The city of Petra, capital of the Nabataean Arabs, is one of the most famous archaeological sites in the world.",
        imageUrl: "https://images.unsplash.com/photo-1563177682-6af44e531038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
     {
        id:5,
        title: "Casablanca",
        location: "Morocco",
        googleMapsUrl: "https://www.google.com/maps/place/Casablanca,+Maroko/@33.5716811,-8.1284711,10z/data=!3m1!4b1!4m5!3m4!1s0xda7cd4778aa113b:0xb06c1d84f310fd3!8m2!3d33.5731104!4d-7.5898434",
        startDate: "04 Jul, 2022 ",
        endDate: "18 Jul, 2022",
        description: "Beautiful palm trees lining its paths, with the Atlantic ocean over the horizon, and large business buildings in every corner : Casablanca is the economic lung of Morocco.",
        imageUrl: "https://images.unsplash.com/photo-1559925523-10de9e23cf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
        id:6,
        title: "Tahiti",
        location: "French Polynesia",
        googleMapsUrl: "https://www.google.com/maps/place/Tahiti/@-17.686417,-149.6530187,10z/data=!3m1!4b1!4m5!3m4!1s0x769bb353982d1e65:0x413cf43a8988a3fa!8m2!3d-17.6509195!4d-149.4260421",
        startDate: "23 Sept, 2022 ",
        endDate: "01 Oct, 2022",
        description: "Tahiti has become an important tourist centre, receiving visitors through the Papeete transpacific port and the international airport.",
        imageUrl: "https://images.unsplash.com/photo-1633381685199-99c89e48b8b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
        id:7,
        title: "New York",
        location: "USA",
        googleMapsUrl: "https://www.google.com/maps/place/New+York+City,+New+York,+Sjedinjene+Ameri%C4%8Dke+Dr%C5%BEave/@40.6934648,-75.0632828,9z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728",
        startDate: "15 Nov, 2022 ",
        endDate: "23 Dec, 2022",
        description: "New York, often called New York City or NYC, is the most populous city in the United States.More than 800 languages are spoken in New York City.",
        imageUrl: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },

]
export default data;