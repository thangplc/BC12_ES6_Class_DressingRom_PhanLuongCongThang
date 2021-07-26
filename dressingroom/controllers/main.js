import { CallDataLists, APIDataItems } from "../utils/CallData.js";
import ListChosen from "../models/ListChosen.js";
import ChoseItem from "../models/ChoseItem.js";
import HandleEvent from "./handleEvents.js";

const getEl = document.querySelector.bind(document);
// const getElAll = document.querySelectorAll.bind(document);

const pillTabs = getEl('#pills-tab');
const itemLists = getEl('#rederTry');
const hair = getEl('.hairstyle');
const necklace = getEl('.necklace');
const shirt = getEl('.bikinitop');
const dress = getEl('.bikinibottom');
const handbag = getEl('.handbag');
const shoes = getEl('.feet');
const background = getEl('.background');
const library = getEl('.library');
const takeShot = getEl('.takeShot');
const editBtn = getEl('.editBtn');
const toolBar = getEl('.toolBar');
const listRender = getEl("#pills-tab")
const screenTool = getEl('.setting__list');
const setting = getEl('.setting');
const fadeoutBtn = getEl('.fa-caret-down');
const toolItem = getEl('.tool');
const EditBtn = getEl('.edit');
const DelBtn = getEl('.delete');
const MainScreen = getEl(".contain");
const Screen = getEl('.screen');

export { listRender, screenTool, pillTabs, itemLists, hair, necklace, shirt, dress, handbag, shoes, background, toolBar, library, takeShot, editBtn, setting, fadeoutBtn, toolItem, EditBtn, DelBtn, MainScreen, Screen };

const callDataLists = new CallDataLists;
const callDataItems = new APIDataItems;
const listChosen = new ListChosen;
const choseItems = new ChoseItem;


callDataLists.getData(getDataLists);


function getDataLists(DataListChosen) {
    console.log(DataListChosen);
    listChosen.addLists(DataListChosen);
    listChosen.render("web");
    callDataItems.getData(getDataItem);
};

function getDataItem(dataItems) {
    choseItems.addItem(dataItems);
    const pillTabType = pillTabs.getElementsByClassName('active')[0].dataset.type;
    choseItems.render(pillTabType);
};

HandleEvent(listChosen, choseItems);