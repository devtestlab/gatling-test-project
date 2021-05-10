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
        "total": "165",
        "ok": "165",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1011",
        "ok": "1011",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "percentiles1": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "percentiles2": {
        "total": "422",
        "ok": "422",
        "ko": "-"
    },
    "percentiles3": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "percentiles4": {
        "total": "984",
        "ok": "984",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 36,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 10
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
        "total": "165",
        "ok": "165",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles1": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles2": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "percentiles3": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "percentiles4": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
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
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1011",
        "ok": "1011",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "percentiles1": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "percentiles2": {
        "total": "689",
        "ok": "689",
        "ko": "-"
    },
    "percentiles3": {
        "total": "945",
        "ok": "945",
        "ko": "-"
    },
    "percentiles4": {
        "total": "998",
        "ok": "998",
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
