import thelife from './assets/sounds/rendezvousgardens/The-life.ogg'
import paperbag from './assets/sounds/rendezvousgardens/New-paper-bag.ogg'
import soul from './assets/sounds/rendezvousgardens/soul-for-soles.ogg'
import doing from './assets/sounds/rendezvousgardens/doing-what-we-do.ogg'
import come from './assets/sounds/rendezvousgardens/go-away-come-my-way.ogg'
import chilled from './assets/sounds/rendezvousgardens/chilled-and-posted.ogg'
import wolves from './assets/sounds/rendezvousgardens/Night-Wolves.ogg'
import fashion from './assets/sounds/rendezvousgardens/Fashion-figures.ogg'
import morning from './assets/sounds/rendezvousgardens/Good-Morning.ogg'
import tall from './assets/sounds/rendezvousgardens/The-Tall.ogg'
import selection from './assets/sounds/rendezvousgardens/Selection.ogg'
import og from './assets/sounds/rendezvousgardens/The-OG.ogg'
import taxilians from './assets/sounds/rendezvousgardens/Taxilians.ogg'
import again from './assets/sounds/rendezvousgardens/Again.ogg'

//images

import p1 from './assets/images/rendezvousgardens/1.jpg'
import p2 from './assets/images/rendezvousgardens/2.jpg'
import p3 from './assets/images/rendezvousgardens/3.jpg'
import p4 from './assets/images/rendezvousgardens/4.jpg'
import p5 from './assets/images/rendezvousgardens/5.jpg'
import p6 from './assets/images/rendezvousgardens/6.jpg'
import p7 from './assets/images/rendezvousgardens/7.jpg'
import p8 from './assets/images/rendezvousgardens/8.jpg'
import p9 from './assets/images/rendezvousgardens/9.jpg'

export default function list(){
    const items = [
        {
          id: 1,
          src: p1,
          song: thelife,
          desc: "The Life",
        },
        {
          id: 2,
          src: p2,
          song: paperbag,
          desc: "New paper bag",
        },
        {
          id: 3,
          src: p3,
          song: soul,
          desc: "Soul for Soles",
        },
        {
          id: 4,
          src: p4,
          song: doing,
          desc: "Doing What We Do",
        }
        ,
        {
          id: 5,
          src: p5,
          song: come,
          desc: "Go Away Come my Way",
        },
        {
          id: 6,
          src: p6,
          song: chilled,
          desc: "Chilled and Posted",
        },
        {
          id: 7,
          src: p7,
          song: wolves,
          desc: "Night Wolves",
        },
        {
          id: 8,
          src: p8,
        song: fashion,
          desc: "Fashion Figures (feat. $tyleX)",
        },
        {
            id: 9,
            src: p9,
          song: morning,
            desc: "Good Morning",
        },
        {
            id: 10,
            src: p1,
          song: tall,
            desc: "The Tall",
        },
        {
            id: 11,
            src: p2,
          song: selection,
            desc: "Selection",
        },
        {
            id: 12,
            src: p3,
          song: og,
            desc: "The OG",
        },
        {
            id: 13,
            src: p4,
          song: taxilians,
            desc: "Taxilians",
        },
        {
            id: 8,
            src: p5,
          song: again,
            desc: "Again",
        },
      ]
    return items
}

