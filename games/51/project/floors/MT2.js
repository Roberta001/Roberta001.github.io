main.floors.MT2=
{
    "floorId": "MT2",
    "title": "魔塔 第02层",
    "name": "第 2 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 82,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1,  0,222,  0,222,  0,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1],
    [  1,  0,  1, 21, 21,  1,  0,  0,  0,  1,  0,121,  1],
    [  1,  0,  1, 21,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1],
    [  1,  0,  1,123,  0,  1,  0,  0,  0,  1,  0,124,  1],
    [  1,  0,  1,  0,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1],
    [  1,  0,  1, 32, 32,  1,  0,  0,  0,  1,  0,  0,  1],
    [  1, 87,  1, 32,  0, 86,  0,  0,  0, 86,  0,123,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section1.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "flag:03",
            "true": [
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[小偷,thief]喂",
                "\t[小偷,thief]喂 醒醒",
                {
                    "type": "setCurtain",
                    "time": 1000
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            9
                        ]
                    ],
                    "floorId": "MT3",
                    "time": 0
                },
                {
                    "type": "setValue",
                    "name": "flag:03",
                    "value": "0"
                }
            ],
            "false": []
        }
    ],
    "parallelDo": "",
    "events": {
        "11,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[小偷,thief]你终于来了 我以为再也出不去了呢 35层有个魔龙挡路 我帮你挖一条暗道吧",
                {
                    "type": "show",
                    "loc": [
                        [
                            5,
                            10
                        ]
                    ],
                    "floorId": "MT35",
                    "time": 0
                },
                {
                    "type": "hide",
                    "time": 500
                }
            ]
        },
        "3,7": [
            "\t[小偷,thief]你清醒了吗 你到监狱时还处在昏迷中 魔法警卫把你扔到我这个房间 但你很幸运 我刚完成逃跑的暗道你就醒了 我们一起越狱吧",
            {
                "type": "openDoor",
                "loc": [
                    2,
                    7
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        8
                    ]
                ],
                "time": 0
            },
            {
                "type": "move",
                "time": 200,
                "keep": true,
                "steps": [
                    "left",
                    "left",
                    "down",
                    "down"
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "11,7": [
            {
                "type": "choices",
                "text": "\t[商人,woman]谢谢你救了我 我可以帮你提升3%的攻击和防御",
                "choices": [
                    {
                        "text": "现在提升",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "item.mp3"
                            },
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "Math.round(status:atk*0.03)"
                            },
                            {
                                "type": "addValue",
                                "name": "status:def",
                                "value": "Math.round(status:def*0.03)"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:talking",
                                "value": "2"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "等会再说",
                        "action": []
                    }
                ]
            }
        ],
        "1,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[小偷,thief]我们终于逃出来了 你的剑盾被警卫拿走了 你必须先找到武器 我知道铁剑在5楼 铁盾在9楼 你最好先取到他们 我现在有事要做没法帮你 再见",
                {
                    "type": "move",
                    "time": 200,
                    "steps": [
                        "down",
                        "down"
                    ]
                },
                {
                    "type": "hide",
                    "time": 0
                }
            ]
        }
    },
    "changeFloor": {
        "1,11": {
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
        "6,2": [
            {
                "type": "if",
                "condition": "flag:2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            11
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            11
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:2",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,2": [
            {
                "type": "if",
                "condition": "flag:2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            11
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            11
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:2",
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
        1,
        10
    ],
    "downFloor": [
        1,
        2
    ],
    "autoEvent": {}
}