export default defineOAuthGoogleEventHandler({
  config: {

  },

  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        githubId: user.id,
      },
    })

    return sendRedirect(event, '/')
  },
})
