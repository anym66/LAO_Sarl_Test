const enterprises = [
    {
        "enterpriseName" : "Company A",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : "house"
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : "property insurance"
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : 0
            },

        ]
    },
    {
        "enterpriseName" : "Company B",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : ["voiture 4 portieres", "voiture 5 portieres"]
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : ["driver's license", "car insurance"]
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : 0
            }

        ]
    },
    {
        "enterpriseName" : "Company C",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : "work permit"
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : "requires a social "
            }

        ]
    },
    {
        "enterpriseName" : "Company D",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : ["house", "flat", "appartment"]
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : 0
            }

        ]
    },
    {
        "enterpriseName" : "Company E",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : ["house", "flat", "appartment"]
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : 0
            }

        ]
    },
    {
        "enterpriseName" : "Company F",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : "bike"
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : "driver's license "
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : "motorcycle insurance"
            }

        ]
    },
    {
        "enterpriseName" : "Company G",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : "massage qualification certificate"
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : "liability insurance"
            }

        ]
    },
    {
        "enterpriseName" : "Company H",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : "storage place or a garage"
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : 0
            }

        ]
    },
    {
        "enterpriseName" : "Company I",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : ["house", "flat", "appartment"]
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : 0
            }

        ]
    },
    {
        "enterpriseName" : "Company K",
        "requirements" : [
            {
                "requirementName" : "immobilier" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "automobile" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "license" ,
                "requerimentValue" : 0
            },
            {
                "requirementName" : "other" ,
                "requerimentValue" : "paypal account"
            }

        ]
    },
    {
        "enterpriseName" : "Company J",
        "requirements" : null
    }
]

let possibleJobs = []
let impossibleJobs = []

let myRequirements = [
    {
        "requirementName" : "immobilier",
        "requerimentValue" : "bike "
    },
    {
        "requirementName" : "automobile",
        "requerimentValue" : 0
    },
    {
        "requirementName" : "license",
        "requerimentValue" : "driving license "
    }, 
    {
        "requirementName" : "other",
        "requerimentValue" : 0
    }
]

enterprises.map((enterprise) =>{
    if(enterprise.requirements === myRequirements){
        possibleJobs.push(enterprise)
    }
    else {
        if(enterprise.requirements === null) {
            possibleJobs.push(enterprise)
        } else{
        impossibleJobs.push(enterprise)
        }
    }
})

console.log("your jobs possibility", possibleJobs)
console.log("your jobs impossibility", impossibleJobs)