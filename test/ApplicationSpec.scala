import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._

class ApplicationSpec extends Specification {

  "Application" should {
    "display index page" in {
      val result = controllers.Application.index(FakeRequest())
      status(result) must equalTo(OK)
    }

    "scramble message using ROT13 cipher" in {
      val result = controllers.Application.rot13(
        FakeRequest().withFormUrlEncodedBody("message" -> "aaa")
      )

      status(result) must equalTo(SEE_OTHER)
    }
  }
}
