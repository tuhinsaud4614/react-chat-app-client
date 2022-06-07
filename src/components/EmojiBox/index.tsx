import classNames from "classnames";
import * as React from "react";
import { BiFootball } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FaAppleAlt, FaUmbrellaBeach } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";
import { IoBulbOutline, IoPawOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Content from "./Content";
import Tabs from "./Tabs";

export const emojis = {
  "Most Popular": {
    labelIcon: <BsClock size={16} />,
    icons: [
      "😂",
      "😮",
      "😍",
      "😢",
      "👏",
      "🔥",
      "🎉",
      "💯",
      "❤️",
      "🤣",
      "🥰",
      "😘",
      "😭",
      "😊",
    ],
  },
  "Smileys & People": {
    labelIcon: <FiSmile size={16} />,
    icons: [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "🤣",
      "😂",
      "🙂",
      "🙃",
      "😉",
      "😊",
      "😇",
      "🥰",
      "😍",
      "🤩",
      "😘",
      "😗",
      "☺",
      "😚",
      "😙",
      "😋",
      "😛",
      "😜",
      "🤪",
      "😝",
      "🤑",
      "🤗",
      "🤭",
      "🤫",
      "🤔",
      "🤐",
      "🤨",
      "😐",
      "😑",
      "😶",
      "😏",
      "😒",
      "🙄",
      "😬",
      "🤥",
      "😌",
      "😔",
      "😪",
      "🤤",
      "😴",
      "😷",
      "🤒",
      "🤕",
      "🤢",
      "🤮",
      "🤧",
      "🥵",
      "🥶",
      "🥴",
      "😵",
      "🤯",
      "🤠",
      "🥳",
      "😎",
      "🤓",
      "🧐",
      "😕",
      "😟",
      "🙁",
      "☹",
      "😮",
      "😯",
      "😲",
      "😳",
      "🥺",
      "😦",
      "😧",
      "😨",
      "😰",
      "😥",
      "😢",
      "😭",
      "😱",
      "😖",
      "😣",
      "😞",
      "😓",
      "😩",
      "😫",
      "😤",
      "😡",
      "😠",
      "🤬",
      "😈",
      "👿",
      "💀",
      "☠",
      "💩",
      "🤡",
      "👹",
      "👺",
      "👻",
      "👽",
      "👾",
      "🤖",
      "😺",
      "😸",
      "😹",
      "😻",
      "😼",
      "😽",
      "🙀",
      "😿",
      "😾",
      "💋",
      "👋",
      "🤚",
      "🖐",
      "✋",
      "🖖",
      "👌",
      "✌",
      "🤞",
      "🤟",
      "🤘",
      "🤙",
      "👈",
      "👉",
      "👆",
      "🖕",
      "👇",
      "☝",
      "👍",
      "👎",
      "✊",
      "👊",
      "🤛",
      "🤜",
      "👏",
      "🙌",
      "👐",
      "🤲",
      "🤝",
      "🙏",
      "✍",
      "💅",
      "🤳",
      "💪",
      "🦵",
      "🦶",
      "👂",
      "👃",
      "🧠",
      "🦷",
      "🦴",
      "👀",
      "👁",
      "👅",
      "👄",
      "👶",
      "🧒",
      "👦",
      "👧",
      "🧑",
      "👱",
      "👨",
      "🧔",
      "👨‍🦰",
      "👨‍🦱",
      "👨‍🦳",
      "👨‍🦲",
      "👩",
      "👩‍🦰",
      "👩‍🦱",
      "👩‍🦳",
      "👩‍🦲",
      "👱‍♀️",
      "👱‍♂️",
      "🧓",
      "👴",
      "👵",
      "🙍",
      "🙍‍♂️",
      "🙍‍♀️",
      "🙎",
      "🙎‍♂️",
      "🙎‍♀️",
      "🙅",
      "🙅‍♂️",
      "🙅‍♀️",
      "🙆",
      "🙆‍♂️",
      "🙆‍♀️",
      "💁",
      "💁‍♂️",
      "💁‍♀️",
      "🙋",
      "🙋‍♂️",
      "🙋‍♀️",
      "🙇",
      "🙇‍♂️",
      "🙇‍♀️",
      "🤦",
      "🤦‍♂️",
      "🤦‍♀️",
      "🤷",
      "🤷‍♂️",
      "🤷‍♀️",
      "👨‍⚕️",
      "👩‍⚕️",
      "👨‍🎓",
      "👩‍🎓",
      "👨‍🏫",
      "👩‍🏫",
      "👨‍⚖️",
      "👩‍⚖️",
      "👨‍🌾",
      "👩‍🌾",
      "👨‍🍳",
      "👩‍🍳",
      "👨‍🔧",
      "👩‍🔧",
      "👨‍🏭",
      "👩‍🏭",
      "👨‍💼",
      "👩‍💼",
      "👨‍🔬",
      "👩‍🔬",
      "👨‍💻",
      "👩‍💻",
      "👨‍🎤",
      "👩‍🎤",
      "👨‍🎨",
      "👩‍🎨",
      "👨‍✈️",
      "👩‍✈️",
      "👨‍🚀",
      "👩‍🚀",
      "👨‍🚒",
      "👩‍🚒",
      "👮",
      "👮‍♂️",
      "👮‍♀️",
      "🕵",
      "🕵️‍♂️",
      "🕵️‍♀️",
      "💂",
      "💂‍♂️",
      "💂‍♀️",
      "👷",
      "👷‍♂️",
      "👷‍♀️",
      "🤴",
      "👸",
      "👳",
      "👳‍♂️",
      "👳‍♀️",
      "👲",
      "🧕",
      "�",
      "👰",
      "🤰",
      "🤱",
      "👼",
      "🎅",
      "🤶",
      "🦸",
      "🦸‍♂️",
      "🦸‍♀️",
      "🦹",
      "🦹‍♂️",
      "🦹‍♀️",
      "🧙",
      "🧙‍♂️",
      "🧙‍♀️",
      "🧚",
      "🧚‍♂️",
      "🧚‍♀️",
      "🧛",
      "🧛‍♂️",
      "🧛‍♀️",
      "🧜",
      "🧜‍♂️",
      "🧜‍♀️",
      "🧝",
      "🧝‍♂️",
      "🧝‍♀️",
      "🧞",
      "🧞‍♂️",
      "🧞‍♀️",
      "🧟",
      "🧟‍♂️",
      "🧟‍♀️",
      "💆",
      "💆‍♂️",
      "💆‍♀️",
      "💇",
      "💇‍♂️",
      "💇‍♀️",
      "🚶",
      "🚶‍♂️",
      "🚶‍♀️",
      "🏃",
      "🏃‍♂️",
      "🏃‍♀️",
      "💃",
      "🕺",
      "🕴",
      "👯",
      "👯‍♂️",
      "👯‍♀️",
      "🧖",
      "🧖‍♂️",
      "🧖‍♀️",
      "🧘",
      "👭",
      "👫",
      "👬",
      "💏",
      "👨‍❤️‍💋‍👨",
      "👩‍❤️‍💋‍👩",
      "💑",
      "👨‍❤️‍👨",
      "👩‍❤️‍👩",
      "👪",
      "👨‍👩‍👦",
      "👨‍👩‍👧",
      "👨‍👩‍👧‍👦",
      "👨‍👩‍👦‍👦",
      "👨‍👩‍👧‍👧",
      "👨‍👨‍👦",
      "👨‍👨‍👧",
      "👨‍👨‍👧‍👦",
      "👨‍👨‍👦‍👦",
      "👨‍👨‍👧‍👧",
      "👩‍👩‍👦",
      "👩‍👩‍👧",
      "👩‍👩‍👧‍👦",
      "👩‍👩‍👦‍👦",
      "👩‍👩‍👧‍👧",
      "👨‍👦",
      "👨‍👦‍👦",
      "👨‍👧",
      "👨‍👧‍👦",
      "👨‍👧‍👧",
      "👩‍👦",
      "👩‍👦‍👦",
      "👩‍👧",
      "👩‍👧‍👦",
      "👩‍👧‍👧",
      "🗣",
      "👤",
      "👥",
      "👣",
      "🧳",
      "🌂",
      "☂",
      "🧵",
      "🧶",
      "👓",
      "🕶",
      "🥽",
      "🥼",
      "👔",
      "👕",
      "👖",
      "🧣",
      "🧤",
      "🧥",
      "🧦",
      "👗",
      "👘",
      "👙",
      "👚",
      "👛",
      "👜",
      "👝",
      "🎒",
      "👞",
      "👟",
      "🥾",
      "🥿",
      "👠",
      "👡",
      "👢",
      "👑",
      "👒",
      "🎩",
      "🎓",
      "🧢",
      "⛑",
      "💄",
      "💍",
      "💼",
    ],
  },
  "Animals & Nature": {
    labelIcon: <IoPawOutline size={16} />,
    icons: [
      "🙈",
      "🙉",
      "🙊",
      "💥",
      "💫",
      "💦",
      "💨",
      "🐵",
      "🐒",
      "🦍",
      "🐶",
      "🐕",
      "🐩",
      "🐺",
      "🦊",
      "🦝",
      "🐱",
      "🐈",
      "🦁",
      "🐯",
      "🐅",
      "🐆",
      "🐴",
      "🐎",
      "🦄",
      "🦓",
      "🦌",
      "🐮",
      "🐂",
      "🐃",
      "🐄",
      "🐷",
      "🐖",
      "🐗",
      "🐽",
      "🐏",
      "🐑",
      "🐐",
      "🐪",
      "🐫",
      "🦙",
      "🦒",
      "🐘",
      "🦏",
      "🦛",
      "🐭",
      "🐁",
      "🐀",
      "🐹",
      "🐰",
      "🐇",
      "🐿",
      "🦔",
      "🦇",
      "🐻",
      "🐨",
      "🐼",
      "🦘",
      "🦡",
      "🐾",
      "🦃",
      "🐔",
      "🐓",
      "🐣",
      "🐤",
      "🐥",
      "🐦",
      "🐧",
      "🕊",
      "🦅",
      "🦆",
      "🦢",
      "🦉",
      "🦚",
      "🦜",
      "🐸",
      "🐊",
      "🐢",
      "🦎",
      "🐍",
      "🐲",
      "🐉",
      "🦕",
      "🦖",
      "🐳",
      "🐋",
      "🐬",
      "🐟",
      "🐠",
      "🐡",
      "🦈",
      "🐙",
      "🐚",
      "🐌",
      "🦋",
      "🐛",
      "🐜",
      "🐝",
      "🐞",
      "🦗",
      "🕷",
      "🕸",
      "🦂",
      "🦟",
      "🦠",
      "💐",
      "🌸",
      "💮",
      "🏵",
      "🌹",
      "🥀",
      "🌺",
      "🌻",
      "🌼",
      "🌷",
      "🌱",
      "🌲",
      "🌳",
      "🌴",
      "🌵",
      "🌾",
      "🌿",
      "☘",
      "🍀",
      "🍁",
      "🍂",
      "🍃",
      "🍄",
      "🌰",
      "🦀",
      "🦞",
      "🦐",
      "🦑",
      "🌍",
      "🌎",
      "🌏",
      "🌐",
      "🌑",
      "🌒",
      "🌓",
      "🌔",
      "🌕",
      "🌖",
      "🌗",
      "🌘",
      "🌙",
      "🌚",
      "🌛",
      "🌜",
      "☀",
      "🌝",
      "🌞",
      "⭐",
      "🌟",
      "🌠",
      "☁",
      "⛅",
      "⛈",
      "🌤",
      "🌥",
      "🌦",
      "🌧",
      "🌨",
      "🌩",
      "🌪",
      "🌫",
      "🌬",
      "🌈",
      "☂",
      "☔",
      "⚡",
      "❄",
      "☃",
      "⛄",
      "☄",
      "🔥",
      "💧",
      "🌊",
      "🎄",
      "✨",
      "🎋",
      "🎍",
    ],
  },
  "Food & Drink": {
    labelIcon: <FaAppleAlt size={16} />,
    icons: [
      "🍇",
      "🍈",
      "🍉",
      "🍊",
      "🍋",
      "🍌",
      "🍍",
      "🥭",
      "🍎",
      "🍏",
      "🍐",
      "🍑",
      "🍒",
      "🍓",
      "🥝",
      "🍅",
      "🥥",
      "🥑",
      "🍆",
      "🥔",
      "🥕",
      "🌽",
      "🌶",
      "🥒",
      "🥬",
      "🥦",
      "🍄",
      "🥜",
      "🌰",
      "🍞",
      "🥐",
      "🥖",
      "🥨",
      "🥯",
      "🥞",
      "🧀",
      "🍖",
      "🍗",
      "🥩",
      "🥓",
      "🍔",
      "🍟",
      "🍕",
      "🌭",
      "🥪",
      "🌮",
      "🌯",
      "🥙",
      "🍳",
      "🥘",
      "🍲",
      "🥣",
      "🥗",
      "🍿",
      "🧂",
      "🥫",
      "🍱",
      "🍘",
      "🍙",
      "🍚",
      "🍛",
      "🍜",
      "🍝",
      "🍠",
      "🍢",
      "🍣",
      "🍤",
      "🍥",
      "🥮",
      "🍡",
      "🥟",
      "🥠",
      "🥡",
      "🍦",
      "🍧",
      "🍨",
      "🍩",
      "🍪",
      "🎂",
      "🍰",
      "🧁",
      "🥧",
      "🍫",
      "🍬",
      "🍭",
      "🍮",
      "🍯",
      "🍼",
      "🥛",
      "☕",
      "🍵",
      "🍶",
      "🍾",
      "🍷",
      "🍸",
      "🍹",
      "🍺",
      "🍻",
      "🥂",
      "🥃",
      "🥤",
      "🥢",
      "🍽",
      "🍴",
      "🥄",
    ],
  },
  Activities: {
    labelIcon: <BiFootball size={16} />,
    icons: [
      "🕴",
      "🧗",
      "🧗‍♂️",
      "🧗‍♀️",
      "🏇",
      "⛷",
      "🏂",
      "🏌",
      "🏌️‍♂️",
      "🏌️‍♀️",
      "🏄",
      "🏄‍♂️",
      "🏄‍♀️",
      "🚣",
      "🚣‍♂️",
      "🚣‍♀️",
      "🏊",
      "🏊‍♂️",
      "🏊‍♀️",
      "⛹",
      "⛹️‍♂️",
      "⛹️‍♀️",
      "🏋",
      "🏋️‍♂️",
      "🏋️‍♀️",
      "🚴",
      "🚴‍♂️",
      "🚴‍♀️",
      "🚵",
      "🚵‍♂️",
      "🚵‍♀️",
      "🤸",
      "🤸‍♂️",
      "🤸‍♀️",
      "🤼",
      "🤼‍♂️",
      "🤼‍♀️",
      "🤽",
      "🤽‍♂️",
      "🤽‍♀️",
      "🤾",
      "🤾‍♂️",
      "🤾‍♀️",
      "🤹",
      "🤹‍♂️",
      "🤹‍♀️",
      "🧘",
      "🧘‍♂️",
      "🧘‍♀️",
      "🎪",
      "🛹",
      "🎗",
      "🎟",
      "🎫",
      "🎖",
      "🏆",
      "🏅",
      "🥇",
      "🥈",
      "🥉",
      "⚽",
      "⚾",
      "🥎",
      "🏀",
      "🏐",
      "🏈",
      "🏉",
      "🎾",
      "🥏",
      "🎳",
      "🏏",
      "🏑",
      "🏒",
      "🥍",
      "🏓",
      "🏸",
      "🥊",
      "🥋",
      "⛳",
      "⛸",
      "🎣",
      "🎽",
      "🎿",
      "🛷",
      "🥌",
      "🎯",
      "🎱",
      "🎮",
      "🎰",
      "🎲",
      "🧩",
      "♟",
      "🎭",
      "🎨",
      "🧵",
      "🧶",
      "🎼",
      "🎤",
      "🎧",
      "🎷",
      "🎸",
      "🎹",
      "🎺",
      "🎻",
      "🥁",
      "🎬",
      "🏹",
    ],
  },
  "Travel & Places": {
    labelIcon: <FaUmbrellaBeach size={16} />,
    icons: [
      "🚣",
      "🗾",
      "🏔",
      "⛰",
      "🌋",
      "🗻",
      "🏕",
      "🏖",
      "🏜",
      "🏝",
      "🏞",
      "🏟",
      "🏛",
      "🏗",
      "🏘",
      "🏚",
      "🏠",
      "🏡",
      "🏢",
      "🏣",
      "🏤",
      "🏥",
      "🏦",
      "🏨",
      "🏩",
      "🏪",
      "🏫",
      "🏬",
      "🏭",
      "🏯",
      "🏰",
      "💒",
      "🗼",
      "🗽",
      "⛪",
      "🕌",
      "🕍",
      "⛩",
      "🕋",
      "⛲",
      "⛺",
      "🌁",
      "🌃",
      "🏙",
      "🌄",
      "🌅",
      "🌆",
      "🌇",
      "🌉",
      "🎠",
      "🎡",
      "🎢",
      "🚂",
      "🚃",
      "🚄",
      "🚅",
      "🚆",
      "🚇",
      "🚈",
      "🚉",
      "🚊",
      "🚝",
      "🚞",
      "🚋",
      "🚌",
      "🚍",
      "🚎",
      "🚐",
      "🚑",
      "🚒",
      "🚓",
      "🚔",
      "🚕",
      "🚖",
      "🚗",
      "🚘",
      "🚚",
      "🚛",
      "🚜",
      "🏎",
      "🏍",
      "🛵",
      "🚲",
      "🛴",
      "🚏",
      "🛤",
      "⛽",
      "🚨",
      "🚥",
      "🚦",
      "🚧",
      "⚓",
      "⛵",
      "🚤",
      "🛳",
      "⛴",
      "🛥",
      "🚢",
      "✈",
      "🛩",
      "🛫",
      "🛬",
      "💺",
      "🚁",
      "🚟",
      "🚠",
      "🚡",
      "🛰",
      "🚀",
      "🛸",
      "🌠",
      "🌌",
      "⛱",
      "🎆",
      "🎇",
      "🎑",
      "💴",
      "💵",
      "💶",
      "💷",
      "🗿",
      "🛂",
      "🛃",
      "🛄",
      "🛅",
    ],
  },
  Objects: {
    labelIcon: <IoBulbOutline size={16} />,
    icons: [
      "💌",
      "🕳",
      "💣",
      "🛀",
      "🛌",
      "🔪",
      "🏺",
      "🗺",
      "🧭",
      "🧱",
      "💈",
      "🛢",
      "🛎",
      "🧳",
      "⌛",
      "⏳",
      "⌚",
      "⏰",
      "⏱",
      "⏲",
      "🕰",
      "🌡",
      "⛱",
      "🧨",
      "🎈",
      "🎉",
      "🎊",
      "🎎",
      "🎏",
      "🎐",
      "🧧",
      "🎀",
      "🎁",
      "🔮",
      "🧿",
      "🕹",
      "🧸",
      "🖼",
      "🧵",
      "🧶",
      "🛍",
      "📿",
      "💎",
      "📯",
      "🎙",
      "🎚",
      "🎛",
      "📻",
      "📱",
      "📲",
      "☎",
      "📞",
      "📟",
      "📠",
      "🔋",
      "🔌",
      "💻",
      "🖥",
      "🖨",
      "⌨",
      "🖱",
      "🖲",
      "💽",
      "💾",
      "💿",
      "📀",
      "🧮",
      "🎥",
      "🎞",
      "📽",
      "📺",
      "📷",
      "📸",
      "📹",
      "📼",
      "🔍",
      "🔎",
      "🕯",
      "💡",
      "🔦",
      "🏮",
      "📔",
      "📕",
      "📖",
      "📗",
      "📘",
      "📙",
      "📚",
      "📓",
      "📃",
      "📜",
      "📄",
      "📰",
      "🗞",
      "📑",
      "🔖",
      "🏷",
      "💰",
      "💴",
      "💵",
      "💶",
      "💷",
      "💸",
      "💳",
      "🧾",
      "✉",
      "📧",
      "📨",
      "📩",
      "📤",
      "📥",
      "📦",
      "📫",
      "📪",
      "📬",
      "📭",
      "📮",
      "🗳",
      "✏",
      "✒",
      "🖋",
      "🖊",
      "🖌",
      "🖍",
      "📝",
      "📁",
      "📂",
      "🗂",
      "📅",
      "📆",
      "🗒",
      "🗓",
      "📇",
      "📈",
      "📉",
      "📊",
      "📋",
      "📌",
      "📍",
      "📎",
      "🖇",
      "📏",
      "📐",
      "✂",
      "🗃",
      "🗄",
      "🗑",
      "🔒",
      "🔓",
      "🔏",
      "🔐",
      "🔑",
      "🗝",
      "🔨",
      "⛏",
      "⚒",
      "🛠",
      "🗡",
      "⚔",
      "🔫",
      "🛡",
      "🔧",
      "🔩",
      "⚙",
      "🗜",
      "⚖",
      "🔗",
      "⛓",
      "🧰",
      "🧲",
      "⚗",
      "🧪",
      "🧫",
      "🧬",
      "🔬",
      "🔭",
      "📡",
      "💉",
      "💊",
      "🚪",
      "🛏",
      "🛋",
      "🚽",
      "🚿",
      "🛁",
      "🧴",
      "🧷",
      "🧹",
      "🧺",
      "🧻",
      "🧼",
      "🧽",
      "🧯",
      "🚬",
      "⚰",
      "⚱",
      "🗿",
      "🚰",
    ],
  },
  Symbols: {
    labelIcon: <MdOutlineAlternateEmail size={20} />,
    icons: [
      "💘",
      " 💝",
      "💖",
      "💗",
      "💓",
      "💞",
      "💕",
      "💟",
      "❣",
      "💔",
      "❤",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🖤",
      "💯",
      "💢",
      "💬",
      "👁️‍🗨️",
      "🗯",
      "💭",
      "💤",
      "💮",
      "♨",
      "💈",
      "🛑",
      "🕛",
      "🕧",
      "🕐",
      "🕜",
      "🕑",
      "🕝",
      "🕒",
      "🕞",
      "🕓",
      "🕟",
      "🕔",
      "🕠",
      "🕕",
      "🕡",
      "🕖",
      "🕢",
      "🕗",
      "🕣",
      "🕘",
      "🕤",
      "🕙",
      "🕥",
      "🕚",
      "🕦",
      "🌀",
      "♠",
      "♥",
      "♦",
      "♣",
      "🃏",
      "🀄",
      "🎴",
      "🔇",
      "🔈",
      "🔉",
      "🔊",
      "📢",
      "📣",
      "📯",
      "🔔",
      "🔕",
      "🎵",
      "🎶",
      "🏧",
      "🚮",
      "🚰",
      "♿",
      "🚹",
      "🚺",
      "🚻",
      "🚼",
      "🚾",
      "⚠",
      "🚸",
      "⛔",
      "🚫",
      "🚳",
      "🚭",
      "🚯",
      "🚱",
      "🚷",
      "🔞",
      "☢",
      "☣",
      "⬆",
      "↗",
      "➡",
      "↘",
      "⬇",
      "↙",
      "⬅",
      "↖",
      "↕",
      "↔",
      "↩",
      "↪",
      "⤴",
      "⤵",
      "🔃",
      "🔄",
      "🔙",
      "🔚",
      "🔛",
      "🔜",
      "🔝",
      "🛐",
      "⚛",
      "🕉",
      "✡",
      "☸",
      "☯",
      "✝",
      "☦",
      "☪",
      "☮",
      "🕎",
      "🔯",
      "♈",
      "♉",
      "♊",
      "♋",
      "♌",
      "♍",
      "♎",
      "♏",
      "♐",
      "♑",
      "♒",
      "♓",
      "⛎",
      "🔀",
      "🔁",
      "🔂",
      "▶",
      "⏩",
      "◀",
      "⏪",
      "🔼",
      "⏫",
      "🔽",
      "⏬",
      "⏹",
      "⏏",
      "🎦",
      "🔅",
      "🔆",
      "📶",
      "📳",
      "📴",
      "✖",
      "➕",
      "➖",
      "➗",
      "♾",
      "‼",
      "⁉",
      "❓",
      "❔",
      "❕",
      "❗",
      "♻",
      "🔱",
      "📛",
      "🔰",
      "⭕",
      "✅",
      "☑",
      "✔",
      "❌",
      "❎",
      "➰",
      "➿",
      "〽",
      "✳",
      "✴",
      "❇",
      "©",
      "®",
      "™",
      "#️⃣",
      "0️⃣",
      "1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣",
      "🔟",
      "🔠",
      "🔡",
      "🔢",
      "🔣",
      "🔤",
      "🅰",
      "🆎",
      "🅱",
      "🆑",
      "🆒",
      "🆓",
      "ℹ",
      "🆔",
      "Ⓜ",
      "🆕",
      "🆖",
      "🅾",
      "🆗",
      "🅿",
      "🆘",
      "🆙",
      "🆚",
      "🈁",
      "🈂",
      "🈷",
      "🈶",
      "🈯",
      "🉐",
      "🈹",
      "🈚",
      "🈲",
      "🉑",
      "🈸",
      "🈴",
      "🈳",
      "㊗",
      "㊙",
      "🈺",
      "🈵",
      "🔴",
      "🔵",
      "⚫",
      "⚪",
      "⬛",
      "⬜",
      "◼",
      "◻",
      "◾",
      "◽",
      "▪",
      "▫",
      "🔶",
      "🔷",
      "🔸",
      "🔹",
      "🔺",
      "🔻",
      "💠",
      "🔳",
      "🔲",
    ],
  },
};

const className = {
  root: "flex flex-col p-4",
  container: "w-full flex-grow shrink overflow-y-auto overflow-x-hidden",
  title: "p-2 text-sm text-neutral-700 font-semibold text-silver capitalize",
  emojis: "flex flex-wrap justify-center",
  emoji:
    "h-[1.5625rem] w-[1.5625rem] text-[1.5625rem] flex items-center justify-center m-2",
};

export type EmojiKeyType = keyof typeof emojis;
export type Refs = {
  [P in EmojiKeyType]: React.RefObject<HTMLHeadingElement>;
};
export const emojiKeys = Object.keys(emojis) as Array<EmojiKeyType>;

interface Props {
  classes?: {
    root?: string;
    container?: string;
    content?: string;
  };
  //   pass it as react callback
  onChange?(value: string): void;
}

function EmojiBoxComponent({ classes, onChange }: Props) {
  const [active, setActive] = React.useState<EmojiKeyType>(emojiKeys[1]);

  const refs = React.useMemo(() => {
    const obj: Refs = {} as Refs;
    emojiKeys.forEach((key) => {
      obj[key] = React.createRef<HTMLHeadingElement>();
    });
    return obj;
  }, []);

  return (
    <div className={classNames(className.root, classes?.root)}>
      <section className={classNames(className.container, classes?.container)}>
        {(Object.keys(emojis) as Array<keyof typeof emojis>).map((key) => {
          return (
            <React.Fragment key={key}>
              <h3 ref={refs[key]} className={className.title}>
                {key}
              </h3>
              <Content
                id={key}
                onObserver={(id) => {
                  setActive(id);
                }}
                icons={emojis[key].icons}
                onChange={onChange}
              />
            </React.Fragment>
          );
        })}
      </section>
      <Tabs
        refs={refs}
        active={active}
        onTab={(id) => {
          setActive(id);
        }}
      />
    </div>
  );
}

const EmojiBox = React.memo(
  EmojiBoxComponent,
  (prev, next) => prev.onChange === next.onChange
);
export default EmojiBox;
