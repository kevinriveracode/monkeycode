import React from "react"
import { Button, Image } from "semantic-ui-react"
import $ from "jquery"
import "./TopButton.scss"

export default function TopButton(props) {
  function goTop(e) {
    e.preventDefault()
    $("html, body").animate({ scrollTop: 0 }, "400")
  }
  return (
    <Button
      id="topButton"
      onClick={goTop}
      content={
        <Image
          className="reset"
          src="https://monkeycode.s3.eu-west-3.amazonaws.com/arrow-top.svg"
        />
      }
    />
  )
}
