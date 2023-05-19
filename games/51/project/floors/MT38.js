main.floors.MT38=
{
    "floorId": "MT38",
    "title": "魔塔 第38层",
    "name": "第 38 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 83,216,  0,  0,  0,216, 81,  0, 87,  1],
    [  1,  0,  0,  1,  0,122, 21,  0,  0,  1,  0,  0,  1],
    [  1,212,  1,  1,  1,  1,  1, 81,  1,  1,  1, 81,  1],
    [  1,  0,  0,225,225,  0,  1,  0,  1, 21,  1,  0,  1],
    [  1,  1,  0,  1,  1, 82,  1,  0,  1, 21,  1,  0,  1],
    [  1,  0,  0,  0, 82, 82,  1,212,  1, 21,  1,212,  1],
    [  1,  0, 40,  0,  1,  1,  1,224,  1,  0,227,  0,  1],
    [  1,  0,  0,  0,  1, 28, 31,  0,  1,  1,  1, 81,  1],
    [  1,  1, 85,  1,  1,  1,  1,  1,  1, 21,  0,212,  1],
    [  1,222,  0,222,  1,  0,  0,  0,  1,  0,227,  0,  1],
    [  1,  0,  0,  0, 81,224,  0,213, 81,225,  0, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,6": [
            {
                "type": "closeDoor",
                "id": "yellowWall",
                "loc": [
                    2,
                    5
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "11,1": {
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
    "afterBattle": {
        "1,10": [
            {
                "type": "if",
                "condition": "flag:38",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:38",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,10": [
            {
                "type": "if",
                "condition": "flag:38",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:38",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "fgmap": [

],
    "bgmap": [

],
    "upFloor": [
        10,
        1
    ],
    "downFloor": [
        2,
        1
    ],
    "autoEvent": {}
}