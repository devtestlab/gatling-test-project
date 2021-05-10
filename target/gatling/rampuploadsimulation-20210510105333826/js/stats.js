var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "320",
        "ok": "160",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "330"
    },
    "maxResponseTime": {
        "total": "438",
        "ok": "259",
        "ko": "438"
    },
    "meanResponseTime": {
        "total": "273",
        "ok": "177",
        "ko": "368"
    },
    "standardDeviation": {
        "total": "97",
        "ok": "14",
        "ko": "22"
    },
    "percentiles1": {
        "total": "298",
        "ok": "173",
        "ko": "363"
    },
    "percentiles2": {
        "total": "363",
        "ok": "180",
        "ko": "379"
    },
    "percentiles3": {
        "total": "402",
        "ok": "207",
        "ko": "416"
    },
    "percentiles4": {
        "total": "428",
        "ok": "228",
        "ko": "433"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 160,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 160,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.323",
        "ok": "5.161",
        "ko": "5.161"
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
        "total": "160",
        "ok": "160",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "177",
        "ok": "177",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles1": {
        "total": "173",
        "ok": "173",
        "ko": "-"
    },
    "percentiles2": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "percentiles3": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "percentiles4": {
        "total": "228",
        "ok": "228",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 160,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
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
        "total": "5.161",
        "ok": "5.161",
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
        "total": "160",
        "ok": "0",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "330",
        "ok": "-",
        "ko": "330"
    },
    "maxResponseTime": {
        "total": "438",
        "ok": "-",
        "ko": "438"
    },
    "meanResponseTime": {
        "total": "368",
        "ok": "-",
        "ko": "368"
    },
    "standardDeviation": {
        "total": "22",
        "ok": "-",
        "ko": "22"
    },
    "percentiles1": {
        "total": "363",
        "ok": "-",
        "ko": "363"
    },
    "percentiles2": {
        "total": "379",
        "ok": "-",
        "ko": "379"
    },
    "percentiles3": {
        "total": "416",
        "ok": "-",
        "ko": "416"
    },
    "percentiles4": {
        "total": "433",
        "ok": "-",
        "ko": "433"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 160,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.161",
        "ok": "-",
        "ko": "5.161"
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
