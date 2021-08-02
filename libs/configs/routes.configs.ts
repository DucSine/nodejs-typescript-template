import express from 'express';

export abstract class CommonRoutesConfig {
    app: express.Application;
    routeName: string;

    constructor(app: express.Application, routeName: string) {
        this.app = app;
        this.routeName = routeName;
    }

    getRouteName() {
        return this.routeName;
    }

    abstract configureRoutes(): express.Application;
}
