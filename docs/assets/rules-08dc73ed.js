import{ai as a,a5 as o,C as u,aj as l}from"./index-9a7d77d1.js";const E=()=>{const e=a(),s=o({password:null}),t=u({required:r=>!!r||e.t("error.REQUIRED_FIELD"),requiredSelect:r=>!!r&&r.length>0||e.t("error.REQUIRED_FIELD"),alphaNumber:r=>/^[a-zA-Z0-9]*$/.test(r)||e.t("error.ALPHABETS_NUMBER_ONLY"),emailRules:r=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(r)||e.t("error.INVALID_EMAIL"),samePassword:r=>r===s.password||e.t("error.PASSWORD_NOT_MATCH")});return{...l(s),rules:t}};export{E as u};