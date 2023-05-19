main.floors.MT4=
{
    "floorId": "MT4",
    "title": "魔塔 第04层",
    "name": "第 4 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 22,  0,  1,  7,131,  8,  1,  0,121,  0,  1],
    [  1, 31,  0, 21,  1,  0,  0,  0,  1, 21,  0, 32,  1],
    [  1,  0,217,  0,  1,  0,  0,  0,  1,  0,210,  0,  1],
    [  1,  1, 81,  1,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0, 81,  0,202,  0,  0,209,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,202,  0,201,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1, 81,  1,  1, 81,  1,  1,  1, 81,  1,  1, 81,  1],
    [  1,  0,  1,  0,205,  0,  1,  0,217,  0,  1,  0,  1],
    [  1,  0,  1,201,  0, 21,  1, 27,  0, 31,  1,  0,  1],
    [  1, 87,  1, 21,201, 21,  1,  0,201,  0,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section1.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            {"type": "setValue", "name": "flag:ratio", "value": "1"},
            {"type": "setValue", "name": "flag:shopratio", "value": "Math.max(core.getFlag('shopratio', 1), core.getFlag('ratio', 1))"},
            {"type": "insert", "name": "商店"},
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        1,
        10
    ],
    "downFloor": [
        11,
        10
    ],
    "autoEvent": {}
}