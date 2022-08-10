export enum User {
    USERNAME = "test009",
    PASSWORD = "Werq1234$"
}

export enum WrongUser {
    WRONG_USERNAME = "test",
    WRONG_PASSWORD = "werq1234"
}

export enum Pages {
    BASE = "BasePage",
    LOGIN = "LoginPage",
    SIGNUP = "SignUpPage",
    HOME = "HomePage",
}
export type PagesKey = keyof typeof Pages;

export enum Page {
    LOGIN = "login",
    SIGNUP = "signup",
    HOME = "base",
}
export type PageKey = keyof typeof Page;