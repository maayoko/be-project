class Application {

    ready(bootstrap) {
        this.app = bootstrap;
        return this;
    }

    start() {
        this.app(this);
    }
}

export default Application;