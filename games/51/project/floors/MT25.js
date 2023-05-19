main.floors.MT25=
{
    "floorId": "MT25",
    "title": "魔塔 第25层",
    "name": "第 25 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section3.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,9": [
            "\t[大法师,blackMagician]杀死入侵者",
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "2,10": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "playSound",
                "name": "door.mp3"
            },
            {
                "type": "setBlock",
                "number": "23",
                "loc": [
                    4,
                    8
                ]
            },
            {
                "type": "setBlock",
                "number": "23",
                "loc": [
                    5,
                    8
                ]
            },
            {
                "type": "setBlock",
                "number": "23",
                "loc": [
                    7,
                    8
                ]
            },
            {
                "type": "setBlock",
                "number": "23",
                "loc": [
                    8,
                    8
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "time": 0
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1,  0,  0,  0,  1,  1,  0,  0,  1],
    [  1,  0,  1,  1,  0,  0,  0,  0,  0,  1,  1,  0,  1],
    [  1,  0,  1,  0,  0,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,  1,  0,  0,  0,247,  0,  0,  0,  1,  0,  1],
    [  1,  0,  1,  0,  0,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,  1,  1,  0,  0,  0,  0,  0,  1,  1,  0,  1],
    [  1,  0,  0,  1,  1,  0,  0,  0,  1,  1,  0,  0,  1],
    [  1,  0, 88,  0,  1,  1, 83,  1,  1,  0,  0,  0,  1],
    [  1, 87,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        2,
        11
    ],
    "downFloor": [
        2,
        11
    ],
    "autoEvent": {}
}