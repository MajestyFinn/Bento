// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Your Majesty',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Sleep well,',

  // Weather
  weatherKey: '6d1c6cf734765bf67a8cb910030a0e33',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '14.599512',
  weatherLongitude: '120.984222',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Messenger',
      icon: 'message-circle',
      link: 'https://www.messenger.com/t/2404599599644352',
    },
    {
      id: '2',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '3',
      name: 'Pinterest',
      icon: 'image',
      link: 'https://www.pinterest.ph/',
    },
    {
      id: '4',
      name: 'Netflix',
      icon: 'tv',
      link: 'https://www.netflix.com/browse',
    },
    {
      id: '5',
      name: 'Class',
      icon: 'bookmark',
      link: 'https://classroom.google.com/u/2/h',
    },
    {
      id: '6',
      name: 'Map',
      icon: 'map',
      link: 'https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=en-us#/map/2?shown_types=3&center=2351.00,138.00&zoom=-2.00',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Music',
        link: 'https://www.youtube.com/playlist?list=PLvsKfAjHT1Az1exl0wcBftV3d2MCBzzih',
      },
      {
        name: 'Writing',
        link: 'https://www.youtube.com/playlist?list=PLvsKfAjHT1AyLmbZlsUiHEMEdr9MyXfN6',
      },
      {
        name: 'Playlists',
        link: 'https://www.youtube.com/playlist?list=PLvsKfAjHT1AwMrtXTVF-yfB8ItrXUlQcP',
      },
      {
        name: 'Spotify',
        link: 'https://open.spotify.com/',
      },
    ],
    secondList: [
      {
        name: 'Anime',
        link: 'https://www2.kickassanime.ro/',
      },
      {
        name: 'Ao3',
        link: 'https://archiveofourown.org/users/TomHanksIsLife',
      },
      {
        name: 'Chords',
        link: 'https://www.ultimate-guitar.com/user/mytabs',
      },
      {
        name: 'Discord',
        link: 'https://discord.com/channels/@me',
      },
    ],
  },
};
