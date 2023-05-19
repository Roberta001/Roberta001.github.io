main.floors.MT28=
{
    "floorId": "MT28",
    "title": "魔塔 第28层",
    "name": "第 28 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  1,  0,124,  0,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  1,  1,  0,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1, 87,  0,  0,  0,  0,  0,  0,  0,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
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
        "8,4": [
            {
                "type": "choices",
                "text": "\t[商人,woman]我能以100金币一把的价格回收黄钥匙！",
                "choices": [
                    {
                        "text": "我太需要了",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:yellowKey>0",
                                "true": [
                                    {
                                        "type": "playSound",
                                        "name": "item.mp3"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:yellowKey",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "status:money",
                                        "value": "100"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            4
                                        ]
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "tip",
                                        "text": "你没有黄钥匙"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            4
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "下次再说",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "11,11": {
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
    "upFloor": [
        2,
        11
    ],
    "downFloor": [
        10,
        11
    ],
    "autoEvent": {}
}