main.floors.MT11=
{
    "floorId": "MT11",
    "title": "魔塔 第11层",
    "name": "第 11 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1, 27,  0, 81,  0,  1, 31, 21,  1],
    [  1,  0, 38,  0,  1,  0,205,  1,213,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1, 81,  1,  1,  0, 81,  0,  0,  1],
    [  1,  1, 85,  1,  1,  0,206,  1,  1,  1,  1,203,  1],
    [  1,218,  0,218,  1,213,  0, 81,218,  0,  1,  0,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  0, 31,  1,  0,  1],
    [  1, 32,  0,  0,206,  0,  0, 81,203,  0,  1,  0,  1],
    [  1,  1, 82,  1,  1,  1,  1,  1,  1,  1,  1,206,  1],
    [  1,  0,206,  0,203, 81,  0,  0,  0,  0,205,  0,  1],
    [  1, 21,  0,  0,  0,  1,  0,  1,  1, 81,  1,  0,  1],
    [  1, 21, 21, 21, 21,  1, 88,  1, 32,206,  1, 87,  1],
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
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "1,5": [
            {
                "type": "if",
                "condition": "flag:11",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:11",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "if",
                "condition": "flag:11",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:11",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        11,
        10
    ],
    "downFloor": [
        6,
        10
    ],
    "autoEvent": {}
}