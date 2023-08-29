import { wrap } from 'svelte-spa-router/wrap'

// 인트로
import Index from "./routes/intro/Index.svelte"
import BeforeStart from "./routes/intro/BeforeStart.svelte"

// 고객 API 관련
import AuthLogin from "./routes/auth/AuthLogin.svelte"
import AuthRegister from "./routes/auth/AuthRegister.svelte"
import CheckId from "./routes/auth/CheckId.svelte"
import MypageInfo from "./routes/auth/MypageInfo.svelte"
import MypageUpdate from "./routes/auth/MypageUpdate.svelte"
import Secession from "./routes/auth/Secession.svelte"

// 홈위젯(인덱스) API
import ApiCount from "./routes/index/ApiCount.svelte"
import EnCrypDecrypCount from "./routes/index/EnCrypDecrypCount.svelte"
import ProvisionCount from "./routes/index/ProvisionCount.svelte"
import PrivacyItemCount from "./routes/index/PrivacyItemCount.svelte"
import EmailSendInfo from "./routes/index/EmailSendInfo.svelte"

// 개인정보 API
import PersonalSearch from "./routes/personal/PersonalSearch.svelte"
import PersonalCount from "./routes/personal/PersonalCount.svelte"
import PersonalDelete from "./routes/personal/PersonalDelete.svelte"

// 관리자현황 API
import AdminList from "./routes/admin/AdminList.svelte"
import AdminToday from "./routes/admin/AdminToday.svelte"

// 서트파티
import BizmAlimTalkSend from "./routes/thirdparty/BizmAlimTalkSend.svelte"

export default {

    "/": Index,
    "/before": BeforeStart,

    "/authLogin": AuthLogin,
    "/authRegister": AuthRegister,
    "/checkId": CheckId,
    "/mypageInfo": MypageInfo,
    "/mypageUpdate": MypageUpdate,
    "/secession": Secession,

    "/apiCount": ApiCount,
    "/endeCount": EnCrypDecrypCount,
    "/provisionCount": ProvisionCount,
    "/privacyCount": PrivacyItemCount,
    "/emailSendInfo": EmailSendInfo,

    "/personalCount": PersonalCount,
    "/personalSearch": PersonalSearch,
    "/personalDelete": PersonalDelete,

    "/adminList": AdminList,
    "/adminToday": AdminToday,

    "/bizmAlimTalkSend": BizmAlimTalkSend,

    "/develop": wrap({
        asyncComponent: () => import( "./components/Develop.svelte"),
    }),

    "*": wrap({
        asyncComponent: () => import( "./components/NotFound.svelte"),
    })

};