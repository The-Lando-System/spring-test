<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
	
	<base href="/testapp/">
	
	<!-- External JS Files -->
	<script src="<c:url value="webjars/angularjs/1.4.9/angular.js" />"></script>
	<script src="<c:url value="webjars/angularjs/1.4.9/angular-route.js" />"></script>
	<script src="<c:url value="webjars/angular-ui-router/0.2.17/angular-ui-router.js" />"></script>
	
	<!-- External CSS Files -->
	<link rel="stylesheet" href="<c:url value="webjars/bootstrap/3.2.0/css/bootstrap.css" />"></link>

	<!-- My App JS Files -->
	<script src="<c:url value="app/myapp.module.js" />"></script>
	<script src="<c:url value="app/config/states.js" />"></script>
	<script src="<c:url value="app/directives/navbar.js" />"></script>
	<script src="<c:url value="app/view1/View1Ctrl.js" />"></script>
	<script src="<c:url value="app/view2/View2Ctrl.js" />"></script>
	
	<!-- My CSS Deps -->
	<link rel="stylesheet" href="<c:url value="app/css/main.css" />"></link>

</head>

<body ng-app="myapp">
	<navbar></navbar>
	<div class="jumbotron">
		<div class="container">
			<h1>My App</h1>
		</div>
	</div>
	<div ui-view></div>
</body>
</html>
