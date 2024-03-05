<template>
    <nut-form ref="ruleForm" :model-value="formData" :rules="{
        name: [
            { required: true, message: '请填写姓名' },
            {
                message: 'name 至少两个字符',
                validator: nameLengthValidator,
            }]
    }">
        <nut-form-item label="姓名" prop="name">
            <nut-input v-model="formData.name" class="nut-input-text" placeholder="请输入姓名，blur 事件校验" type="text"
                @blur="customBlurValidate('name')" />
        </nut-form-item>
        <nut-form-item label="年龄" prop="age" required :rules="[
        { required: true, message: '请填写年龄' },
        { validator: customValidator, message: '必须输入数字' },
        { validator: customRulePropValidator, message: '必须输入数字', reg: /^\d+$/ },
        { regex: /^(\d{1,2}|1\d{2}|200)$/, message: '必须输入0-200区间' },
    ]">
            <nut-input v-model="formData.age" class="nut-input-text" placeholder="请输入年龄，必须数字且0-200区间" type="text" />
        </nut-form-item>
        <nut-form-item label="联系电话" prop="tel" required :rules="[
        { required: true, message: '请填写联系电话' },
        { validator: asyncValidator, message: '电话格式不正确' },
    ]">
            <nut-input v-model="formData.tel" class="nut-input-text" placeholder="请输入联系电话，异步校验电话格式" type="text" />
        </nut-form-item>
        <nut-form-item label="地址">
            <nut-input class="nut-input-text" v-model="formData.address" @click="addressModule.methods.show" readonly
                placeholder="请选择地址" type="text" />
            <!-- nut-address -->
            <nut-address v-model:visible="addressModule.state.show" :province="addressModule.state.province"
                :city="addressModule.state.city" :country="addressModule.state.country" :town="addressModule.state.town"
                @change="addressModule.methods.onChange" custom-address-title="请选择所在地区"></nut-address>
        </nut-form-item>
        <nut-form-item label="地址" prop="address2" required :rules="[{ required: true, message: '请填写地址' }]">
            <nut-input v-model="formData.address2" class="nut-input-text" placeholder="请输入地址" type="text" />
        </nut-form-item>
        <nut-cell>
            <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit">
                提交
            </nut-button>
            <nut-button size="small" @click="reset">
                重置提示状态
            </nut-button>
        </nut-cell>
    </nut-form>
</template>


<script lang="ts">
import { reactive, ref } from 'vue'

export default {
    setup() {
        const curentPages = getCurrentPages()
        //获取路由参数
        const curPage = curentPages[curentPages.length - 1];
        const router = useRouter();
        uni.setNavigationBarTitle({ title: '新增地址' })
        console.log("router", router, curentPages, curPage)
        if (curPage.options.key === 'edit') {
            uni.setNavigationBarTitle({ title: '编辑地址' })
        }
        const formData = reactive({
            name: '',
            age: '',
            tel: '',
            address: '',
            address2: ''
        })
        const addressModule = reactive({
            state: {
                show: false,
                province: [
                    { id: 1, name: '北京' },
                    { id: 2, name: '广西' },
                    { id: 3, name: '江西' },
                    { id: 4, name: '四川' }
                ],
                city: [
                    { id: 7, name: '朝阳区' },
                    { id: 8, name: '崇文区' },
                    { id: 9, name: '昌平区' },
                    { id: 6, name: '石景山区' }
                ],
                country: [
                    { id: 3, name: '八里庄街道' },
                    { id: 9, name: '北苑' },
                    { id: 4, name: '常营乡' }
                ],
                town: []
            },
            methods: {
                show() {
                    addressModule.state.show = !addressModule.state.show;
                    if (addressModule.state.show) {
                        formData.address = '';
                    }
                },
                onChange({ custom, next, value }: any) {
                    formData.address += value.name;
                    // const name: any = addressModule?.state[next] || ''
                    // if (name.length < 1) {
                    //    
                    // }
                }
            }
        });
        const validate = (item: any) => {
            console.log(item)
        }
        const ruleForm = ref<any>(null)

        const submit = () => {
            ruleForm.value.validate().then(({ valid, errors }: any) => {
                if (valid) {
                    uni.navigateTo({ url: '/pages/address/index' });
                    console.log('success', formData)
                }
                else {
                    console.log('error submit!!', errors)
                }
            })
        }
        const reset = () => {
            ruleForm.value.reset()
        }
        // 失去焦点校验
        const customBlurValidate = (prop: string) => {
            ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
                if (valid)
                    console.log('success', formData)
                else
                    console.log('error submit!!', errors)
            })
        }
        // 函数校验
        const customValidator = (val: string) => /^\d+$/.test(val)
        const customRulePropValidator = (val: string, rule: FormItemRuleWithoutValidator) => {
            return (rule?.reg as RegExp).test(val)
        }
        const nameLengthValidator = (val: string) => val?.length >= 2
        // Promise 异步校验
        const asyncValidator = (val: string) => {
            return new Promise((resolve) => {
                console.log('模拟异步验证中...')
                setTimeout(() => {
                    console.log('验证完成')
                    resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val))
                }, 1000)
            })
        }
        return { addressModule, ruleForm, formData, validate, customValidator, customRulePropValidator, nameLengthValidator, asyncValidator, customBlurValidate, submit, reset }
    }
}
</script>
