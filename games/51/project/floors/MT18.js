main.floors.MT18=
{
    "floorId": "MT18",
    "title": "魔塔 第18层",
    "name": "第 18 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0, 82,  0, 88,  0, 81,218,  0, 21,  1],
    [  1,  0,  0,121,  1,  0,  0,  0,  1,  0,203, 21,  1],
    [  1, 81,  1,  1,  1,  1,  3,  1,  1,  0,  0, 22,  1],
    [  1,  0, 31,  0, 81,214,  0,214, 81,213,  0, 21,  1],
    [  1,215,  0,215,  1,  0,  0,  0,  1,  0,206, 21,  1],
    [  1,  1,  1,  1,  1,  1, 82,  1,  1,  1,  1,  1,  1],
    [  1,  0,213,  0,  0,  0,  0,  0,  0,  0,215,  0,  1],
    [  1, 81,  1,  1, 81,  1,  1,  1, 81,  1,  1, 81,  1],
    [  1,218,  0,  1,206,206,  1,203,203,  1,  0,218,  1],
    [  1,  0, 21,  1,206,206,  1,203,203,  1, 21,  0,  1],
    [  1, 31, 27,  1,  0, 21,  1, 21,  0,  1, 28, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "6,1": {
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
        1,
        2
    ],
    "downFloor": [
        6,
        2
    ],
    "autoEvent": {}
}