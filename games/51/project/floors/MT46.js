main.floors.MT46=
{
    "floorId": "MT46",
    "title": "魔塔 第46层",
    "name": "第 46 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,220, 81,  0,  7,131,  8,  0, 82,  0, 88,  1],
    [  1, 31,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1, 27,  0,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,  0,219, 81,  0,  0,  0,  0,  0,207,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,225,  0,224,  0,227,  1, 31,  0, 81,204,  0,  1],
    [  1,  0,  1,  1,  1,  0,  1,  0,220,  1,  0,  0,  1],
    [  1,213,  1, 26,  1,204,  1, 81,  1,  1,  1, 81,  1],
    [  1,  0,  1,  0,219,  0,  1,  0,121,  1,219,  0,  1],
    [  1,206,  1,  1,  1,  1,  1,  0,  0,  1,  0,  0,  1],
    [  1,  0,209,  0,202,  0, 82,  0,  0, 81,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            {"type": "setValue", "name": "flag:ratio", "value": "5"},
            {"type": "setValue", "name": "flag:shopratio", "value": "Math.max(core.getFlag('shopratio', 1), core.getFlag('ratio', 1))"},
            {"type": "insert", "name": "商店"},
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "fgmap": [

],
    "bgmap": [

],
    "upFloor": [
        11,
        10
    ],
    "downFloor": [
        11,
        2
    ],
    "autoEvent": {}
}