<template>
  <div class="sign-in">
    <el-form label-width="170px" label-position="left" ref="signInForm" :model="form" :rules="rules" @submit.native.prevent="submitForm()">

      <!--<div class="sw-form-actions sw-form-actions--facebook">
        <el-button type="primary" plain @click.prevent="signInWithFacebook">Sign In With Facebook</el-button>
      </div>-->

      <el-form-item label="Your email" prop="email">
        <el-input placeholder="Email" type="email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input placeholder="Password" type="password" v-model="form.password"></el-input>
      </el-form-item>

      <div class="sw-form-actions">
        <button type="submit" style="display: none"></button>
        <el-button type="primary" @click="submitForm">Sign In</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import * as config from '@/config'

export default {

  data () {
    return {
      form: {
        email: null,
        password: null
      },

      rules: {
        email: [
          { required: true, message: 'Please enter your email', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter your password', trigger: 'blur' }
        ]
      }
    }
  },

  created () {

    if ('code' in this.$route.query) {
      this.$store.dispatch('signInWithFacebook', {
        code: this.$route.query.code,
        redirect_uri: encodeURIComponent(window.location.origin + window.location.pathname)
      }).then(response => {
        this.$store.commit('updateToken', response.data.token)
        this.$router.push({ name: 'profile' })
      })
    }
  },

  computed: {
  },

  methods: {
    submitForm () {
      this.$refs['signInForm'].validate(valid => {
        if (valid) {
          this.$store.dispatch('signIn', this.form).then(response => {
            if ('error' in response.data) {
              this.$notify.error({ title: 'Error', message: response.data.error })
            } else {
              this.$notify.success({ title: 'Success',message: 'SignIn successful' })
              this.$store.commit('updateToken', response.data.token)
              this.$router.push({ name: 'tasks' })
            }
          })
        }
      })
    },

    signInWithFacebook () {
      const redirect_uri = encodeURIComponent(window.location.origin + window.location.pathname)
      const url = 'https://www.facebook.com/v3.0/dialog/oauth?client_id=' + config.FACEBOOK_CLIENT_ID + '&redirect_uri=' + redirect_uri + '&scope=email'

      window.location.href = url
    }
  }
}
</script>
