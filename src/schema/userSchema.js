export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "firstname": "chibunna",
            "lastname": "oduonye",
            "gender": "M",
            "date_of_birth": "2015-04-08"
        }
    ],
    "required": [
        "firstname",
        "lastname",
        "gender",
        "date_of_birth"
    ],
    "properties": {
        "firstname": {
            "$id": "#/properties/firstname",
            "type": "string",
            "title": "The firstname schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "chibunna"
            ]
        },
        "lastname": {
            "$id": "#/properties/lastname",
            "type": "string",
            "title": "The lastname schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "oduonye"
            ]
        },
        "gender": {
            "$id": "#/properties/gender",
            "type": "string",
            "title": "The gender schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "M"
            ]
        },
        "date_of_birth": {
            "default": "",
            "description": "An explanation about the purpose of this instance.",
            "examples": [
                "2015-04-08"
            ],
            "title": "The date_of_birth schema"
        }
    },
    "additionalProperties": true
}