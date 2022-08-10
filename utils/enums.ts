export enum User {
    USERNAME = "evgeniy_user",
    PASSWORD = "1q2w3e4r"
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