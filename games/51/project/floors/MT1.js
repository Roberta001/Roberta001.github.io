main.floors.MT1=
{
    "floorId": "MT1",
    "title": "魔塔 第01层",
    "name": "第 1 层",
    "width": 13,
    "height": 13,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,201,202,201,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1, 31,  0,  0, 81,  0,  1, 27, 21,  0,  1,  0,  1],
    [  1,  0,209,  0,  1,  0,  1, 28, 31,  0,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0,  1,  1,  1, 81,  1,  0,  1],
    [  1, 21,  0,  0,  1,  0, 81,205,217,205,  1,  0,  1],
    [  1,  0,210,  0,  1,  0,  1,  1,  1,  1,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1, 31,  0, 21,  1, 21,  0,  0,  1,  0,205,  0,  1],
    [  1, 31, 46, 21,  1,  0,  0,  0,  1,201, 32,201,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "section1.mp3",
    "firstArrive": [
        {
            "type": "tip",
            "text": "游戏已重启"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
            "是否要开启疯狂加血模式？\n在这个模式下，你的生命仍然要超过怪物伤害才能战斗，但实际战斗中，你将不会受到伤害，而是会回复等量的生命。",
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "是",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:addhp",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "否",
                        "action": []
                    }
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor",
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
        2,
        1
    ],
    "downFloor": [
        6,
        11
    ],
    "autoEvent": {}
}