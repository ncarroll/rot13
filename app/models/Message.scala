package models

case class Message(plainText: String) {

  def cipherText = plainText map {
    case c if 'a' <= c.toLower && c.toLower <= 'm' => (c + 13).toChar
    case c if 'n' <= c.toLower && c.toLower <= 'z' => (c - 13).toChar
    case c => c
  }

}