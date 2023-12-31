import axios from "axios"
const juansharedatamodelsAPI = axios.create({
  baseURL: "https://juansharedatamodels-1.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_animal_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/animal/`)
}
function api_v1_animal_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/animal/`, payload)
}
function api_v1_animal_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/animal/${payload.id}/`)
}
function api_v1_animal_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/animal/${payload.id}/`, payload)
}
function api_v1_animal_partial_update(payload) {
  return juansharedatamodelsAPI.patch(`/api/v1/animal/${payload.id}/`, payload)
}
function api_v1_animal_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/animal/${payload.id}/`)
}
function api_v1_card_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/card/`)
}
function api_v1_card_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/card/`, payload)
}
function api_v1_card_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/card/${payload.id}/`)
}
function api_v1_card_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/card/${payload.id}/`, payload)
}
function api_v1_card_partial_update(payload) {
  return juansharedatamodelsAPI.patch(`/api/v1/card/${payload.id}/`, payload)
}
function api_v1_card_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/card/${payload.id}/`)
}
function api_v1_cat_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/cat/`)
}
function api_v1_cat_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/cat/`, payload)
}
function api_v1_cat_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/cat/${payload.id}/`)
}
function api_v1_cat_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/cat/${payload.id}/`, payload)
}
function api_v1_cat_partial_update(payload) {
  return juansharedatamodelsAPI.patch(`/api/v1/cat/${payload.id}/`, payload)
}
function api_v1_cat_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/cat/${payload.id}/`)
}
function api_v1_crossbow_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/crossbow/`)
}
function api_v1_crossbow_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/crossbow/`, payload)
}
function api_v1_crossbow_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/crossbow/${payload.id}/`)
}
function api_v1_crossbow_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/crossbow/${payload.id}/`, payload)
}
function api_v1_crossbow_partial_update(payload) {
  return juansharedatamodelsAPI.patch(
    `/api/v1/crossbow/${payload.id}/`,
    payload
  )
}
function api_v1_crossbow_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/crossbow/${payload.id}/`)
}
function api_v1_dog_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/dog/`)
}
function api_v1_dog_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/dog/`, payload)
}
function api_v1_dog_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/dog/${payload.id}/`)
}
function api_v1_dog_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/dog/${payload.id}/`, payload)
}
function api_v1_dog_partial_update(payload) {
  return juansharedatamodelsAPI.patch(`/api/v1/dog/${payload.id}/`, payload)
}
function api_v1_dog_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/dog/${payload.id}/`)
}
function api_v1_ebank_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/ebank/`)
}
function api_v1_ebank_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/ebank/`, payload)
}
function api_v1_ebank_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/ebank/${payload.id}/`)
}
function api_v1_ebank_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/ebank/${payload.id}/`, payload)
}
function api_v1_ebank_partial_update(payload) {
  return juansharedatamodelsAPI.patch(`/api/v1/ebank/${payload.id}/`, payload)
}
function api_v1_ebank_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/ebank/${payload.id}/`)
}
function api_v1_ebank2_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/ebank2/`)
}
function api_v1_ebank2_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/ebank2/`, payload)
}
function api_v1_ebank2_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/ebank2/${payload.id}/`)
}
function api_v1_ebank2_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/ebank2/${payload.id}/`, payload)
}
function api_v1_ebank2_partial_update(payload) {
  return juansharedatamodelsAPI.patch(`/api/v1/ebank2/${payload.id}/`, payload)
}
function api_v1_ebank2_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/ebank2/${payload.id}/`)
}
function api_v1_eshop_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/eshop/`)
}
function api_v1_eshop_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/eshop/`, payload)
}
function api_v1_eshop_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/eshop/${payload.id}/`)
}
function api_v1_eshop_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/eshop/${payload.id}/`, payload)
}
function api_v1_eshop_partial_update(payload) {
  return juansharedatamodelsAPI.patch(`/api/v1/eshop/${payload.id}/`, payload)
}
function api_v1_eshop_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/eshop/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_supplier_list(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/supplier/`)
}
function api_v1_supplier_create(payload) {
  return juansharedatamodelsAPI.post(`/api/v1/supplier/`, payload)
}
function api_v1_supplier_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/api/v1/supplier/${payload.id}/`)
}
function api_v1_supplier_update(payload) {
  return juansharedatamodelsAPI.put(`/api/v1/supplier/${payload.id}/`, payload)
}
function api_v1_supplier_partial_update(payload) {
  return juansharedatamodelsAPI.patch(
    `/api/v1/supplier/${payload.id}/`,
    payload
  )
}
function api_v1_supplier_destroy(payload) {
  return juansharedatamodelsAPI.delete(`/api/v1/supplier/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return juansharedatamodelsAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return juansharedatamodelsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return juansharedatamodelsAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return juansharedatamodelsAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juansharedatamodelsAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return juansharedatamodelsAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return juansharedatamodelsAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return juansharedatamodelsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juansharedatamodelsAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return juansharedatamodelsAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_animal_list,
  api_v1_animal_create,
  api_v1_animal_retrieve,
  api_v1_animal_update,
  api_v1_animal_partial_update,
  api_v1_animal_destroy,
  api_v1_card_list,
  api_v1_card_create,
  api_v1_card_retrieve,
  api_v1_card_update,
  api_v1_card_partial_update,
  api_v1_card_destroy,
  api_v1_cat_list,
  api_v1_cat_create,
  api_v1_cat_retrieve,
  api_v1_cat_update,
  api_v1_cat_partial_update,
  api_v1_cat_destroy,
  api_v1_crossbow_list,
  api_v1_crossbow_create,
  api_v1_crossbow_retrieve,
  api_v1_crossbow_update,
  api_v1_crossbow_partial_update,
  api_v1_crossbow_destroy,
  api_v1_dog_list,
  api_v1_dog_create,
  api_v1_dog_retrieve,
  api_v1_dog_update,
  api_v1_dog_partial_update,
  api_v1_dog_destroy,
  api_v1_ebank_list,
  api_v1_ebank_create,
  api_v1_ebank_retrieve,
  api_v1_ebank_update,
  api_v1_ebank_partial_update,
  api_v1_ebank_destroy,
  api_v1_ebank2_list,
  api_v1_ebank2_create,
  api_v1_ebank2_retrieve,
  api_v1_ebank2_update,
  api_v1_ebank2_partial_update,
  api_v1_ebank2_destroy,
  api_v1_eshop_list,
  api_v1_eshop_create,
  api_v1_eshop_retrieve,
  api_v1_eshop_update,
  api_v1_eshop_partial_update,
  api_v1_eshop_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_supplier_list,
  api_v1_supplier_create,
  api_v1_supplier_retrieve,
  api_v1_supplier_update,
  api_v1_supplier_partial_update,
  api_v1_supplier_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
