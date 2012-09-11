package controllers

import play.api.mvc._
import play.api.data._
import play.api.data.Forms._

import views._
import models._

object Application extends Controller {

  val messageForm: Form[Message] = Form(
    mapping(
      "plainText" -> nonEmptyText
    )(Message.apply)(Message.unapply)
  )

  def index = Action {
    Ok(views.html.index(messageForm))
  }

  def rot13 = Action {
    implicit request =>
      messageForm.bindFromRequest().fold(
        errors => BadRequest(html.index(errors)),
        message => Ok(views.html.rot13(message.cipherText))
      )
  }
}