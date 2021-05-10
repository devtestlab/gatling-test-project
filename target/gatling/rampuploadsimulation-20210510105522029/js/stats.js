var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "320",
        "ok": "320",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "160",
        "ok": "160",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1218",
        "ok": "1218",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "288",
        "ok": "288",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "percentiles1": {
        "total": "335",
        "ok": "335",
        "ko": "-"
    },
    "percentiles2": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "percentiles3": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "percentiles4": {
        "total": "908",
        "ok": "908",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 315,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.323",
        "ok": "10.323",
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
        "total": "160",
        "ok": "160",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "160",
        "ok": "160",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "percentiles1": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "percentiles2": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "percentiles3": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles4": {
        "total": "220",
        "ok": "220",
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
        "ok": "160",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "334",
        "ok": "334",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1218",
        "ok": "1218",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "398",
        "ok": "398",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "129",
        "ko": "-"
    },
    "percentiles1": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "percentiles2": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "percentiles3": {
        "total": "605",
        "ok": "605",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1060",
        "ok": "1060",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 155,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 1
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
