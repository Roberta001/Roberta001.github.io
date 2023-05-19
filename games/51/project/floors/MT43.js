main.floors.MT43=
{
    "floorId": "MT43",
    "title": "魔塔 第43层",
    "name": "第 43 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 81,  0,204,  0, 81, 81,246,  0,  0,  1],
    [  1,  0,  0,  1,  1,  1,  0,  1,330,  0,  1,  0,  1],
    [  1,  0,  0, 81,  0,  1,228,  1,  0,  0,  1,  0,  1],
    [  1, 82,  1,  1,220,  1,  0,228,  0, 42,  1,  0,  1],
    [  1,  0,204,  0,  0,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,  0,  1, 81,  1,  1, 32,  0, 81,  0,  0,  0,  1],
    [  1,  0,  1,  0,  0,204,  0,  0,  1,219,  0, 31,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  0, 21,  0,  1],
    [  1,  0,207,  1, 32,  0,228,  0,  1,  1,  1, 81,  1],
    [  1,  0,  0,  1, 32,  1,  1,  0, 81,  0,207,  0,  1],
    [  1, 87,  0,  1, 32,  0, 82,  0,  1,  0,  0, 22,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,1": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "status:direction=='right' && flag:43==0",
                    "true": [
                        {
                            "type": "playSound",
                            "name": "door.mp3"
                        },
                        {
                            "type": "closeDoor",
                            "id": "yellowWall",
                            "loc": [
                                7,
                                1
                            ],
                            "async": true
                        },
                        {
                            "type": "move",
                            "loc": [
                                9,
                                1
                            ],
                            "time": 200,
                            "keep": true,
                            "steps": [
                                "right",
                                "right"
                            ]
                        },
                        {
                            "type": "waitAsync"
                        },
                        {
                            "type": "playSound",
                            "name": "door.mp3"
                        },
                        {
                            "type": "closeDoor",
                            "id": "yellowWall",
                            "loc": [
                                10,
                                1
                            ]
                        },
                        {
                            "type": "hide",
                            "time": 0
                        }
                    ],
                    "false": [
                        {
                            "type": "battle",
                            "loc": [
                                9,
                                1
                            ]
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    9,
                                    1
                                ]
                            ],
                            "time": 0
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": "MT45",
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
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:43",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:43",
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
        1,
        10
    ],
    "downFloor": [
        1,
        2
    ],
    "autoEvent": {}
}