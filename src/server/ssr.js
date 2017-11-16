import { baseUrl } from '../../'

const html = 	`
	<!doctype html>
	<html>
		<head>
			<style>
				p {
						margin-top:0;
						margin-bottom:0;
						font-family: Tahoma, Arial, sans-serif;
						-webkit-font-smoothing: subpixel-antialiased;
				}
			</style>
			<title>boiled</title>
		</head>
		<body>
			<div id="app"></div>
			<script type="text/javascript" src=${baseUrl}/faye/client.js></script>
			<script src="public/bundle.js"></script>
		</body>
	</html>
`

function handleRender(req, res) {
	res.send(html)
}

export default handleRender

// const renderFullPage = (html, preloadedState) =>
// 	`
// 		<!doctype html>
// 		<html>
// 			<head>
// 				<style>
// 					p {
// 							margin-top:0;
// 							margin-bottom:0;
// 							font-family: Tahoma, Arial, sans-serif;
// 							-webkit-font-smoothing: subpixel-antialiased;
// 					}
// 				</style>
// 				<title>boiled</title>
// 			</head>
// 			<body>
// 				<div id="app"></div>
// 				<script src="bundle.js"></script>
// 				<script type="text/javascript" src=${baseUrl}/faye/client.js></script>
// 			</body>
// 		</html>
// 	`

