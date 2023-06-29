const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  
  let notifStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }
  
  if (message.type === 'error') notifStyle.color = 'red'
  
  return (
    <div style={notifStyle}>
      {message.content}
    </div>
  )
}

export default Notification