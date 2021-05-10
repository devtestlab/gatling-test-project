var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "587",
        "ok": "587",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles1": {
        "total": "637",
        "ok": "637",
        "ko": "-"
    },
    "percentiles2": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "percentiles3": {
        "total": "969",
        "ok": "969",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1102",
        "ok": "1102",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.077",
        "ok": "3.077",
        "ko": "-"
    }
},
contents: {
"req_get-one-user-7ac0a": {
        type: "REQUEST",
        name: "Get one user",
path: "Get one user",
pathFormatted: "req_get-one-user-7ac0a",
stats: {
    "name": "Get one user",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "861",
        "ok": "861",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "479",
        "ok": "479",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "percentiles1": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "percentiles2": {
        "total": "796",
        "ok": "796",
        "ko": "-"
    },
    "percentiles3": {
        "total": "817",
        "ok": "817",
        "ko": "-"
    },
    "percentiles4": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.538",
        "ok": "1.538",
        "ko": "-"
    }
}
    },"req_get-one-user-re-d842c": {
        type: "REQUEST",
        name: "Get one user Redirect 1",
path: "Get one user Redirect 1",
pathFormatted: "req_get-one-user-re-d842c",
stats: {
    "name": "Get one user Redirect 1",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "409",
        "ok": "409",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "694",
        "ok": "694",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "percentiles1": {
        "total": "699",
        "ok": "699",
        "ko": "-"
    },
    "percentiles2": {
        "total": "903",
        "ok": "903",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1073",
        "ok": "1073",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.538",
        "ok": "1.538",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
