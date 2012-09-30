package controllers

import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._
import play.api.libs.json.Json._

class ApplicationSpec extends Specification {

  "Application" should {
    "display index page" in {
      val result = controllers.Application.index(FakeRequest())
      status(result) must equalTo(OK)
    }

    "scramble message using ROT13 cipher" in {
      val plainTextAsJson = toJson(Map("message" -> "aaa"))
      val Some(result) = routeAndCall(FakeRequest(POST, "/api/rot13").withJsonBody(plainTextAsJson))

      status(result) must equalTo(OK)

      val expectedResult = toJson(
        Map("status" -> "OK", "cipherText" -> "nnn")
      )

//      contentAsString(result) must equalTo(expectedResult)
    }
  }
}
