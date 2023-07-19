import { wrap } from 'svelte-spa-router/wrap'

// 인트로
import Index from "./routes/intro/Index.svelte"
import BeforeStart from "./routes/intro/BeforeStart.svelte"

// 홈위젯(인덱스)
import ApiCount from "./routes/index/ApiCount.svelte"
import EnCrypDecrypCount from "./routes/index/EnCrypDecrypCount.svelte"


import PersonallinfoSearch from "./routes/personallinfo/personallinfoSearch.svelte"
import PersonallinfoList from "./routes/personallinfo/personallinfoList.svelte"

import FindId from "./routes/FindId.svelte"
import ChangePassword from "./routes/ChangePassword.svelte"
import AuthLogin from "./routes/user/AuthLogin.svelte"
import AuthRegister from "./routes/user/AuthRegister.svelte"
import Dormancy from "./routes/Dormancy.svelte"
import Detailedinquiry from "./routes/DetailedInquiry.svelte"
import Correction from "./routes/Correction.svelte"
import Statusinquiry from "./routes/Statusinquiry.svelte"

export default {

    "/": Index,
    "/before": BeforeStart,

    "/authLogin": AuthLogin,
    "/authRegister": AuthRegister,
    "/findid": FindId,

    "/apiCount": ApiCount,
    "/endeCount": EnCrypDecrypCount,

    "/personallinfoSearch": PersonallinfoSearch,
    "/personallinfoList": PersonallinfoList,


    "/changepassword": ChangePassword,

    "/dormancy": Dormancy,

    "/detailedinquiry": Detailedinquiry,

    "/correction": Correction,

    "/statusinquiry": Statusinquiry,

    "*": wrap({
        asyncComponent: () => import("./components/NotFound.svelte"),
    })

};