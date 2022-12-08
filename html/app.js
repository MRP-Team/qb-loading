const { ref } = Vue

// Customize language for dialog menus and carousels here

const load = Vue.createApp({
  setup () {
    return {
      CarouselText1: 'DGSN',
      CarouselSubText1: 'The General Directorate for National Security Commonly referred to by its acronym, is the national police force of the Kingdom of Morocco. The DGSN is tasked with upholding the law and public order.',
      CarouselText2: 'Events',
      CarouselSubText2: 'Civilian events and activities hold a special place on Maroc RolePlay. Civilian fishing, hunting, automatic races and drifting, you will hardly be bored on Maroc RolePlay.',
      CarouselText3: 'Build an Empire',
      CarouselSubText3: 'Organizations are diverse: black, mafia, gang... The illegal world is an important trait of the server, highlighted in both developed content and role play interactions.',
      CarouselText4: 'Justice',
      CarouselSubText4: 'Government and justice are fully integrated into the functioning of businesses, lawyer, judge, prosecutor, governor or investigator careers are vast in the government of Maroc RolePlay',

      DownloadTitle: 'JOIN US',
      DownloadDesc: "Maroc RolePlay tends to offer unique and original content for its community. \n\nQuality of roleplaying, consistency and fair play are in force on the server. ",

      SettingsTitle: 'Settings',
      AudioTrackDesc1: 'When disabled the current audio-track playing will be stopped.',
      AutoPlayDesc2: 'When disabled carousel images will stop cycling and remain on the last shown.',
      PlayVideoDesc3: 'When disabled video will stop playing and remain paused.',

      KeybindTitle: 'Default Keybinds',
      Keybind1: 'Open Inventory',
      Keybind2: 'Cycle Proximity',
      Keybind3: 'Open Phone',
      Keybind4: 'Toggle Seat Belt',
      Keybind5: 'Open Target Menu',
      Keybind6: 'Radial Menu',
      Keybind7: 'Open Hud Menu',
      Keybind8: 'Talk Over Radio',
      Keybind9: 'Open Scoreboard',
      Keybind10: 'Vehicle Locks',
      Keybind11: 'Toggle Engine',
      Keybind12: 'Pointer Emote',
      Keybind13: 'Keybind Slots',
      Keybind14: 'Hands Up Emote',
      Keybind15: 'Use Item Slots',
      Keybind16: 'Cruise Control',

      firstap: ref(true),
      secondap: ref(true),
      thirdap: ref(true),
      firstslide: ref(1),
      secondslide: ref('1'),
      thirdslide: ref('5'),
      audioplay: ref(true),
      playvideo: ref(true),
      download: ref(true),
      settings: ref(false),
    }
  }
})

load.use(Quasar, { config: {} })
load.mount('#loading-main')

// var audio = document.getElementById("audio");
// audio.volume = 0.2;

function audiotoggle() {
    // var audio = document.getElementById("audio");
    // if (audio.paused) {
    //     audio.play();
    // } else {
    //     audio.pause();
    // }
}

function videotoggle() {
    var video = document.getElementById("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    },
};

window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});
