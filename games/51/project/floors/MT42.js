main.floors.MT42=
{
    "floorId": "MT42",
    "title": "魔塔 第42层",
    "name": "第 42 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,  1,  0,  0, 23,  1, 21, 22, 21,  1],
    [  1,  0,  0,204,  1,  0,  0,  0,  1, 21, 21, 21,  1],
    [  1,  1,  1, 81,  1,  0,  0,  0,  1,  1,  0,  1,  1],
    [  1,121,  0,  0,  1,  1,228,  1,  1,219,  0,220,  1],
    [  1,  0,  0,204, 81,  0,  0,  0, 81,  0,  0,  0,  1],
    [  1, 81,  1,  1,  1,  1,245,  1,  1,  0,  0,219,  1],
    [  1,  0,  0,  0,  1,  0,126,  0,  1,  1,  0,  1,  1],
    [  1,  1,  1,207,  1,126,  0,126,  1,246,  0,246,  1],
    [  1, 32, 21, 21,  1,330,126,  1,  1,  1,  0,  1,  1],
    [  1,207,  1,  1,  1,  0,125,  0,  1, 21, 21, 21,  1],
    [  1, 21, 21, 28,  1,  0, 88,  0,  1, 21, 22, 21,  1],
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
        "6,10": {
            "trigger": "action",
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": [
                {
                    "type": "if",
                    "condition": "status:direction=='down'",
                    "true": [
                        {
                            "type": "battle",
                            "id": "yellowKnight"
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    8
                                ]
                            ],
                            "time": 0
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    10
                                ]
                            ],
                            "time": 0
                        }
                    ],
                    "false": [
                        "\t[骑士队长,yellowKnight]啊！又是你！！",
                        {
                            "type": "move",
                            "time": 200,
                            "keep": true,
                            "steps": [
                                "up",
                                "up"
                            ]
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    6,
                                    6
                                ]
                            ],
                            "time": 500
                        },
                        "\t[魔王,redKing]你敢临阵脱逃！",
                        "\t[骑士队长,yellowKnight]哦，大王，我打不过这个勇士，不得不逃，饶了我吧",
                        "\t[redKing]你说什么？你敢再说一次！你像个胆小鬼一样逃离你负责的区域,并说出那样的话。魔塔不需要像你这样的败类，来人给我杀了。",
                        {
                            "type": "show",
                            "loc": [
                                [
                                    6,
                                    7
                                ],
                                [
                                    5,
                                    8
                                ],
                                [
                                    7,
                                    8
                                ],
                                [
                                    6,
                                    9
                                ]
                            ],
                            "time": 500
                        },
                        "\t[骑士队长,yellowKnight]饶命啊",
                        {
                            "type": "playSound",
                            "name": "attack.mp3"
                        },
                        {
                            "type": "function",
                            "function": "function(){\ncore.drawImage(\"animate\", core.statusBar.icons.battle, 0, 0, 32, 32, (6 - 1) * 32, (8 - 1) * 32, 32, 32);\nsetTimeout(function () {\n\tcore.clearMap(\"animate\", (6 - 1) * 32, (8 - 1) * 32, 32, 32);\n}, 100);\n}"
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    8
                                ]
                            ],
                            "time": 500
                        },
                        "\t[魔王,redKing]虽然我刚才态度异常，但别担心, 在决斗时，我不会像刚才这个无用的家伙一样让手下一拥而上。我期待着与你决斗。",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    6
                                ],
                                [
                                    6,
                                    7
                                ],
                                [
                                    5,
                                    8
                                ],
                                [
                                    7,
                                    8
                                ],
                                [
                                    6,
                                    9
                                ]
                            ],
                            "time": 500
                        },
                        {
                            "type": "hide",
                            "time": 0
                        }
                    ]
                }
            ]
        },
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "5,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "7,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,8": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "1,1": {
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
        5,
        11
    ],
    "autoEvent": {}
}