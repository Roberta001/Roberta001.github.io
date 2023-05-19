main.floors.MT39=
{
    "floorId": "MT39",
    "title": "魔塔 第39层",
    "name": "第 39 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0, 88,  1],
    [  1,  0, 81,  0, 81,  0, 81,  0,  1,122,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0, 21,  1],
    [  1,  0, 81,  0, 81,  0, 81,  0,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,225,  1],
    [  1,  0, 81,  0, 81,  0, 81,  0,  1,216,  1, 27,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,212,  1],
    [  1,  1, 82,  1,  1,  1,  1,  1,  1,  1, 81,  1,  1],
    [  1,  0,  0,212,  1,224, 28,227,  1,  0,227,  0,  1],
    [  1,  1,212,  0, 81,  0,  1,  0, 81,  0,  0,  0,  1],
    [  1,121,  0, 21,  1,  0,216,  0,  1, 31,  0, 87,  1],
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
        "4,4": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:centerFly",
                    "true": [
                        {
                            "type": "addValue",
                            "name": "item:centerFly",
                            "value": "3"
                        },
                        {
                            "type": "hide",
                            "time": 0
                        }
                    ],
                    "false": [
                        {
                            "type": "openDoor",
                            "needKey": true
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "11,11": {
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
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "2,2": [
            {
                "type": "addValue",
                "name": "flag:39",
                "value": "-1"
            }
        ],
        "6,2": [
            {
                "type": "addValue",
                "name": "flag:39",
                "value": "-1"
            }
        ],
        "4,4": [
            {
                "type": "addValue",
                "name": "flag:39",
                "value": "-1"
            }
        ],
        "2,4": [
            {
                "type": "addValue",
                "name": "flag:39",
                "value": "-1"
            }
        ],
        "2,6": [
            {
                "type": "addValue",
                "name": "flag:39",
                "value": "-1"
            }
        ],
        "4,6": [
            {
                "type": "addValue",
                "name": "flag:39",
                "value": "-1"
            }
        ],
        "6,6": [
            {
                "type": "addValue",
                "name": "flag:39",
                "value": "-1"
            }
        ],
        "4,2": [
            {
                "type": "if",
                "condition": "flag:39 == 1",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "50",
                        "loc": [
                            4,
                            4
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:centerFly",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:39",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "flag:39 == 1",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "50",
                        "loc": [
                            4,
                            4
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:centerFly",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:39",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "cannotMove": {},
    "fgmap": [

],
    "bgmap": [

],
    "upFloor": [
        11,
        10
    ],
    "downFloor": [
        11,
        2
    ],
    "autoEvent": {}
}