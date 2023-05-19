main.floors.MT9=
{
    "floorId": "MT9",
    "title": "魔塔 第09层",
    "name": "第 9 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,209, 81,  0, 88,  0, 81,201,  0, 31,  1],
    [  1,  0, 21,  0,  1,  0,  0,  0,  1,  0,201,  0,  1],
    [  1,210,  1,  1,  1,  1, 82,  1,  1,  1,  1,  0,  1],
    [  1,  0, 21,  0,  1, 21,  0, 21, 81, 81,  0,  0,  1],
    [  1, 28,  0,205, 81,  0, 27,  0,  1,  1,  3,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,202,  1,  0,  0,210,  1],
    [  1, 21,  0, 81,210, 21,  1,  0,  1, 36,  1,  0,  1],
    [  1,210,  0,  1,  0,  0,  1,  0,  1,  1,  1, 81,  1],
    [  1, 81,  1,  1,  1, 81,  1,  0,  1, 21,  0,217,  1],
    [  1,  0, 31,  1,  0,209,  1,205,  1,  0,209,  0,  1],
    [  1, 87,  0, 82,  0,  0, 81,  0, 81,217,  0, 31,  1],
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
    "events": {},
    "changeFloor": {
        "1,11": {
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
        10
    ],
    "downFloor": [
        6,
        2
    ],
    "autoEvent": {}
}