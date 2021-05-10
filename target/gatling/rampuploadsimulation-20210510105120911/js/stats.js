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
        "total": "613",
        "ok": "613",
        "ko": "1241"
    },
    "maxResponseTime": {
        "total": "2724",
        "ok": "797",
        "ko": "2724"
    },
    "meanResponseTime": {
        "total": "999",
        "ok": "652",
        "ko": "1345"
    },
    "standardDeviation": {
        "total": "366",
        "ok": "31",
        "ko": "164"
    },
    "percentiles1": {
        "total": "908",
        "ok": "645",
        "ko": "1304"
    },
    "percentiles2": {
        "total": "1304",
        "ok": "654",
        "ko": "1336"
    },
    "percentiles3": {
        "total": "1419",
        "ok": "704",
        "ko": "1608"
    },
    "percentiles4": {
        "total": "1760",
        "ok": "783",
        "ko": "2035"
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
        "total": "10",
        "ok": "5",
        "ko": "5"
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
        "total": "613",
        "ok": "613",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "percentiles1": {
        "total": "645",
        "ok": "645",
        "ko": "-"
    },
    "percentiles2": {
        "total": "654",
        "ok": "654",
        "ko": "-"
    },
    "percentiles3": {
        "total": "704",
        "ok": "704",
        "ko": "-"
    },
    "percentiles4": {
        "total": "783",
        "ok": "783",
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
        "total": "5",
        "ok": "5",
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
        "total": "1241",
        "ok": "-",
        "ko": "1241"
    },
    "maxResponseTime": {
        "total": "2724",
        "ok": "-",
        "ko": "2724"
    },
    "meanResponseTime": {
        "total": "1345",
        "ok": "-",
        "ko": "1345"
    },
    "standardDeviation": {
        "total": "164",
        "ok": "-",
        "ko": "164"
    },
    "percentiles1": {
        "total": "1304",
        "ok": "-",
        "ko": "1304"
    },
    "percentiles2": {
        "total": "1336",
        "ok": "-",
        "ko": "1336"
    },
    "percentiles3": {
        "total": "1608",
        "ok": "-",
        "ko": "1608"
    },
    "percentiles4": {
        "total": "2035",
        "ok": "-",
        "ko": "2035"
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
        "total": "5",
        "ok": "-",
        "ko": "5"
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
