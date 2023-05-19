main.floors.MT44=
{
    "floorId": "MT44",
    "title": "魔塔 第44层",
    "name": "第 44 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1, 31,  1,  1,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1, 31, 44, 31,  1,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1, 31,  1,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1, 85,  1,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,223,  0,223,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": false,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "5,9": [
            {
                "type": "if",
                "condition": "flag:44",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            8
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:44",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,9": [
            {
                "type": "if",
                "condition": "flag:44",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            8
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:44",
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
    "autoEvent": {}
}