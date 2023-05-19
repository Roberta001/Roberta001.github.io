main.floors.MT7=
{
    "floorId": "MT7",
    "title": "魔塔 第07层",
    "name": "第 7 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  1, 27,  1,  0,122,  0,  1, 21,  1,201,  1],
    [  1,  0,  1, 31,  1,  0,  0,  0,  1, 21,  1,202,  1],
    [  1,  0,  1,205,  1,202,  1,210,  1, 31,  1,201,  1],
    [  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1],
    [  1, 81,  1, 81,  1, 82,  1, 81,  1,209,  1, 81,  1],
    [  1,  0,210,  0,217,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1, 81,  1, 81,  1, 81,  1, 81,  1,210,  1, 81,  1],
    [  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,205,  1,202,  1, 32,  1,  0,  1],
    [  1,201,  1,201,  1, 21,  1,217,  1, 21,  1,  0,  1],
    [  1,  0,202,  0,  1, 21,  1, 32,  1, 21,  1, 88,  1],
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
        "1,1": {
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
        2
    ],
    "downFloor": [
        11,
        10
    ],
    "autoEvent": {}
}