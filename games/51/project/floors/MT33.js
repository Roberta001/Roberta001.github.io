main.floors.MT33=
{
    "floorId": "MT33",
    "title": "魔塔 第33层",
    "name": "第 33 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 81,214,  0,216, 81,  0,  0,  0, 88,  1],
    [  1,  0,  0,  1,  0, 31,  0,  1, 81,  1,  1,  1,  1],
    [  1, 82,  1,  1,121,  0, 21,  1,  0,  0,  0, 32,  1],
    [  1,  0, 31,  1,  1, 81,  1,  1,  1,  1,  0,  1,  1],
    [  1,216,  0,  1,  0,  0,214,  0,  1,212,  0,212,  1],
    [  1,  0,  0,  1,224,  1,  1, 81,  1,  0,  0,  0,  1],
    [  1,  0,216, 81,  0,  0,212,  0,  1,225,  0,225,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,  1],
    [  1,  0,  0,214,  1,  0,225,  0,  1,  0,  0,  0,  1],
    [  1,224,  1,  0,  1, 21,  1,216,  0,  0, 39,  0,  1],
    [  1, 21,225,  0, 82,  0, 81,  0,  1,  0,  0,  0,  1],
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
        "9,10": [
            {
                "type": "playSound",
                "name": "door.mp3"
            },
            {
                "type": "closeDoor",
                "id": "yellowWall",
                "loc": [
                    8,
                    10
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "10,5": [
            {
                "type": "if",
                "condition": "flag:33 == 4",
                "true": [
                    {
                        "type": "hide",
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            10,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            10,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,1": {
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
    "afterBattle": {
        "9,5": [
            {
                "type": "addValue",
                "name": "flag:33",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:33 == 4",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": []
            }
        ],
        "9,7": [
            {
                "type": "addValue",
                "name": "flag:33",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:33 == 4",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": []
            }
        ],
        "11,7": [
            {
                "type": "addValue",
                "name": "flag:33",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:33 == 4",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": []
            }
        ],
        "11,5": [
            {
                "type": "addValue",
                "name": "flag:33",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:33 == 4",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": []
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
        2,
        1
    ],
    "downFloor": [
        10,
        1
    ],
    "autoEvent": {}
}