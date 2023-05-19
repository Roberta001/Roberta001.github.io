main.floors.MT41=
{
    "floorId": "MT41",
    "title": "魔塔 第41层",
    "name": "第 41 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 31,  1,  0, 22,  1, 88,  1, 22,  0,  1, 31,  1],
    [  1, 81,220,  0,  0,  1,  0,  1,  0,  0,  1, 81,  1],
    [  1, 81,  1,  0,  1,  1,  0,  1,  1,  0,  1, 81,  1],
    [  1, 81,  1, 81,  1,246,  0,246,  1, 81,  1, 81,  1],
    [  1,  0,  0,219,  1,  1,  0,  1,  1,219,  0,  0,  1],
    [  1,207,  0,  0,  0, 82,  0, 82,  0,  0,  0,207,  1],
    [  1,  0,207,  0,204,  1, 81,  1,204,  0,207,  0,  1],
    [  1, 81,  1,  1, 81,  1, 81,  1, 81,  1,  1, 81,  1],
    [  1, 81,  1, 31,  0,  1, 81,  1,  0, 31,  1, 81,  1],
    [  1, 81,  1, 21, 21,  1,  0,  1, 21, 21,  1, 81,  1],
    [  1, 32,  1, 21, 27,  1, 87,  1, 28, 21,  1, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section5.mp3",
    "firstArrive": [
        {
            "type": "show",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "floorId": "MT42",
            "time": 0
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,2": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:41==1",
                    "true": [
                        {
                            "type": "playSound",
                            "name": "door.mp3"
                        },
                        {
                            "type": "sleep",
                            "time": 200
                        },
                        {
                            "type": "setBlock",
                            "number": "220"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:41",
                            "value": "2"
                        },
                        {
                            "type": "sleep",
                            "time": 200
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "flag:41==2",
                            "true": [
                                {
                                    "type": "battle",
                                    "loc": [
                                        10,
                                        2
                                    ]
                                },
                                {
                                    "type": "sleep",
                                    "time": 200
                                },
                                {
                                    "type": "playSound",
                                    "name": "door.mp3"
                                },
                                {
                                    "type": "setBlock",
                                    "number": "none",
                                    "loc": [
                                        [
                                            5,
                                            6
                                        ]
                                    ]
                                },
                                {
                                    "type": "setBlock",
                                    "number": "none",
                                    "loc": [
                                        [
                                            7,
                                            6
                                        ]
                                    ]
                                },
                                {
                                    "type": "closeDoor",
                                    "id": "yellowWall",
                                    "loc": [
                                        5,
                                        6
                                    ],
                                    "async": true
                                },
                                {
                                    "type": "closeDoor",
                                    "id": "yellowWall",
                                    "loc": [
                                        6,
                                        6
                                    ],
                                    "async": true
                                },
                                {
                                    "type": "closeDoor",
                                    "id": "yellowWall",
                                    "loc": [
                                        7,
                                        6
                                    ],
                                    "async": true
                                },
                                {
                                    "type": "openDoor",
                                    "loc": [
                                        5,
                                        7
                                    ],
                                    "async": true
                                },
                                {
                                    "type": "openDoor",
                                    "loc": [
                                        7,
                                        7
                                    ],
                                    "async": true
                                },
                                {
                                    "type": "waitAsync"
                                },
                                {
                                    "type": "setBlock",
                                    "number": "52",
                                    "loc": [
                                        [
                                            6,
                                            5
                                        ]
                                    ]
                                },
                                {
                                    "type": "tip",
                                    "text": "降临之翼出现了"
                                },
                                {
                                    "type": "hide",
                                    "time": 0
                                }
                            ],
                            "false": []
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,11": {
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
    "afterBattle": {
        "2,2": [
            {
                "type": "setValue",
                "name": "flag:41",
                "value": "1"
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
        6,
        10
    ],
    "downFloor": [
        6,
        2
    ],
    "autoEvent": {}
}