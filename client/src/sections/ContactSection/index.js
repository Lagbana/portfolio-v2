import React, { useState, useEffect } from 'react'
import { useSectionContext } from '../../utils/GlobalState'
import axios from 'axios'
import Button from '../../components/Button'
import 'antd/dist/antd.css'
import ContactList from '../../data/contact'
import { Form, Input, Space } from 'antd'
const { TextArea } = Input

export function ContactSection (props) {
  const { id } = props
  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const buttonColor = state[state.length - 1].buttonColor
  const headerColor = state[state.length - 1].headerColor

  const [width, setWidth] = useState(window.innerWidth)
  const tabletBreakpoint = 768

  useEffect(() => {
    // forceUpdate({})
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    // Clean up: remove event listener
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const sectionPadding =
    width === tabletBreakpoint
      ? '2vw 2vw 2vw 5vw'
      : width < tabletBreakpoint
      ? '2vw 2vw 2vw 2vw'
      : '2vw 2vw 2vw 15vw'

  const [form] = Form.useForm()
  //const [, forceUpdate] = useState() // To disable submit button at the beginning.

  const [formValues, setFormValues] = useState({
    userName: '',
    userEmail: '',
    subject: '',
    message: ''
  })

  const { userName, userEmail, subject, message } = formValues

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target

    // Updating the input's state
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const resetForm = () => {
    setFormValues({
      userName: '',
      userEmail: '',
      subject: '',
      message: ''
    })
  }

  const handleSubmit = async (event) => {
    console.log('I got in')
    event.preventDefault()
    
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3000/send',
      data: formValues
    })

    response.data.status === 'success' ? resetForm() : console.log('Message failed to send')

  }

  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  }

  const styling = {
    mainContent: {
      paddingLeft: '4.5vw',
      paddingRight: '0.5vw'
    },
    title: {
      color: headerColor,
      fontFamily: 'Poppins',
      textAlign: 'left',
      marginLeft: '1.5rem',
      fontSize: '2.5em'
    },
    underline: {
      border: '0rem',
      height: '0.2rem',
      width: '5rem',
      marginLeft: '1.5rem',
      backgroundColor: headerColor
    },
    mobileTextarea: {
      borderRadius: '1.5rem',
      height: '20vh',
      width: '80vw',
      minWidth: '80vw'
    },
    textarea: {
      borderRadius: '1.5rem',
      height: '20vh',
      width: '40vw',
      minWidth: '40vw'
    },
    inputs: {
      borderRadius: '1.5rem',
      height: '3.5rem',
      width: '40vw'
    },
    mobileInputs: {
      width: '80vw',
      borderRadius: '1rem',
      height: '2.5rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    mobileContactBody: {
      marginLeft: '0rem',
      marginTop: '2rem'
    },
    contactBody: {
      marginLeft: '2rem',
      marginTop: '4.5rem'
    },
    mobileFormSpacing: {
      marginLeft: '0rem'
    },
    formSpacing: {
      marginLeft: '8rem'
    },
    label: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px'
    }
  }

  const contactDirection =
    width === tabletBreakpoint
      ? 'vertical'
      : width < tabletBreakpoint
      ? 'vertical'
      : 'horizontal'

  const formInputs =
    width === tabletBreakpoint
      ? styling.mobileInputs
      : width < tabletBreakpoint
      ? styling.mobileInputs
      : styling.inputs

  const formTextarea =
    width === tabletBreakpoint
      ? styling.mobileTextarea
      : width < tabletBreakpoint
      ? styling.mobileTextarea
      : styling.textarea

  const bodyMargins =
    width === tabletBreakpoint
      ? styling.mobileContactBody
      : width < tabletBreakpoint
      ? styling.mobileContactBody
      : styling.contactBody

  const spacing =
    width === tabletBreakpoint
      ? styling.mobileFormSpacing
      : width < tabletBreakpoint
      ? styling.mobileFormSpacing
      : styling.formSpacing

  return (
    <section
      id={id}
      style={{
        backgroundColor: bkColor,
        color: 'white',
        padding: sectionPadding,
        minHeight: '100vh'
      }}
    >
      <div style={styling.mainContent}>
        <header>
          <h2 style={styling.title}> Get In Touch </h2>
          <hr style={styling.underline} />
        </header>
        <Space direction={contactDirection} style={bodyMargins}>
          <ContactList />
          <Space style={spacing}>
            <Form
              {...layout}
              name='nest-messages'
              form={form}
              onSubmit={handleSubmit}
              method='POST'
            >
              <Form.Item>
                <label style={styling.label}>Name</label>
                <Input
                  placeholder='Your name'
                  size='large'
                  style={formInputs}
                  value={userName}
                  name='userName'
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item>
                <label style={styling.label} htmlFor='email'>
                  Email
                </label>
                <Input
                  placeholder='Email address'
                  size='large'
                  style={formInputs}
                  value={userEmail}
                  name='userEmail'
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item>
                <label style={styling.label}>Subject</label>
                <Input
                  placeholder='Subject'
                  size='large'
                  style={formInputs}
                  value={subject}
                  name='subject'
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item>
                <label style={styling.label}>Message</label>
                <TextArea
                  placeholder='Send me a message and I will respond with 24 hours'
                  size='large'
                  style={formTextarea}
                  value={message}
                  name='message'
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  mr={styling.button}
                  name='Send Message'
                  px='2rem'
                  size='large'
                  backgroundColor={buttonColor}
                  // handleClick= {handleSubmit}
                  htmlType='submit'
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Space>
      </div>
    </section>
  )
}
