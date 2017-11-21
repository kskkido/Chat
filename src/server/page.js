import { fayeUrl } from 'Root'

const html = 	`
	<!doctype html>
	<html>
		<head>
			<title>faye chat</title>
		</head>
		<body>
			<div id="app"></div>
			<div id="modal-overlay"></div>
			<script type="text/javascript" src=${fayeUrl}/client.js></script>
			<script src="dist/bundle.js"></script>
		</body>
	</html>
`

export default (req, res) => {
	res.send(html)
}
