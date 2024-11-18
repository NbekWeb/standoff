import { CredentialType } from '~~/server/entities/credentials.entity'
import { auth } from '~~/server/utils/auth'

export default defineOAuthGoogleEventHandler({
  config: {

  },

  async onSuccess(event, { user: googleUser, tokens }) {
    await setUserSession(event, {
      user: await auth({ id: googleUser.sub, name: googleUser.name, picture: googleUser.picture }, CredentialType.CREDENTIAL_GOOGLE),
    })

    return sendRedirect(event, '/')
  },
})
