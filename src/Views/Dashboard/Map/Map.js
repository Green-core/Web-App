import React from "react";

import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "./map.css";

const districts = [
  "Colombo",
  "Kandy",
  "Galle",
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Moneragala",
  "Mullativu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];
const svgPaths = {
  mullativu: [
    "M6.82 8.1c-.3.17-.86.1-1.18.08-.2-.03-.25-.6-.2-.76.15-.5.07-.67-.06-1.2-.04-.14-.06-.28-.06-.43.08-.06.15-.12.2-.2.1-.16.16-.42.3-.55.22-.2 1.23.32 1.34 0 .17-.48.67-.05.94-.33.26-.26.03-.4.4-.26.15.06.26.05.27-.12.02-.25.27-.38.3-.62.07.05.48.3.42.4-.04.05-.37-.23-.4-.14 0 .1 1.1.88 1.1.87.1-.1-.75-.53-.7-.7-.03.1 1.26.87 1.16 1-.13.14-.24-.14-.33-.2-.1-.07-.48-.1-.33.15.06.1.67.58.65.4 0-.05-.1-.27-.08-.3.14-.13.25.2.3.3 0 .03.4 1.1.4 1.1-.05.02-.3-.6-.46-.22-.1.25.16.1.25.07.1-.03.2.18.08.22 0 .02.1.12.14.1v-.13c.24 0 .44.67.53.8.1.13.25.55.03.24-.05-.06-.36-.58-.44-.36-.1.2-.2.1.03.27.08.06.23.04.26.06.02.03-.1.07-.1.07.14-.14-.06.36-.07.3-.34.2-.8.05-1.1.3-.04-.2.1-.5-.07-.68-.1-.12-.73-.17-.73-.16-.03-.3.1-.33-.2-.46-.1-.04-.07-.25-.18-.25-.23-.02-.46.1-.68.16-.32.08-.53-.16-.84-.16-.13 0-.26-.04-.4-.02-.2.03-.18.2 0 .25.6.2-.37 1-.5 1.08 0 0 .03 0 0 0z",
  ],
  vavuniya: [
    "M5.8 10.6c-.06-.17-.25-.28-.34-.43-.1-.17 0-.37.04-.54.15-.53.4-.3.8-.38.26-.06.9 0 .85-.38-.03-.25-.17-.55-.33-.76.2-.1.58-.34.64-.6.04-.13.04-.35-.1-.44-.06-.03-.3-.13-.13-.22.18-.1.54-.1.73-.03.22.08.25.23.5.18.22-.04.4-.12.6-.17.16-.03.6.32.6.47-.04.17-.07.37.16.24.17-.1.26.06.42.1.3.05.15.52.2.73-.2.14-.54.47-.75.5-.24 0-.6-.06-.8.1-.12.1.4.42.44.54.06.17-.62.8-.73.92-.33.35-.47.36-.9.16-.42-.2-.78.96-1.2 1.15-.4.2-.27-.38-.47-.5-.35-.24-.14-.3-.24-.6-.07-.18 0 0 0 0z",
  ],
  kilinochchi: [
    "M5.32 5.8c-.17.08-.35.13-.54.13 0-.1-.1-.54-.07-.6.15-.16.05-.2-.1-.35-.22-.18-.23 0-.32-.3-.08-.26-.06-.36.22-.48.26-.1 1-.4.77-.82-.13-.26-.63-.8-.95-.8.25-.16.6.23.82.4 0 0 1.12.32 1 .46-.06.06-.14-.08-.2 0-.06.1.2.14.18.17-.03.05-.18-.02-.22 0-.04.05.28.2.3.2.18.02.36-.1.53-.1.32 0 .4-.5.43-.5.03.03.04.06.03.1 0 .02.34.1.34.1.2.03.4-.1.56.13.17.22.17.24.47.3.1 0 .37.04.45-.02.06-.04-.1-.07-.1-.1.3-.13-.17.83-.33.8-.2-.06-.3-.3-.4 0-.08.28-.25.3-.53.28-.18-.02-.45 0-.48.2-.06.28-.7.1-.9.1-.33-.03-.43-.14-.6.22-.1.18-.25.4-.38.5-.17.08 0-.02 0 0z",
    "M3.9 3.6c.04.02-.03.16-.07.13-.08-.07-.06-.27.07-.14.03.02 0-.02 0 0z",
    "M3.8 5.36c0 .05 0 .1-.05.1-.04-.02-.1-.17 0-.16 0 .02.03.04.05.06 0 .02 0 0 0 0z",
    "M3.66 5.27c.04.1-.15.1-.2.03-.05-.13.14-.16.2-.03.05.12 0 0 0 0z",
    "M7.5 2.72c.02.06.1.53-.06.52-.08 0-.08-.14-.2-.1l-.2.03c.02.02.02.04 0 .07.04-.07-.57-.53-.64-.58-.23-.17-.4-.15-.3-.42.06-.12.1-.25.15-.37.1.1 1.1.93 1.25.85z",
  ],
  batticaloa: [
    "M19.4 21.34c-.05 0-.1.02-.15.04 0-.03 0-.22.03-.22.07 0 .13.2.12.18-.05 0 0-.02 0 0z",
    "M19.38 21.13c.1.14-.2-.15-.15-.14-.1-.03.03.15-.04.16-.3.05-.14-.34-.13-.4.04-.22-.1-.62-.2-.8-.1-.2-.3-.3-.32-.52 0-.17-.18-.43-.33-.5.07.03-.05.53-.15.17-.06-.2-.3-.68-.62-.57-.27.1-.22.42 0 .5-.03 0 .54-.23.47-.02l-.16.1c0 .03.44.25.5.3.02.02 0 .7.14.62-.06.03-.06-.53.13-.35.04.04.4.6.4.58-.02.03-.26.12-.15.2.07.04.2-.2.18.07-.03.22-.17-.04-.24-.03-.28.03.3.22.3.22.1.13-.3.2-.32.17.04.08.2.04.22.14-.34.17-.7.97-.93.25-.06-.15-.07-.6-.23-.65-.23-.08-.62.12-.88.08-.34-.05-.74-.22-.86-.56-.05-.14.18-.6.07-.67-.1-.07-.35-.03-.48-.08-.18-.07-.35-.17-.5-.3-.1-.1-.14-.22-.26-.3-.18-.12-.4-.03-.6-.1.13-.2-.1-.45-.02-.66.1-.28 0-.57.16-.84.2-.3 1.3.03.74-.62-.36-.44-.14-1.17-.18-1.7 0-.28 0-.52.32-.54.16-.02.33 0 .5.02.05 0-.04-.17.03-.17.14 0 .3 1.1.32 1.23.04.54-.43-.65-.35-.64-.14.02-.2.37-.16.38-.06-.03-.1-.12-.18-.06.2-.14.73.88.73.88-.02 0-.04-.55.02-.6-.02 0 .22.76.24.8.1.15.2.26.34.37.1.08.25.04.3.1.1.1-.23.1-.14.27.04.07.18.08.08.16-.15.13-.3.2-.18.43 0 .02.36.55.2.52-.06-.02-.5.06-.3.16.08.05.1-.12.18-.07.16.08.17-.1.16-.22-.03-.24-.33-.47-.08-.7.04-.02.2-.17.25-.14.02 0 .16.24.2.18-.28.06-.1.63.06.75.17.1.17 0 .3.17.08.1.67.67.65.75.04-.1-.16-.2-.13-.28-.06.18.5.73.6.87.32.48.28 1.15.5 1.63.13.16 0 0 0 0z",
  ],

  ampara: [
    "M12.1 19c.08-.2.83-.1.98-.07.18.05.2.3.4.4.14.06.47.18.62.07.24-.18-.03-.46.14-.62.12-.1.38-.03.52 0 .27.1.4.38.64.52.2.1.44.1.64.18.22.1 0 .3-.02.46 0 .28.15.5.38.63s.5.2.74.2c.18-.02.47-.17.64-.1.33.16.08.76.37.9.24.14.6-.44.77-.53 0 .08-.18.2-.12.3.13.15.17-.1.23-.15-.02 0 .1.54.13.55.07.03.03-.9.38-.07.26.63.26 1.12.25 1.8-.02.26-.43.27-.36.67.08.5.23-.38.28-.45-.06.08.02.4.03.5 0 .1 0 .2-.02.27-.04.13-.23.05-.23.1 0-.1.2.5.07.43.12.08.07-.08.1-.1.07-.03 0 .26.12.2.06 0-.18-.48-.08-.52.1-.03.3 1.03.02 1-.03 0-.06-.17-.14-.18-.3-.02.27.3.2.2.04.06-.3.64-.23.68 0 0-.1-.52-.22-.34.03-.04.22.43.23.46.1.44-.12.1-.23.15-.1.06.18.2.2.2.1.08-.1.2-.15.24-.1.08.08.23 0 .34-.02.02-.25-.04-.17.07.03.06.2-.06.2.04-.02.06-.25.23-.2.28.04-.15-.15-.1-.1 0 .02 0 .14.2.1.22-.04.04-.12-.07-.17-.06.03 0-.02.7-.13.77-.06.04.06-.04.07.02.02.06-.23.26-.27.27.08-.03.03.34-.16.28-.04 0 .08.08.04.1 0 0-.12.03-.1.05.08.1.1.12-.03.22-.24-.27-.74-.37-.83-.75-.13-.57.1-1.34.15-1.9.05-.63-.08-1.25-.14-1.85-.06-.5-.3-.45-.68-.65-.53-.28-.12-.7-.06-1.07.07-.36-.28-.7-.4-1.02-.1-.27-.26-.65-.2-.93.03-.24-.07-.27-.35-.17-.1.04-.22.1-.25.2-.06.23-.02.1-.2.18-.08.03 0 .37-.08.46-.1.13-.33.14-.38.23-.06.1.05 1.03-.38.53-.1-.1-.05-.27-.18-.4-.17-.14-.4-.1-.46-.37-.13-.52.07-.98 0-1.48-.05-.56-.35-.3-.55-.03-.1.12-.16.18-.33.16-.14 0-.5.13-.6.06-.22-.18-.13-.94-.53-.87.03-.25.15-.4.08-.66 0-.1.03-.4 0-.3.04-.14-.02.03 0 0z",
  ],
  puttalam: [
    "M2.02 12.82c0 .04.03.18 0 .2-.02.02-.23-.96-.14-.94.1.02.12.65.14.74 0 0 0-.02 0 0z",
    "M2.15 13.66c0 .04 0 .08-.02.12-.05 0-.1-.23-.02-.2l.05.08z",
    "M2.08 13.98c.02.08-.2-.04-.06-.12.07-.04.06.1.06.12 0 .06 0 0 0 0z",
    "M2.13 17.5c0 .05 0 .1-.03.13-.04 0 0-.15.03-.13.03 0 0 0 0 0z",
    "M2.1 17.79c-.04.05-.08.1-.14.13-.06.07 0 .24 0 .33-.08.27.1.5.1.78-.02.1-.1.92-.07.93l-.13-1.35c-.13-.65-.3-1.28-.46-1.92-.08-.34-.13-.67-.22-1-.05-.2 0-.3.06-.5.05-.17-.16-.4-.02-.56.13-.13.2-.16.26-.44 0-.05.27-.57.3-.54.12.13-.23.47-.16.57.03.05.1-.1.13-.04.02.05-.4.3-.3.36.1.06.25-.32.36-.3.04 0-.02.36-.04.4 0 0-.12 0-.17.07-.13.14.02.3-.05.48-.12.36.06.65 0 .93-.03.14-.03.3.02.44.1.25.36.12.52.2.08.05.06.6 0 .7",
    "M3.3 22.9c.1.13-.86.18-.95.2.1-.3-.1-1.2-.23-1.6-.05-.14-.4-1.28-.22-1.42-.06.05.22.9.33.8.04-.04-.15-.3-.17-.34-.12-.23 0-.24.04-.44.06-.28.02-.7.02-.97 0-.1-.08-.32-.03-.4.08-.2.17 0 .1-.32-.08-.45.07-.9.03-1.32-.02-.26.2-.52.05-.75-.1-.15-.33-.3-.26-.45.08-.16.34-.34.3-.56 0-.07-.3-.7-.3-.7 0-.03.06-.06.07-.1 0-.1-.04.08.02 0 .14-.13.24-.6.23-.78 0-.2.12-.36.1-.57-.02-.26.05-.34.14-.56.07-.17-.03-.37.05-.56.08-.18.28-.26.46-.33.23.22 1.04.08.98.5-.04.26-.35.67-.53.87-.1.12-.3.08-.18.3.1.18.17.32.2.53 0 .17.03.35.12.5.14.25.28.04.44.13.4.2.6.34.6.86.02.4.36.48.36.93 0 .12-.14.4-.08.5.12.2.02.23-.17.2-.23-.04-.65.62-.8.76-.23.2-.43.54-.37.87.08.43-.56.27-.27.66.18.23-.15.1-.17.1-.1 0-.13.36-.16.42-.32.5-.13 1.12 0 1.65.1.42-.06 1.04.23 1.4.13.17 0 0 0 0z",
  ],
  kurunegala: [
    "M8.55 21.52c0 .15-.25.25-.33.35-.08.1-.23-.06-.32-.08-.2-.06-.1.57-.54.4-.15-.32-.6-.53-.64-.05-.05.4-.5.52-.86.64-.2.07-.28.4-.5.25-.12-.08-.15-.18-.28-.26-.13-.07-.05-.26-.22-.28-.2 0-.36.16-.5.26-.27.18-.3 0-.56-.03-.18-.03-.32.15-.5.15-.26-.32-.1-.9-.22-1.28-.15-.42-.23-.92-.15-1.36.03-.2.2-.88.4-.77.15.07.05-.2 0-.25-.16-.13.1-.2.2-.27.2-.17.07-.66.2-.75.24-.15.55-.66.7-.9l.3-.28c.1-.07.33.1.35-.08.02-.18-.16-.17 0-.36.1-.14-.02-.43 0-.6 0-.15-.2-.2-.28-.3-.12-.15-.13-.66-.14-.86.36.35 1 .4 1.46.6.35.16.6.55.97.63.43.1.25.42.33.77.03.13.2.08.3.16.13.14.18.4.2.6 0 .14-.07.3-.03.44.02.08.07.13.16.14-.04.1-.04.17 0 .26.16.3.36.56.5.88.17.45-.18 1.02.04 1.4.22.4-.05.5-.05.8 0 .12 0 0 0 0z",
  ],
  colombo: [
    "M5.33 27.03c-.34-.05-.82-.07-1.1.14-.43.33-1.02.16-1.4.5-.14-.37-.75-1.94-.08-2.1-.17.03.35.26.33.26.22.05.56-.03.75.03.2.06.28.38.57.3.2-.03.2-.3.34-.4.4-.33.8.05.72.48-.03.18.05.82-.13.8-.17-.03 0 0 0 0z",
  ],
  gampaha: [
    "M5.5 23.12c.1.04-.84 1.15-.16 1.1.23 0 .03.32 0 .43-.12.3-.08.7-.02 1.02-.34 0-.5-.08-.7.26-.2.4-.5.2-.74-.05-.1-.1-.5.06-.68-.04-.1-.06-.18.02-.26-.04-.06 0-.1-.03-.17-.06 0-.05 0-.1.02-.16-.04-.05-.15.07-.18.08.04-.1-.3-2.06-.44-2.08.02 0 .37 1.06.4 1 0-.03-.06-.23-.05-.24.05-.04.03.1.08.1.12-.05-.04-.47-.06-.54-.05-.18-.3-.3-.23-.43.12-.22-.06-.36.23-.38.22-.03.48-.02.7-.1.1-.05.22-.14.37-.2.07-.04.2-.12.27-.05.2.22.42.08.6-.06.56-.4.57.2 1.02.42 0 0-.03 0 0 0z",
  ],
  kegalle: [
    "M5.32 25.66c-.05-.24-.1-.67-.03-.9.03-.1.27-.54.06-.52-.6.04.1-1.03.22-1.22.13-.2.63-.44.86-.46.44-.04.13-.55.37-.66.4-.2.56.32.7.56.1.13.15.17.27.24.23.14.03.1-.04.22.1-.18.57.72.62.78.28.33-.17.15-.3.38-.07.14-.3.1-.35.27-.05.23.06.5.03.74-.03.2-.25.26-.17.5.07.25-.12.52.2.6.3.08.64.67.1.64-.5-.04-.67-.36-1.15-.02-.4.28-.34-.17-.62-.43-.15-.16-.46-.8-.68-.5l-.08-.23c-.03-.12 0 0 0 0z",
  ],
  kandy: [
    "M11.9 23.6c-.04 0-.1 0-.14-.02-.18-.06-.2.02-.35.07-.15.06-.27-.1-.37.2-.08.2-.3.32-.37.53-.1.3.36.37.27.67-.06.18-.32.22-.5.2-.27-.05-.37-.52-.5-.73-.16-.23-.43-.2-.64-.04-.2.14-.52.2-.75.2-.18 0 .03.33.1.36.23.1.3.4.08.53-.6.4-.66-.65-.98-.75.05-.26-.2-.46.12-.6.14-.07.2-.24.33-.25.07 0 .2 0 .24-.07.13-.16-.26-.44-.33-.57 0-.02-.33-.53-.4-.44.05-.08.15-.05.2-.1-.1.1-.5-.55-.54-.6.48.2.3-.5.55-.4.2.05.23.17.4 0 .2-.16.2-.33.46-.22.23.1.45.4.68.45.25.06.43-.3.4-.5-.04-.1-.06-.34.07-.4.2-.05.3.3.42.4.26.16.67-.4 1.02-.32.06.05.13.08.2.1.13-.04.12-.2.26-.22.38-.04.3.18.28.47-.02.4.13.96.3 1.33.2.5-.05.6-.47.73 0 0 .04 0 0 0z",
  ],
  "nuwara eliya": [
    "M12.03 23.96c.02.18-.22.12-.03.3.12.12-.18.72-.2.9-.07.28-.33.2-.45.38-.07.1.04.2 0 .32-.03.14-.17.14-.14.3.06.25.06.26-.17.34-.1.04.06.16-.12.24-.17.08 0 .13.04.24.05.1-.3.17-.28.3-.53.07-1.12.23-1.64.1-.35-.08-.92.1-.97-.35-.03-.2.15-.28.08-.48-.1-.27-.36-.26-.52-.45-.08-.1-.1-.6-.04-.74.06-.13.2-.1.2-.28 0-.1-.03-.18 0-.26.28.1.28.66.66.78.45.14.53-.34.24-.58-.38-.32-.03-.4.3-.4.22 0 .33-.22.54-.25.26-.04.34.06.5.25.22.27.18.74.68.62.63-.16-.2-.68.1-1.04.13-.15.2-.38.34-.52.06-.06.35-.08.44-.1.3-.1.45.13.47.38.02.1 0-.03 0 0z",
  ],
  badulla: [
    "M12.08 21.1c-.03-.15-.16-1.2.03-1.15.22.04.28.4.34.56.03.12.1.42.28.37.3-.1.66-.02.8-.33.12-.22.36-.45.5-.08.14.4-.17.77-.07 1.17.04.16.06.62.22.7.15.08.2.02.36.17.1.1 0 .23.08.3-.28.1-.32.04-.4.4-.03.1-.32.53-.42.55-.2.04-.15-.3-.38-.05-.2.22.08.34.18.5.18.32.1.36.44.25.2-.07.35.23.4.37.07.24-.1.42-.1.65.02.06 0 .1-.06.12-.1.06 0 .1 0 .2.02.04-.3-.1-.36.06-.1.3-.27.36-.45.6-.15.2-.07.3-.3.45-.23.15-.37.36-.34.64.04.2.45.05.34.26-.12.2-.17.26-.23.5-.06.26.22.3.2.47-.02.2-.42.16-.5.22-.07.06 0 .25-.04.34-.1.2-.17-.47-.17-.47-.02-.1-.2-.36-.26-.45-.08-.14-.33-.48-.5-.4.02.13-1 .53-.82-.13.06-.22.23-.3.27-.54.02-.2-.36-.08-.45-.07 0-.17.2-.17.28-.28.1-.1-.18-.13 0-.3.07-.07 0-.16.06-.2.05-.05.14-.04.2-.08.02 0 .05-.4.1-.5.1-.18-.07-.35.14-.46.26-.13.36-.2.42-.5s.23-.55.06-.8c-.04-.07.12-.15.1-.22 0-.13-.1-.23-.1-.36.67-.2.48-.4.34-.98-.1-.5-.06-1.06-.18-1.52-.1-.4 0 0 0 0z",
  ],
  moneragala: [
    "M17.8 25.84c.07.45 0 1.05-.06 1.5-.04.28-.03.55-.04.83 0 .27-.14.57-.03.85-.52-.06-1.1.6-1.1 1.06 0 .37-.08.3-.4.25-.22-.03-.7.3-.94.37-.3.07-.45.32-.7.4-.17.07-.38-.22-.48-.32-.16-.15-.34-.2-.5-.33-.42-.33-.63.2-1 .15-.3-.04-.05.22-.07.34-.04.2-.35.32-.5.4-.27.12-.28.15-.47-.06-.2-.24-.5-.4-.55-.73-.05-.37-.17-.7 0-1.04.15-.27.2-.62.37-.87.1-.16.36-.38.32-.6.2-.1.56.32.53.5-.02.15.24.25.2.52-.06.25.32.46.22.1-.06-.2.2-.16.3-.28.05-.06.24 0 .2-.12-.08-.16-.25-.17-.2-.38.03-.15 0-.34.1-.46.05-.04.18-.1.17-.17-.02-.22-.45.07-.33-.4.1-.33.32-.32.5-.55.1-.1.04-.25.15-.37.1-.12.28-.17.34-.35.1-.35.13-.2.4-.25-.05 0 .1-.42.1-.44.07-.2.2-.47.03-.63-.3-.3-.17-.25-.57-.18-.05 0-.4-.52-.45-.6-.1-.18.2-.5.3-.3.14.25.33-.12.44-.26.1-.14.15-.28.17-.44 0-.17.24-.12.35-.16.63.6.23-.4.45-.52.1-.05.25.08.3-.06.08-.24.15-.26.13-.52 0-.1.2-.02.2-.2.02-.15.33-.24.46-.3.33-.12.15.44.24.66.15.4.27.8.4 1.2.05.2.25.2.1.38-.2.2-.27.45-.2.7.16.47.85.26.92.7.05.32.16.78.2 1 .02.24-.02-.06 0 0z",
  ],
  rathnapura: [
    "M10.66 27.3c.63-.07.4.15.2.53-.13.23.04.46.3.46.12-.02.37-.35.47-.3 0 0-.43 1.05-.46 1.16-.1.28-.34.45-.3.77.06.33-.04.75.26.97.2.14 1 1.22.38 1.06-.12-.04-.23-.04-.3-.17-.1-.2-.4-.08-.57-.1-.2-.03-.4-.05-.56-.14-.2-.1-.4-.1-.6-.17.14-.16.08-.58-.17-.47-.05.02-.38.1-.2-.04.1-.1-.13-.1-.1-.2 0-.1.15-.18-.08-.16-.24.03-.5.03-.67.2-.1.07-.83-.13-1-.24-.3-.2-.33-.47-.54-.8-.13-.2-.46-.48-.3-.6.15-.12-.18-.37-.24-.4-.24-.13-.17-.35-.34-.53-.26-.3-.45-.75-.5-1.14.22.03.15-.2.1-.3-.06-.2.13-.5 0-.6-.1-.13 0-.38.17-.34.16.02.33.46.45.6.13.12.25.46.37.54.12.08.38-.16.47-.22.42-.28.75.34 1.12.13.04.18 0 .47.26.47.25 0 .87.2 1.07.12.24-.1.44 0 .68-.05.22-.06.43-.1.63-.1.1-.02-.04 0 0 0z",
  ],
  kalutara: [
    "M6.98 30.3c-.1.17-.4.2-.55.27-.32.1.08.48-.07.6-.04.03-.5-.4-.6-.4-.28-.04-.2.34-.6.2-.14-.03-1.3-.7-1.33-.67-.15.17-.2.1-.28-.14-.07-.17.04-.14.03-.33-.02-.26-.12-.45-.2-.7-.1-.36-.25-.7-.4-1.05-.07-.2-.25-.37-.03-.5.2-.1.38-.1.6-.1.25-.03.54-.14.74-.3.18-.17.55-.2.82-.2.33.02.25.3.34.56.1.27.46.58.5.84.02.28.25.3.4.5.2.22-.13.16.06.4.12.17.7.83.56 1.03-.08.13 0 0 0 0z",
  ],
  galle: [
    "M8.05 30.8c0 .06-.28.05-.3.2 0 .13.18.2.22.3.14.3-.37.07-.47.02-.14-.07-.75-.28-.38.03.16.12.63.48.37.72-.07.06-.3.05-.33.1-.04.1.02.4-.08.42-.24.04.25.45.3.5.22.2-.15.25-.23.4-.08.14.18.23.05.36-.2.18-.24.34-.2.6-.13.03-.27-.07-.38-.14-.2-.1-.36-.08-.54-.16-.06-.02-.52-.37-.46-.4l-.04.13c-.1.05-.65-.56-.7-.6-.4-.38-.58-.9-.8-1.37-.1-.2-.04-.36-.1-.55-.05-.2-.2-.4-.24-.6 0-.06-.08-.57.14-.43.02 0 .06.36.08.3.12-.25.6-.04.78.18.14.17.72.32.8.05.13-.48.78.43.84.28.07-.16-.25-.3-.08-.5.16-.16.42-.16.6-.3.1-.07.5.26.72.27.14 0 .4 0 .4.18 0 .05 0-.02 0 0z",
  ],
  matara: [
    "M9.48 31.4c-.12.12.1.48-.2.4-.1-.05-.4.54-.14.64.14.06.44-.03.3.2-.2.35.2.2.3.34.06.1-.35.77-.16.8.08 0 .2 0 .14.12-.1.2.25.23.34.32-.08.06-.12.2-.23.2-.2 0-.44.04-.6.16-.07.06-.42.33-.5.27-.1-.07-.05-.2-.2-.2-.2 0-.4.08-.6.05-.16-.02-.3-.02-.36-.17-.1-.2-.17-.07-.32-.05-.46.08-.18-.45 0-.62.16-.17-.26-.26.06-.48.24-.17.2-.23-.02-.4-.3-.22-.17-.24-.17-.53.02-.35.18-.2.38-.38s-.06-.53-.23-.64c-.23-.14-.28-.46.04-.24.14.1.4.33.6.28.26-.07-.18-.4-.13-.52.05-.13.46-.23.57-.3.1-.05.84-.2.7 0-.02 0 .06.37.05.36.08.04.3-.22.38-.15.06.04 0 .5 0 .52-.1.08 0 0 0 0z",
  ],
  hambantota: [
    "M17.67 29.02c.2.02.9.5.73.75-.1.16-.32.3-.46.45-.14.14-.2-.08-.2-.1-.13.12-.07.37-.22.5-.12.1-.33.3-.48.3-.35.03-.38.33-.64.48-.17.1-.5.12-.62.3-.03.06.1.03.12.04 0 .02-.23.26-.27.27 0 .02 0-.1-.06-.1-.1 0-.44.37-.5.44-.2.16-.87.46-1.1.4.1.02.37-.33.1-.25-.03.04.1 0 .04.07.05-.05-.6.12-.2.14.03.02-.25.26-.28.28-.27.14-.55.15-.84.2-.1 0-1 .13-1.02.23 0-.06.28-.04.33-.1.02-.06-.22.05-.2.06.02.02-.17-.35-.3-.14-.02.04.1.15.12.2.04.12-.3.17-.4.15 0-.04.03-.07.07-.1 0-.07-.2.17-.2.17-.08.08-.34.3-.45.14 0 0 .3-.04.3-.08 0-.1-.42.08-.46.1-.1.08-.02.14-.08.22-.08.1-.26.1-.38.15-.14.05-.25-.03-.36-.1-.15-.08 0-.14-.05-.24-.04-.08-.24 0-.22-.13.02-.13.15-.28.18-.4.1-.32.1-.33-.16-.37-.32-.06.1-.45-.08-.47-.35-.04-.56-.04-.34-.46.06-.12.12-.18.27-.2.17 0 0-.3.1-.4.3.1.6.2.9.27.32.08.64-.04.92.17.78.6.23-.35.4-.4.2-.04.37-.12.53-.22.28-.17.22-.24.17-.5 0-.07.53-.3.6-.33.38-.15.4.08.7.22.2.1.3.13.5.33.33.35.42-.03.72-.13s1.1-.66 1.4-.46c.34.22.28-.58.34-.73.07-.18.45-.36.6-.47.12-.08.5-.14.4-.14.16 0 0 0 0 0z",
  ],
  jaffna: [
    "M1.43 3.47c.1.5-1.07-.2-.66-.47.1-.07.3.13.37.17.22.12.23 0 .3.3.04.26 0-.02 0 0z",
    "M2.6 2.45c.1.26-.17.37-.37.33-.15-.03-.23-.5-.1-.5.1-.03.08.27.23.26 0 0 .2-.16.23-.1 0 .05-.02 0 0 0z",
    "M1.83 2.35c0 .05.02.3-.07.3-.22-.04.05-.4.07-.3.02.08 0 0 0 0z",
    "M1.9 1.86c0 .06-.1.2-.16.2-.1 0 .02-.3.1-.27.02 0 .03.04.05.06 0 .1 0 0 0 0z",
    "M2.16 1.5c.02.02 0 .24-.04.25-.16.03 0-.33.04-.26.02 0 0 0 0 0z",
    "M2.83 1.1c.2.43-.4.5-.36.32.03-.1-.04-.3.1-.36.07-.04.22-.05.26.04.03.07 0 0 0 0z",
    "M3.6 2.2c.04.24-.5 0-.66.13-.2.15-.4-.5-.3-.45-.12-.06-.06.18-.2-.04-.05-.08-.1-.3.06-.28.1.02.28.03.33.13 0 .03.07.27.14.24-.04.02.2-.3.22-.14 0 .12-.2.1.05.25.03.02.34.13.34.15.02.15 0 0 0 0z",
    "M3.8 2.24c.3.3-.5.33-.37.16.06-.08.14.05.2-.1.04-.1.06-.17.17-.06.03.04 0 0 0 0z",
    "M6.25 1.87l-.2.54c-.05 0-.88-.62-.94-.38-.02.2.18.4.27.45.04.03-.28.1-.2-.03h.08c.03-.07-.8-.36-.84-.5 0-.1.13-.38.25-.4.16-.02.08.24.1.24.05-.02.08-.06.1-.12.02.02.05.04.08.04.07-.04-.18-.18 0-.25.14-.05.07-.22.05-.2 0 0-.14.4-.3.23 0 0 .12-.05.03-.1-.05-.05-.1.18-.16.1l.04-.08c-.04-.04-.3.4-.3.5.04.07.6.56.6.52-.05.12-.47-.25-.53-.28-.18-.1-.35.04-.54-.08-.08-.06-.08-.39-.22-.35 0 0-.42-.1-.43-.13-.04-.1-.25-.45-.25-.5 0-.16.43-.38.55-.42.2-.06.6-.2.8-.1.12.03.6-.07.6-.07.2.14-.3.54.13.52-.02 0-.02.16.06.1.06-.06 0-.2.17-.13.03 0 .3.2.26.2.06-.03-.08-.2.08-.16.08.03.2.08.25.15.15.24.26.48.45.72zm-.8-.5c.03-.07-.13-.05-.1 0 0 .1.1.06.1 0 .04-.07 0 0 0 0zm-.08-.08c0-.1-.2-.13-.24-.07-.07.1.23.23.24.06 0-.06 0 0 0 0z",
    "M9 3.66c-.22.1-.44-.36-.7-.34-.38.03-.72-.28-.8-.6.06 0 .1.02.17.04-.05.06-1.17-.94-1.3-1.04-.22-.2-.5-.8-.83-.74-.08.02-.6-.17-.6-.15.02.03.04.06.04.1-.08.07-.1-.3-.1-.34 0-.2.24-.16.38-.18.17-.02.3-.08.5-.03.22.05.2.38.35.56.37.47.68.93 1.15 1.3.6.47 1.16.94 1.76 1.4z",
  ],
  trincomalee: [
    "M10.43 8.33c.32-.25.76-.1 1.1-.3.02.15.16.35.34.26.05-.04-.07-.1-.03-.14.06-.04.22.05.2-.08 0-.02-.1-.38.04-.26.13.1.1.47.16.52l.16-.07c.06.02 0 .24-.02.25.04-.18.05.05.1.05.06 0-.05-.1 0-.12.16-.07.24.57.5.38-.05.03.73 1.26.8 1.26-.04 0-.32-.27-.3-.04.03.15.1.06.15.02.07-.06.3.65.32.64.2-.15-.2-.4-.16-.58-.03.07.35.5.4.57.22.34-.27.33-.1.48.4-.2.36.6.24.56-.1-.02-.2-.64-.33-.1-.02.1.3.54-.1.28 0-.03.03-.03.08 0 0-.04-.04-.1-.07-.13-.15.18 0-.12-.2-.05-.12.04-.4.26-.25.37.14.1.23-.16.38-.07.05.03.34.25.24.33-.05.04-.08-.14-.13-.12.05-.02 0 .26 0 .27.06.05.12-.06.14-.1.06-.1.22.05.3.07.07 0 .58.2.58.2.02-.03.02-.2.02-.24 0 .04-.36.1-.16-.03 0 .04-.23.1-.24.02 0-.02.14-.05.17-.06.16-.07 0-.13 0-.23s.47-.4.45-.2c0 .07-.12-.04-.12.02.12-.02.17 0 .14.1-.04.02-.06.06-.04.1.1.05.22-.18.2.12-.04-.02-.08-.02-.12 0 .02-.03.56.95.43 1.03-.2.1-.16-.6-.37-.47-.12.08 0 .24.05.32l.12.17c.1.14-.03.1.06.03-.02 0 .06.47.07.5.04.2.2.43-.05.48-.25.05-.5 0-.75.07-.33.1-.34.4-.5.65-.1.2-.4.28-.32-.04.1-.37.05-.5-.3-.68-.36-.17-.74-.22-1.1-.32-.13-.03-.23.1-.35 0-.14-.13-.23-.3-.37-.44-.27-.26-.24-.5-.06-.82.1-.14.45-.37.47-.5 0-.1-.27-.14-.3-.18-.14-.1-.17-.25-.2-.4-.06-.37-.4-.63-.37-1.04.04-.32-.12-.63-.05-.93.06-.27.27-.57.1-.86-.2-.4-.87-.4-1.25-.4.1-.1.22-.18.33-.27l-.13.1c.3-.25 0 0 0 0z",
    "M15.8 14.14l-.05.12c-.05 0-.23-.73-.1-.84-.1.07.13.6.14.72-.02.04 0-.02 0 0z",
  ],
  mannar: [
    "M3.13 8c.07.06-.4.08-.36 0v.1c.2-.16-1.6-1.13-1.6-1 .02-.5 1-.08 1.28.03.07.03.74.56.67.62-.13.13-.52-.47-.56-.45-.14.08.53.6.57.7.02 0 0-.02 0 0z",
    "M2.98 8.17c.1.12-.14.1-.14.04 0-.07.12-.05.14-.03.1.13 0 0 0 0z",
    "M3.1 8.6c.06.1-.3-.27-.22-.3.04-.03.2.25.23.3.02.02 0-.02 0 0z",
    "M7.13 8.73c.05.32-.1.37-.38.4-.18 0-.33.1-.5.14-.18.03-.4-.17-.58-.03-.2.16-.2.5-.27.72-.08.26.32.43.4.64-.44 0-1 .47-1.4.14-.33-.28-.3 1.13-.3 1.28-.28-.02-.47-.2-.74-.23-.5-.05-.18-.47-.1-.75.07-.17.18-.78.1-.94-.03-.04-.3-.58-.27-.58.03 0 .34.1.36 0-.02.1-.2-.12-.17-.1-.03 0-.1.1-.1.1-.02 0-.04-.18-.08-.16h.08c-.05.08 0-.35 0-.33.02-.26-.06-.18.05-.3.05-.06-.2-.32-.2-.4.02-.08.62-.1.64-.33.03-.33.44-.2.52-.5.05-.18.1-.38.17-.55.02-.06.27-.02.27-.02 0-.06-.13-.13-.17-.17-.15-.15.03-.23.1-.37.07-.1.1-.27.15-.38.08-.15.4-.14.57-.23 0 .44.4 1 .26 1.43-.05.15-.23.16-.16.35.07.2.04.3.05.5 0 .2 1 .1 1.17.08.33-.05.45.36.5.57.06.46-.02-.06 0 0z",
  ],
  anuradhapura: [
    "M4.1 12.02c0-.1 0-1.4.2-1.34.25.06.34.2.63.14.28-.06.57-.23.86-.22.04.16-.13.28-.02.43.07.1.2.1.28.17.14.14.06.7.43.5.2-.1.4-.36.54-.57.08-.13.22-.2.3-.32.06-.08.04-.3.2-.3.2.02.36.2.55.23.25.06.52-.38.67-.54.1-.1.64-.58.57-.74-.06-.12-.57-.4-.5-.52.1-.15.6-.12.78-.1.28 0 .34-.35.6-.34.4 0 .5-.08.88.1.35.15.54.5.36.86-.17.36-.1.57.03.94.1.27-.14.43.02.72.14.25.27.44.33.72.05.2.55.44.38.55-.25.17-.47.45-.54.75-.05.2.12.27 0 .4-.08.07-.13.2-.14.3-.05.3-.52.1-.7.16-.32.1-.2.55-.36.77-.23.32-.2.57-.2.95 0 .32.12.62-.24.8-.25.13-.48.34-.65.57-.22.3-.2.67-.66.72-.24.03-.92.75-.85 0 0-.22.05-.62-.16-.8-.08-.06-.2-.04-.27-.1-.13-.14-.02-.46-.06-.62-.06-.32-.48-.22-.67-.44-.25-.3-.56-.38-.9-.52-.33-.13-.7-.2-1-.36-.15-.07-.22-.2-.34-.3-.1-.06-.27-.03-.3-.1-.1-.16-.4.06-.53-.26-.12-.33-.2-.65-.33-.97-.04-.1.43-.58.5-.66.2-.2.25-.44.25-.68 0-.3 0 .03 0 0z",
  ],
  matale: [
    "M12.04 19.95c-.05.38-.05.77.04 1.15-.18.03-.32-.1-.44.1-.1.16-.33.04-.5.04-.35 0-.7.6-.95.13-.08-.13-.18-.32-.33-.16-.18.2-.02.38-.06.6-.1.6-1-.24-1.25-.28 0-.26.3-.4.1-.72-.2-.3-.03-.83-.07-1.18-.05-.32-.2-.57-.32-.87-.12-.3-.38-.44-.04-.62.13-.06.4-.36.54-.34.32.04.47-.22.57-.5.12-.36.85-1.2 1.05-.56.1.3.37-.32.5.05.03.13-.16.33-.2.45-.1.22-.1.44-.07.67.08.47-.2.18-.38.4-.13.2-.07.55 0 .74.08.28.23.37.52.32.1-.03.15-.15.24-.2.16-.07.28.04.45-.07.13-.06.27-.1.4-.1.24 0 .24-.04.27.16.06.33-.02.5-.06.8-.05.38 0-.04 0-.02z",
  ],
  polonnaruwa: [
    "M14.25 18.72c-.14.2.1.96-.4.72-.18-.1-.4-.08-.55-.2-.23-.22-.17-.34-.52-.3l-.9.06c-.16 0-.38.02-.5.14-.15.16-.32-.04-.5.15-.06.07-.43.15-.53.07-.1-.08-.15-.43-.18-.55-.03-.15-.07-.38.05-.5.1-.1.3-.03.37-.14.1-.14-.02-.46 0-.63.03-.2.33-.58.28-.76-.08-.32-.33.1-.42.03-.13-.1-.1-.35-.28-.37.28-.2.1-.84.1-1.16.02-.24.13-.36.25-.55.12-.2.04-.44.17-.63.24-.35.72.13.88-.37.22-.66.53.53.9.33.1-.05.84.13.97.18.32.13.72.37.64.76-.1.4.2.3.32 0 .13-.3.15-.66.57-.6-.03.3 0 .6 0 .92 0 .32-.1.68-.03 1 .07.28.67.87-.1.7-.62-.1-.44.52-.57.85-.07.17-.13.25-.07.46.03.1.07.3.02.36-.14.2 0-.02 0 0z",
  ],
};

export default class Map extends React.Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.state = {
      selectedDistrict: "colombo",
      unitCount: 0,
      userCount: 0,
      // loading: false,
    };
  }

  componentDidMount() {
    const data = {
      location: "Colombo",
    };
    axios.post("/dashboard/district-unit-count", data).then((res) => {
      const districtCount = res.data;
      console.log("count=");
      console.log(districtCount);
      this.setState({
        unitCount: districtCount,
        // loading: false,
      });
    });
  }

  handler(e) {
    // console.log(e);
    let selectBox = document.getElementById("selectBoxLocation");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
    console.log(selectedValue);
    this.setState({ selectedDistrict: selectedValue.toLowerCase() });

    const data = {
      location: selectedValue,
    };
    axios.post("/dashboard/district-unit-count", data).then((res) => {
      const districtCount = res.data;
      console.log("count=");
      console.log(districtCount);
      this.setState({
        unitCount: districtCount,
        // loading: false,
      });
    });
  }

  render() {
    const Districts = [];
    districts.forEach((district) => {
      Districts.push(<option value={district}>{district}</option>);
    });

    let SriLankaMap = [];
    for (let district in svgPaths) {
      //console.log(district);
      svgPaths[district].forEach((path) => {
        if (district === this.state.selectedDistrict) {
          SriLankaMap.push(
            <path className="map-region active-path" d={path} />
          );
        } else {
          SriLankaMap.push(<path className="map-region" d={path} />);
        }
      });
    }

    return (
      <div>
        <div>
          <h5>Distribution</h5>
          <div className="dropdown locations-dropdown">
            <select
              className="selector"
              id="selectBoxLocation"
              onChange={this.handler}
            >
              {Districts}
            </select>
          </div>
        </div>
        <br></br>
        <Grid container>
          <Grid item xs={4}>
          <div>
          <p>Units: {this.state.unitCount}</p>
          <p>Users: {this.state.userCount}</p>
          </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <div>
                <svg height="500" width="200" viewBox="0 0 25 60">
                  <g xmlns="http://www.w3.org/2000/svg" className="map">
                    <g className="regions">{SriLankaMap}</g>
                  </g>
                </svg>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
