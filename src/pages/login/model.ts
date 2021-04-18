import { FormEvent } from "react";
import { createEffect, createEvent, forward } from "effector"
import { sessionApi, IAuthResponse, ILoginData } from "@api/session"
import { history } from '@lib/history/index'
import { loadSessionFX } from "@features/common/model/session";

export const formSubmitted = createEvent<ILoginData>();
export const loginProcessingFX = createEffect<ILoginData, IAuthResponse>()

loginProcessingFX.use(sessionApi.createSession);
loginProcessingFX.done.watch(() => history.goBack())

forward({ from: formSubmitted, to: loginProcessingFX })
forward({ from: loginProcessingFX.done, to: loadSessionFX })