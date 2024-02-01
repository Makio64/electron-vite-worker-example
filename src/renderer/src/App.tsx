import { onMount, createSignal } from 'solid-js'

const App = () => {
  const [message, setMessage] = createSignal('No message yet')

  onMount(() => {
    if (window.api) {
      console.log('API is available')
      window.api.receive('test', (data) => {
        console.log('Received data from main process', data)
        setMessage(data)
      })
    } else {
      console.error('API is not available')
    }
  })

  return (
    <div>
      <p>{message()}</p>
    </div>
  )
}

export default App
