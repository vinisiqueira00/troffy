import React from "react";
import type { NextPage } from "next";

import PasswordShowIcon from "../../public/svgs/password-show.svg";
import PasswordHideIcon from "../../public/svgs/password-hide.svg";
import CheckIcon from "../../public/svgs/check.svg";

import LandingAccess from "./components/LandingAccess/_LandingAccess";

import styles from "../../styles/login.module.css";

const LoginContent: NextPage = () => {
    return (
        <>
            <div className={styles.accessPage}>
                <LandingAccess />

                <div className={styles.accessMain}>
                    <div className={styles.accessMainContent}>
                        <h1 className={styles.accessTitle}>Fazer login</h1>

                        <form className={styles.accessForm}>
                            <fieldset className={styles.accessFormField}>
                                <span className={styles.accessFormBadge}></span>
                                <label className={styles.accessFormLabel}>
                                    E-mail
                                </label>
                                <input
                                    className={styles.accessFormInput}
                                    type="email"
                                />
                            </fieldset>

                            <fieldset className={styles.accessFormField}>
                                <span className={styles.accessFormBadge}></span>
                                <label className={styles.accessFormLabel}>
                                    Senha
                                </label>
                                <input
                                    className={styles.accessFormInput}
                                    type="password"
                                />
                                <div className={styles.accessFormFieldIcon}>
                                    <PasswordShowIcon />
                                </div>
                            </fieldset>

                            <div className={styles.accessFormInline}>
                                <fieldset
                                    className={styles.accessFormCheckField}
                                >
                                    <span
                                        className={styles.accessFormCheckIcon}
                                    >
                                        {/* <CheckIcon /> */}
                                    </span>
                                    <span
                                        className={styles.accessFormCheckText}
                                    >
                                        Lembrar-me
                                    </span>
                                </fieldset>

                                <p className={styles.accessFormForgotPassword}>
                                    Esqueci minha senha
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginContent;
