class NavigatorStr {

    setStrategy(routeStrategy) {
        this.routeStrategy = routeStrategy;
    }

    buildRoute(A, B) {
        this.route = this.routeStrategy.buildRoute(A, B)
    }
}

class RouteStrategyInterface {
    buildRoute() {
        alert('Implement!')
    }
}

class RoadStr extends RouteStrategyInterface {
    buildRoute(A, B) {
        console.log(`going by car from ${A} to ${B}`);
    }
}

class WalkingStr extends RouteStrategyInterface {
    buildRoute(A, B) {
        console.log(`going by foot from ${A} to ${B}`);
    }
}

class BicycleStr extends RouteStrategyInterface {
    buildRoute(A, B) {
        console.log(`riding a bike from ${A} to ${B}`);
    }
}

const navigatorA = new NavigatorStr();
const walking = new WalkingStr();

navigatorA.setStrategy(walking);
navigatorA.buildRoute('my street', 'airport');
