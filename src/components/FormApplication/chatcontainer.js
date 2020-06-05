import React, { Fragment } from "react"

import ButtonBox from "./buttonbox"
import ChatBox from "./chatbox"
import Header from "./header"
import { MessageInput } from "./messageinput"
import Navbar from "../NavBar"
import axios from "axios"
import styles from "../../styles/chatcontainer.module.scss"

class ChatContainer extends React.Component {
  messagesEndRef = React.createRef()

  constructor(props) {
    super(props)
    this.state = {
      sessionId: undefined,
      messages: [
        {
          direction: "server",
          message: this.props.descricao,
          button: false,
        },
      ],
      options: ["Iniciar", "Sair"],
      blocked: false,
    }
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  componentDidMount = async () => {
    const res = await axios.post(
      `http://${this.props.chatAddr}/questionarios/${this.props.form}/begin`
    )
    this.setState({
      sessionId: res.data,
    })
  }

  addMessage = messageText => {
    this.scrollToBottom()

    const message = {
      direction: "client",
      message: messageText,
      button: false,
    }

    this.setState({
      blocked: true,
      messages: [...this.state.messages, message],
    })

    this.getServerResponse(messageText)

    this.scrollToBottom()
  }

  getServerResponse = async messageText => {
    let res = await axios.put(
      `http://${this.props.chatAddr}/questionarios/${this.props.form}/${this.state.sessionId}/proxima`,
      {
        answer: messageText,
      }
    )
    
    let response_server = [
      {
        direction: "server",
        message: res.data.question,
        button: false,
      },
    ]

    console.log(res.data)
    
    if (res.data.options) {
      this.setState({ options: res.data.options })
    } else this.setState({ options: [] })

    if (res.data.question === "" || res.data.question === undefined) {
      let messages = res.data.result.split("\n")
      let messagesObject = Array()

      for (const idx in messages) {
        messagesObject.push({
          direction: "server",
          message: messages[idx],
          button: false,
        })
      }

      messagesObject.push({
        direction: "server",
        message: "Clique aqui para ir para a aba de acolhimento",
        button: true,
      })

      this.setState({
        blocked: true,
        messages: [...this.state.messages, ...messagesObject],
      })
    } else {
      this.setState({
        blocked: false,
        messages: [...this.state.messages, ...response_server],
      })
    }

    this.scrollToBottom()
  }

  renderMessage = (message, index) => {
    if (message.button) {
      return (
        <ButtonBox
          key={index}
          text={message.message}
          direction={message.direction}
        />
      )
    } else
      return (
        <ChatBox
          key={index}
          text={message.message}
          direction={message.direction}
        />
      )
  }

  render() {
    return (
      <Fragment>
        <Header title={this.props.form} />
        <div className={styles.container}>
          {/* <Header siteTitle="SQR-20"/> */}
          {this.state.messages.map(this.renderMessage)}
          {this.props.children}
          <div ref={this.messagesEndRef} />
        </div>
        <MessageInput
          options={this.state.options}
          blocked={this.state.blocked}
          onSubmit={this.addMessage}
        />
        <Navbar />
      </Fragment>
    )
  }
}

export default ChatContainer