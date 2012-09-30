package controllers

import play.api.mvc._
import play.api.libs.json.Json._

import models._
import play.api.Logger

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def rot13 = Action(parse.json) {
    request =>
      Logger.info(request.toString())
      (request.body \ "plainText").asOpt[String].map {
        plainText =>
          Ok(toJson(
            Map("cipherText" -> (Message(plainText).cipherText))
          ))
      }.getOrElse {
        BadRequest(toJson(
          Map("status" -> "Error", "message" -> "Missing parameter [cipherText]")
        ))
      }
  }
}