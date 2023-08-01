import { wrap } from 'svelte-spa-router/wrap'

// 인트로
import Index from "./routes/intro/Index.svelte"
import BeforeStart from "./routes/intro/BeforeStart.svelte"

// 홈위젯(인덱스)
import ApiCount from "./routes/index/ApiCount.svelte"
import EnCrypDecrypCount from "./routes/index/EnCrypDecrypCount.svelte"
import ProvisionCount from "./routes/index/ProvisionCount.svelte"
import PrivacyItemCount from "./routes/index/PrivacyItemCount.svelte"
import EmailSendInfo from "./routes/index/EmailSendInfo.svelte"

//
import PersonallinfoSearch from "./routes/personallinfo/personallinfoSearch.svelte"
import PersonallinfoList from "./routes/personallinfo/personallinfoList.svelte"

//
import FindId from "./routes/FindId.svelte"
import ChangePassword from "./routes/ChangePassword.svelte"
import AuthLogin from "./routes/user/AuthLogin.svelte"
import AuthRegister from "./routes/user/AuthRegister.svelte"
import Dormancy from "./routes/Dormancy.svelte"
import Detailedinquiry from "./routes/DetailedInquiry.svelte"
import Correction from "./routes/Correction.svelte"
import Statusinquiry from "./routes/Statusinquiry.svelte"

// 서트파티
import BizmAlimTalkSend from "./routes/thirdparty/bizmAlimTalkSend.svelte"

// 개발중인페이지
import Develop from "./routes/intro/Develop.svelte";

export default {

    "/": Index,
    "/before": BeforeStart,

    "/authLogin": AuthLogin,
    "/authRegister": AuthRegister,
    "/findid": FindId,

    "/apiCount": ApiCount,
    "/endeCount": EnCrypDecrypCount,
    "/provisionCount": ProvisionCount,
    "/privacyCount": PrivacyItemCount,
    "/emailSendInfo": EmailSendInfo,



    "/personallinfoSearch": PersonallinfoSearch,
    "/personallinfoList": PersonallinfoList,


    "/changepassword": ChangePassword,

    "/dormancy": Dormancy,

    "/detailedinquiry": Detailedinquiry,

    "/correction": Correction,

    "/statusinquiry": Statusinquiry,

    "/bizmAlimTalkSend": BizmAlimTalkSend,

    "/develop" : Develop,

    "*": wrap({
        asyncComponent: () => import("./components/NotFound.svelte"),
    })

};