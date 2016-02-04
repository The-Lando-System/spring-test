<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
	"http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>My App Test Runner</title>
		
		<!-- Jasmine Dependencies -->
		<link rel="stylesheet" type="text/css" href="webjars/jasmine/2.4.1/lib/jasmine-core/jasmine.css" />
		<script type="text/javascript" src="webjars/jasmine/2.4.1/lib/jasmine-core/jasmine.js"></script>
		<script type="text/javascript" src="webjars/jasmine/2.4.1/lib/jasmine-core/jasmine-html.js"></script>
		<script type="text/javascript" src="webjars/jasmine/2.4.1/lib/jasmine-core/boot.js"></script>
		
		<!-- Angular Dependencies -->
		<script type="text/javascript" src="webjars/angularjs/1.4.9/angular.js"></script>
		<script type="text/javascript" src="webjars/angularjs/1.4.9/angular-mocks.js"></script>
		<script type="text/javascript" src="webjars/angularjs/1.4.9/angular-route.js"></script>
		<script type="text/javascript" src="webjars/angular-ui-router/0.2.17/angular-ui-router.js"></script>
		
		<!-- My App Source -->
		<script type="text/javascript" src="app/myapp.module.js"></script>
		<script type="text/javascript" src="app/config/states.js"></script>
		<script type="text/javascript" src="app/factories/TestFactory.js"></script>
		<script type="text/javascript" src="app/factories/ExceptionFactory.js"></script>
		<script type="text/javascript" src="app/directives/navbar.js"></script>
		<script type="text/javascript" src="app/directives/errorMessage.js"></script>
		<script type="text/javascript" src="app/directives/objectTable.js"></script>
		<script type="text/javascript" src="app/view1/View1Ctrl.js"></script>
		<script type="text/javascript" src="app/view2/View2Ctrl.js"></script>
		
		<!-- Spec files -->
		<script type="text/javascript" src="test/app/view1/View1Ctrl.spec.js"></script>
		<script type="text/javascript" src="test/app/view2/View2Ctrl.spec.js"></script>
		<script type="text/javascript" src="test/app/factories/TestFactory.spec.js"></script>
		<script type="text/javascript" src="test/app/factories/ExceptionFactory.spec.js"></script>
		
	</head>
	<body>
	</body>
</html>