package controllers

import play.api.mvc._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json.Json._

import models._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def rot13 = Action(parse.json) {
    request =>
      (request.body \ "plainText").asOpt[String].map {
        plainText =>
          Ok(toJson(
            Map("status" -> "OK", "cipherText" -> (Message(plainText).cipherText))
          ))
      }.getOrElse {
        BadRequest(toJson(
          Map("status" -> "Error", "message" -> "Missing parameter [cipherText]")
        ))
      }
  }
}