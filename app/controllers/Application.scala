package controllers

import play.api.mvc._
import play.api.libs.json.Json._

import models._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def rot13 = Action {
    request =>
      request.body.asJson.map {
        json =>
          (json \ "plainText").asOpt[String].map {
            plainText =>
              Ok(toJson(Map("cipherText" -> (Message(plainText).cipherText)))).as("application/json")
          }.getOrElse{
            BadRequest(toJson(
              Map("status" -> "Error", "message" -> "Missing parameter [cipherText]")
            )).as("application/json")
          }
      }.getOrElse {
        BadRequest(toJson(
          Map("status" -> "Error", "message" -> "Missing parameter [cipherText]")
        )).as("application/json")
      }
  }

  //  def rot13 = Action(parse.json) {
  //    request =>
  //      (request.body \ "plainText").asOpt[String].map {
  //        plainText =>
  //          Ok(toJson(
  //            Map("cipherText" -> (Message(plainText).cipherText))
  //          )).as("application/json")
  //      }.getOrElse {
  //        BadRequest(toJson(
  //          Map("status" -> "Error", "message" -> "Missing parameter [cipherText]")
  //        )).as("application/json")
  //      }
  //  }
}