import { baseUrl } from 'Root'

const html = 	`
	<!doctype html>
	<html>
		<head>
			<title>faye chat</title>
		</head>
		<body>
			<div id="app"></div>
			<script type="text/javascript" src=${baseUrl}/faye/client.js></script>
			<script src="public/bundle.js"></script>
		</body>
	</html>
`

export default (req, res) => {
	res.send(html)
}
