<template>
  <div class="sign-up">
    <el-form label-width="170px" label-position="left" ref="signUpForm" :model="form" :rules="rules" @submit.native.prevent="submitForm()">

      <!--<div class="sw-form-actions sw-form-actions--facebook">
        <el-button type="primary" plain @click.prevent="signUpWithFacebook">Sign Up With Facebook</el-button>
      </div>-->
      <el-form-item label="Your name" prop="name">
        <el-input placeholder="Name" type="name" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Your email" prop="email">
        <el-input placeholder="Email" type="email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="City" prop="city">
        <el-input placeholder="City" type="text" v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input placeholder="Password" type="password" v-model="form.password"></el-input>
      </el-form-item>

      <div class="sw-form-actions">
        <button type="submit" style="display: none"></button>
        <el-button type="primary" @click="submitForm">Sign Up</el-button>
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
        name: null,
        email: null,
        city: null,
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
      this.$store.dispatch('signUpWithFacebook', {
        code: this.$route.query.code,
        redirect_uri: encodeURIComponent(window.location.origin + window.location.pathname)
      }).then(response => {
        this.$store.commit('updateToken', response.data.token)
        return this.$store.dispatch('createProfile', {
          email: response.data.email
        })
      }).then(() => {
        this.$router.push({ name: 'profile' })
      })
    }
  },

  methods: {
    submitForm () {
      this.$refs['signUpForm'].validate(valid => {
        if (valid) {
          this.$store.dispatch('signUp', this.form).then(() => {
            return this.$store.dispatch('signIn', this.form)
          }).then(response => {
            if ('error' in response.data) {
              this.$notify.error({
                title: 'SignIn Error',
                message: response.data.error
              });

              return Promise.reject()
            } else {
              this.$store.commit('updateToken', response.data.token)
              return this.$store.dispatch('createProfile', {
                name: this.form.name,
                email: this.form.email,
                city: this.form.city
              })
            }
          }).then(() => {
            this.$router.push({ name: 'profile' })
          })
        }
      })
    },

    signUpWithFacebook () {
      const redirect_uri = encodeURIComponent(window.location.origin + window.location.pathname)
      const url = 'https://www.facebook.com/v3.0/dialog/oauth?client_id=' + config.FACEBOOK_CLIENT_ID + '&redirect_uri=' + redirect_uri + '&scope=email'

      window.location.href = url
    }
  }
}
</script>
