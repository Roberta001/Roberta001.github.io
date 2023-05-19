main.floors.MT19=
{
    "floorId": "MT19",
    "title": "魔塔 第19层",
    "name": "第 19 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  1, 31,  0,218,  0, 22,  1, 21, 27,  1],
    [  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,206,  0,  1],
    [  1, 81,  1,  1,214,  1,320,  1,214,  1, 81,  1,  1],
    [  1,205,  0,  1,  0,  0,  3,  0,  0,  1,  0,  0,  1],
    [  1,  0,  0,  1, 21,  0,  1,  0, 21,  1,203,203,  1],
    [  1, 81,  1,  1,  0,215,  0,215,  0,  1,  0,  0,  1],
    [  1,206,  0,  1,  1,  1, 82,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,203,  0,  0,  0,  0,214,  0,  0,213,  1],
    [  1, 81,  1,  1,  1,  1,214,  1,  1, 31, 21,  0,  1],
    [  1,  0,  1,  0, 81, 21,  0, 21,  1,  1,  1,206,  1],
    [  1,203,  0,206,  1,  0, 87,  0, 81,  0,205,  0,  1],
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
    "events": {
        "6,3": [
            {
                "type": "playSound",
                "name": "door.mp3"
            },
            {
                "type": "setBlock",
                "number": "cross"
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "1,1": {
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
    "downFloor": [
        1,
        2
    ],
    "upFloor": [
        6,
        10
    ],
    "autoEvent": {}
}