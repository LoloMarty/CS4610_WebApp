function addText() {
	return (alert('This is a test bozo!'))
}

export default function MessageInput(){
	return (
		<><label>Message: <input name= "userMessage"></input></label>
		<button onClick={addText}>Post it!</button></>
	)
}