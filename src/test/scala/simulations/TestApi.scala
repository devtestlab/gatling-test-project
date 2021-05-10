package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TestApi extends Simulation{

  //http configuration
  val httpConf = http.baseUrl("http://iparfumfr-testaws-oc01:8150/")
    .header("Accept","application/json")
    .header("content-type","application/json")

  //scenario
    val scn = scenario("get user")
      .exec(http("Get User List")
        .get("en/_/login?login.redirectlogin=/en")
        .check(status is 200))

  //setup
  setUp(
    scn.inject(
      atOnceUsers(1)
    )
  )
    .protocols(httpConf)


}
