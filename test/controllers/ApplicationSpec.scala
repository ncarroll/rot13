package controllers

import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._
import play.api.libs.json.Json

class ApplicationSpec extends Specification {

  "Application" should {
    "display index page" in {
      val result = controllers.Application.index(FakeRequest())
      status(result) must equalTo(OK)
    }

    "scramble message using ROT13 cipher" in {
      val plainTextAsJson = Json.toJson(Map("plainText" -> "aaa"))

      val Some(result) = routeAndCall(FakeRequest(POST, "/api/rot13").withJsonBody(plainTextAsJson))

      val expectedResult = Json.toJson(Map("cipherText" -> "nnn"))

      status(result) must equalTo(OK)
      contentType(result) must beSome("application/json")
      contentAsString(result) must equalTo(expectedResult.toString())
    }
  }
}
