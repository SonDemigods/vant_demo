/**
 * @description 验证规则
 * @author 张航
 * @date 2019-02-01 08:43:24
 * @version V1.0.0
 */
const formValidate = {
  ID: function (rule, value, callback) {
    let regId = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    if (!value) {
      return callback(new Error('身份证不能为空'))
    }
    if (!regId.test(value)) {
      callback(new Error('请输入正确的二代身份证号码'))
    } else {
      callback()
    }
  },
  Tel: (rule, value, callback) => {
    let tel = /^1[345789]\d{9}$/
    if (!value) {
      return callback(new Error('电话不能为空'))
    }
    if (!tel.test(value)) {
      callback(new Error('请正确填写电话号码'))
    } else {
      callback()
    }
  }
}
export default formValidate
